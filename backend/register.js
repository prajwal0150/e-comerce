import express from 'express';
import mongoose from 'mongoose';
import { createHash } from 'node:crypto';
import { validateRegister } from './validators.js';

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

const hashPassword = (plainPassword) => createHash('sha256').update(plainPassword).digest('hex');

router.post('/register', validateRegister, async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: 'Email is already registered.',
      });
    }

    const user = await User.create({
      fullName: String(fullName).trim(),
      email: normalizedEmail,
      passwordHash: hashPassword(password),
    });

    return res.status(201).json({
      success: true,
      message: 'Registration successful.',
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Something went wrong during registration.',
      error: error.message,
    });
  }
});

export default router;
