import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  FiDroplet,
  FiSun,
  FiHeart,
  FiCoffee,
  FiArrowRight,
} from 'react-icons/fi'
import HeroSlider from '../components/HeroSlider.jsx'
import ProductCard from '../components/ProductCard.jsx'
import productsData from '../data/products.json'

const careTips = [
  {
    Icon: FiSun,
    title: 'Sun Protection',
    text: 'Apply broad-spectrum SPF 30+ every two hours, even on cloudy days.',
  },
  {
    Icon: FiDroplet,
    title: 'Stay Hydrated',
    text: 'Sip water all day — aim for 2-3 litres if you are out in the heat.',
  },
  {
    Icon: FiHeart,
    title: 'Light Fabrics',
    text: 'Choose linen, cotton and bamboo viscose to stay cool and breezy.',
  },
  {
    Icon: FiCoffee,
    title: 'Eat Cooling Foods',
    text: 'Watermelon, cucumber, mint and yogurt help your body chill.',
  },
]

const brands = [
  { name: 'SolarShade', tag: 'Premium Eyewear', color: 'from-coral-500 to-accent' },
  { name: 'GlowSafe', tag: 'Mineral Skincare', color: 'from-secondary to-info' },
  { name: 'TideHaus', tag: 'Beach Essentials', color: 'from-accent to-coral-500' },
  { name: 'ReefRider', tag: 'Surf & Swim', color: 'from-ocean-700 to-secondary' },
]

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.15 },
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const popular = [...productsData]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3)

  return (
    <div>
      <HeroSlider />

      {/* Popular products */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10 reveal">
          <div>
            <p className="uppercase tracking-[0.3em] text-coral-500 text-xs font-bold">
              Top Picks
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
              Popular this <span className="shine-text">summer</span>
            </h2>
          </div>
          <Link
            to="/products"
            className="hidden sm:inline-flex items-center gap-2 font-bold text-coral-600 hover:text-coral-700"
          >
            View all <FiArrowRight />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
          {popular.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Care tips */}
      <section className="bg-gradient-to-b from-sand-100 to-base-100 py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 reveal">
            <p className="uppercase tracking-[0.3em] text-coral-500 text-xs font-bold">
              Sunny Living
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
              Summer Care Tips
            </h2>
            <p className="mt-3 text-neutral/65 max-w-2xl mx-auto">
              A few feel-good habits that keep skin glowing and energy high all
              season.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
            {careTips.map(({ Icon, title, text }, i) => (
              <div
                key={i}
                className="frost-card rounded-3xl p-6 hover:-translate-y-1 transition shadow-sm"
              >
                <div className="w-14 h-14 rounded-2xl bg-coral-500/15 text-coral-600 flex items-center justify-center mb-4">
                  <Icon size={26} />
                </div>
                <h3 className="font-display text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm text-neutral/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top brands */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
        <div className="text-center mb-12 reveal">
          <p className="uppercase tracking-[0.3em] text-coral-500 text-xs font-bold">
            Hand-Picked
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            Top Brands
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
          {brands.map((b, i) => (
            <div
              key={i}
              className="rounded-3xl p-8 text-center text-white shadow-md hover:shadow-2xl transition relative overflow-hidden bg-gradient-to-br border border-white/10"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${b.color} opacity-95`}
              />
              <div className="relative z-10">
                <FiSun className="mx-auto text-5xl mb-3 animate-slowSpin" />
                <h3 className="font-display text-2xl font-bold">{b.name}</h3>
                <p className="text-sm uppercase tracking-widest mt-1 opacity-90">
                  {b.tag}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 pb-20">
        <div className="rounded-3xl bg-gradient-to-r from-coral-500 to-accent text-white px-8 py-12 md:px-16 md:py-16 flex flex-col md:flex-row items-center justify-between gap-6 reveal">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Ready for golden-hour shopping?
            </h2>
            <p className="mt-2 text-white/85 max-w-xl">
              Browse all 16 SunCart picks — from polarized aviators to floating
              speakers.
            </p>
          </div>
          <Link
            to="/products"
            className="bg-white text-coral-600 hover:bg-base-100 transition px-8 py-3 rounded-full font-bold shadow-lg"
          >
            Explore Products
          </Link>
        </div>
      </section>
    </div>
  )
}
