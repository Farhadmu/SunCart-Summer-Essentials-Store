import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FiStar, FiArrowLeft, FiTag, FiBox, FiCheck } from 'react-icons/fi'
import productsData from '../data/products.json'

export default function ProductDetails() {
  const { id } = useParams()
  const product = productsData.find((p) => p.id === id)

  useEffect(() => {
    if (product) document.title = `${product.name} — SunCart`
  }, [product])

  if (!product) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="font-display text-4xl font-bold">Product not found</h1>
        <Link
          to="/products"
          className="inline-block mt-6 btn bg-coral-500 hover:bg-coral-600 border-none text-white"
        >
          Back to products
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10">
      <Link
        to="/products"
        className="inline-flex items-center gap-2 text-sm font-bold text-coral-600 hover:text-coral-700 mb-6"
      >
        <FiArrowLeft /> Back to products
      </Link>

      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div className="rounded-3xl overflow-hidden bg-white shadow-lg border border-coral-400/10">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[480px] object-cover"
          />
        </div>

        <div>
          <p className="uppercase tracking-[0.3em] text-coral-500 text-xs font-bold">
            {product.brand} • {product.category}
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 leading-tight">
            {product.name}
          </h1>

          <div className="mt-4 flex items-center gap-4">
            <span className="bg-accent text-accent-content px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
              <FiStar className="fill-current" /> {product.rating}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 ${
                product.stock > 0
                  ? 'bg-success/15 text-success'
                  : 'bg-error/15 text-error'
              }`}
            >
              <FiBox /> {product.stock > 0 ? `${product.stock} in stock` : 'Sold out'}
            </span>
          </div>

          <p className="mt-6 text-neutral/75 leading-relaxed">
            {product.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {product.tags.map((t) => (
              <span
                key={t}
                className="text-xs font-semibold bg-coral-500/10 text-coral-600 px-3 py-1 rounded-full inline-flex items-center gap-1"
              >
                <FiTag /> {t}
              </span>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-3xl bg-gradient-to-br from-sand-100 to-base-100 border border-coral-400/20">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral/60 font-bold">
                  Price
                </p>
                <p className="font-display text-5xl font-bold text-coral-600">
                  ${product.price.toFixed(2)}
                </p>
              </div>
              <button className="btn bg-coral-500 hover:bg-coral-600 border-none text-white px-8">
                Add to cart
              </button>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-neutral/70">
              <li className="flex items-center gap-2">
                <FiCheck className="text-success" /> Free shipping over $75
              </li>
              <li className="flex items-center gap-2">
                <FiCheck className="text-success" /> 30-day easy returns
              </li>
              <li className="flex items-center gap-2">
                <FiCheck className="text-success" /> Sun-safe & sustainably sourced
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
