import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FiSun, FiUser, FiLogOut, FiMenu, FiX } from 'react-icons/fi'
import toast from 'react-hot-toast'
import { useAuth } from '../context/AuthContext.jsx'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/products', label: 'Products' },
]

export default function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const allLinks = user ? [...navLinks, { to: '/my-profile', label: 'My Profile' }] : navLinks

  const handleLogout = async () => {
    try {
      await logout()
      toast.success('Signed out successfully')
      navigate('/')
    } catch (err) {
      toast.error(err.message || 'Sign out failed')
    }
  }

  return (
    <header className="sticky top-0 z-40 bg-base-100/85 backdrop-blur border-b border-coral-400/20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-coral-500 group-hover:animate-slowSpin" />
            <FiSun className="absolute inset-0 m-auto text-white text-lg" />
          </div>
          <div>
            <p className="font-display font-bold text-xl leading-none text-neutral">
              SunCart
            </p>
            <p className="text-[10px] tracking-widest uppercase text-coral-500 font-semibold">
              Summer Essentials
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {allLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-sm font-semibold transition ${
                  isActive
                    ? 'bg-coral-500 text-white shadow-md'
                    : 'text-neutral hover:bg-coral-500/10'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-3">
              <Link
                to="/my-profile"
                className="flex items-center gap-2 group"
                title={user.displayName || user.email}
              >
                <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-coral-500/40 group-hover:ring-coral-500 transition">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt={user.displayName || 'User'}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-coral-500 text-white flex items-center justify-center font-bold">
                      {(user.displayName || user.email || 'U')[0].toUpperCase()}
                    </div>
                  )}
                </div>
              </Link>
              <button
                onClick={handleLogout}
                className="btn btn-sm btn-outline border-coral-500 text-coral-600 hover:bg-coral-500 hover:text-white hover:border-coral-500"
              >
                <FiLogOut /> Sign out
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="btn btn-sm btn-outline border-coral-500 text-coral-600 hover:bg-coral-500 hover:text-white hover:border-coral-500"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn btn-sm bg-coral-500 hover:bg-coral-600 border-none text-white"
              >
                Register
              </Link>
            </>
          )}
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-coral-500/10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-coral-400/20 bg-base-100">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg text-sm font-semibold ${
                    isActive
                      ? 'bg-coral-500 text-white'
                      : 'text-neutral hover:bg-coral-500/10'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <div className="pt-2 border-t border-coral-400/20">
              {user ? (
                <>
                  <Link
                    to="/my-profile"
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2 rounded-lg text-sm font-semibold text-neutral hover:bg-coral-500/10"
                  >
                    <FiUser className="inline mr-2" /> My profile
                  </Link>
                  <button
                    onClick={() => {
                      setOpen(false)
                      handleLogout()
                    }}
                    className="w-full text-left px-4 py-2 rounded-lg text-sm font-semibold text-coral-600 hover:bg-coral-500/10"
                  >
                    <FiLogOut className="inline mr-2" /> Sign out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2 rounded-lg text-sm font-semibold text-neutral hover:bg-coral-500/10"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2 rounded-lg text-sm font-semibold bg-coral-500 text-white text-center"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
