import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

const slides = [
  {
    title: 'Endless Summer Sale',
    sub: 'Up to 40% off sun-ready essentials.',
    cta: 'Shop the Sale',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80',
  },
  {
    title: 'Glow, Don’t Burn',
    sub: 'Reef-safe SPF, mists & mineral skincare.',
    cta: 'Shop Skincare',
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1600&q=80',
  },
  {
    title: 'Boardwalk Fits',
    sub: 'Linen, swim & espadrilles for hot days.',
    cta: 'Shop Outfits',
    img: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=1600&q=80',
  },
]

export default function HeroSlider() {
  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
        className="h-[78vh] min-h-[480px] max-h-[720px]"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full">
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-neutral/70 via-neutral/40 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
                  <div className="max-w-xl text-white animate__animated animate__fadeInLeft">
                    <p className="uppercase tracking-[0.4em] text-accent text-xs mb-4 font-bold">
                      SunCart presents
                    </p>
                    <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                      {s.title}
                    </h1>
                    <p className="mt-5 text-lg md:text-xl text-white/85">
                      {s.sub}
                    </p>
                    <Link
                      to="/products"
                      className="mt-8 inline-flex items-center gap-2 bg-coral-500 hover:bg-coral-600 transition px-7 py-3 rounded-full font-semibold shadow-lg shadow-coral-500/40"
                    >
                      {s.cta}
                    </Link>
                  </div>
                </div>
              </div>

              {/* Floating sun */}
              <div className="hidden md:block absolute -right-20 top-1/4">
                <div className="w-72 h-72 rounded-full bg-gradient-to-br from-accent via-coral-400 to-coral-600 opacity-80 animate-floatY" />
              </div>
              <div className="hidden md:block absolute -right-10 top-1/4 w-72 h-72">
                <div className="w-full h-full sun-glow opacity-60" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
