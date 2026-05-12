import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Managed IT Support Conwy | North Stream Systems',
  description: 'North Stream Systems provides managed IT support, cybersecurity, and cloud services for businesses across the Conwy county borough. Local engineers, SLA-backed response times.',
  alternates: { canonical: 'https://northstreamsystems.com/locations/conwy' },
  openGraph: {
    title: 'Managed IT Support Conwy | North Stream Systems',
    description: 'Managed IT support, cybersecurity, and cloud services for businesses across Conwy.',
    url: 'https://northstreamsystems.com/locations/conwy',
    siteName: 'North Stream Systems',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: 'https://northstreamsystems.com/photos/North Stream Systems Logo Full.png', width: 1200, height: 630, alt: 'IT Support Conwy | North Stream Systems' }],
  },
  twitter: { card: 'summary_large_image', title: 'IT Support Conwy | North Stream Systems', description: 'Managed IT support for Conwy businesses.' },
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

export default function ConwyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-light-accent mb-4">
            <MapPin size={18} />
            <span className="text-sm font-medium">Conwy, North Wales</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Managed IT Support in Conwy</h1>
          <p className="text-xl text-light-accent max-w-2xl">Expert IT support for businesses across the Conwy county borough — from Llandudno Junction to Betws-y-Coed.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          <div className="space-y-5 text-[#374151] leading-relaxed">
            <p>
              The Conwy county borough is home to an incredibly varied business community. Coastal towns like Llandudno, Colwyn Bay, and Conwy itself host everything from independent retailers and hospitality businesses to professional services firms and healthcare providers. Inland, the Conwy Valley brings its own character — tourism, agriculture, and a growing number of businesses that choose North Wales for its quality of life without sacrificing commercial ambition.
            </p>
            <p>
              We&apos;re based in Llandudno, right in the heart of the borough, which means we&apos;re never far from wherever our Conwy-based clients need us. For most issues, we resolve things remotely within our SLA — but when an on-site visit is needed, we can typically be with you the same day.
            </p>
            <p>
              We understand the particular IT challenges that come with operating in this area — from connectivity considerations in more rural parts of the county to the specific compliance needs of businesses in regulated sectors. Whatever your situation, we&apos;ll provide IT support that&apos;s genuinely fitted to your business rather than a one-size-fits-all package.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Services Available in Conwy</h2>
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
          <h2 className="text-3xl font-bold text-primary mb-4">Get IT Support in Conwy</h2>
          <p className="text-[#6B7280] mb-8">Ready to talk? We offer a free no-obligation consultation for Conwy businesses.</p>
          <Link href="/contact" className="inline-flex items-center bg-primary hover:bg-[#152A45] text-white font-semibold px-8 py-4 rounded-lg transition-colors">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
