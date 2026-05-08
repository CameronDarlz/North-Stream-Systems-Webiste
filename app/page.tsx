import Hero from '@/components/home/Hero'
import SocialProofBar from '@/components/home/SocialProofBar'
import ServicesPreview from '@/components/home/ServicesPreview'
import WhyNSS from '@/components/home/WhyNSS'
import CTABanner from '@/components/home/CTABanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProofBar />
      <ServicesPreview />
      <WhyNSS />
      <CTABanner />
    </>
  )
}
