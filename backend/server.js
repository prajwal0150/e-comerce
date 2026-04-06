import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL || process.env.MANGO_URL;

// app.get("/", (req, res) => {
// 	res.send("Server is running");
// });

// if (!MONGO_URL) {
// 	console.error("Database URL not found in .env");
// 	process.exit(1);
// }

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

