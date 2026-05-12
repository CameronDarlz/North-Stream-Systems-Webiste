import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Managed IT Support Llandudno | North Stream Systems',
  description: 'North Stream Systems is based in Llandudno at Office 22, 16 Trinity Square. We provide managed IT support, cybersecurity, and Microsoft 365 management for Llandudno businesses.',
  alternates: { canonical: 'https://northstreamsystems.com/locations/llandudno' },
  openGraph: {
    title: 'Managed IT Support Llandudno | North Stream Systems',
    description: 'Based at Trinity Square in Llandudno — providing managed IT support and cybersecurity for local businesses.',
    url: 'https://northstreamsystems.com/locations/llandudno',
    siteName: 'North Stream Systems',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: 'https://northstreamsystems.com/photos/North Stream Systems Logo Full.png', width: 1200, height: 630, alt: 'IT Support Llandudno | North Stream Systems' }],
  },
  twitter: { card: 'summary_large_image', title: 'IT Support Llandudno | North Stream Systems', description: 'Managed IT support for Llandudno businesses.' },
}

const services = [
  { name: 'Managed IT Support', href: '/services/managed-it-support' },
  { name: 'Cybersecurity & Compliance', href: '/services/cybersecurity-compliance' },
  { name: 'Microsoft 365 Management', href: '/services/microsoft-365-management' },
  { name: 'Cloud Infrastructure & Migration', href: '/services/cloud-infrastructure-migration' },
  { name: 'Backup & Disaster Recovery', href: '/services/backup-disaster-recovery' },
  { name: 'Network & Connectivity', href: '/services/network-connectivity' },
  { name: 'IT Consultancy & Projects', href: '/services/it-consultancy' },
]

export default function LlandudnoPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-light-accent mb-4">
            <MapPin size={18} />
            <span className="text-sm font-medium">Llandudno, North Wales</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Managed IT Support in Llandudno</h1>
          <p className="text-xl text-light-accent max-w-2xl">Your local IT partner — based in the heart of Llandudno, supporting businesses across the town and surrounding area.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          <div className="space-y-5 text-[#374151] leading-relaxed">
            <p>
              North Stream Systems is based at Trinity Square in the heart of Llandudno — Office 22, 16 Trinity Square, Llandudno, LL30 2RB. We&apos;re not a remote provider parachuting in from outside the area; we&apos;re your neighbours, and we&apos;re genuinely invested in the success of Llandudno&apos;s business community.
            </p>
            <p>
              Llandudno is home to a vibrant mix of businesses: hospitality and tourism, professional services, healthcare, retail, and a growing number of businesses operating across the wider North Wales and UK markets. Each sector has its own IT challenges, and being embedded in the local community means we understand them from the ground up.
            </p>
            <p>
              When you need an engineer on-site — whether for a network installation, a hardware issue, or just a face-to-face meeting — we can be with you quickly. That proximity matters, and it&apos;s one of the reasons local businesses choose to work with us rather than a provider based elsewhere. We&apos;re genuinely local, genuinely available, and genuinely committed to getting your IT right.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Services Available in Llandudno</h2>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.name}>
                  <Link href={s.href} className="flex items-center gap-3 text-[#374151] hover:text-accent transition-colors">
                    <CheckCircle size={18} className="text-accent shrink-0" />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Get IT Support in Llandudno</h2>
          <p className="text-[#6B7280] mb-8">Ready to talk? We offer a free no-obligation consultation for Llandudno businesses.</p>
          <Link href="/contact" className="inline-flex items-center bg-primary hover:bg-[#152A45] text-white font-semibold px-8 py-4 rounded-lg transition-colors">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
