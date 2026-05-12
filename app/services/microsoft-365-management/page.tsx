import type { Metadata } from 'next'
import Link from 'next/link'
import { Cloud, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Microsoft 365 Management & Support | North Stream Systems',
  description: 'Full Microsoft 365 management for UK SMBs — licencing, security hardening, Teams setup, SharePoint, Conditional Access, and ongoing administration. Based in North Wales.',
  alternates: { canonical: 'https://northstreamsystems.com/services/microsoft-365-management' },
  openGraph: {
    title: 'Microsoft 365 Management & Support | North Stream Systems',
    description: 'Full Microsoft 365 management for UK SMBs — licencing, security hardening, Teams setup, SharePoint, Conditional Access, and ongoing administration.',
    url: 'https://northstreamsystems.com/services/microsoft-365-management',
    siteName: 'North Stream Systems',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: 'https://northstreamsystems.com/photos/North Stream Systems Logo Full.png', width: 1200, height: 630, alt: 'Microsoft 365 Management | North Stream Systems' }],
  },
  twitter: { card: 'summary_large_image', title: 'Microsoft 365 Management | North Stream Systems', description: 'Full M365 management for UK SMBs.' },
}

const bullets = [
  'Licence management and cost optimisation',
  'Security hardening and Secure Score improvement',
  'Conditional Access policy configuration',
  'Teams and SharePoint setup and governance',
  'Exchange Online and email administration',
  'MFA enforcement and identity management',
  'User provisioning and deprovisioning',
  'Ongoing M365 health monitoring',
]

const faqs = [
  {
    q: 'We already have Microsoft 365 — do we still need help managing it?',
    a: "Almost certainly, yes. Most businesses that self-manage their Microsoft 365 tenancy are leaving significant security gaps — default configurations are rarely appropriate for business use. Common issues we find include weak or absent MFA, no Conditional Access policies, over-permissioned accounts, and poor SharePoint governance. We can audit your existing setup and harden it, or take over day-to-day administration entirely.",
  },
  {
    q: "What's the difference between Microsoft 365 Business Basic, Standard, and Premium?",
    a: "Business Basic covers core productivity and online versions of Office apps. Business Standard adds the full desktop Office applications. Business Premium is the most comprehensive plan and includes advanced security features like Microsoft Defender for Business, Intune for device management, and Azure AD Premium — all of which are highly relevant for businesses serious about security. We help you choose the right plan for your needs and make sure you&apos;re getting the value you&apos;re paying for.",
  },
  {
    q: 'How do you keep our Microsoft 365 environment secure?',
    a: "We implement a security baseline aligned with Microsoft&apos;s own best practice recommendations and the Cyber Essentials framework. That includes enforcing MFA for all users, configuring Conditional Access policies to control how and where your data can be accessed, reviewing admin account permissions, enabling audit logging, and monitoring for suspicious activity. We also track your Microsoft Secure Score and work to improve it over time.",
  },
  {
    q: 'Can you migrate us from Google Workspace or another platform?',
    a: "Yes. We manage migrations from Google Workspace, on-premise Exchange, and other platforms to Microsoft 365. We plan migrations carefully to minimise disruption — migrating data, configuring the new environment, and training your team before the cutover. We&apos;ve migrated businesses of various sizes and understand the importance of getting it right first time.",
  },
]

export default function Microsoft365ManagementPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center">
              <Cloud size={32} className="text-light-accent" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get the Full Value From Microsoft 365 — Without the Complexity</h1>
          <p className="text-xl text-light-accent max-w-2xl">Licencing, security, and day-to-day administration — fully managed, so your team can focus on work, not IT.</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-5 text-[#374151] leading-relaxed">
              <p>
                Microsoft 365 is one of the most powerful productivity platforms available to small businesses — but it&apos;s also one of the most commonly misconfigured. Out of the box, many of its most important security features are turned off or set to defaults that leave your business exposed. And with constant product updates, new features, and evolving security threats, keeping up with it is a full-time job in itself.
              </p>
              <p>
                We take on that work for you. We manage everything from licencing — making sure you&apos;re on the right plan and not paying for seats you don&apos;t need — to security hardening, ensuring your Microsoft 365 environment is locked down properly. That means enforcing multi-factor authentication, configuring Conditional Access policies, managing admin permissions, and setting up audit logging.
              </p>
              <p>
                Day-to-day administration is also part of what we do. New staff joining? We&apos;ll provision their account, set up their email, and make sure they have access to the right tools from day one. Someone leaving? We&apos;ll handle the offboarding — revoking access, archiving their data, and ensuring nothing falls through the cracks.
              </p>
              <p>
                Beyond the basics, we help you get more from the tools you&apos;re already paying for. Teams, SharePoint, OneDrive — we configure these properly so your team can collaborate effectively and your data stays organised and secure.
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
