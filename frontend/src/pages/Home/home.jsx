import { Link } from 'react-router-dom';
import Footer from '../../components/header/footer';
import { HiOutlineArrowRight, HiOutlineShieldCheck, HiOutlineSparkles, HiOutlineTruck } from 'react-icons/hi2';
import { FiShoppingBag } from 'react-icons/fi';

const featuredCollections = [
	{
		title: 'Everyday essentials',
		description: 'Clean basics, premium fabrics, and dependable pricing for the whole household.',
		label: 'New arrivals',
		accent: 'from-sky-500 to-cyan-400',
	},
	{
		title: 'Seasonal picks',
		description: 'Fresh drops that make it easy to refresh your wardrobe, office desk, and home corners.',
		label: 'Trending now',
		accent: 'from-amber-500 to-orange-400',
	},
	{
		title: 'Gift-ready bundles',
		description: 'Curated sets built for birthdays, holidays, and quick last-minute surprises.',
		label: 'Best value',
		accent: 'from-emerald-500 to-green-400',
	},
];

const highlights = [
	{
		icon: HiOutlineTruck,
		title: 'Fast delivery',
		description: 'Tracked shipping options that keep customers informed from checkout to doorstep.',
	},
	{
		icon: HiOutlineShieldCheck,
		title: 'Secure shopping',
		description: 'Simple checkout flows with trusted payment support and clear order confirmation.',
	},
	{
		icon: HiOutlineSparkles,
		title: 'Curated quality',
		description: 'Selected products with a focus on usefulness, style, and repeat purchase value.',
	},
];

const categories = [
	'Fashion',
	'Electronics',
	'Home & Living',
	'Beauty',
	'Footwear',
	'Accessories',
];

const products = [
	{
		name: 'Minimal Travel Backpack',
		price: '$48',
		badge: 'Popular',
	},
	{
		name: 'Soft Knit Overshirt',
		price: '$36',
		badge: 'New',
	},
	{
		name: 'Wireless Desk Lamp',
		price: '$29',
		badge: 'Top rated',
	},
	{
		name: 'Daily Runner Sneakers',
		price: '$64',
		badge: 'Limited',
	},
];

const Home = () => {
	return (
		<main className="bg-slate-50">
			<section className="relative overflow-hidden bg-linear-to-br from-slate-950 via-slate-900 to-sky-900 text-white">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.24),transparent_30%),radial-gradient(circle_at_left,rgba(251,191,36,0.16),transparent_25%)]" />
				<div className="container relative mx-auto grid gap-10 px-4 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
					<div className="max-w-2xl">
						<span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-slate-100 backdrop-blur">
							<FiShoppingBag className="text-base" />
							A brighter storefront for everyday shopping
						</span>
						<h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
							Discover products that feel easy to buy and good to keep.
						</h1>
						<p className="mt-5 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
							Browse curated collections, quick category shortcuts, and featured picks designed to help shoppers move from inspiration to checkout without friction.
						</p>
						<div className="mt-8 flex flex-col gap-3 sm:flex-row">
							<Link
								to="/dashboard"
								className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
							>
								Shop the catalog
								<HiOutlineArrowRight className="text-base" />
							</Link>
							<Link
								to="/contact"
								className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
							>
								Talk to sales
							</Link>
						</div>
						<div className="mt-10 grid gap-4 sm:grid-cols-3">
							<div className="rounded-3xl border border-white/10 bg-white/8 p-4 backdrop-blur">
								<div className="text-2xl font-semibold">12k+</div>
								<div className="mt-1 text-sm text-slate-300">Happy shoppers</div>
							</div>
							<div className="rounded-3xl border border-white/10 bg-white/8 p-4 backdrop-blur">
								<div className="text-2xl font-semibold">240+</div>
								<div className="mt-1 text-sm text-slate-300">New arrivals monthly</div>
							</div>
							<div className="rounded-3xl border border-white/10 bg-white/8 p-4 backdrop-blur">
								<div className="text-2xl font-semibold">4.9/5</div>
								<div className="mt-1 text-sm text-slate-300">Average customer rating</div>
							</div>
						</div>
					</div>

					<div className="grid gap-4">
						{featuredCollections.map((collection, index) => (
							<div
								key={collection.title}
								className={`relative overflow-hidden rounded-4xl border border-white/10 bg-gradient-to-br ${collection.accent} p-6 text-slate-950 shadow-2xl shadow-slate-950/20 ${index === 1 ? 'lg:translate-x-8' : ''}`}
							>
								<div className="absolute right-4 top-4 rounded-full bg-white/35 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
									{collection.label}
								</div>
								<h2 className="mt-10 text-2xl font-semibold text-white">{collection.title}</h2>
								<p className="mt-3 max-w-md text-sm leading-6 text-white/90">{collection.description}</p>
								<div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900">
									Explore collection
									<HiOutlineArrowRight className="text-base" />
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="container mx-auto px-4 py-16">
				<div className="grid gap-4 md:grid-cols-3">
					{highlights.map((item) => {
						const Icon = item.icon;
						return (
							<div key={item.title} className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
								<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
									<Icon className="text-xl" />
								</div>
								<h3 className="mt-5 text-lg font-semibold text-slate-950">{item.title}</h3>
								<p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
							</div>
						);
					})}
				</div>
			</section>

			<section className="container mx-auto px-4 pb-16">
				<div className="flex flex-col gap-6 rounded-4xl bg-white p-6 shadow-sm lg:flex-row lg:items-end lg:justify-between">
					<div className="max-w-2xl">
						<p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">Shop by category</p>
						<h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Find the right aisle faster.</h2>
						<p className="mt-3 text-slate-600">
							Shortcuts that help visitors get to the part of the store they actually want to browse.
						</p>
					</div>
					<div className="flex flex-wrap gap-3">
						{categories.map((category) => (
							<Link key={category} to="/" className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-100">
								{category}
							</Link>
						))}
					</div>
				</div>
			</section>

			<section className="container mx-auto px-4 pb-16">
				<div className="flex items-center justify-between gap-4">
					<div>
						<p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Featured products</p>
						<h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">A clean grid for featured inventory.</h2>
					</div>
					<Link to="/dashboard" className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-white hover:text-slate-950 md:inline-flex">
						View dashboard
					</Link>
				</div>

				<div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
					{products.map((product, index) => (
						<article key={product.name} className={`rounded-4xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${index === 0 ? 'ring-1 ring-slate-900/5' : ''}`}>
							<div className="flex items-start justify-between gap-4">
								<div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-slate-900 to-slate-700 text-white">
									<FiShoppingBag className="text-xl" />
								</div>
								<span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{product.badge}</span>
							</div>
							<h3 className="mt-5 text-lg font-semibold text-slate-950">{product.name}</h3>
							<p className="mt-2 text-sm text-slate-500">Designed for easy merchandising, quick discovery, and a polished first impression.</p>
							<div className="mt-5 flex items-center justify-between">
								<span className="text-xl font-semibold text-slate-950">{product.price}</span>
								<button className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
									Add to cart
								</button>
							</div>
						</article>
					))}
				</div>
			</section>

			<section className="container mx-auto px-4 pb-16">
				<div className="rounded-4xl bg-slate-950 px-6 py-10 text-white shadow-xl shadow-slate-950/20 sm:px-10">
					<div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
						<div>
							<p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Stay in the loop</p>
							<h2 className="mt-3 text-3xl font-semibold tracking-tight">Get product updates and offers before they disappear.</h2>
							<p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
								A compact newsletter block that keeps the landing page complete without feeling crowded.
							</p>
						</div>
						<form className="flex flex-col gap-3 sm:flex-row lg:justify-end">
							<label htmlFor="home-email" className="sr-only">Email address</label>
							<input id="home-email" type="email" placeholder="Enter your email" className="min-w-0 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white placeholder:text-slate-400 focus:border-sky-400 focus:outline-none sm:w-80" />
							<button type="submit" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
								Subscribe
							</button>
						</form>
					</div>
				</div>
			</section>

			<Footer />
		</main>
	);
};

export default Home;
