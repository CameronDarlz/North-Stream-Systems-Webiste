import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Managed IT Support North Wales | North Stream Systems',
  description: 'North Stream Systems provides managed IT support, cybersecurity, and Microsoft 365 management across North Wales. Local knowledge, expert engineers, SLA-backed response times.',
  alternates: { canonical: 'https://northstreamsystems.com/locations/north-wales' },
  openGraph: {
    title: 'Managed IT Support North Wales | North Stream Systems',
    description: 'Managed IT support, cybersecurity, and Microsoft 365 management across North Wales.',
    url: 'https://northstreamsystems.com/locations/north-wales',
    siteName: 'North Stream Systems',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: 'https://northstreamsystems.com/photos/North Stream Systems Logo Full.png', width: 1200, height: 630, alt: 'IT Support North Wales | North Stream Systems' }],
  },
  twitter: { card: 'summary_large_image', title: 'IT Support North Wales | North Stream Systems', description: 'Managed IT support across North Wales.' },
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

export default function NorthWalesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-light-accent mb-4">
            <MapPin size={18} />
            <span className="text-sm font-medium">North Wales</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Managed IT Support in North Wales</h1>
          <p className="text-xl text-light-accent max-w-2xl">Local expertise, proactive support, and SLA-backed response times — for businesses across the North Wales region.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          <div className="space-y-5 text-[#374151] leading-relaxed">
            <p>
              North Stream Systems is based in North Wales and built around serving the businesses that drive this region forward. From the coastal towns of the Llyn Peninsula to the market towns of the Clwyd Valley, we provide IT support that understands the realities of running a business here — the mix of seasonal pressures, the connectivity challenges in more rural areas, and the growing ambitions of a business community that punches well above its weight.
            </p>
            <p>
              North Wales has a remarkably diverse business landscape. Tourism and hospitality businesses operate alongside professional services firms, healthcare providers, construction companies, and manufacturers. Each has its own IT requirements, and we&apos;ve worked with enough of them to understand the nuances. We don&apos;t deliver a generic managed IT service — we tailor our approach to what your business actually needs.
            </p>
            <p>
              Being local matters to us. When something needs an on-site engineer, we can be there. When we talk about the challenges of running a business in North Wales, it&apos;s not a scripted response — it&apos;s lived experience. We&apos;re a part of this community, and we&apos;re invested in the success of the businesses we support here.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Services Available in North Wales</h2>
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
          <h2 className="text-3xl font-bold text-primary mb-4">Get IT Support in North Wales</h2>
          <p className="text-[#6B7280] mb-8">Ready to talk? We offer a free no-obligation consultation for North Wales businesses.</p>
          <Link href="/contact" className="inline-flex items-center bg-primary hover:bg-[#152A45] text-white font-semibold px-8 py-4 rounded-lg transition-colors">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
