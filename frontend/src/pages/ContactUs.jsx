import React, { useState } from 'react';

const initialValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const ContactUs = () => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = 'Name is required.';
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      nextErrors.subject = 'Subject is required.';
    }

    if (!formData.message.trim()) {
      nextErrors.message = 'Message is required.';
    } else if (formData.message.trim().length < 12) {
      nextErrors.message = 'Message must be at least 12 characters.';
    }

    return nextErrors;
  };

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

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSuccessMessage('');
      return;
    }

    setSuccessMessage('Thanks for contacting us. Our team will get back to you soon.');
    setFormData(initialValues);
  };

  return (
    <main className="min-h-[calc(100vh-160px)] px-4 py-10 sm:py-12 lg:py-14 bg-[radial-gradient(circle_at_top_left,rgba(253,186,116,0.22),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_28%),linear-gradient(180deg,#f8fafc_0%,#eef2f7_100%)]">
      <section className="mx-auto grid w-full max-w-6xl items-stretch gap-7 lg:grid-cols-[1.05fr_0.95fr]">
        <div
          className="overflow-hidden rounded-[28px] border border-slate-200/80 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
          style={{
            backgroundImage:
              'linear-gradient(135deg, rgba(15, 23, 42, 0.94), rgba(30, 41, 59, 0.9)), url(https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex min-h-155 flex-col justify-between p-8 text-white sm:p-10 lg:p-12">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-amber-300">Contact us</p>
              <h1 className="max-w-[10ch] text-4xl font-semibold leading-none sm:text-5xl lg:text-[4.4rem]">
                We are here to help
              </h1>
              <p className="mt-5 max-w-[42ch] text-base leading-7 text-white/80 sm:text-lg">
                Need support with your account, orders, or products? Send us a message and we will respond as
                quickly as possible.
              </p>
            </div>

            <div className="mt-8 grid gap-4">
              <div className="rounded-[18px] border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <strong className="block text-base">Email support</strong>
                <span className="mt-1 block text-sm leading-6 text-white/75">support@shopverse.com</span>
              </div>
              <div className="rounded-[18px] border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <strong className="block text-base">Call us</strong>
                <span className="mt-1 block text-sm leading-6 text-white/75">+91 98765 43210</span>
              </div>
              <div className="rounded-[18px] border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <strong className="block text-base">Business hours</strong>
                <span className="mt-1 block text-sm leading-6 text-white/75">Mon - Sat, 9:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200/80 bg-white/90 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-md sm:p-10 lg:p-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">Support team</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Send us a message</h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
              Fill out the form and our team will get back to you with the right help.
            </p>
          </div>

          {successMessage && (
            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-100 px-4 py-3 text-sm font-semibold text-emerald-900">
              {successMessage}
            </div>
          )}

          <form className="mt-6 grid gap-4" onSubmit={handleSubmit} noValidate>
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-700">Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                aria-invalid={Boolean(errors.name)}
                className={`w-full rounded-2xl border bg-white px-4 py-3 text-[0.98rem] text-slate-900 outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-200/60 ${
                  errors.name ? 'border-red-500 ring-4 ring-red-100' : 'border-slate-200'
                }`}
              />
              {errors.name && <small className="text-sm font-semibold text-red-600">{errors.name}</small>}
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
              <span className="text-sm font-semibold text-slate-700">Subject</span>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can we help?"
                aria-invalid={Boolean(errors.subject)}
                className={`w-full rounded-2xl border bg-white px-4 py-3 text-[0.98rem] text-slate-900 outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-200/60 ${
                  errors.subject ? 'border-red-500 ring-4 ring-red-100' : 'border-slate-200'
                }`}
              />
              {errors.subject && <small className="text-sm font-semibold text-red-600">{errors.subject}</small>}
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-700">Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell us more about your issue"
                aria-invalid={Boolean(errors.message)}
                className={`w-full resize-y rounded-2xl border bg-white px-4 py-3 text-[0.98rem] text-slate-900 outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-200/60 ${
                  errors.message ? 'border-red-500 ring-4 ring-red-100' : 'border-slate-200'
                }`}
              />
              {errors.message && <small className="text-sm font-semibold text-red-600">{errors.message}</small>}
            </label>

            <button
              type="submit"
              className="mt-2 rounded-2xl bg-linear-to-r from-amber-400 to-amber-600 px-5 py-3.5 text-base font-bold text-white shadow-[0_14px_30px_rgba(217,119,6,0.26)] transition hover:-translate-y-0.5 hover:opacity-95"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;