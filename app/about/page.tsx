import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, CheckCircle, Handshake, Lock, User } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | North Wales IT Support Company | North Stream Systems',
  description: 'Based in Llandudno, North Stream Systems was built to give UK small businesses proactive, expert IT support without the jargon or surprise bills. Meet the team.',
  alternates: { canonical: 'https://northstreamsystems.com/about' },
  openGraph: {
    title: 'About Us | North Wales IT Support Company | North Stream Systems',
    description: 'Based in Llandudno, North Stream Systems was built to give UK small businesses proactive, expert IT support without the jargon or surprise bills.',
    url: 'https://northstreamsystems.com/about',
    siteName: 'North Stream Systems',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: 'https://northstreamsystems.com/photos/North Stream Systems Logo Full.png', width: 1200, height: 630, alt: 'North Stream Systems — About Us' }],
  },
  twitter: { card: 'summary_large_image', title: 'About Us | North Stream Systems', description: 'Based in Llandudno, North Stream Systems was built to give UK small businesses proactive IT support.' },
}

const values = [
  {
    icon: Shield,
    title: 'Transparency',
    description:
      "No hidden costs, no tech-speak smoke screens. You'll always know exactly what you're paying for and why.",
  },
  {
    icon: CheckCircle,
    title: 'Reliability',
    description:
      "When something goes wrong, we're already on it. Consistent, dependable support you can build your business around.",
  },
  {
    icon: Handshake,
    title: 'Partnership',
    description:
      "We invest time in understanding your business. Your IT strategy should serve your business goals — not the other way around.",
  },
  {
    icon: Lock,
    title: 'Security-first',
    description:
      "Cyber threats are real and growing. We design every solution with security baked in, not bolted on.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-surface pt-16 pb-20 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            About North Stream Systems
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            We&apos;re a managed IT provider based in North Wales, built with one purpose: to give UK businesses
            the kind of IT support they actually deserve.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-8">Built to do things differently.</h2>
          <div className="space-y-6 text-muted leading-relaxed text-[1.05rem]">
            <p>
              North Stream Systems was born out of a frustration that too many UK SMBs will recognise.
              Businesses were getting slow response times, jargon-filled communication, surprise bills,
              and IT providers who didn&apos;t really understand — or care about — what their clients
              actually needed. IT was supposed to be an enabler, not a source of stress.
            </p>
            <p>
              We founded NSS on a simple belief: businesses deserve IT support that&apos;s proactive,
              transparent, and genuinely partnered with their goals. Not just fixing problems when
              they appear — but preventing them in the first place, and building infrastructure that
              helps you grow. We wanted to create the kind of IT company we&apos;d actually want to work with.
            </p>
            <p>
              Based in North Wales, we work with businesses across the region and beyond. We keep things
              local and personal where possible — because we think that matters. When you call us, you
              reach someone who knows your name, knows your setup, and actually cares about getting
              things right for you.
            </p>
            <p>
              Going forward, our commitment is simple: to be the IT partner that SMBs actually want,
              not just tolerate. We&apos;re not interested in locking you into contracts you don&apos;t
              understand or billing you for hours you can&apos;t account for. We&apos;re interested in
              building something long-term — a relationship where you feel fully supported and confident
              in your technology.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-primary mb-4">What we stand for.</h2>
            <p className="text-muted text-lg max-w-xl mx-auto">
              Our values aren&apos;t a wall poster — they&apos;re how we operate every day.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="bg-white rounded-xl p-7 border border-gray-100 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center mb-4">
                    <Icon size={22} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{value.title}</h3>
                  <p className="text-muted leading-relaxed text-sm">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">The people behind the screens.</h2>
            <p className="text-muted text-lg">Real people. Real accountability.</p>
          </div>

          <div className="flex justify-center mb-10">
            <div className="bg-surface rounded-2xl p-8 border border-gray-100 shadow-sm max-w-sm w-full text-center">
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-5">
                <User size={40} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-1">Cameron</h3>
              <p className="text-accent text-sm font-medium mb-4">Founder &amp; Lead Engineer</p>
              <p className="text-muted text-sm leading-relaxed">
                With years of experience delivering IT solutions for businesses across the UK,
                Cameron founded NSS to offer the kind of IT support he always believed was possible —
                personal, proactive, and genuinely effective. He leads every client relationship
                from the front and gets stuck into the technical work himself.
              </p>
            </div>
          </div>

          <div className="text-center border-t border-gray-100 pt-8">
            <p className="text-muted text-sm">
              We&apos;re a growing team. Interested in joining?{' '}
              <a
                href="mailto:office@northstreamsystems.com"
                className="text-accent font-medium hover:underline"
              >
                Get in touch.
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to work with a team that actually cares?
          </h2>
          <p className="text-light-accent mb-8">Let&apos;s start with a conversation.</p>
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
