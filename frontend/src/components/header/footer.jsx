import React from "react";

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="bg-slate-900 text-slate-200">
			<div className="max-w-7xl mx-auto px-6 py-10">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						<h3 className="text-lg font-semibold">ShopEasy</h3>
						<p className="mt-2 text-sm text-slate-400">
							Small shop. Big heart. Quality products for everyday life.
						</p>
						<div className="flex gap-3 mt-4">
							<a href="/" aria-label="Home" className="text-slate-400 hover:text-white">Home</a>
							<a href="/contact" aria-label="Contact" className="text-slate-400 hover:text-white">Contact</a>
							<a href="/dashboard" aria-label="Dashboard" className="text-slate-400 hover:text-white">Dashboard</a>
						</div>
					</div>

					<div className="md:col-span-1">
						<h4 className="text-sm font-semibold">Company</h4>
						<ul className="mt-3 space-y-2 text-sm text-slate-400">
							<li><a href="/about" className="hover:text-white">About</a></li>
							<li><a href="/terms" className="hover:text-white">Terms</a></li>
							<li><a href="/privacy" className="hover:text-white">Privacy</a></li>
						</ul>
					</div>

					<div className="md:col-span-1">
						<h4 className="text-sm font-semibold">Stay updated</h4>
						<p className="mt-2 text-sm text-slate-400">Get news about products and offers.</p>
						<form className="mt-3 flex flex-col sm:flex-row sm:items-center gap-2">
							<label htmlFor="footer-email" className="sr-only">Email</label>
							<input id="footer-email" type="email" placeholder="you@example.com" className="px-3 py-2 rounded bg-slate-800 text-slate-200 placeholder-slate-500 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
							<button type="submit" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded text-white text-sm">Subscribe</button>
						</form>
					</div>
				</div>

				<div className="mt-8 border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-400">
					<p>© {year} ShopEasy. All rights reserved.</p>
					<div className="flex gap-4 mt-3 sm:mt-0">
						<a href="https://twitter.com" aria-label="Twitter" className="hover:text-white">
							<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
								<path d="M22 5.92c-.66.3-1.37.5-2.12.59.76-.45 1.34-1.17 1.61-2.02-.71.42-1.5.72-2.34.88a3.6 3.6 0 0 0-6.14 3.28A10.2 10.2 0 0 1 3.16 4.7a3.6 3.6 0 0 0 1.12 4.8c-.6-.02-1.17-.18-1.66-.45v.05c0 1.74 1.24 3.2 2.89 3.53-.3.08-.61.12-.93.12-.23 0-.46-.02-.68-.06.46 1.44 1.8 2.5 3.39 2.53A7.23 7.23 0 0 1 2 18.57 10.2 10.2 0 0 0 7.29 20c6.01 0 9.31-4.98 9.31-9.3v-.42c.64-.46 1.19-1.04 1.62-1.7-.59.26-1.23.44-1.9.52z" />
							</svg>
						</a>
						<a href="https://facebook.com" aria-label="Facebook" className="hover:text-white">
							<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
								<path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5 3.66 9.13 8.44 9.95v-7.05H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.44h-1.25c-1.23 0-1.61.77-1.61 1.56v1.87h2.74l-.44 2.9h-2.3V22c4.78-.82 8.44-4.95 8.44-9.93z" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
