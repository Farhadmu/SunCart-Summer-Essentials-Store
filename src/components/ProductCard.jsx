import { Link } from 'react-router-dom'
import { FiStar, FiArrowRight } from 'react-icons/fi'

export default function ProductCard({ product }) {
  return (
    <article className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-coral-400/10">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
        <span className="absolute top-3 left-3 bg-base-100/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-coral-600">
          {product.category}
        </span>
        <span className="absolute top-3 right-3 bg-accent text-accent-content px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1">
          <FiStar className="fill-current" /> {product.rating}
        </span>
      </div>
      <div className="p-5">
        <p className="text-xs uppercase tracking-wider text-coral-500 font-bold">
          {product.brand}
        </p>
        <h3 className="font-display text-lg font-bold text-neutral mt-1 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm text-neutral/65 mt-1 line-clamp-2 min-h-[2.5rem]">
          {product.shortDescription}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <p className="font-display text-2xl font-bold text-neutral">
            ${product.price.toFixed(2)}
          </p>
          <Link
            to={`/products/${product.id}`}
            className="inline-flex items-center gap-1 text-sm font-bold text-coral-600 hover:text-coral-700 group-hover:gap-2 transition-all"
          >
            View <FiArrowRight />
          </Link>
        </div>
      </div>
    </article>
  )
}
