import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Why Choose North Stream Systems | Llandudno IT Support',
  description: 'SLA-backed response times, transparent fixed pricing, and a security-first approach. See why North Wales businesses choose North Stream Systems as their IT partner.',
  alternates: { canonical: 'https://northstreamsystems.com/why-us' },
  openGraph: {
    title: 'Why Choose North Stream Systems | Llandudno IT Support',
    description: 'SLA-backed response times, transparent fixed pricing, and a security-first approach.',
    url: 'https://northstreamsystems.com/why-us',
    siteName: 'North Stream Systems',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: 'https://northstreamsystems.com/photos/North Stream Systems Logo Full.png', width: 1200, height: 630, alt: 'Why North Stream Systems' }],
  },
  twitter: { card: 'summary_large_image', title: 'Why North Stream Systems?', description: 'SLA-backed, transparent, security-first IT support.' },
}

const comparisonRows = [
  {
    feature: 'Response time',
    others: 'Best efforts',
    nss: 'SLA-backed, <1 hour',
  },
  {
    feature: 'Communication',
    others: 'Jargon-heavy tickets',
    nss: 'Plain English, proactive updates',
  },
  {
    feature: 'Security',
    others: 'Reactive patching',
    nss: 'Security-first by design',
  },
  {
    feature: 'Pricing',
    others: 'Surprise invoices',
    nss: 'Transparent, fixed monthly',
  },
  {
    feature: 'Relationship',
    others: 'Ticket number',
    nss: 'Named account team',
  },
  {
    feature: 'Availability',
    others: 'Business hours',
    nss: '24/7 monitoring',
  },
]

const trustBadges = [
  'Cyber Essentials',
  'Microsoft Partner',
  'ISO 27001 Aligned',
  'ICO Registered',
]

export default function WhyUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface pt-16 pb-20 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            Our Difference
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Why North Stream Systems?
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            There are plenty of IT providers out there. Here&apos;s why businesses choose us — and stay with us.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-8">Most IT support isn&apos;t really support.</h2>
          <div className="space-y-6 text-muted leading-relaxed text-[1.05rem]">
            <p>
              If you&apos;ve had an IT provider before, you&apos;ll probably recognise this: you log a ticket,
              and then you wait. You chase. You get a response two days later asking for more information
              you already provided. You get passed between engineers who each need to be brought up to speed.
              And when the invoice arrives, there are hours on it you can&apos;t quite account for.
            </p>
            <p>
              The sad reality is that most IT support is reactive by nature — providers wait for something
              to break, then fix it. You only hear from your account manager when they want to sell you
              something or renew your contract. Nobody is proactively looking out for your business.
              Nobody is asking whether your current setup will scale with you, or whether your backups
              are actually working, or whether that software you&apos;re all using has a critical vulnerability.
            </p>
            <p>
              And the communication? Often impenetrable. Long technical write-ups full of acronyms,
              with no real explanation of what the risk is to you as a business owner or what you
              should actually do about it. You end up feeling like a passive bystander in decisions
              that directly affect your operations.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">The NSS difference.</h2>
            <p className="text-muted text-lg">Side by side. No spin.</p>
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-primary">
                  <th className="text-left text-white text-sm font-semibold px-6 py-4 w-1/3">
                    Feature
                  </th>
                  <th className="text-left text-white/60 text-sm font-semibold px-6 py-4 w-1/3">
                    Others
                  </th>
                  <th className="text-left text-light-accent text-sm font-semibold px-6 py-4 w-1/3">
                    North Stream Systems
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="hover:bg-surface transition-colors">
                    <td className="text-sm font-medium text-nss-text px-6 py-4">{row.feature}</td>
                    <td className="text-sm text-muted px-6 py-4">{row.others}</td>
                    <td className="text-sm px-6 py-4">
                      <div className="flex items-center gap-2 text-accent font-medium">
                        <Check size={15} className="flex-shrink-0" />
                        {row.nss}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Case Studies placeholder */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Don&apos;t just take our word for it.
            </h2>
            <p className="text-muted text-lg">Real results for real businesses.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Case study 1 */}
            <div className="bg-surface rounded-xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="h-40 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-sm font-medium">Case Study Image</span>
              </div>
              <div className="p-6">
                <span className="text-xs text-accent font-semibold uppercase tracking-wider">
                  Professional Services
                </span>
                <h3 className="text-lg font-semibold text-primary mt-2 mb-3">
                  Reducing IT downtime by 80% for a North Wales consultancy
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  A growing consultancy firm was losing hours each week to IT issues their previous
                  provider was slow to resolve. After switching to NSS, proactive monitoring and a
                  dedicated account team reduced downtime dramatically within the first quarter.
                </p>
              </div>
            </div>

            {/* Case study 2 */}
            <div className="bg-surface rounded-xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="h-40 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-sm font-medium">Case Study Image</span>
              </div>
              <div className="p-6">
                <span className="text-xs text-accent font-semibold uppercase tracking-wider">
                  Retail &amp; E-commerce
                </span>
                <h3 className="text-lg font-semibold text-primary mt-2 mb-3">
                  Migrating a multi-site retailer to Microsoft 365 with zero disruption
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  A regional retailer with three locations needed to modernise their IT infrastructure
                  without disrupting daily operations. NSS planned and executed a full Microsoft 365
                  migration over a single weekend, with every team member operational by Monday morning.
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-muted text-sm italic">
            Case studies in progress — check back soon.
          </p>
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-16 bg-surface border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-semibold text-primary mb-8">Accreditations &amp; Compliance</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {trustBadges.map((badge) => (
              <div
                key={badge}
                className="px-6 py-3 bg-white border border-dashed border-gray-300 rounded-xl text-sm font-medium text-muted opacity-60"
              >
                {badge}
              </div>
            ))}
          </div>
          <p className="text-muted text-sm italic">Accreditation programmes in progress.</p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Seen enough? Let&apos;s talk.
          </h2>
          <p className="text-light-accent mb-8">
            We&apos;d love to show you what a genuinely good IT partnership looks like.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-primary font-semibold px-7 py-3 rounded-lg hover:bg-light-accent transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
