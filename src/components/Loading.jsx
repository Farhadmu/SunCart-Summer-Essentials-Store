export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
      <div className="relative">
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-coral-500 via-accent to-coral-400 animate-slowSpin" />
        <div className="absolute inset-2 rounded-full bg-base-100" />
        <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-accent to-coral-500" />
      </div>
      <p className="font-display text-lg text-coral-600">Loading SunCart…</p>
    </div>
  )
}
