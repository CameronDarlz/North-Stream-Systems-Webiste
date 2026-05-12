import type { Metadata } from 'next'
import Link from 'next/link'
import { Server, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cloud Infrastructure & Migration Services | North Stream Systems',
  description: 'Migrate to the cloud with confidence. North Stream Systems plans and delivers cloud migrations for UK SMBs — minimising downtime and maximising efficiency from day one.',
  alternates: { canonical: 'https://northstreamsystems.com/services/cloud-infrastructure-migration' },
  openGraph: {
    title: 'Cloud Infrastructure & Migration Services | North Stream Systems',
    description: 'Migrate to the cloud with confidence. Planned migrations for UK SMBs — minimising downtime and maximising efficiency.',
    url: 'https://northstreamsystems.com/services/cloud-infrastructure-migration',
    siteName: 'North Stream Systems',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: 'https://northstreamsystems.com/photos/North Stream Systems Logo Full.png', width: 1200, height: 630, alt: 'Cloud Infrastructure & Migration | North Stream Systems' }],
  },
  twitter: { card: 'summary_large_image', title: 'Cloud Infrastructure & Migration | North Stream Systems', description: 'Planned cloud migrations for UK SMBs.' },
}

const bullets = [
  'Pre-migration assessment and planning',
  'Cloud architecture design',
  'Data and workload migration',
  'Azure and Microsoft cloud environments',
  'Ongoing cloud infrastructure management',
  'Cost optimisation and right-sizing',
  'Backup and redundancy configuration',
  'Post-migration support and handover',
]

const faqs = [
  {
    q: 'How long does a cloud migration take?',
    a: "It depends on the complexity of your existing infrastructure and the scope of the migration. A straightforward server migration for a small business might take a few days. A more complex migration involving multiple workloads, custom applications, and data transfer can take several weeks. We&apos;ll give you a realistic timeline after the pre-migration assessment — and we stick to it.",
  },
  {
    q: 'Will we experience downtime during the migration?',
    a: "We plan migrations specifically to minimise disruption to your business. For most workloads, we run the old and new environments in parallel, test thoroughly, and then cut over — often overnight or at the weekend. The result is typically a matter of minutes of actual downtime rather than hours. For particularly sensitive workloads, we discuss the options and plan accordingly.",
  },
  {
    q: 'Is the cloud actually secure for business data?',
    a: "Yes — when configured correctly. Cloud platforms like Microsoft Azure include enterprise-grade security features that most on-premise setups can&apos;t match: redundant storage, encryption at rest and in transit, advanced identity management, and global threat intelligence. The key word is &apos;configured correctly&apos;. Default settings are not always secure settings, which is why we invest in proper architecture and security hardening as part of every migration.",
  },
  {
    q: 'How do you ensure our cloud costs don&apos;t spiral?',
    a: "Cloud costs can get out of hand if nobody is watching them. As part of our ongoing cloud management, we monitor your usage, right-size your resources to match actual demand, and alert you to any unexpected changes in spend. We also help you take advantage of reserved instance pricing and other cost optimisation features where appropriate. You should always know what you&apos;re spending and why.",
  },
]

export default function CloudInfrastructureMigrationPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center">
              <Server size={32} className="text-light-accent" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Cloud Migration Without the Chaos</h1>
          <p className="text-xl text-light-accent max-w-2xl">A structured, low-disruption move to cloud infrastructure — planned properly, delivered on time.</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-5 text-[#374151] leading-relaxed">
              <p>
                Moving to the cloud is one of the most impactful technology decisions a business can make — and one of the most commonly botched. Without proper planning and execution, cloud migrations lead to unexpected downtime, data loss, spiralling costs, and teams that don&apos;t know how to use the new environment they&apos;ve been dumped in.
              </p>
              <p>
                We approach migrations differently. Before a single byte of data moves, we carry out a thorough assessment of your existing infrastructure — what you have, how it&apos;s used, and what the right cloud architecture looks like for your specific business. Only then do we build a migration plan that covers every workload, every dependency, and every risk.
              </p>
              <p>
                The migration itself is managed with minimal disruption in mind. We use proven techniques to move data and workloads safely, test everything before cutover, and time the switch to avoid impacting your team. When you arrive on Monday morning, everything works — and works better than before.
              </p>
              <p>
                After migration, we don&apos;t disappear. We manage your cloud infrastructure on an ongoing basis, keeping it secure, optimised, and cost-effective. Cloud isn&apos;t a set-and-forget platform — it requires ongoing attention, and that&apos;s exactly what we provide.
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
