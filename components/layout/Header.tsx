'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/why-us', label: 'Why Us' },
  { href: '/products', label: 'Products', badge: 'Coming Soon' },
  { href: '/contact', label: 'Contact' },
]


export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white',
        scrolled ? 'shadow-md backdrop-blur-sm bg-white/95' : ''
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="North Stream Systems home">
            <Image
              src="/photos/North Stream Systems Logo Full.png"
              alt="North Stream Systems"
              width={180}
              height={50}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors relative flex items-center gap-1.5',
                  pathname === link.href
                    ? 'text-accent'
                    : 'text-nss-text hover:text-accent'
                )}
              >
                {link.label}
                {link.badge && (
                  <span className="text-[10px] font-semibold bg-accent text-white px-1.5 py-0.5 rounded-full leading-none">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center bg-primary text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-md text-nss-text hover:text-accent transition-colors"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'flex items-center gap-2 px-2 py-2.5 rounded-md text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'text-accent bg-surface'
                    : 'text-nss-text hover:text-accent hover:bg-surface'
                )}
              >
                {link.label}
                {link.badge && (
                  <span className="text-[10px] font-semibold bg-accent text-white px-1.5 py-0.5 rounded-full leading-none">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/contact"
                className="block w-full text-center bg-primary text-white text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
