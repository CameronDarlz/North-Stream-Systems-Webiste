import type { Metadata } from 'next'
import Link from 'next/link'
import { Lightbulb, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'IT Consultancy & Project Delivery | North Stream Systems',
  description: 'Senior IT expertise without the full-time hire. North Stream Systems provides technology strategy, vendor selection, and project delivery for UK businesses that need expert input.',
  alternates: { canonical: 'https://northstreamsystems.com/services/it-consultancy' },
  openGraph: {
    title: 'IT Consultancy & Project Delivery | North Stream Systems',
    description: 'Senior IT expertise without the full-time hire — technology strategy, vendor selection, and project delivery.',
    url: 'https://northstreamsystems.com/services/it-consultancy',
    siteName: 'North Stream Systems',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: 'https://northstreamsystems.com/photos/North Stream Systems Logo Full.png', width: 1200, height: 630, alt: 'IT Consultancy | North Stream Systems' }],
  },
  twitter: { card: 'summary_large_image', title: 'IT Consultancy | North Stream Systems', description: 'Senior IT expertise for UK businesses.' },
}

const bullets = [
  'Technology roadmap and strategy development',
  'Vendor selection and procurement support',
  'IT budget planning and cost analysis',
  'New office / site IT setup',
  'System integration and workflow automation',
  'Third-party IT audit and review',
  'Project management and delivery oversight',
  'Virtual CTO advisory service',
]

const faqs = [
  {
    q: "What's the difference between consultancy and managed IT support?",
    a: "Managed IT support is ongoing — it covers the day-to-day running of your technology, your helpdesk, and your infrastructure. IT consultancy is project-based or advisory in nature. You might engage us for a specific project — a new office setup, a technology review, a software selection process — or on an ongoing basis as a virtual CTO who attends leadership meetings and provides strategic input. Many of our managed clients also draw on our consultancy capability when they need it.",
  },
  {
    q: 'Can you review our existing IT setup and tell us where we stand?',
    a: "Absolutely. An IT audit is one of the most valuable things a business can commission, especially if you&apos;ve never had a proper review done. We assess your infrastructure, your security posture, your software licensing, your backup and recovery arrangements, and your support processes — then give you a clear, plain-English report on what&apos;s working, what&apos;s not, and what we&apos;d recommend changing.",
  },
  {
    q: "We're moving office — can you handle the IT side of that?",
    a: "Yes. Office moves involve a lot of IT considerations that are easy to underestimate: connectivity lead times, server and hardware relocation, network design for the new space, phone systems, structured cabling, and making sure everything is working from day one in the new location. We&apos;ve managed office IT moves for businesses of various sizes and know how to plan them properly so there are no surprises on moving day.",
  },
  {
    q: 'Do you work with businesses that already have an internal IT person?',
    a: "Yes, and it&apos;s a setup we work well in. Internal IT staff are often brilliant at day-to-day support but stretched thin when it comes to strategic projects, specialist expertise, or simply having enough hours in the day. We work alongside internal teams as an extension of their capability — bringing in specialist knowledge where needed, taking on project work, or providing a sounding board for decisions. We&apos;re not here to replace internal IT — we&apos;re here to complement it.",
  },
]

export default function ITConsultancyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center">
              <Lightbulb size={32} className="text-light-accent" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Senior IT Thinking, Without the Senior IT Hire</h1>
          <p className="text-xl text-light-accent max-w-2xl">Expert guidance, honest advice, and project delivery that actually gets done — on time and on budget.</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-5 text-[#374151] leading-relaxed">
              <p>
                Technology decisions are business decisions. Whether you&apos;re choosing between cloud platforms, planning a new office, evaluating a piece of software, or trying to work out whether your IT costs are reasonable — you need someone in your corner who understands the technology and can translate it into business terms. That&apos;s what IT consultancy is.
              </p>
              <p>
                Many small businesses don&apos;t have the budget to hire a senior IT leader full-time. But that doesn&apos;t mean they don&apos;t need that level of thinking. Our virtual CTO service gives you access to strategic IT input — attending leadership meetings, contributing to business planning, advising on technology investments — at a fraction of the cost of a full-time hire.
              </p>
              <p>
                We also deliver projects. If you need a new IT system implemented, a platform migrated, a new office kitted out, or a complex integration built — we manage it from brief to completion. We keep you informed throughout, we stick to agreed timelines, and we measure success by whether the outcome actually solves the problem it was meant to solve.
              </p>
              <p>
                Our advice is always independent. We don&apos;t have referral arrangements with vendors that influence our recommendations. When we suggest a product or service, it&apos;s because it&apos;s genuinely the right fit for your business — not because it earns us a commission.
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
