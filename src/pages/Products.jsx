import { useEffect, useMemo, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import ProductCard from '../components/ProductCard.jsx'
import productsData from '../data/products.json'

const categories = ['All', ...Array.from(new Set(productsData.map((p) => p.category)))]

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating-desc', label: 'Top Rated' },
]

export default function Products() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [sort, setSort] = useState('featured')

  useEffect(() => {
    document.title = 'Products — SunCart'
  }, [])

  const filtered = useMemo(() => {
    let list = productsData
    if (category !== 'All') list = list.filter((p) => p.category === category)
    if (query.trim()) {
      const q = query.toLowerCase()
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)),
      )
    }
    const sorted = [...list]
    switch (sort) {
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price)
        break
      case 'rating-desc':
        sorted.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }
    return sorted
  }, [query, category, sort])

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-coral-500 via-coral-400 to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 md:py-20 text-center">
          <p className="uppercase tracking-[0.4em] text-xs font-bold opacity-90">
            Summer Collection
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mt-3">
            All Products
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-white/85">
            16 hand-picked summer essentials. Search, filter and sort to find
            what you need.
          </p>
        </div>
        <div className="absolute -bottom-px left-0 right-0 h-8 bg-base-100 [clip-path:ellipse(80%_100%_at_50%_100%)]" />
      </section>

      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-10">
        {/* Controls */}
        <div className="grid md:grid-cols-12 gap-3 mb-8">
          <div className="md:col-span-6 relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral/50" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, brand or tag…"
              className="w-full pl-12 pr-4 h-12 rounded-full bg-white border border-coral-400/20 focus:outline-none focus:border-coral-500 focus:ring-2 focus:ring-coral-500/20 text-sm"
            />
          </div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="md:col-span-3 h-12 rounded-full bg-white border border-coral-400/20 px-4 focus:outline-none focus:border-coral-500 focus:ring-2 focus:ring-coral-500/20 text-sm"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="md:col-span-3 h-12 rounded-full bg-white border border-coral-400/20 px-4 focus:outline-none focus:border-coral-500 focus:ring-2 focus:ring-coral-500/20 text-sm"
          >
            {sortOptions.map((o) => (
              <option key={o.value} value={o.value}>
                Sort: {o.label}
              </option>
            ))}
          </select>
        </div>

        <p className="text-sm text-neutral/60 mb-4">
          Showing <strong>{filtered.length}</strong> of {productsData.length}{' '}
          products
        </p>

        {filtered.length === 0 ? (
          <div className="py-20 text-center">
            <p className="font-display text-2xl">
              No products match your search.
            </p>
            <p className="text-sm text-neutral/60 mt-2">
              Try a different keyword, brand or category.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
