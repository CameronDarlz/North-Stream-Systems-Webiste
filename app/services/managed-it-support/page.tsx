import type { Metadata } from 'next'
import Link from 'next/link'
import { MonitorCheck, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Managed IT Support for UK Businesses | North Stream Systems',
  description: 'Proactive managed IT support with SLA-backed response times for North Wales SMBs. Remote and on-site helpdesk, 24/7 monitoring, and a dedicated engineer who knows your business.',
  alternates: { canonical: 'https://northstreamsystems.com/services/managed-it-support' },
  openGraph: {
    title: 'Managed IT Support for UK Businesses | North Stream Systems',
    description: 'Proactive managed IT support with SLA-backed response times for North Wales SMBs.',
    url: 'https://northstreamsystems.com/services/managed-it-support',
    siteName: 'North Stream Systems',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: 'https://northstreamsystems.com/photos/North Stream Systems Logo Full.png', width: 1200, height: 630, alt: 'Managed IT Support | North Stream Systems' }],
  },
  twitter: { card: 'summary_large_image', title: 'Managed IT Support | North Stream Systems', description: 'Proactive managed IT support with SLA-backed response times.' },
}

const bullets = [
  '24/7 system monitoring and alerting',
  'Remote helpdesk with <1 hour response SLA',
  'On-site engineer visits when needed',
  'Proactive patching and maintenance',
  'Antivirus and endpoint protection management',
  'User onboarding and offboarding',
  'Monthly health reports',
  'Dedicated account engineer',
]

const faqs = [
  {
    q: 'What does managed IT support actually include?',
    a: "Managed IT support means we take responsibility for the day-to-day running of your technology. That covers proactive monitoring of your systems around the clock, a staffed helpdesk your team can call when something goes wrong, regular patching and maintenance to keep everything secure, and a dedicated engineer who gets to know your business over time. It's not just break-fix — it's ongoing, proactive care.",
  },
  {
    q: 'How quickly will you respond when something breaks?',
    a: "For critical issues — systems down, no connectivity, security incidents — we target a response within one hour. For standard issues, we'll typically be with you within four business hours. Every issue is triaged when it comes in, so urgent problems always get prioritised. You'll always be kept updated on progress so you're never left wondering.",
  },
  {
    q: 'Do I need to sign a long-term contract?',
    a: "We don't believe in holding clients to contracts they're not happy with. We offer flexible arrangements and will always talk you through the terms before anything is signed. Our goal is to earn your business month after month by doing a great job — not by making it difficult to leave.",
  },
  {
    q: 'Can you support a team that works remotely or across multiple sites?',
    a: "Absolutely. We support businesses with fully remote teams, hybrid setups, and multiple physical locations. Remote support is a core part of what we do — most issues can be resolved without anyone needing to come on-site. Where on-site work is required, we'll arrange it. Geography isn't a barrier.",
  },
]

export default function ManagedITSupportPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center">
              <MonitorCheck size={32} className="text-light-accent" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Managed IT Support That Actually Supports You</h1>
          <p className="text-xl text-light-accent max-w-2xl">Your dedicated IT team — without the overhead of hiring one. Proactive, responsive, and always in your corner.</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-5 text-[#374151] leading-relaxed">
              <p>
                Most businesses don&apos;t need a full-time IT department — they need the right IT support at the right time. Managed IT support gives you access to experienced engineers, proactive system management, and a reliable helpdesk, all without the cost and complexity of hiring in-house.
              </p>
              <p>
                The difference between managed IT support and traditional break-fix IT is significant. With break-fix, you only hear from your provider when something has already gone wrong. With a managed service, we&apos;re monitoring your systems around the clock — identifying potential problems before they become real ones, applying patches, checking backups, and keeping everything running smoothly in the background.
              </p>
              <p>
                At North Stream Systems, we assign a dedicated account engineer to every client. That means someone who knows your systems, your team, and your business gets to work on your issues — not a random tier-one agent reading from a script. It&apos;s a more personal, more effective approach, and it&apos;s one of the things our clients consistently tell us makes a real difference.
              </p>
              <p>
                Whether you&apos;re a team of five or fifty, we scale our support to fit. You get a fixed monthly cost, predictable service, and the peace of mind that comes from knowing someone is looking after your IT so you don&apos;t have to.
              </p>
            </div>
            {/* What's Included */}
            <div className="bg-surface rounded-2xl p-8">
              <h2 className="text-xl font-bold text-primary mb-6">What&apos;s Included</h2>
              <ul className="space-y-3">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-accent mt-0.5 shrink-0" />
                    <span className="text-[#374151]">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-10">Common Questions</h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="text-lg font-semibold text-primary mb-2">{faq.q}</h3>
                <p className="text-[#374151] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(f => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": { "@type": "Answer", "text": f.a }
              }))
            }) }}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Ready to get started?</h2>
          <p className="text-[#6B7280] mb-8">Let&apos;s talk about what this service could look like for your business.</p>
          <Link href="/contact" className="inline-flex items-center bg-primary hover:bg-[#152A45] text-white font-semibold px-8 py-4 rounded-lg transition-colors">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
