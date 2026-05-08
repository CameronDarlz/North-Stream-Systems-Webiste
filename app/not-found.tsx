import Link from 'next/link'
import { Compass } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-start justify-center pt-[15vh] pb-24 px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="w-20 h-20 rounded-2xl bg-surface border border-gray-200 flex items-center justify-center mx-auto mb-6">
          <Compass size={36} className="text-accent" />
        </div>
        <p className="text-7xl font-bold text-primary mb-4">404</p>
        <h1 className="text-2xl font-bold text-primary mb-3">Page Not Found</h1>
        <p className="text-muted leading-relaxed mb-8">
          This page doesn&apos;t seem to exist. Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="inline-flex items-center bg-primary text-white font-semibold px-7 py-3 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
