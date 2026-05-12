import type { Metadata } from 'next'
import Link from 'next/link'
import { Wifi, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Network & Connectivity Management | North Stream Systems',
  description: 'Reliable, secure business networks designed for how you actually work. North Stream Systems manages Wi-Fi, VPNs, firewalls, and connectivity for North Wales SMBs.',
  alternates: { canonical: 'https://northstreamsystems.com/services/network-connectivity' },
  openGraph: {
    title: 'Network & Connectivity Management | North Stream Systems',
    description: 'Reliable, secure business networks designed for how you actually work.',
    url: 'https://northstreamsystems.com/services/network-connectivity',
    siteName: 'North Stream Systems',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: 'https://northstreamsystems.com/photos/North Stream Systems Logo Full.png', width: 1200, height: 630, alt: 'Network & Connectivity | North Stream Systems' }],
  },
  twitter: { card: 'summary_large_image', title: 'Network & Connectivity | North Stream Systems', description: 'Reliable, secure business networks for North Wales SMBs.' },
}

const bullets = [
  'Network design and installation',
  'Secure Wi-Fi for offices and multi-site businesses',
  'Firewall configuration and management',
  'VPN setup for remote workers',
  'Guest network segmentation',
  'Network performance monitoring',
  'ISP and connectivity management',
  'Structured cabling advice and coordination',
]

const faqs = [
  {
    q: 'How do you secure a business network?',
    a: "A secure business network starts with a properly configured firewall — not just the one built into your router. We implement dedicated business-grade firewalls that inspect traffic, block known threats, and enforce rules about what can access what. We also segment your network so that different types of devices and users can&apos;t talk to each other unnecessarily, reducing the damage a compromised device can do. Regular monitoring and patching keep the defences current.",
  },
  {
    q: 'We have staff working from home — how do you support that?',
    a: "Remote working adds complexity to network security, but it&apos;s entirely manageable with the right setup. We configure VPNs that allow your remote staff to connect securely to your office or cloud resources — without exposing those resources to the open internet. We also ensure remote devices are managed and secured to the same standard as office equipment, so a laptop at home doesn&apos;t become the weak link in your security.",
  },
  {
    q: 'Can you manage networks across multiple office locations?',
    a: "Yes. Multi-site networking is something we handle regularly. We design and manage site-to-site VPNs, centralised management of network hardware, and consistent security policies across all locations. Whether you have two offices or ten, we make sure your network behaves as a unified, well-managed whole — not a collection of independent setups that nobody fully understands.",
  },
  {
    q: 'How do I know if my current network is secure?',
    a: "Honestly, most businesses don&apos;t know — and that&apos;s exactly the problem. Common issues we find during network audits include outdated or misconfigured firewalls, default passwords on network equipment, flat networks with no segmentation, and guest Wi-Fi that&apos;s not properly isolated from business systems. We can carry out a network assessment for your business and give you a clear picture of where you stand and what needs to change.",
  },
]

export default function NetworkConnectivityPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center">
              <Wifi size={32} className="text-light-accent" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">A Network Your Business Can Actually Rely On</h1>
          <p className="text-xl text-light-accent max-w-2xl">Designed for performance, built for security — and managed so you never have to think about it.</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-5 text-[#374151] leading-relaxed">
              <p>
                Your network is the backbone of everything your business does. Every email sent, every file accessed, every video call made — all of it depends on your network working reliably and securely. When it doesn&apos;t, the consequences ripple through your entire operation: lost productivity, frustrated staff, and the kind of connectivity issues that are difficult to diagnose and expensive to fix reactively.
              </p>
              <p>
                We design and manage business networks built to handle real-world demands. That means proper hardware — business-grade routers, switches, and access points — configured correctly and maintained regularly. Not consumer equipment running default settings because nobody got around to changing them.
              </p>
              <p>
                Security is built into the design from the start. Separate VLANs for different device types, properly configured firewalls, guest Wi-Fi that&apos;s genuinely isolated from your business systems, and VPN access for remote workers who need to connect to your resources securely. We don&apos;t add security as an afterthought — it&apos;s part of how we build every network.
              </p>
              <p>
                Once your network is in place, we monitor it continuously. We&apos;re alerted if anything goes wrong, and we deal with performance and connectivity issues before they escalate. You get the reliability your business needs without having to think about the infrastructure that delivers it.
              </p>
            </div>
            {/* What's Included */}
            <div className="bg-surface rounded-2xl p-8">
              <h2 className="text-xl font-bold text-primary mb-6">What&apos;s Included</h2>
              <ul className="space-y-3">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-accent mt-0.5 shrink-0" />
                    <span className="text-[#374151]">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-10">Common Questions</h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="text-lg font-semibold text-primary mb-2">{faq.q}</h3>
                <p className="text-[#374151] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(f => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": { "@type": "Answer", "text": f.a }
              }))
            }) }}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Ready to get started?</h2>
          <p className="text-[#6B7280] mb-8">Let&apos;s talk about what this service could look like for your business.</p>
          <Link href="/contact" className="inline-flex items-center bg-primary hover:bg-[#152A45] text-white font-semibold px-8 py-4 rounded-lg transition-colors">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
