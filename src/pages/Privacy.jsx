import { FiShield } from 'react-icons/fi'

export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 lg:px-8 py-16">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-coral-500/15 text-coral-600 flex items-center justify-center">
          <FiShield size={22} />
        </div>
        <h1 className="font-display text-4xl font-bold">Privacy Policy</h1>
      </div>
      <p className="text-neutral/60 mb-8">
        Last updated: {new Date().toLocaleDateString()}
      </p>
      <div className="prose max-w-none text-neutral/80 space-y-5">
        <p>
          At SunCart, we respect your privacy and are committed to protecting
          your personal information. This policy explains what we collect and
          how we use it.
        </p>
        <h2 className="font-display text-2xl font-bold mt-8">
          Information We Collect
        </h2>
        <p>
          When you create an account, we collect your name, email, profile
          photo (optional) and authentication identifiers from Firebase. We do
          not store your password — Firebase handles that securely.
        </p>
        <h2 className="font-display text-2xl font-bold mt-8">
          How We Use It
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To create and manage your SunCart account.</li>
          <li>To personalise your shopping experience.</li>
          <li>To send order updates and important account notifications.</li>
        </ul>
        <h2 className="font-display text-2xl font-bold mt-8">Contact</h2>
        <p>
          For privacy questions, email{' '}
          <a
            href="mailto:mi0223937@gmail.com"
            className="text-coral-600 font-bold hover:text-coral-700"
          >
            mi0223937@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  )
}
