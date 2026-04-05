import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const initialValues = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
  agree: false,
};

const Register = () => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Validate the form before submission and return any field-level errors.
  const validate = () => {
    const nextErrors = {};

    if (!formData.fullName.trim()) {
      nextErrors.fullName = 'Full name is required.';
    } else if (formData.fullName.trim().length < 3) {
      nextErrors.fullName = 'Full name must be at least 3 characters.';
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }

    if (!formData.password) {
      nextErrors.password = 'Password is required.';
    } else if (formData.password.length < 8) {
      nextErrors.password = 'Password must be at least 8 characters.';
    }

    if (!formData.confirmPassword) {
      nextErrors.confirmPassword = 'Please confirm your password.';
    } else if (formData.password !== formData.confirmPassword) {
      nextErrors.confirmPassword = 'Passwords do not match.';
    }

    if (!formData.agree) {
      nextErrors.agree = 'You must accept the terms to continue.';
    }

    return nextErrors;
  };

  // Update one field at a time and clear its old error as the user edits.
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (successMessage) {
      setSuccessMessage('');
    }

    if (errors[name]) {
      setErrors((current) => ({
        ...current,
        [name]: '',
      }));
    }
  };

  // Block invalid submits, otherwise show success and reset the form state.
  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSuccessMessage('');
      return;
    }

    setSuccessMessage('Registration successful. Your account details are valid.');
    setFormData(initialValues);
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  return (
    <main className="min-h-[calc(100vh-160px)] px-4 py-10 sm:py-12 lg:py-14 bg-[radial-gradient(circle_at_top_left,rgba(255,173,96,0.24),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(36,87,255,0.12),transparent_24%),linear-gradient(180deg,#f7f4ef_0%,#f1eee7_100%)]">
      <section className="mx-auto grid w-full max-w-6xl items-stretch gap-7 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left side explains the value of creating an account. */}
        <div
          className="overflow-hidden rounded-[28px] border border-slate-200/80 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
          style={{
            backgroundImage:
              'linear-gradient(135deg, rgba(11, 18, 32, 0.95), rgba(32, 49, 88, 0.92)), url(https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex min-h-155 flex-col justify-between p-8 text-white sm:p-10 lg:p-12">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-amber-300">
                Premium shopping experience
              </p>
              <h1 className="max-w-[10ch] text-4xl font-semibold leading-none sm:text-5xl lg:text-[4.6rem]">
                Create your account
              </h1>
              <p className="mt-5 max-w-[44ch] text-base leading-7 text-white/80 sm:text-lg">
                Sign up once and keep track of orders, wishlists, and faster checkout across every device.
              </p>
            </div>

            <div className="mt-8 grid gap-4">
              <div className="rounded-[18px] border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <strong className="block text-base">Fast checkout</strong>
                <span className="mt-1 block text-sm leading-6 text-white/75">
                  Save your details for a smoother shopping flow.
                </span>
              </div>
              <div className="rounded-[18px] border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <strong className="block text-base">Order tracking</strong>
                <span className="mt-1 block text-sm leading-6 text-white/75">
                  Monitor your purchases from a single dashboard.
                </span>
              </div>
              <div className="rounded-[18px] border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <strong className="block text-base">Personalized offers</strong>
                <span className="mt-1 block text-sm leading-6 text-white/75">
                  Receive curated product updates and exclusive deals.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side contains the actual registration form and feedback states. */}
        <div className="rounded-[28px] border border-slate-200/80 bg-white/90 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-md sm:p-10 lg:p-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">Register</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Start your account</h2>
          </div>

          {successMessage && (
            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-100 px-4 py-3 text-sm font-semibold text-emerald-900">
              {successMessage}
            </div>
          )}

          <form className="mt-6 grid gap-4" onSubmit={handleSubmit} noValidate>
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-700">Full name</span>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                aria-invalid={Boolean(errors.fullName)}
                className={`w-full rounded-2xl border bg-white px-4 py-3 text-[0.98rem] text-slate-900 outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-200/60 ${
                  errors.fullName ? 'border-red-500 ring-4 ring-red-100' : 'border-slate-200'
                }`}
              />
              {errors.fullName && <small className="text-sm font-semibold text-red-600">{errors.fullName}</small>}
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-700">Email address</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                aria-invalid={Boolean(errors.email)}
                className={`w-full rounded-2xl border bg-white px-4 py-3 text-[0.98rem] text-slate-900 outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-200/60 ${
                  errors.email ? 'border-red-500 ring-4 ring-red-100' : 'border-slate-200'
                }`}
              />
              {errors.email && <small className="text-sm font-semibold text-red-600">{errors.email}</small>}
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-700">Password</span>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a secure password"
                  aria-invalid={Boolean(errors.password)}
                  className={`w-full rounded-2xl border bg-white px-4 py-3 pr-12 text-[0.98rem] text-slate-900 outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-200/60 ${
                    errors.password ? 'border-red-500 ring-4 ring-red-100' : 'border-slate-200'
                  }`}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 grid -translate-y-1/2 place-items-center rounded-full p-1.5 text-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
                  onClick={() => setShowPassword((current) => !current)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
              {errors.password && <small className="text-sm font-semibold text-red-600">{errors.password}</small>}
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-700">Confirm password</span>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter your password"
                  aria-invalid={Boolean(errors.confirmPassword)}
                  className={`w-full rounded-2xl border bg-white px-4 py-3 pr-12 text-[0.98rem] text-slate-900 outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-200/60 ${
                    errors.confirmPassword ? 'border-red-500 ring-4 ring-red-100' : 'border-slate-200'
                  }`}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 grid -translate-y-1/2 place-items-center rounded-full p-1.5 text-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
                  onClick={() => setShowConfirmPassword((current) => !current)}
                  aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
                >
                  {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
              {errors.confirmPassword && (
                <small className="text-sm font-semibold text-red-600">{errors.confirmPassword}</small>
              )}
            </label>

            <label className="flex items-start gap-3 text-sm font-semibold leading-6 text-slate-700">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-amber-500 focus:ring-amber-400"
              />
              <span>
                I agree to the{' '}
                <Link to="/terms" className="font-bold text-amber-700 hover:underline">
                  terms and conditions
                </Link>{' '}
                and privacy policy.
              </span>
            </label>
            {errors.agree && <small className="text-sm font-semibold text-red-600">{errors.agree}</small>}

            <button
              type="submit"
              className="mt-2 rounded-2xl bg-linear-to-r from-amber-400 to-amber-600 px-5 py-3.5 text-base font-bold text-white shadow-[0_14px_30px_rgba(217,119,6,0.26)] transition hover:-translate-y-0.5 hover:opacity-95"
            >
              Create account
            </button>

            <p className="pt-1 text-center text-sm text-slate-600">
              Already have an account?{' '}
              <Link to="/login" className="font-bold text-amber-700 hover:underline">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Register;
