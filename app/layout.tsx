import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CookieBanner from '@/components/CookieBanner'
import ScrollToTop from '@/components/ScrollToTop'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | North Stream Systems',
    default: 'Managed IT Support North Wales | North Stream Systems',
  },
  description: 'North Stream Systems delivers managed IT support, cybersecurity, and Microsoft 365 management for SMBs across North Wales and the UK.',
  metadataBase: new URL('https://northstreamsystems.com'),
  icons: {
    icon: '/photos/NSS Favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "North Stream Systems",
              "description": "Managed IT support, cybersecurity, and Microsoft 365 management for SMBs across North Wales and the UK.",
              "url": "https://northstreamsystems.com",
              "email": "office@northstreamsystems.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Office 22, 16 Trinity Square",
                "addressLocality": "Llandudno",
                "addressRegion": "Conwy",
                "postalCode": "LL30 2RB",
                "addressCountry": "GB"
              },
              "areaServed": ["Llandudno", "Conwy", "Gwynedd", "Denbighshire", "North Wales", "United Kingdom"],
              "serviceType": ["Managed IT Support","Cybersecurity","Microsoft 365 Management","Cloud Infrastructure","Backup and Disaster Recovery","Network Management","IT Consultancy"],
              "priceRange": "££",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
                "opens": "08:00",
                "closes": "18:00"
              }
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
        <CookieBanner />
        <ScrollToTop />
      </body>
    </html>
  )
}
