import type { Metadata } from 'next'
import Link from 'next/link'
import { Wrench } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Products',
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-surface flex items-start justify-center pt-[20vh] pb-24 px-4">
      <div className="text-center max-w-lg mx-auto">
        <div className="w-20 h-20 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center mx-auto mb-8">
          <Wrench size={36} className="text-accent" />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3">
          Pricing &amp; Packages
        </h1>
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="h-0.5 w-12 bg-gray-200 rounded" />
          <span className="relative inline-block text-accent font-semibold text-lg animate-pulse">
            Coming Soon
          </span>
          <span className="h-0.5 w-12 bg-gray-200 rounded" />
        </div>

        <p className="text-muted leading-relaxed mb-4">
          We&apos;re putting the finishing touches on our packages and pricing. We want to make sure
          everything is clear, fair, and genuinely tailored to how UK SMBs actually work — so we&apos;re
          taking the time to get it right.
        </p>
        <p className="text-muted leading-relaxed mb-10">
          In the meantime, the best way to find out what&apos;s right for your business is to have a
          conversation. We&apos;ll listen to what you need and give you a straight answer on what it
          will cost.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center bg-primary text-white font-semibold px-7 py-3 rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
        >
          Talk to Us in the Meantime
        </Link>
      </div>
    </div>
  )
}
