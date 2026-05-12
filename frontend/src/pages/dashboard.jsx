const stats = [
	{ label: 'Total Sales', value: '$24,850', change: '+12.4%' },
	{ label: 'Orders', value: '1,284', change: '+8.1%' },
	{ label: 'Customers', value: '3,912', change: '+5.7%' },
	{ label: 'Conversion', value: '4.8%', change: '+1.2%' },
];

const recentOrders = [
	{ id: '#1042', customer: 'Ava Patel', status: 'Completed', amount: '$320' },
	{ id: '#1041', customer: 'Noah Singh', status: 'Processing', amount: '$198' },
	{ id: '#1040', customer: 'Mia Johnson', status: 'Pending', amount: '$78' },
	{ id: '#1039', customer: 'Ethan Clark', status: 'Completed', amount: '$540' },
];

const Dashboard = () => {
	return (
		<main className="min-h-screen bg-linear-to-br from-slate-50 via-white to-amber-50 px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-7xl space-y-8">
				<section className="overflow-hidden rounded-4xl border border-white/70 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8">
					<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
						<div className="max-w-2xl space-y-3">
							<p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">Dashboard overview</p>
							<h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Simple sales dashboard</h1>
							<p className="text-sm leading-6 text-slate-600 sm:text-base">
								Track performance, monitor orders, and keep an eye on the numbers that matter most.
							</p>
						</div>
						<div className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
							<div className="rounded-3xl bg-slate-900 px-4 py-3 text-white">
								<p className="text-white/70">Revenue</p>
								<p className="mt-1 text-lg font-semibold">$24.8K</p>
							</div>
							<div className="rounded-3xl bg-amber-500 px-4 py-3 text-white">
								<p className="text-white/80">Growth</p>
								<p className="mt-1 text-lg font-semibold">+12.4%</p>
							</div>
							<div className="col-span-2 rounded-3xl bg-slate-100 px-4 py-3 sm:col-span-1">
								<p className="text-slate-500">This month</p>
								<p className="mt-1 text-lg font-semibold text-slate-900">128 orders</p>
							</div>
						</div>
					</div>
				</section>

				<section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
					{stats.map((item) => (
						<article key={item.label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
							<p className="text-sm font-medium text-slate-500">{item.label}</p>
							<div className="mt-4 flex items-end justify-between gap-4">
								<h2 className="text-3xl font-semibold tracking-tight">{item.value}</h2>
								<span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
									{item.change}
								</span>
							</div>
						</article>
					))}
				</section>

				<section className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
					<article className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
						<div className="flex items-center justify-between gap-4">
							<div>
								<h2 className="text-xl font-semibold">Revenue trend</h2>
								<p className="mt-1 text-sm text-slate-500">Weekly performance at a glance</p>
							</div>
							<span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">Last 7 days</span>
						</div>

						<div className="mt-8 flex h-72 items-end gap-3 rounded-3xl bg-slate-50 p-4">
							{[42, 58, 48, 72, 64, 88, 76].map((height, index) => (
								<div key={index} className="flex flex-1 flex-col items-center justify-end gap-3">
									<div
										className="w-full rounded-t-3xl bg-linear-to-t from-amber-500 to-amber-300 shadow-sm"
										style={{ height: `${height}%` }}
									/>
									<span className="text-xs text-slate-500">W{index + 1}</span>
								</div>
							))}
						</div>
					</article>

					<article className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
						<h2 className="text-xl font-semibold">Recent orders</h2>
						<p className="mt-1 text-sm text-slate-500">Latest customer activity</p>

						<div className="mt-6 space-y-4">
							{recentOrders.map((order) => (
								<div key={order.id} className="flex items-center justify-between rounded-3xl bg-slate-50 px-4 py-3">
									<div>
										<p className="font-medium text-slate-900">{order.customer}</p>
										<p className="text-sm text-slate-500">{order.id}</p>
									</div>
									<div className="text-right">
										<p className="text-sm font-medium text-slate-900">{order.amount}</p>
										<p className="text-sm text-slate-500">{order.status}</p>
									</div>
								</div>
							))}
						</div>
					</article>
				</section>
			</div>
		</main>
	);
};

export default Dashboard;
