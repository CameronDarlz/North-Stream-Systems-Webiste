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
  'Managed IT Support',
  'Cybersecurity & Compliance',
  'Microsoft 365 Management',
  'Cloud Infrastructure & Migration',
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="text-white" style={{ backgroundColor: '#1A1A2E' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
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
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Managed IT services built for UK businesses that are serious about growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: '#AED6F1' }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#AED6F1')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services + Contact */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: '#AED6F1' }}
            >
              Services
            </h3>
            <ul className="space-y-2 mb-6">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm transition-colors"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#AED6F1')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>

            <h3
              className="text-sm font-semibold uppercase tracking-wider mb-3"
              style={{ color: '#AED6F1' }}
            >
              Contact
            </h3>
            <div className="space-y-1.5">
              <a
                href="mailto:office@northstreamsystems.com"
                className="block text-sm transition-colors"
                style={{ color: 'rgba(255,255,255,0.6)' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#AED6F1')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
              >
                office@northstreamsystems.com
              </a>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
                North Wales, UK
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: 'rgba(46,134,193,0.3)' }}
        >
          <div
            className="text-xs text-center sm:text-left"
            style={{ color: 'rgba(255,255,255,0.4)' }}
          >
            &copy; {currentYear} North Stream Systems Ltd. All rights reserved.
            <span className="ml-2 hidden sm:inline">|</span>
            <span className="block sm:inline sm:ml-2">Registered in England &amp; Wales</span>
          </div>
          <div className="flex gap-4">
            {quickLinks.slice(0, 4).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs transition-colors"
                style={{ color: 'rgba(255,255,255,0.4)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
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
