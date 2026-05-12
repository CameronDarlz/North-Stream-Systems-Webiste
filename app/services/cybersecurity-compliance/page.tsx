import type { Metadata } from 'next'
import Link from 'next/link'
import { ShieldCheck, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cybersecurity & Compliance for UK SMBs | North Stream Systems',
  description: 'Protect your business with layered cybersecurity — endpoint protection, email security, Cyber Essentials support, and GDPR-aligned controls. North Stream Systems, based in Llandudno.',
  alternates: { canonical: 'https://northstreamsystems.com/services/cybersecurity-compliance' },
  openGraph: {
    title: 'Cybersecurity & Compliance for UK SMBs | North Stream Systems',
    description: 'Protect your business with layered cybersecurity — endpoint protection, email security, Cyber Essentials support, and GDPR-aligned controls.',
    url: 'https://northstreamsystems.com/services/cybersecurity-compliance',
    siteName: 'North Stream Systems',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: 'https://northstreamsystems.com/photos/North Stream Systems Logo Full.png', width: 1200, height: 630, alt: 'Cybersecurity & Compliance | North Stream Systems' }],
  },
  twitter: { card: 'summary_large_image', title: 'Cybersecurity & Compliance | North Stream Systems', description: 'Layered defences and compliance support for UK SMBs.' },
}

const bullets = [
  'Endpoint detection and response (EDR)',
  'Email filtering and anti-phishing controls',
  'Multi-factor authentication implementation',
  'Security awareness training for staff',
  'Vulnerability scanning and patching',
  'Cyber Essentials certification support',
  'DMARC, DKIM, and SPF configuration',
  'Incident response planning',
]

const faqs = [
  {
    q: 'Do small businesses really need cybersecurity?',
    a: "Yes — and the statistics are sobering. Small businesses are increasingly targeted precisely because attackers know they often have weaker defences than larger organisations. A single successful phishing attack or ransomware incident can cost a small business tens of thousands of pounds in lost productivity, recovery costs, and reputational damage. Basic, well-implemented security controls go a long way to reducing that risk.",
  },
  {
    q: 'What is Cyber Essentials and does my business need it?',
    a: "Cyber Essentials is a UK government-backed certification scheme that helps businesses protect themselves against the most common forms of cyberattack. It covers five key controls: firewalls, secure configuration, user access control, malware protection, and patch management. Many public sector contracts require Cyber Essentials as a minimum, and it&apos;s an excellent baseline for any business serious about security. We support businesses through the assessment and certification process.",
  },
  {
    q: 'How do you protect against phishing and email fraud?',
    a: "Email is the most common attack vector for cyberattacks. We implement multiple layers of protection: email filtering to catch malicious messages before they reach your inbox, DMARC, DKIM, and SPF records to prevent attackers from spoofing your domain, multi-factor authentication to protect accounts even if credentials are stolen, and staff awareness training so your team knows what to watch out for. No single control is perfect, which is why the layered approach matters.",
  },
  {
    q: 'What happens if we experience a cyberattack?',
    a: "If you&apos;re a managed client, we&apos;re your first call. We have incident response procedures in place to contain the damage, assess the scope of the breach, and begin recovery as quickly as possible. We&apos;ll also help you understand your reporting obligations — some incidents need to be reported to the ICO within 72 hours. For businesses that aren&apos;t yet clients, we can still provide emergency incident response support.",
  },
]

export default function CybersecurityCompliancePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center">
              <ShieldCheck size={32} className="text-light-accent" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Cybersecurity Built for Businesses That Can&apos;t Afford a Breach</h1>
          <p className="text-xl text-light-accent max-w-2xl">Layered defences, ongoing monitoring, and clear compliance support — so you can run your business with confidence.</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-5 text-[#374151] leading-relaxed">
              <p>
                Cybersecurity is no longer optional for small businesses. Attackers have become increasingly sophisticated, and small and medium-sized businesses are targeted precisely because they often have fewer protections in place. A breach can mean lost data, significant recovery costs, regulatory fines, and serious damage to your reputation — the kind of damage that can take years to repair.
              </p>
              <p>
                The good news is that strong cybersecurity doesn&apos;t require enterprise-level budgets. A well-implemented set of layered controls — covering your endpoints, your email, your user identities, and your network — dramatically reduces your exposure to the most common threats. That&apos;s what we help you build.
              </p>
              <p>
                We approach cybersecurity holistically. That means protecting your systems at every level: endpoints with modern EDR solutions, email with filtering and anti-spoofing controls, user accounts with multi-factor authentication, and your network with properly configured firewalls. We also help your team become your strongest defence — through practical, relevant security awareness training.
              </p>
              <p>
                Compliance is also part of the picture. Whether you&apos;re working towards Cyber Essentials, managing GDPR obligations, or fulfilling requirements from a client or insurer, we help you understand what&apos;s required and implement the controls to meet it.
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
