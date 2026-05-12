import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import SocialProofBar from '@/components/home/SocialProofBar'
import ServicesPreview from '@/components/home/ServicesPreview'
import WhyNSS from '@/components/home/WhyNSS'
import CTABanner from '@/components/home/CTABanner'
import Industries from '@/components/home/Industries'
import HomeFAQ from '@/components/home/HomeFAQ'

export const metadata: Metadata = {
  title: 'Managed IT Support North Wales | North Stream Systems',
  description: 'North Stream Systems delivers managed IT support, cybersecurity, and Microsoft 365 management for SMBs across North Wales and the UK. Proactive, transparent, fixed-cost IT from Llandudno.',
  alternates: { canonical: 'https://northstreamsystems.com' },
  openGraph: {
    title: 'Managed IT Support North Wales | North Stream Systems',
    description: 'North Stream Systems delivers managed IT support, cybersecurity, and Microsoft 365 management for SMBs across North Wales and the UK.',
    url: 'https://northstreamsystems.com',
    siteName: 'North Stream Systems',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: 'https://northstreamsystems.com/photos/North Stream Systems Logo Full.png', width: 1200, height: 630, alt: 'North Stream Systems — Managed IT Support North Wales' }],
  },
  twitter: { card: 'summary_large_image', title: 'Managed IT Support North Wales | North Stream Systems', description: 'Proactive, transparent, fixed-cost IT from Llandudno.' },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProofBar />
      <ServicesPreview />
      <Industries />
      <WhyNSS />
      <HomeFAQ />
      <CTABanner />
    </>
  )
}
