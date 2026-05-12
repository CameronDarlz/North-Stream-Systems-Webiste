import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Managed IT Support Denbighshire | North Stream Systems',
  description: 'North Stream Systems provides managed IT support, cybersecurity, and Microsoft 365 management for businesses across Denbighshire — including Rhyl, Denbigh, and Ruthin.',
  alternates: { canonical: 'https://northstreamsystems.com/locations/denbighshire' },
  openGraph: {
    title: 'Managed IT Support Denbighshire | North Stream Systems',
    description: 'Managed IT support, cybersecurity, and Microsoft 365 management for businesses across Denbighshire.',
    url: 'https://northstreamsystems.com/locations/denbighshire',
    siteName: 'North Stream Systems',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: 'https://northstreamsystems.com/photos/North Stream Systems Logo Full.png', width: 1200, height: 630, alt: 'IT Support Denbighshire | North Stream Systems' }],
  },
  twitter: { card: 'summary_large_image', title: 'IT Support Denbighshire | North Stream Systems', description: 'Managed IT support for Denbighshire businesses.' },
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

export default function DenbighshirePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-light-accent mb-4">
            <MapPin size={18} />
            <span className="text-sm font-medium">Denbighshire, North Wales</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Managed IT Support in Denbighshire</h1>
          <p className="text-xl text-light-accent max-w-2xl">Reliable, professional IT support for businesses across Denbighshire — from Rhyl and Prestatyn to Ruthin and the Vale of Clwyd.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          <div className="space-y-5 text-[#374151] leading-relaxed">
            <p>
              Denbighshire sits at the eastern end of North Wales, spanning the coastal towns of Rhyl and Prestatyn through to the market towns of Denbigh and Ruthin in the Vale of Clwyd. It&apos;s a county with a strong commercial character: tourism and leisure on the coast, agriculture and rural businesses inland, and professional services, retail, and healthcare distributed across the towns.
            </p>
            <p>
              We work with businesses across Denbighshire and understand the variety that comes with such a geographically and economically diverse county. Whatever your sector and wherever you&apos;re based, we can provide IT support that&apos;s properly tailored to your needs — not a generic package that&apos;s been applied across hundreds of different businesses without adjustment.
            </p>
            <p>
              Most of what we do for Denbighshire clients happens remotely — which means fast response times and minimal disruption regardless of where you&apos;re located. When on-site support is needed, we coordinate site visits that are efficient and effective. We&apos;re committed to giving every client the same quality of service, whether they&apos;re next door to our Llandudno office or an hour&apos;s drive away.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Services Available in Denbighshire</h2>
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
          <h2 className="text-3xl font-bold text-primary mb-4">Get IT Support in Denbighshire</h2>
          <p className="text-[#6B7280] mb-8">Ready to talk? We offer a free no-obligation consultation for Denbighshire businesses.</p>
          <Link href="/contact" className="inline-flex items-center bg-primary hover:bg-[#152A45] text-white font-semibold px-8 py-4 rounded-lg transition-colors">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
