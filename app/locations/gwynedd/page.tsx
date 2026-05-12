import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Managed IT Support Gwynedd | North Stream Systems',
  description: 'North Stream Systems provides managed IT support, cybersecurity, and Microsoft 365 management for businesses across Gwynedd — including Bangor, Caernarfon, and the Llyn Peninsula.',
  alternates: { canonical: 'https://northstreamsystems.com/locations/gwynedd' },
  openGraph: {
    title: 'Managed IT Support Gwynedd | North Stream Systems',
    description: 'Managed IT support, cybersecurity, and Microsoft 365 management for businesses across Gwynedd.',
    url: 'https://northstreamsystems.com/locations/gwynedd',
    siteName: 'North Stream Systems',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: 'https://northstreamsystems.com/photos/North Stream Systems Logo Full.png', width: 1200, height: 630, alt: 'IT Support Gwynedd | North Stream Systems' }],
  },
  twitter: { card: 'summary_large_image', title: 'IT Support Gwynedd | North Stream Systems', description: 'Managed IT support for Gwynedd businesses.' },
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

export default function GwyneddPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-light-accent mb-4">
            <MapPin size={18} />
            <span className="text-sm font-medium">Gwynedd, North Wales</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Managed IT Support in Gwynedd</h1>
          <p className="text-xl text-light-accent max-w-2xl">Serving businesses across Gwynedd — from Bangor and Caernarfon to the Llyn Peninsula and beyond.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          <div className="space-y-5 text-[#374151] leading-relaxed">
            <p>
              Gwynedd is one of Wales&apos; most distinctive counties — a region of outstanding natural beauty that&apos;s also home to thriving businesses across a wide range of sectors. Bangor&apos;s university and NHS presence creates a substantial professional community. Caernarfon, Pwllheli, and the Llyn Peninsula host tourism and hospitality operations, maritime businesses, and a growing number of knowledge-economy firms that have chosen Gwynedd for the quality of life it offers.
            </p>
            <p>
              We work with businesses across Gwynedd and understand the particular characteristics of the region — including the connectivity challenges that can come with more rural locations and the bilingual working environment that many businesses here navigate daily. Our IT support is practical, responsive, and designed to fit the way your business actually operates.
            </p>
            <p>
              Remote support covers the vast majority of issues we handle — most things can be resolved without anyone needing to come on-site. For the times when physical presence is needed, we plan site visits efficiently and make sure they achieve what they need to. Distance doesn&apos;t prevent us from giving Gwynedd businesses the same quality of service we provide to clients right on our doorstep.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Services Available in Gwynedd</h2>
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
          <h2 className="text-3xl font-bold text-primary mb-4">Get IT Support in Gwynedd</h2>
          <p className="text-[#6B7280] mb-8">Ready to talk? We offer a free no-obligation consultation for Gwynedd businesses.</p>
          <Link href="/contact" className="inline-flex items-center bg-primary hover:bg-[#152A45] text-white font-semibold px-8 py-4 rounded-lg transition-colors">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
