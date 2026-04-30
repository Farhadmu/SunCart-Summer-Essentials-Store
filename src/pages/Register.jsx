import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  FiUser,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiSun,
  FiImage,
} from 'react-icons/fi'
import { FcGoogle } from 'react-icons/fc'
import { updateProfile } from 'firebase/auth'
import toast from 'react-hot-toast'
import { useAuth } from '../context/AuthContext.jsx'
import { auth } from '../firebase/firebase.config.js'

export default function Register() {
  const { register, loginWithGoogle, isFirebaseConfigured } = useAuth()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [photoURL, setPhotoURL] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPwd, setShowPwd] = useState(false)
  const [busy, setBusy] = useState(false)

  const validatePassword = (pwd) => {
    if (pwd.length < 6) return 'Password must be at least 6 characters'
    if (!/[A-Z]/.test(pwd)) return 'Password must include an uppercase letter'
    if (!/[a-z]/.test(pwd)) return 'Password must include a lowercase letter'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!isFirebaseConfigured) {
      toast.error('Firebase is not configured. Add the VITE_FIREBASE_* keys.')
      return
    }
    const err = validatePassword(password)
    if (err) {
      toast.error(err)
      return
    }
    setBusy(true)
    try {
      const cred = await register(email, password)
      if (cred?.user && (name || photoURL)) {
        await updateProfile(cred.user, {
          displayName: name || null,
          photoURL: photoURL || null,
        })
      }
      toast.success('Welcome to SunCart!')
      navigate('/', { replace: true })
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
      toast.success('Account ready!')
      navigate('/', { replace: true })
    } catch (err) {
      toast.error(prettifyAuthError(err))
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] grid lg:grid-cols-2">
      {/* Form */}
      <div className="flex items-center justify-center p-6 sm:p-12 order-2 lg:order-1">
        <div className="w-full max-w-md">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-coral-500 flex items-center justify-center">
              <FiSun className="text-white" />
            </div>
            <p className="font-display font-bold text-2xl">SunCart</p>
          </div>
          <h1 className="font-display text-4xl font-bold">Create your account</h1>
          <p className="text-neutral/70 mt-2">
            Sign up to save and track orders.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <Field
              label="Full Name"
              icon={FiUser}
              value={name}
              onChange={setName}
              placeholder="Your name"
              required
            />
            <Field
              label="Email"
              icon={FiMail}
              type="email"
              value={email}
              onChange={setEmail}
              placeholder="you@summer.com"
              required
            />
            <Field
              label="Photo URL (Optional)"
              icon={FiImage}
              value={photoURL}
              onChange={setPhotoURL}
              placeholder="https://…"
            />
            <label className="block">
              <span className="text-sm font-bold uppercase tracking-wider text-neutral/70">
                Password
              </span>
              <div className="relative mt-1">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-coral-500" />
                <input
                  type={showPwd ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 h-12 rounded-2xl bg-base-200/60 border border-transparent focus:bg-white focus:border-coral-500 focus:ring-2 focus:ring-coral-500/20 focus:outline-none"
                  placeholder="At least 6 chars, mixed case"
                />
                <button
                  type="button"
                  onClick={() => setShowPwd((v) => !v)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral/60 hover:text-coral-500"
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
              {busy ? 'Creating account…' : 'Create account'}
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
            Already have an account?{' '}
            <Link to="/login" className="font-bold text-coral-600 hover:text-coral-700">
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Visual */}
      <div className="hidden lg:flex relative bg-gradient-to-br from-accent via-coral-400 to-coral-500 text-white p-12 items-center justify-center overflow-hidden order-1 lg:order-2">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/15 animate-floatY" />
        <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-white/10 animate-slowSpin" />
        <div className="relative max-w-md">
          <FiSun className="text-6xl mb-6 animate-slowSpin" />
          <h2 className="font-display text-5xl font-bold leading-tight">
            Join the sun-kissed crew.
          </h2>
          <p className="mt-4 text-white/85 text-lg">
            Get curated picks, member-only sales and a sun-tracked profile to
            shop your way.
          </p>
        </div>
      </div>
    </div>
  )
}

function Field({ label, icon: Icon, value, onChange, type = 'text', placeholder, required }) {
  return (
    <label className="block">
      <span className="text-sm font-bold uppercase tracking-wider text-neutral/70">
        {label}
      </span>
      <div className="relative mt-1">
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-coral-500" />
        <input
          type={type}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-12 pr-4 h-12 rounded-2xl bg-base-200/60 border border-transparent focus:bg-white focus:border-coral-500 focus:ring-2 focus:ring-coral-500/20 focus:outline-none"
        />
      </div>
    </label>
  )
}

function prettifyAuthError(err) {
  const code = err?.code || ''
  switch (code) {
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
    case 'auth/unauthorized-domain':
      return 'This domain is not authorized in your Firebase project. Add it under Authentication → Settings → Authorized domains.'
    default:
      return err?.message || 'Something went wrong. Please try again.'
  }
}
