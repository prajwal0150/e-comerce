import { useEffect, useState } from 'react';

const fallbackStats = [
	{ label: 'Total Users', value: '0', change: 'No data yet' },
	{ label: 'New Users', value: '0', change: 'Current month' },
	{ label: 'Reset Requests', value: '0', change: 'All time' },
	{ label: 'Active View', value: '0', change: 'Recent signups' },
];

const Dashboard = () => {
	const [stats, setStats] = useState(fallbackStats);
	const [recentUsers, setRecentUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		let cancelled = false;

		const loadDashboard = async () => {
			try {
				setLoading(true);
				setError('');

				const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
				const response = await fetch(`${baseUrl}/api/dashboard-summary`);

				if (!response.ok) {
					throw new Error('Unable to load dashboard data.');
				}

				const payload = await response.json();

				if (!cancelled) {
					setStats(payload.data?.stats ?? fallbackStats);
					setRecentUsers(payload.data?.recentUsers ?? []);
				}
			} catch (err) {
				if (!cancelled) {
					setError(err.message || 'Unable to load dashboard data.');
				}
			} finally {
				if (!cancelled) {
					setLoading(false);
				}
			}
		};

		loadDashboard();

		return () => {
			cancelled = true;
		};
	}, []);

	return (
		<main className="min-h-screen bg-linear-to-br from-slate-50 via-white to-amber-50 px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-7xl space-y-8">
				<section className="overflow-hidden rounded-4xl border border-white/70 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8">
					<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
						<div className="max-w-2xl space-y-3">
							<p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">Dashboard overview</p>
							<h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Simple user dashboard</h1>
							<p className="text-sm leading-6 text-slate-600 sm:text-base">
								Track registrations, password reset activity, and recent account growth in one place.
							</p>
						</div>
						<div className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
							<div className="rounded-3xl bg-slate-900 px-4 py-3 text-white">
								<p className="text-white/70">Users</p>
								<p className="mt-1 text-lg font-semibold">Live</p>
							</div>
							<div className="rounded-3xl bg-amber-500 px-4 py-3 text-white">
								<p className="text-white/80">API</p>
								<p className="mt-1 text-lg font-semibold">Connected</p>
							</div>
							<div className="col-span-2 rounded-3xl bg-slate-100 px-4 py-3 sm:col-span-1">
								<p className="text-slate-500">Recent users</p>
								<p className="mt-1 text-lg font-semibold text-slate-900">{recentUsers.length}</p>
							</div>
						</div>
					</div>
					{error ? (
						<p className="mt-6 rounded-3xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
					) : null}
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
								<h2 className="text-xl font-semibold">Account growth</h2>
								<p className="mt-1 text-sm text-slate-500">New signups by week</p>
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
						<h2 className="text-xl font-semibold">Recent users</h2>
						<p className="mt-1 text-sm text-slate-500">Latest account activity</p>

						<div className="mt-6 space-y-4">
							{loading ? (
								<div className="rounded-3xl bg-slate-50 px-4 py-3 text-sm text-slate-500">Loading dashboard data...</div>
							) : recentUsers.length ? (
								recentUsers.map((user) => (
									<div key={user.id} className="flex items-center justify-between rounded-3xl bg-slate-50 px-4 py-3">
										<div>
											<p className="font-medium text-slate-900">{user.name}</p>
											<p className="text-sm text-slate-500">{user.email}</p>
										</div>
										<div className="text-right">
											<p className="text-sm font-medium text-slate-900">{user.status}</p>
											<p className="text-sm text-slate-500">New signup</p>
										</div>
									</div>
								))
							) : (
								<div className="rounded-3xl bg-slate-50 px-4 py-3 text-sm text-slate-500">No users found yet.</div>
							)}
						</div>
					</article>
				</section>
			</div>
		</main>
	);
};

export default Dashboard;
