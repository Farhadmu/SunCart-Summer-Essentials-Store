import { Link } from 'react-router-dom'
import { FiSun, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaInstagram, FaTwitter, FaFacebookF, FaPinterestP } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="mt-20 bg-neutral text-base-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-14 pb-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-coral-500 flex items-center justify-center">
              <FiSun className="text-white text-lg" />
            </div>
            <p className="font-display font-bold text-2xl">SunCart</p>
          </Link>
          <p className="mt-3 text-sm text-base-100/70">
            Your seasonal summer essentials store — sunglasses, breezy outfits,
            sunscreen and beach gear curated for warm days.
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-base-100/80">
            <li><Link to="/" className="hover:text-coral-400">Home</Link></li>
            <li><Link to="/products" className="hover:text-coral-400">Products</Link></li>
            <li><Link to="/login" className="hover:text-coral-400">Login</Link></li>
            <li><Link to="/register" className="hover:text-coral-400">Register</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-base-100/80">
            <li className="flex items-center gap-3">
              <FiMail className="text-coral-400 shrink-0" />
              <a
                href="mailto:mi0223937@gmail.com"
                className="hover:text-coral-400 break-all"
              >
                mi0223937@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FiPhone className="text-coral-400 shrink-0" />
              <a href="tel:+8801945321285" className="hover:text-coral-400">
                +880 1945-321285
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FiMapPin className="text-coral-400 shrink-0" /> Comilla,
              Bangladesh
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-4">Follow Us</h4>
          <div className="flex items-center gap-3">
            {[
              { Icon: FaInstagram, href: '#' },
              { Icon: FaTwitter, href: '#' },
              { Icon: FaFacebookF, href: '#' },
              { Icon: FaPinterestP, href: '#' },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-10 h-10 rounded-full bg-base-100/10 hover:bg-coral-500 transition flex items-center justify-center"
              >
                <Icon />
              </a>
            ))}
          </div>
          <p className="mt-6 text-xs text-base-100/50">
            Made with ☀️ from Bangladesh
          </p>
        </div>
      </div>
      <div className="border-t border-base-100/10 py-5 px-4 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 max-w-7xl mx-auto text-xs text-base-100/50">
        <p>© {new Date().getFullYear()} SunCart. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link to="/privacy" className="hover:text-coral-400">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-coral-400">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}
