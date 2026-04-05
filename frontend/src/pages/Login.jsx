import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const initialValues = {
  email: '',
  password: '',
  rememberMe: false,
};

const Login = () => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Validate the minimum fields needed to sign in.
  const validate = () => {
    const nextErrors = {};

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

    return nextErrors;
  };

  // Clear field errors as the user corrects input.
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

  // Prevent invalid submits, then show a clean success state.
  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSuccessMessage('');
      return;
    }

    setSuccessMessage('Login successful. Welcome back.');
    setFormData(initialValues);
    setShowPassword(false);
  };

  return (
    <main className="min-h-[calc(100vh-160px)] bg-[radial-gradient(circle_at_top_left,rgba(255,173,96,0.2),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_24%),linear-gradient(180deg,#f8fafc_0%,#eef2f7_100%)] px-4 py-10 sm:py-12 lg:py-14">
      <section className="mx-auto grid w-full max-w-6xl items-stretch gap-7 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Left side gives the page a premium, calm brand presence. */}
        <div
          className="overflow-hidden rounded-[28px] border border-slate-200/80 shadow-[0_20px_60px_rgba(15,23,42,0.08)] order-2 lg:order-1"
          style={{
            backgroundImage:
              'linear-gradient(135deg, rgba(8, 15, 29, 0.96), rgba(29, 41, 67, 0.9)), url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex min-h-155 flex-col justify-between p-8 text-white sm:p-10 lg:p-12">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-amber-300">
                Welcome back
              </p>
              <h1 className="max-w-[11ch] text-4xl font-semibold leading-none sm:text-5xl lg:text-[4.4rem]">
                Sign in with clarity
              </h1>
              <p className="mt-5 max-w-[42ch] text-base leading-7 text-white/80 sm:text-lg">
                Access your orders, saved items, and account details with a login screen designed to stay fast,
                simple, and distraction free.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[18px] border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <strong className="block text-base">Secure access</strong>
                <span className="mt-1 block text-sm leading-6 text-white/75">
                  Keep your account details protected with a clean validation flow.
                </span>
              </div>
              <div className="rounded-[18px] border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <strong className="block text-base">Faster return visits</strong>
                <span className="mt-1 block text-sm leading-6 text-white/75">
                  Reopen your cart, wishlists, and recent purchases in seconds.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side contains the interactive login form and feedback states. */}
        <div className="order-1 rounded-[28px] border border-slate-200/80 bg-white/90 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-md sm:p-10 lg:p-12 lg:order-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">Login</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Welcome back</h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
              Enter your account details to continue shopping with your saved preferences.
            </p>
          </div>

          {successMessage && (
            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-100 px-4 py-3 text-sm font-semibold text-emerald-900">
              {successMessage}
            </div>
          )}

          <form className="mt-6 grid gap-4" onSubmit={handleSubmit} noValidate>
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
                  placeholder="Enter your password"
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

            <div className="flex items-center justify-between gap-3 text-sm">
              <label className="flex items-center gap-2 font-semibold text-slate-600">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-slate-300 text-amber-500 focus:ring-amber-400"
                />
                Remember me
              </label>
              <Link to="/forgot-password" className="font-bold text-amber-700 hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="mt-2 rounded-2xl bg-linear-to-r from-amber-400 to-amber-600 px-5 py-3.5 text-base font-bold text-white shadow-[0_14px_30px_rgba(217,119,6,0.26)] transition hover:-translate-y-0.5 hover:opacity-95"
            >
              Sign in
            </button>

            <p className="pt-1 text-center text-sm text-slate-600">
              New here?{' '}
              <Link to="/register" className="font-bold text-amber-700 hover:underline">
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Login;
