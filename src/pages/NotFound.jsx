import { Link } from 'react-router-dom'
import { FiSun, FiArrowLeft } from 'react-icons/fi'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="relative w-32 h-32 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-coral-500 animate-slowSpin" />
          <FiSun className="absolute inset-0 m-auto text-white text-5xl" />
        </div>
        <p className="font-display text-7xl font-bold shine-text leading-none">
          404
        </p>
        <h1 className="font-display text-3xl font-bold mt-3">
          This beach is empty.
        </h1>
        <p className="text-neutral/60 mt-3">
          The page you're looking for has drifted out to sea. Let's get you
          back to the shore.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 bg-coral-500 hover:bg-coral-600 transition px-7 py-3 rounded-full text-white font-bold shadow-lg"
        >
          <FiArrowLeft /> Back to home
        </Link>
      </div>
    </div>
  )
}
