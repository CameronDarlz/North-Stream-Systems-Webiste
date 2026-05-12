import type { Metadata } from 'next'
import { Mail, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us | Free IT Consultation | North Stream Systems',
  description: 'Talk to the North Stream Systems team. We offer a free no-obligation IT consultation for businesses across North Wales and the UK. Based in Llandudno.',
  alternates: { canonical: 'https://northstreamsystems.com/contact' },
  openGraph: {
    title: 'Contact Us | Free IT Consultation | North Stream Systems',
    description: 'Talk to the North Stream Systems team. Free no-obligation IT consultation for North Wales businesses.',
    url: 'https://northstreamsystems.com/contact',
    siteName: 'North Stream Systems',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: 'https://northstreamsystems.com/photos/North Stream Systems Logo Full.png', width: 1200, height: 630, alt: 'Contact North Stream Systems' }],
  },
  twitter: { card: 'summary_large_image', title: 'Contact North Stream Systems', description: 'Free no-obligation IT consultation.' },
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact North Stream Systems",
          "url": "https://northstreamsystems.com/contact",
          "description": "Get in touch with North Stream Systems for a free IT consultation.",
          "mainEntity": {
            "@type": "LocalBusiness",
            "name": "North Stream Systems",
            "email": "office@northstreamsystems.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Office 22, 16 Trinity Square",
              "addressLocality": "Llandudno",
              "addressRegion": "Conwy",
              "postalCode": "LL30 2RB",
              "addressCountry": "GB"
            }
          }
        }) }}
      />
      {/* Hero */}
      <section className="bg-surface pt-16 pb-20 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            Let&apos;s Talk
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Get in Touch</h1>
          <p className="text-lg text-muted leading-relaxed max-w-xl mx-auto">
            Whether you have a specific project in mind or just want to explore what working together
            could look like — we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: contact details */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-primary mb-6">Contact details</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary mb-1">Email</p>
                    <a
                      href="mailto:office@northstreamsystems.com"
                      className="text-accent hover:underline text-sm"
                    >
                      office@northstreamsystems.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary mb-1">Location</p>
                    <p className="text-muted text-sm">Office 22, 16 Trinity Square</p>
                    <p className="text-muted text-sm">Llandudno</p>
                    <p className="text-muted text-sm">LL30 2RB</p>
                    <p className="text-muted text-xs mt-0.5">Serving businesses across the UK</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary mb-1">Response Promise</p>
                    <p className="text-muted text-sm">We aim to respond within 4 business hours.</p>
                    <p className="text-muted text-xs mt-0.5">For urgent matters, state it in your message.</p>
                  </div>
                </div>
              </div>

              <div className="bg-surface rounded-xl p-6 border border-gray-100">
                <p className="text-sm text-muted leading-relaxed">
                  Not sure if we&apos;re the right fit? That&apos;s exactly what a first conversation is for.
                  We&apos;re happy to have an informal chat about your situation and give you our honest take —
                  no sales pitch, no obligation.
                </p>
              </div>
            </div>

            {/* Right: contact form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
