import Link from 'next/link'

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

function FooterStreamIcon() {
  return (
    <svg
      width="28"
      height="21"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2 4 C6 4, 8 2, 12 2 C16 2, 18 4, 22 4 C26 4, 28 2, 32 2"
        stroke="#AED6F1"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M0 12 C4 12, 6 10, 10 10 C14 10, 16 12, 20 12 C24 12, 26 10, 30 10 C31 10, 31.5 10.2, 32 10.5"
        stroke="#AED6F1"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M2 20 C6 20, 8 22, 12 22 C16 22, 18 20, 22 20 C26 20, 28 22, 32 22"
        stroke="#2E86C1"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <FooterStreamIcon />
              <span className="font-semibold text-base">North Stream Systems</span>
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
