import express from 'express';
import mongoose from 'mongoose';
import { createHash, randomBytes } from 'node:crypto';

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

const passwordResetSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
      index: true,
    },
    tokenHash: {
      type: String,
      required: true,
      index: true,
    },
    expiresAt: {
      type: Date,
      required: true,
      index: true,
    },
    usedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model('User', userSchema);
const PasswordResetToken =
  mongoose.models.PasswordResetToken ||
  mongoose.model('PasswordResetToken', passwordResetSchema);

const hashValue = (value) => createHash('sha256').update(value).digest('hex');

router.post('/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email is required.',
      });
    }

    const normalizedEmail = String(email).toLowerCase().trim();
    const user = await User.findOne({ email: normalizedEmail });

    // Do not reveal whether an email exists.
    if (!user) {
      return res.status(200).json({
        success: true,
        message: 'If this email is registered, password reset instructions have been sent.',
      });
    }

    const rawToken = randomBytes(32).toString('hex');
    const tokenHash = hashValue(rawToken);
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

    await PasswordResetToken.findOneAndUpdate(
      { userId: user._id },
      { tokenHash, expiresAt, usedAt: null },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    return res.status(200).json({
      success: true,
      message: 'If this email is registered, password reset instructions have been sent.',
      // Return token in development only so the flow can be tested without email service.
      ...(process.env.NODE_ENV !== 'production' && {
        resetToken: rawToken,
      }),
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Something went wrong while creating password reset request.',
      error: error.message,
    });
  }
});

router.post('/reset-password', async (req, res) => {
  try {
    const { token, newPassword, confirmPassword } = req.body;

    if (!token || !newPassword || !confirmPassword) {
      return res.status(400).json({
        success: false,
        message: 'token, newPassword and confirmPassword are required.',
      });
    }

    if (newPassword.length < 8) {
      return res.status(400).json({
        success: false,
        message: 'Password must be at least 8 characters.',
      });
    }

    if (newPassword !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: 'Passwords do not match.',
      });
    }

    const tokenHash = hashValue(String(token));
    const resetRecord = await PasswordResetToken.findOne({
      tokenHash,
      usedAt: null,
      expiresAt: { $gt: new Date() },
    });

    if (!resetRecord) {
      return res.status(400).json({
        success: false,
        message: 'Reset token is invalid or expired.',
      });
    }

    const user = await User.findById(resetRecord.userId);

    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'User not found for this reset token.',
      });
    }

    user.passwordHash = hashValue(newPassword);
    await user.save();

    resetRecord.usedAt = new Date();
    await resetRecord.save();

    return res.status(200).json({
      success: true,
      message: 'Password has been reset successfully.',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Something went wrong while resetting password.',
      error: error.message,
    });
  }
});

export default router;