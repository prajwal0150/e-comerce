import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const initialValues = {
  email: '',
};

const ForgotPassword = () => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  // Validate the email before pretending to send a reset link.
  const validate = () => {
    const nextErrors = {};

    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }

    return nextErrors;
  };

  // Clear stale feedback as soon as the user edits the field.
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
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

  // Keep the page self-contained with clear validation and success feedback.
  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSuccessMessage('');
      return;
    }

    setSuccessMessage('Password reset instructions have been sent to your email address.');
    setFormData(initialValues);
  };

  return (
    <main className="min-h-[calc(100vh-160px)] bg-[radial-gradient(circle_at_top_left,rgba(255,173,96,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_24%),linear-gradient(180deg,#f8fafc_0%,#eef2f7_100%)] px-4 py-10 sm:py-12 lg:py-14">
      <section className="mx-auto grid w-full max-w-5xl gap-7 lg:grid-cols-[1fr_0.95fr]">
        <div
          className="overflow-hidden rounded-[28px] border border-slate-200/80 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
          style={{
            backgroundImage:
              'linear-gradient(135deg, rgba(8, 15, 29, 0.96), rgba(29, 41, 67, 0.9)), url(https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex h-full min-h-155 flex-col justify-between p-8 text-white sm:p-10 lg:p-12">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-amber-300">
                Account recovery
              </p>
              <h1 className="max-w-[11ch] text-4xl font-semibold leading-none sm:text-5xl lg:text-[4.2rem]">
                Reset with ease
              </h1>
              <p className="mt-5 max-w-[40ch] text-base leading-7 text-white/80 sm:text-lg">
                Use a lightweight recovery flow that feels calm, professional, and easy to complete on any device.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[18px] border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <strong className="block text-base">Quick recovery</strong>
                <span className="mt-1 block text-sm leading-6 text-white/75">
                  We send a secure reset link to your inbox in a few seconds.
                </span>
              </div>
              <div className="rounded-[18px] border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <strong className="block text-base">Minimal steps</strong>
                <span className="mt-1 block text-sm leading-6 text-white/75">
                  Keep the process simple so users can get back to shopping faster.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200/80 bg-white/90 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-md sm:p-10 lg:p-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">Forgot password</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Recover your account</h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
              Enter the email address tied to your account and we will send password reset instructions.
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

            <button
              type="submit"
              className="mt-2 rounded-2xl bg-linear-to-r from-amber-400 to-amber-600 px-5 py-3.5 text-base font-bold text-white shadow-[0_14px_30px_rgba(217,119,6,0.26)] transition hover:-translate-y-0.5 hover:opacity-95"
            >
              Send reset link
            </button>

            <p className="pt-1 text-center text-sm text-slate-600">
              Remembered your password?{' '}
              <Link to="/login" className="font-bold text-amber-700 hover:underline">
                Back to login
              </Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
};

export default ForgotPassword;