import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import { useAuth } from '../context/AuthContext.jsx'
import Loading from './Loading.jsx'

export default function Layout() {
  const { loading, isFirebaseConfigured } = useAuth()

  return (
    <div className="min-h-screen flex flex-col bg-base-100">
      {!isFirebaseConfigured && (
        <div className="bg-warning/90 text-warning-content text-sm md:text-base px-4 py-3 text-center">
          <strong>Firebase is not configured yet.</strong> Add your{' '}
          <code className="px-1 rounded bg-black/10">VITE_FIREBASE_*</code>{' '}
          environment variables in your hosting dashboard (Netlify / Vercel)
          and redeploy. Until then, login &amp; register will not work.
        </div>
      )}
      <Navbar />
      <main className="flex-1">{loading ? <Loading /> : <Outlet />}</main>
      <Footer />
    </div>
  )
}
