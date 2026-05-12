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
  { href: '/blog', label: 'Blog' },
  { href: '/products', label: 'Products', badge: 'Coming Soon' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300',
        scrolled ? 'backdrop-blur-sm bg-white/95' : ''
      )}
      style={scrolled ? { boxShadow: '0 2px 20px rgba(30, 58, 95, 0.08)' } : undefined}
    >
      {/* Desktop: 3-column grid — logo | nav | cta */}
      <div className="max-w-7xl mx-auto px-6 hidden md:grid grid-cols-3 items-center h-16">

        {/* Left — Logo */}
        <div className="flex items-center">
          <Link href="/" aria-label="North Stream Systems home">
            <Image
              src="/photos/North Stream Systems Logo Full.png"
              alt="North Stream Systems"
              width={180}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Centre — Nav links */}
        <nav className="flex items-center justify-center gap-7" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors flex items-center gap-1.5 pb-0.5 whitespace-nowrap',
                  isActive
                    ? 'text-accent border-b-2 border-accent'
                    : 'text-nss-text hover:text-accent border-b-2 border-transparent'
                )}
              >
                {link.label}
                {link.badge && (
                  <span className="text-[10px] font-semibold bg-accent text-white px-1.5 py-0.5 rounded-full leading-none">
                    {link.badge}
                  </span>
                )}
              </Link>
            )
          })}
        </nav>

        {/* Right — CTA */}
        <div className="flex items-center justify-end">
          <Link
            href="/contact"
            className="bg-primary hover:bg-[#152A45] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Get in Touch
          </Link>
        </div>

      </div>

      {/* Mobile: logo left, hamburger right */}
      <div className="md:hidden max-w-7xl mx-auto px-4 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" aria-label="North Stream Systems home">
          <Image
            src="/photos/North Stream Systems Logo Full.png"
            alt="North Stream Systems"
            width={160}
            height={44}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-md text-nss-text hover:text-accent transition-colors"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-1"
        >
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
              className="block w-full text-center bg-primary hover:bg-[#152A45] text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
