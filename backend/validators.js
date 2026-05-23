import { createHash } from 'node:crypto';

// Basic, dependency-free validation helpers for request bodies
const isEmail = (value) => {
  if (!value) return false;
  const s = String(value).trim().toLowerCase();
  // simple email regex (good for basic validation)
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(s);
};

const isStrongPassword = (value) => {
  if (!value) return false;
  const s = String(value);
  // at least 8 chars, one letter and one number
  return s.length >= 8 && /[A-Za-z]/.test(s) && /\d/.test(s);
};

const isPhone = (value) => {
  if (!value) return false;
  const s = String(value).trim();
  // only digits, 10 digits (adjust {10} if you want different length)
  return /^\d{10}$/.test(s);
};

export const validateRegister = (req, res, next) => {
  const { fullName, email, password, confirmPassword, phone } = req.body || {};
  if (!fullName || String(fullName).trim().length < 3) {
    return res.status(400).json({ success: false, message: 'fullName must be at least 3 characters.' });
  }
  if (!isEmail(email)) {
    return res.status(400).json({ success: false, message: 'A valid email is required.' });
  }
  if (!isPhone(phone)) {
    return res.status(400).json({ success: false, message: 'A valid phone number (10 digits) is required.' });
  }
  if (!isStrongPassword(password)) {
    return res.status(400).json({ success: false, message: 'Password must be at least 8 characters and include letters and numbers.' });
  }
  if (password !== confirmPassword) {
    return res.status(400).json({ success: false, message: 'Passwords do not match.' });
  }
  // normalize
  req.body.email = String(email).toLowerCase().trim();
  req.body.fullName = String(fullName).trim();
  req.body.phone = String(phone).trim();
  // store hashed version if desired elsewhere, keep plain password for route to hash
  next();
};

export const validateLogin = (req, res, next) => {
  const { email, password } = req.body || {};
  if (!isEmail(email) || !password) {
    return res.status(400).json({ success: false, message: 'email and password are required.' });
  }
  req.body.email = String(email).toLowerCase().trim();
  next();
};

export const validateForgotPassword = (req, res, next) => {
  const { email } = req.body || {};
  if (!isEmail(email)) {
    return res.status(400).json({ success: false, message: 'A valid email is required.' });
  }
  req.body.email = String(email).toLowerCase().trim();
  next();
};

export const validateResetPassword = (req, res, next) => {
  const { token, newPassword, confirmPassword } = req.body || {};
  if (!token) {
    return res.status(400).json({ success: false, message: 'token is required.' });
  }
  if (!isStrongPassword(newPassword)) {
    return res.status(400).json({ success: false, message: 'Password must be at least 8 characters and include letters and numbers.' });
  }
  if (newPassword !== confirmPassword) {
    return res.status(400).json({ success: false, message: 'Passwords do not match.' });
  }
  next();
};

// small helper for hashing (used elsewhere in codebase)
export const hashValue = (value) => createHash('sha256').update(String(value)).digest('hex');

export default {
  validateRegister,
  validateLogin,
  validateForgotPassword,
  validateResetPassword,
  hashValue,
};
