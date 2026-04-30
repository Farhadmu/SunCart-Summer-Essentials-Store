import { FiFileText } from 'react-icons/fi'

export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 lg:px-8 py-16">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-coral-500/15 text-coral-600 flex items-center justify-center">
          <FiFileText size={22} />
        </div>
        <h1 className="font-display text-4xl font-bold">Terms of Service</h1>
      </div>
      <p className="text-neutral/60 mb-8">
        Last updated: {new Date().toLocaleDateString()}
      </p>
      <div className="prose max-w-none text-neutral/80 space-y-5">
        <p>
          Welcome to SunCart. By using this site you agree to the following
          terms.
        </p>
        <h2 className="font-display text-2xl font-bold mt-8">Accounts</h2>
        <p>
          You are responsible for keeping your account credentials safe. You
          must be at least 13 years old to register.
        </p>
        <h2 className="font-display text-2xl font-bold mt-8">Orders</h2>
        <p>
          All orders are subject to availability. Prices are listed in USD and
          may change without notice. We reserve the right to cancel orders at
          any time.
        </p>
        <h2 className="font-display text-2xl font-bold mt-8">Returns</h2>
        <p>
          Unworn items can be returned within 14 days of delivery. Skincare
          and intimates cannot be returned once opened.
        </p>
        <h2 className="font-display text-2xl font-bold mt-8">Contact</h2>
        <p>
          Questions? Email{' '}
          <a
            href="mailto:mi0223937@gmail.com"
            className="text-coral-600 font-bold hover:text-coral-700"
          >
            mi0223937@gmail.com
          </a>{' '}
          or call +880 1945-321285.
        </p>
      </div>
    </div>
  )
}
