import { Link } from 'react-router-dom'
import { FiEdit2, FiMail, FiUser, FiCalendar, FiClock, FiShield } from 'react-icons/fi'
import { useAuth } from '../context/AuthContext.jsx'

const fmt = (ts) => {
  if (!ts) return '—'
  try {
    return new Date(ts).toLocaleString(undefined, {
      dateStyle: 'medium',
      timeStyle: 'short',
    })
  } catch {
    return '—'
  }
}

export default function MyProfile() {
  const { user } = useAuth()
  if (!user) return null

  const provider = user.providerData?.[0]?.providerId || 'password'
  const providerLabel = {
    password: 'Email & Password',
    'google.com': 'Google',
  }[provider] || provider

  return (
    <div className="max-w-5xl mx-auto px-4 lg:px-8 py-12">
      <div className="rounded-3xl overflow-hidden bg-white shadow-xl border border-coral-400/10">
        {/* Banner */}
        <div className="relative h-44 bg-gradient-to-r from-coral-500 via-coral-400 to-accent">
          <div className="absolute -bottom-16 left-8 flex items-end gap-5">
            <div className="w-32 h-32 rounded-full ring-4 ring-white overflow-hidden bg-base-200">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName || 'User'}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-coral-500 text-white text-5xl font-bold">
                  {(user.displayName || user.email || 'U')[0].toUpperCase()}
                </div>
              )}
            </div>
          </div>
          <Link
            to="/my-profile/update"
            className="absolute top-4 right-4 btn btn-sm bg-white/90 hover:bg-white text-coral-600 border-none"
          >
            <FiEdit2 /> Edit profile
          </Link>
        </div>

        <div className="pt-20 pb-10 px-8">
          <h1 className="font-display text-4xl font-bold">
            {user.displayName || 'Sunshine Member'}
          </h1>
          <p className="text-neutral/60">{user.email}</p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <Info Icon={FiUser} label="Display name" value={user.displayName || '—'} />
            <Info Icon={FiMail} label="Email" value={user.email || '—'} />
            <Info
              Icon={FiShield}
              label="Sign-in method"
              value={providerLabel}
            />
            <Info
              Icon={FiCalendar}
              label="Joined"
              value={fmt(user.metadata?.creationTime)}
            />
            <Info
              Icon={FiClock}
              label="Last active"
              value={fmt(user.metadata?.lastSignInTime)}
            />
            <Info
              Icon={FiShield}
              label="Email verified"
              value={user.emailVerified ? 'Yes' : 'No'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function Info({ Icon, label, value }) {
  return (
    <div className="rounded-2xl bg-sand-100/60 p-5 flex items-start gap-3">
      <div className="w-10 h-10 rounded-xl bg-coral-500/15 text-coral-600 flex items-center justify-center shrink-0">
        <Icon />
      </div>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-widest font-bold text-neutral/55">
          {label}
        </p>
        <p className="font-semibold mt-1 break-words">{value}</p>
      </div>
    </div>
  )
}
