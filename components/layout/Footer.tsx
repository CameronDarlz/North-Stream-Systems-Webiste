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
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="mb-3">
              <Image
                src="/photos/North Stream Systems Logo Full.png"
                alt="North Stream Systems"
                width={180}
                height={50}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-light-accent text-sm font-medium mb-2">Steady. Secure. Scalable.</p>
            <p className="text-white/60 text-sm leading-relaxed">
              Managed IT services built for UK businesses that are serious about growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-light-accent uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-light-accent uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2 mb-6">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-white/70 text-sm hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <h3 className="text-sm font-semibold text-light-accent uppercase tracking-wider mb-3">
              Contact
            </h3>
            <div className="space-y-1.5">
              <a
                href="mailto:office@northstreamsystems.com"
                className="block text-white/70 text-sm hover:text-white transition-colors"
              >
                office@northstreamsystems.com
              </a>
              <p className="text-white/60 text-sm">North Wales, UK</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-white/50 text-xs text-center sm:text-left">
            &copy; {currentYear} North Stream Systems Ltd. All rights reserved.
            <span className="ml-2 hidden sm:inline">|</span>
            <span className="block sm:inline sm:ml-2">Registered in England &amp; Wales</span>
          </div>
          <div className="flex gap-4">
            {quickLinks.slice(0, 4).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/50 text-xs hover:text-white/80 transition-colors"
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
