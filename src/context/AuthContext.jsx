import { createContext, useContext, useEffect, useState } from 'react'
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getRedirectResult,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { auth, isFirebaseConfigured } from '../firebase/firebase.config.js'

const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })

// Detect if the app is loaded inside an iframe (Replit canvas, embedded preview, etc.).
// Inside iframes, Google sign-in popups are blocked, so we must use redirect.
const isInIframe = () => {
  try {
    return window.self !== window.top
  } catch {
    return true
  }
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!isFirebaseConfigured || !auth) {
      setLoading(false)
      return
    }
    // Complete any pending redirect-based Google sign-in.
    getRedirectResult(auth).catch(() => {})
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => unsub()
  }, [])

  const requireFirebase = () => {
    if (!isFirebaseConfigured || !auth) {
      throw new Error(
        'Firebase is not configured. Add the VITE_FIREBASE_* environment variables.',
      )
    }
  }

  const register = async (email, password) => {
    requireFirebase()
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const login = async (email, password) => {
    requireFirebase()
    return signInWithEmailAndPassword(auth, email, password)
  }

  const loginWithGoogle = async () => {
    requireFirebase()
    // Inside iframes (e.g. the Replit canvas preview) Google blocks popups,
    // so fall back to a top-level redirect that always works.
    if (isInIframe()) {
      await signInWithRedirect(auth, googleProvider)
      return null
    }
    try {
      return await signInWithPopup(auth, googleProvider)
    } catch (err) {
      const code = err?.code || ''
      if (
        code === 'auth/popup-blocked' ||
        code === 'auth/popup-closed-by-user' ||
        code === 'auth/cancelled-popup-request' ||
        code === 'auth/operation-not-supported-in-this-environment'
      ) {
        await signInWithRedirect(auth, googleProvider)
        return null
      }
      throw err
    }
  }

  const logout = async () => {
    requireFirebase()
    return signOut(auth)
  }

  const updateUserProfile = async (displayName, photoURL) => {
    requireFirebase()
    if (!auth.currentUser) throw new Error('No active user')
    await updateProfile(auth.currentUser, { displayName, photoURL })
    setUser({ ...auth.currentUser })
  }

  const resetPassword = async (email) => {
    requireFirebase()
    return sendPasswordResetEmail(auth, email)
  }

  const value = {
    user,
    loading,
    isFirebaseConfigured,
    register,
    login,
    loginWithGoogle,
    logout,
    updateUserProfile,
    resetPassword,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
