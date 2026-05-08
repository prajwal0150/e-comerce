
import express from 'express';
import mongoose from 'mongoose';
import { createHash } from 'node:crypto';
import { validateLogin } from './validators.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

const userSchema = new mongoose.Schema(
	{
		fullName: {
			type: String,
			required: true,
			trim: true,
			minlength: 3,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
			trim: true,
		},
		passwordHash: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const User = mongoose.models.User || mongoose.model('User', userSchema);

const hashValue = (value) => createHash('sha256').update(String(value)).digest('hex');

router.post('/login', validateLogin, async (req, res) => {
	try {
		const { email, password } = req.body || {};

		const user = await User.findOne({ email });

		// Avoid user enumeration
		if (!user) {
			return res.status(401).json({ success: false, message: 'Invalid credentials.' });
		}

		const providedHash = hashValue(password);
		if (providedHash !== user.passwordHash) {
			return res.status(401).json({ success: false, message: 'Invalid credentials.' });
		}

		const secret = process.env.JWT_SECRET || 'change_this_secret';
		const token = jwt.sign({ id: user._id, email: user.email }, secret, { expiresIn: '7d' });

		return res.status(200).json({
			success: true,
			message: 'Login successful.',
			token,
			user: {
				id: user._id,
				fullName: user.fullName,
				email: user.email,
			},
		});
	} catch (error) {
		return res.status(500).json({ success: false, message: 'Something went wrong during login.', error: error.message });
	}
});

export default router;

