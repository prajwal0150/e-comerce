import { Link } from 'react-router-dom'
import {
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiGlobe,
  FiPackage,
  FiShield,
  FiStar,
  FiTruck,
} from 'react-icons/fi'

const featuredCollections = [
  {
    title: 'Urban Carry',
    subtitle: 'Bags and daily essentials',
    offer: 'Up to 35% off',
    tone: 'from-[#ffe4bd] via-[#ffd79d] to-[#ffc57a]',
  },
  {
    title: 'Weekend Footwear',
    subtitle: 'Lightweight sneakers and slip-ons',
    offer: 'New arrivals',
    tone: 'from-[#d9f0ff] via-[#b8e5ff] to-[#98d9ff]',
  },
  {
    title: 'Home Atelier',
    subtitle: 'Decor with a warm finish',
    offer: 'Editors picks',
    tone: 'from-[#f3e7ff] via-[#ead8ff] to-[#ddc5ff]',
  },
]

const featuredProducts = [
  {
    name: 'Aster Leather Tote',
    price: '$149',
    rating: '4.9',
    category: 'Bestseller',
  },
  {
    name: 'Transit Knit Runner',
    price: '$119',
    rating: '4.8',
    category: 'Trending',
  },
  {
    name: 'Luma Ceramic Lamp',
    price: '$89',
    rating: '4.7',
    category: 'New',
  },
]

const trustHighlights = [
  { icon: FiTruck, title: 'Free delivery', detail: 'On orders over $65' },
  { icon: FiShield, title: 'Secure checkout', detail: 'Protected payments' },
  { icon: FiClock, title: 'Fast dispatch', detail: 'Ships within 24 hours' },
  { icon: FiGlobe, title: 'Worldwide shipping', detail: 'Available in 40+ countries' },
]

const Home = () => {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(255,186,95,0.2),transparent_42%),linear-gradient(180deg,#fff8f0_0%,#f5f7fb_45%,#f3f6fa_100%)] pb-14 text-slate-900">
      <section className="container mx-auto px-4 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <div className="overflow-hidden rounded-[2.2rem] border border-white/70 bg-white/80 shadow-[0_24px_80px_rgba(100,116,139,0.2)] backdrop-blur-md">
          <div className="grid items-stretch gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="px-6 py-10 sm:px-10 sm:py-12 lg:px-12">
              <p className="inline-flex items-center rounded-full border border-amber-200 bg-amber-100/70 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-amber-800">
                Fresh summer edit
              </p>
              <h1 className="mt-4 max-w-[13ch] text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Everyday essentials with design-first detail.
              </h1>
              <p className="mt-5 max-w-[52ch] text-sm leading-7 text-slate-600 sm:text-base">
                Discover curated pieces for work, weekends, and home. Built for comfort, crafted for style, and delivered fast.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/dashboard"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  Explore now
                  <FiArrowRight />
                </Link>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Contact us
                </Link>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  ['12k+', 'Products sold this month'],
                  ['4.8/5', 'Average customer rating'],
                  ['24h', 'Average dispatch time'],
                ].map(([value, label]) => (
                  <article key={label} className="rounded-2xl border border-slate-200 bg-white p-4">
                    <p className="text-2xl font-semibold text-slate-950">{value}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{label}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden bg-slate-950 p-8 text-white sm:p-10">
              <div className="absolute -left-14 -top-14 h-40 w-40 rounded-full bg-amber-400/30 blur-3xl" />
              <div className="absolute -bottom-20 -right-10 h-52 w-52 rounded-full bg-sky-400/20 blur-3xl" />

              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">This week spotlight</p>
                <h2 className="mt-3 max-w-[12ch] text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  Signature pieces for your next update.
                </h2>

                <div className="mt-8 space-y-3">
                  {[
                    'Premium materials and quality checks',
                    'Simple returns within 14 days',
                    'Member-only seasonal drops',
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <FiCheckCircle className="mt-0.5 shrink-0 text-emerald-300" />
                      <p className="text-sm leading-6 text-slate-200">{point}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm text-slate-300">Exclusive drop</p>
                      <p className="mt-1 text-xl font-semibold text-white">Studio Capsule 02</p>
                    </div>
                    <span className="rounded-full bg-amber-300 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-950">
                      Limited
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Handpicked silhouettes and textures designed in a soft neutral palette.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustHighlights.map((item) => {
            const Icon = item.icon

            return (
              <article key={item.title} className="rounded-2xl border border-white bg-white p-5 shadow-[0_10px_34px_rgba(15,23,42,0.08)]">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-slate-100 p-2 text-slate-700">
                    <Icon className="text-lg" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-500">{item.detail}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="container mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-end justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Curated collections</p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Browse by mood</h2>
          </div>
          <Link to="/dashboard" className="text-sm font-semibold text-slate-700 hover:text-slate-950">
            View all
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {featuredCollections.map((collection) => (
            <article key={collection.title} className="group overflow-hidden rounded-[1.8rem] border border-white/70 bg-white">
              <div className={`h-44 bg-linear-to-br ${collection.tone} p-6`}>
                <p className="inline-flex rounded-full bg-white/70 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-700">
                  {collection.offer}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-slate-900">{collection.title}</h3>
                <p className="mt-1 text-sm text-slate-700/85">{collection.subtitle}</p>
              </div>
              <div className="flex items-center justify-between p-5">
                <span className="text-sm font-semibold text-slate-600">Shop collection</span>
                <span className="rounded-full bg-slate-100 p-2 text-slate-700 transition group-hover:bg-slate-950 group-hover:text-white">
                  <FiArrowRight />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        <div className="rounded-4xl border border-white bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.08)] sm:p-8">
          <div className="mb-5 flex items-end justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Featured products</p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Most-loved picks</h2>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-800">
              <FiPackage />
              In stock
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {featuredProducts.map((product) => (
              <article key={product.name} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-600">
                    {product.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-amber-700">
                    <FiStar className="fill-amber-500 text-amber-500" />
                    {product.rating}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">{product.name}</h3>
                <p className="mt-2 text-sm text-slate-500">Refined style for day-to-night use.</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-lg font-semibold text-slate-950">{product.price}</span>
                  <button className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
                    Add to cart
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
