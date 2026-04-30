import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiSun,
} from 'react-icons/fi'
import { FcGoogle } from 'react-icons/fc'
import toast from 'react-hot-toast'
import { useAuth } from '../context/AuthContext.jsx'

export default function Login() {
  const { user, login, loginWithGoogle, resetPassword, isFirebaseConfigured } =
    useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true })
    }
  }, [user, from, navigate])

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPwd, setShowPwd] = useState(false)
  const [busy, setBusy] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!isFirebaseConfigured) {
      toast.error('Firebase is not configured. Add the VITE_FIREBASE_* keys.')
      return
    }
    setBusy(true)
    try {
      await login(email, password)
      toast.success('Welcome back to SunCart!')
      navigate(from, { replace: true })
    } catch (err) {
      toast.error(prettifyAuthError(err))
    } finally {
      setBusy(false)
    }
  }

  const handleGoogle = async () => {
    if (!isFirebaseConfigured) {
      toast.error('Firebase is not configured. Add the VITE_FIREBASE_* keys.')
      return
    }
    setBusy(true)
    try {
      await loginWithGoogle()
      toast.success('Signed in with Google')
      navigate(from, { replace: true })
    } catch (err) {
      toast.error(prettifyAuthError(err))
    } finally {
      setBusy(false)
    }
  }

  const handleReset = async () => {
    if (!email) {
      toast.error('Enter your email to receive a reset link')
      return
    }
    try {
      await resetPassword(email)
      toast.success('Password reset email sent')
    } catch (err) {
      toast.error(prettifyAuthError(err))
    }
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] grid lg:grid-cols-2">
      {/* Left visual */}
      <div className="hidden lg:flex relative bg-gradient-to-br from-coral-500 via-coral-400 to-accent text-white p-12 items-center justify-center overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white/15 animate-floatY" />
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white/10 animate-slowSpin" />
        <div className="relative max-w-md">
          <FiSun className="text-6xl mb-6 animate-slowSpin" />
          <h2 className="font-display text-5xl font-bold leading-tight">
            Welcome back to your endless summer.
          </h2>
          <p className="mt-4 text-white/85 text-lg">
            Sign in to track orders, save favourites and get early access to
            seasonal drops.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-coral-500 flex items-center justify-center">
              <FiSun className="text-white" />
            </div>
            <p className="font-display font-bold text-2xl">SunCart</p>
          </div>
          <h1 className="font-display text-4xl font-bold">Welcome back</h1>
          <p className="text-neutral/70 mt-2">
            Sign in to continue shopping summer essentials.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <label className="block">
              <span className="text-sm font-bold uppercase tracking-wider text-neutral/70">
                Email
              </span>
              <div className="relative mt-1">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-coral-500" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 h-12 rounded-2xl bg-base-200/60 border border-transparent focus:bg-white focus:border-coral-500 focus:ring-2 focus:ring-coral-500/20 focus:outline-none"
                  placeholder="you@summer.com"
                />
              </div>
            </label>

            <label className="block">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold uppercase tracking-wider text-neutral/70">
                  Password
                </span>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs font-bold text-coral-600 hover:text-coral-700"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative mt-1">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-coral-500" />
                <input
                  type={showPwd ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 h-12 rounded-2xl bg-base-200/60 border border-transparent focus:bg-white focus:border-coral-500 focus:ring-2 focus:ring-coral-500/20 focus:outline-none"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPwd((v) => !v)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral/60 hover:text-coral-500"
                  aria-label="Toggle password"
                >
                  {showPwd ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </label>

            <button
              type="submit"
              disabled={busy}
              className="w-full h-12 rounded-2xl bg-coral-500 hover:bg-coral-600 disabled:opacity-60 transition text-white font-bold shadow-lg shadow-coral-500/30"
            >
              {busy ? 'Signing in…' : 'Sign in'}
            </button>
          </form>

          <div className="my-6 flex items-center gap-3">
            <div className="flex-1 h-px bg-coral-400/20" />
            <span className="text-xs uppercase tracking-widest text-neutral/50">
              or
            </span>
            <div className="flex-1 h-px bg-coral-400/20" />
          </div>

          <button
            onClick={handleGoogle}
            disabled={busy}
            className="w-full h-12 rounded-2xl bg-white border border-coral-400/30 hover:border-coral-500 hover:bg-base-200/40 transition flex items-center justify-center gap-3 font-bold"
          >
            <FcGoogle size={22} /> Continue with Google
          </button>

          <p className="mt-6 text-center text-sm text-neutral/70">
            Don't have an account?{' '}
            <Link
              to="/register"
              className="font-bold text-coral-600 hover:text-coral-700"
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

function prettifyAuthError(err) {
  const code = err?.code || ''
  switch (code) {
    case 'auth/invalid-credential':
    case 'auth/wrong-password':
    case 'auth/user-not-found':
      return 'Invalid email or password'
    case 'auth/email-already-in-use':
      return 'An account with this email already exists'
    case 'auth/invalid-email':
      return 'Please enter a valid email address'
    case 'auth/weak-password':
      return 'Password should be at least 6 characters'
    case 'auth/popup-closed-by-user':
      return 'Sign-in popup closed before completing'
    case 'auth/network-request-failed':
      return 'Network error — check your connection'
    case 'auth/too-many-requests':
      return 'Too many attempts. Try again in a few minutes'
    case 'auth/unauthorized-domain':
      return 'This domain is not authorized in your Firebase project.'
    default:
      return err?.message || 'Something went wrong. Please try again.'
  }
}