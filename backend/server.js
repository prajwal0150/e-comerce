import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import registerRouter from "./register.js";
import loginRouter from "./login.js";
import forgotPasswordRouter from "./forgotPassword.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL || process.env.MANGO_URL;

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", process.env.CLIENT_URL || "http://localhost:5173");
	res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

	if (req.method === "OPTIONS") {
		return res.sendStatus(200);
	}

	next();
});

app.use(express.json());
app.use("/api", registerRouter);
app.use("/api", loginRouter);
app.use("/api", forgotPasswordRouter);

app.get("/api/dashboard-summary", async (req, res) => {
	try {
		const User = mongoose.models.User;
		const PasswordResetToken = mongoose.models.PasswordResetToken;

		if (!User) {
			return res.status(503).json({
				success: false,
				message: "User model is not ready yet.",
			});
		}

		const startOfMonth = new Date();
		startOfMonth.setDate(1);
		startOfMonth.setHours(0, 0, 0, 0);

		const [totalUsers, monthlyUsers, recentUsers, resetRequests] = await Promise.all([
			User.countDocuments(),
			User.countDocuments({ createdAt: { $gte: startOfMonth } }),
			User.find().sort({ createdAt: -1 }).limit(4).select("fullName email createdAt").lean(),
			PasswordResetToken ? PasswordResetToken.countDocuments() : Promise.resolve(0),
		]);

		return res.status(200).json({
			success: true,
			data: {
				stats: [
					{ label: "Total Users", value: totalUsers.toLocaleString(), change: `${monthlyUsers} this month` },
					{ label: "New Users", value: monthlyUsers.toLocaleString(), change: "Current month" },
					{ label: "Reset Requests", value: resetRequests.toLocaleString(), change: "All time" },
					{ label: "Active View", value: recentUsers.length.toString(), change: "Recent signups" },
				],
				recentUsers: recentUsers.map((user, index) => ({
					id: user._id?.toString?.() || String(index),
					name: user.fullName,
					email: user.email,
					status: index === 0 ? "Latest" : "Active",
				})),
			},
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: "Failed to load dashboard summary.",
			error: error.message,
		});
	}
});

app.get("/", (req, res) => {
	res.send("Server is running");
});

if (!MONGO_URL) {
	console.error("Database URL not found in .env");
	process.exit(1);
}

mongoose
	.connect(MONGO_URL)
	.then(() => {
		console.log("Database connected successfully");

		app.listen(PORT, () => {
			console.log("Server started on port: ",PORT);
		});
	})
	.catch((error) => {
		console.error("Database connection failed:", error.message);
		process.exit(1);
	});

