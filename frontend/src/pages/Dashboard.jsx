import { Link } from 'react-router-dom'
import {
	FiActivity,
	FiArrowUpRight,
	FiBarChart2,
	FiClock,
	FiDollarSign,
	FiPackage,
	FiShoppingBag,
	FiStar,
	FiTrendingUp,
	FiUsers,
} from 'react-icons/fi'

const stats = [
	{
		label: 'Total revenue',
		value: '$128,490',
		change: '+18.2% this month',
		icon: FiDollarSign,
		accent: 'from-emerald-500 to-teal-400',
	},
	{
		label: 'Orders',
		value: '4,892',
		change: '+12.4% this week',
		icon: FiShoppingBag,
		accent: 'from-sky-500 to-cyan-400',
	},
	{
		label: 'Customers',
		value: '18.6K',
		change: '+7.8% returning users',
		icon: FiUsers,
		accent: 'from-fuchsia-500 to-pink-400',
	},
	{
		label: 'Conversion',
		value: '4.9%',
		change: '+0.8% from last month',
		icon: FiTrendingUp,
		accent: 'from-amber-500 to-orange-400',
	},
]

const revenueBars = [68, 74, 59, 88, 96, 82, 91, 77, 84, 72, 98, 90]

const orders = [
	{ id: '#1042', customer: 'Ava Johnson', date: 'Today, 9:14 AM', status: 'Paid', amount: '$249.00' },
	{ id: '#1041', customer: 'Mason Lee', date: 'Today, 8:01 AM', status: 'Packing', amount: '$189.00' },
	{ id: '#1040', customer: 'Sophia Chen', date: 'Yesterday', status: 'Delivered', amount: '$364.00' },
	{ id: '#1039', customer: 'Noah Smith', date: 'Yesterday', status: 'Refund', amount: '$79.00' },
]

const products = [
	{ name: 'Structured Tote Bag', sales: '1.2K sold', rating: '4.9' },
	{ name: 'Minimal Sneakers', sales: '980 sold', rating: '4.8' },
	{ name: 'Organic Skincare Set', sales: '860 sold', rating: '4.7' },
]

const activity = [
	{ title: 'New campaign launched', detail: 'Spring essentials banner is now live across all storefronts.', time: '12 min ago', tone: 'bg-emerald-500/15 text-emerald-300' },
	{ title: 'Inventory alert', detail: 'Premium leather wallets are below the reorder threshold.', time: '38 min ago', tone: 'bg-amber-500/15 text-amber-300' },
	{ title: 'High-value order', detail: 'A wholesale order worth $4,120 was placed from Dubai.', time: '2 hours ago', tone: 'bg-sky-500/15 text-sky-300' },
]

const Dashboard = () => {
	return (
		<main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 pb-10 pt-6 text-slate-900">
			<div className="container mx-auto space-y-6 px-4">
				<section className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white shadow-[0_24px_90px_rgba(15,23,42,0.35)] border border-white/5">
					<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>
					<div className="grid gap-8 px-6 py-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-10 relative z-10">
						<div className="relative">
							<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200 hover:bg-white/10 hover:border-white/20 transition duration-300">
								<FiBarChart2 className="text-[14px]" />
								Commerce overview
							</div>
							<h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent">
								A polished control center for sales, inventory, and customer momentum.
							</h1>
							<p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300 md:text-base">
								Track performance at a glance, identify product winners, and keep the operational flow moving without the noise.
							</p>

							<div className="mt-6 flex flex-wrap gap-3">
								<Link
									to="/"
									className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-white to-slate-100 px-5 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:shadow-lg hover:shadow-white/20 hover:scale-105 active:scale-95"
								>
									View storefront
									<FiArrowUpRight />
								</Link>
								<button className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white/10 hover:border-white/40 hover:shadow-lg hover:shadow-white/10">
									Export report
									<FiClock />
								</button>
							</div>

							<div className="mt-8 grid gap-4 sm:grid-cols-3">
								{[
									['7.8%', 'Net margin'],
									['96%', 'Fulfillment'],
									['3.2h', 'Avg. response time'],
								].map(([value, label]) => (
									<div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
										<div className="text-2xl font-semibold text-white">{value}</div>
										<div className="mt-1 text-sm text-slate-300">{label}</div>
									</div>
								))}
							</div>
						</div>

						<div className="rounded-[1.75rem] border border-white/10 bg-white/10 p-5 backdrop-blur">
							<div className="flex items-center justify-between gap-4">
								<div>
									<p className="text-sm text-slate-300">Revenue trend</p>
									<h2 className="mt-1 text-2xl font-semibold text-white">$128,490</h2>
								</div>
								<div className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300">
									+18.2%
								</div>
							</div>

							<div className="mt-6 flex h-64 items-end gap-2 rounded-3xl bg-slate-900/70 p-4">
								{revenueBars.map((bar, index) => (
									<div key={index} className="flex h-full flex-1 items-end">
										<div
											className="w-full rounded-t-2xl bg-gradient-to-t from-cyan-400 via-sky-500 to-indigo-400 shadow-[0_12px_30px_rgba(56,189,248,0.35)]"
											style={{ height: `${bar}%` }}
										/>
									</div>
								))}
							</div>

							<div className="mt-4 grid gap-3 sm:grid-cols-2">
								<div className="rounded-2xl bg-white/5 p-4">
									<div className="flex items-center gap-2 text-sm text-slate-300">
										<FiActivity />
										Traffic sources
									</div>
									<div className="mt-3 text-2xl font-semibold text-white">62% organic</div>
								</div>
								<div className="rounded-2xl bg-white/5 p-4">
									<div className="flex items-center gap-2 text-sm text-slate-300">
										<FiStar />
										Customer rating
									</div>
									<div className="mt-3 text-2xl font-semibold text-white">4.9/5.0</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
					{stats.map((stat) => {
						const Icon = stat.icon

						return (
							<article
								key={stat.label}
								className="group rounded-3xl border border-white bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.08)] transition duration-300 hover:shadow-[0_24px_60px_rgba(15,23,42,0.15)] hover:-translate-y-1"
							>
								<div className="flex items-start justify-between gap-4">
									<div>
										<p className="text-sm font-medium text-slate-500">{stat.label}</p>
										<div className="mt-2 text-3xl font-bold tracking-tight text-slate-950">{stat.value}</div>
										<p className="mt-2 text-sm font-medium text-emerald-600 flex items-center gap-1">
											<FiTrendingUp className="w-4 h-4" />
											{stat.change}
										</p>
									</div>
									<div className={`rounded-2xl bg-gradient-to-br ${stat.accent} p-4 text-white shadow-lg transition duration-300 group-hover:shadow-[0_12px_30px_rgba(99,102,241,0.4)] group-hover:scale-110`}>
										<Icon className="text-2xl" />
									</div>
								</div>
							</article>
						)
					})}
				</section>

				<section className="grid gap-6 xl:grid-cols-[1.35fr_0.85fr]">
					<article className="rounded-[2rem] border border-white bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.08)] transition duration-300 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
						<div className="flex items-center justify-between gap-4 mb-2">
							<div>
								<p className="text-sm font-medium text-slate-500">Recent orders</p>
								<h2 className="mt-1 text-2xl font-bold text-slate-950">Fulfillment queue</h2>
							</div>
							<button className="rounded-full bg-gradient-to-r from-slate-950 to-slate-800 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:shadow-lg hover:shadow-slate-950/30 active:scale-95">
								View all
							</button>
						</div>

						<div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 hover:border-slate-300 transition duration-300">
							<table className="min-w-full divide-y divide-slate-200 text-left text-sm">
								<thead className="bg-gradient-to-r from-slate-50 to-slate-100 text-slate-700">
									<tr>
										<th className="px-4 py-4 font-bold">Order</th>
										<th className="px-4 py-4 font-bold">Customer</th>
										<th className="px-4 py-4 font-bold">Date</th>
										<th className="px-4 py-4 font-bold">Status</th>
										<th className="px-4 py-4 font-bold text-right">Amount</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-slate-200 bg-white">
									{orders.map((order) => (
										<tr key={order.id} className="transition duration-200 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-indigo-50/50 group cursor-pointer">
											<td className="px-4 py-4 font-semibold text-slate-950">{order.id}</td>
											<td className="px-4 py-4 text-slate-600">{order.customer}</td>
											<td className="px-4 py-4 text-slate-600 text-sm">{order.date}</td>
											<td className="px-4 py-4">
												<span
													className={`inline-flex rounded-full px-3 py-1.5 text-xs font-bold transition duration-300 ${
														order.status === 'Delivered'
															? 'bg-emerald-100 text-emerald-700 group-hover:shadow-md group-hover:shadow-emerald-200'
															: order.status === 'Packing'
																? 'bg-amber-100 text-amber-700 group-hover:shadow-md group-hover:shadow-amber-200'
																: order.status === 'Refund'
																	? 'bg-rose-100 text-rose-700 group-hover:shadow-md group-hover:shadow-rose-200'
																	: 'bg-sky-100 text-sky-700 group-hover:shadow-md group-hover:shadow-sky-200'
													}`}
												>
													{order.status}
												</span>
											</td>
											<td className="px-4 py-4 text-right font-bold text-slate-950">{order.amount}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</article>

					<div className="space-y-6">
						<article className="rounded-[2rem] border border-white bg-gradient-to-br from-white to-slate-50 p-6 shadow-[0_16px_50px_rgba(15,23,42,0.08)] transition duration-300 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
							<div className="flex items-center justify-between gap-4 mb-2">
								<div>
									<p className="text-sm font-medium text-slate-500">Top products</p>
									<h2 className="mt-1 text-2xl font-bold text-slate-950">Best sellers</h2>
								</div>
								<div className="rounded-full bg-gradient-to-br from-amber-100 to-orange-100 p-3">
									<FiPackage className="text-2xl text-amber-600" />
								</div>
							</div>

							<div className="mt-5 space-y-3">
								{products.map((product, index) => (
									<div key={product.name} className="flex items-center justify-between rounded-2xl bg-white p-4 border border-slate-200 hover:border-amber-300 transition duration-300 hover:shadow-md hover:shadow-amber-100/50 group cursor-pointer">
										<div>
											<div className="font-bold text-slate-950">
												<span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 text-white text-xs font-bold mr-2">
													{index + 1}
												</span>
												{product.name}
											</div>
											<div className="mt-1 text-sm text-slate-500">{product.sales}</div>
										</div>
										<div className="rounded-full bg-gradient-to-r from-slate-950 to-slate-800 px-4 py-1.5 text-sm font-bold text-white shadow-md group-hover:shadow-lg transition duration-300">
											⭐ {product.rating}
										</div>
									</div>
								))}
							</div>
						</article>

						<article className="rounded-[2rem] border border-white bg-gradient-to-br from-white to-slate-50 p-6 shadow-[0_16px_50px_rgba(15,23,42,0.08)] transition duration-300 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
							<div className="flex items-center justify-between gap-4 mb-2">
								<div>
									<p className="text-sm font-medium text-slate-500">Live activity</p>
									<h2 className="mt-1 text-2xl font-bold text-slate-950">Operations feed</h2>
								</div>
								<div className="rounded-full bg-gradient-to-br from-sky-100 to-blue-100 p-3">
									<FiClock className="text-2xl text-sky-600" />
								</div>
							</div>

							<div className="mt-5 space-y-4">
								{activity.map((item) => (
									<div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-4 hover:border-slate-300 transition duration-300 hover:shadow-md group cursor-pointer">
										<div className={`inline-flex rounded-full px-3 py-1.5 text-xs font-bold transition duration-300 ${item.tone}`}>
											🔔 Update
										</div>
										<h3 className="mt-3 font-bold text-slate-950">{item.title}</h3>
										<p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
										<p className="mt-3 text-xs font-bold uppercase tracking-widest text-slate-400">{item.time}</p>
									</div>
								))}
							</div>
						</article>
					</div>
				</section>
			</div>
		</main>
	)
}

export default Dashboard
