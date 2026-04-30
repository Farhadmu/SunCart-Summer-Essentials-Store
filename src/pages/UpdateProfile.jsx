import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiUser, FiImage, FiArrowLeft } from 'react-icons/fi'
import toast from 'react-hot-toast'
import { useAuth } from '../context/AuthContext.jsx'

export default function UpdateProfile() {
  const { user, updateUserProfile } = useAuth()
  const navigate = useNavigate()
  const [name, setName] = useState(user?.displayName || '')
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '')
  const [busy, setBusy] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setBusy(true)
    try {
      await updateUserProfile(name, photoURL)
      toast.success('Profile updated')
      navigate('/my-profile')
    } catch (err) {
      toast.error(err.message || 'Could not update profile')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-4 lg:px-8 py-12">
      <Link
        to="/my-profile"
        className="inline-flex items-center gap-2 text-sm font-bold text-coral-600 hover:text-coral-700 mb-6"
      >
        <FiArrowLeft /> Back to profile
      </Link>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Live preview */}
        <div className="rounded-3xl overflow-hidden bg-white shadow-lg border border-coral-400/10">
          <div className="h-32 bg-gradient-to-r from-coral-500 to-accent" />
          <div className="px-8 pb-8 -mt-14">
            <div className="w-28 h-28 rounded-full ring-4 ring-white overflow-hidden bg-base-200">
              {photoURL ? (
                <img
                  src={photoURL}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-coral-500 text-white text-4xl font-bold">
                  {(name || user?.email || 'U')[0].toUpperCase()}
                </div>
              )}
            </div>
            <h2 className="font-display text-3xl font-bold mt-4">
              {name || 'Sunshine Member'}
            </h2>
            <p className="text-neutral/60">{user?.email}</p>
            <p className="mt-4 text-sm text-neutral/60">
              This is how your profile will look after saving.
            </p>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-white shadow-lg border border-coral-400/10 p-8"
        >
          <h1 className="font-display text-3xl font-bold">Update Information</h1>
          <p className="text-neutral/60 mt-1">
            Change your display name and avatar.
          </p>

          <div className="mt-6 space-y-4">
            <label className="block">
              <span className="text-sm font-bold uppercase tracking-wider text-neutral/70">
                Full Name
              </span>
              <div className="relative mt-1">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-coral-500" />
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-12 pr-4 h-12 rounded-2xl bg-base-200/60 border border-transparent focus:bg-white focus:border-coral-500 focus:ring-2 focus:ring-coral-500/20 focus:outline-none"
                  placeholder="Your name"
                />
              </div>
            </label>

            <label className="block">
              <span className="text-sm font-bold uppercase tracking-wider text-neutral/70">
                Photo URL
              </span>
              <div className="relative mt-1">
                <FiImage className="absolute left-4 top-1/2 -translate-y-1/2 text-coral-500" />
                <input
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  className="w-full pl-12 pr-4 h-12 rounded-2xl bg-base-200/60 border border-transparent focus:bg-white focus:border-coral-500 focus:ring-2 focus:ring-coral-500/20 focus:outline-none"
                  placeholder="https://…"
                />
              </div>
            </label>
          </div>

          <button
            type="submit"
            disabled={busy}
            className="mt-8 w-full h-12 rounded-2xl bg-coral-500 hover:bg-coral-600 disabled:opacity-60 transition text-white font-bold shadow-lg shadow-coral-500/30"
          >
            {busy ? 'Saving…' : 'Save changes'}
          </button>
        </form>
      </div>
    </div>
  )
}
