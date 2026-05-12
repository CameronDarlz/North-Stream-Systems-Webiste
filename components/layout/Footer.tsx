import Link from 'next/link'
import Image from 'next/image'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/why-us', label: 'Why Us' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact' },
]

const serviceLinks = [
  { label: 'Managed IT Support', href: '/services/managed-it-support' },
  { label: 'Cybersecurity & Compliance', href: '/services/cybersecurity-compliance' },
  { label: 'Microsoft 365 Management', href: '/services/microsoft-365-management' },
  { label: 'Cloud Infrastructure & Migration', href: '/services/cloud-infrastructure-migration' },
]

const locationLinks = [
  { label: 'North Wales', href: '/locations/north-wales' },
  { label: 'Llandudno', href: '/locations/llandudno' },
  { label: 'Conwy', href: '/locations/conwy' },
  { label: 'Gwynedd', href: '/locations/gwynedd' },
  { label: 'Denbighshire', href: '/locations/denbighshire' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="text-white" style={{ backgroundColor: '#1A1A2E' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/photos/North Stream Systems Logo Full.png"
                alt="North Stream Systems"
                width={200}
                height={55}
                style={{ objectFit: 'contain', width: 'auto', height: '55px' }}
                className="h-14 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm font-medium mb-2" style={{ color: '#AED6F1' }}>
              Steady. Secure. Scalable.
            </p>
            <p className="text-sm leading-relaxed text-white/50">
              Managed IT services built for UK businesses that are serious about growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: '#AED6F1' }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#AED6F1] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services + Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: '#AED6F1' }}>
              Services
            </h3>
            <ul className="space-y-2 mb-6">
              {serviceLinks.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-white/60 hover:text-[#AED6F1] transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#AED6F1' }}>
              Contact
            </h3>
            <div className="space-y-1.5">
              <a
                href="mailto:office@northstreamsystems.com"
                className="block text-sm text-white/60 hover:text-[#AED6F1] transition-colors"
              >
                office@northstreamsystems.com
              </a>
              <p className="text-sm text-white/40">Office 22, 16 Trinity Square</p>
              <p className="text-sm text-white/40">Llandudno, LL30 2RB</p>
            </div>
          </div>

          {/* Areas We Serve */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: '#AED6F1' }}>
              Areas We Serve
            </h3>
            <ul className="space-y-2">
              {locationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#AED6F1] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: 'rgba(46,134,193,0.3)' }}
        >
          <div className="text-xs text-white/40 text-center sm:text-left">
            &copy; {currentYear} North Stream Systems. All rights reserved.
          </div>
          <div className="flex gap-4">
            {quickLinks.slice(0, 4).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-white/40 hover:text-white/80 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
