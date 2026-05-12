import type { Metadata } from 'next'
import Link from 'next/link'
import { PenLine } from 'lucide-react'

export const metadata: Metadata = {
  title: 'IT Insights & Guides | North Stream Systems Blog',
  description: 'Practical IT advice, cybersecurity guidance, and technology updates for UK small businesses — from the North Stream Systems team.',
  alternates: { canonical: 'https://northstreamsystems.com/blog' },
  openGraph: {
    title: 'IT Insights & Guides | North Stream Systems Blog',
    description: 'Practical IT advice for UK small businesses from North Stream Systems.',
    url: 'https://northstreamsystems.com/blog',
    siteName: 'North Stream Systems',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: 'https://northstreamsystems.com/photos/North Stream Systems Logo Full.png', width: 1200, height: 630, alt: 'North Stream Systems Blog' }],
  },
  twitter: { card: 'summary_large_image', title: 'NSS Blog', description: 'Practical IT advice for UK small businesses.' },
}

export default function BlogPage() {
  return (
    <div>
      <section className="bg-primary text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">IT Insights & Guides</h1>
          <p className="text-xl text-light-accent max-w-2xl">
            Practical technology advice for UK businesses — straight from the North Stream Systems team.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-surface flex items-center justify-center mx-auto mb-6">
            <PenLine size={28} style={{ color: '#2E86C1' }} />
          </div>
          <h2 className="text-2xl font-bold text-primary mb-4">Articles coming soon</h2>
          <p className="text-[#374151] leading-relaxed mb-8 max-w-lg mx-auto">
            Our first articles are on their way. In the meantime, if you have a question about IT for your business, we&apos;re always happy to chat.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-primary hover:bg-[#152A45] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
