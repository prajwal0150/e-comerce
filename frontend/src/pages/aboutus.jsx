
import React from 'react'

const AboutUs = () => {
	return (
		<main className="container mx-auto px-4 py-16">
			<section className="bg-white rounded-2xl p-8 shadow-sm">
				<p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">About</p>
				<h1 className="mt-3 text-3xl font-semibold text-slate-900">Who we are</h1>
				<p className="mt-4 text-slate-600 max-w-3xl">
					ShopEasy is a small, friendly ecommerce store built to showcase high-quality everyday products.
					We focus on straightforward shopping experiences, clear product information, and excellent customer
					support. Our team curates items with care so you can shop confidently.
				</p>

				<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
					<div className="p-6 bg-slate-50 rounded-lg">
						<h3 className="font-semibold text-lg">Our Mission</h3>
						<p className="mt-2 text-sm text-slate-600">Deliver quality products at fair prices and make shopping simple.</p>
					</div>

					<div className="p-6 bg-slate-50 rounded-lg">
						<h3 className="font-semibold text-lg">Our Values</h3>
						<p className="mt-2 text-sm text-slate-600">Transparency, customer-first service, and product integrity.</p>
					</div>

					<div className="p-6 bg-slate-50 rounded-lg">
						<h3 className="font-semibold text-lg">Get in touch</h3>
						<p className="mt-2 text-sm text-slate-600">Questions? Visit our contact page or email support@shopeasy.example.</p>
					</div>
				</div>
			</section>
		</main>
	)
}

export default AboutUs

