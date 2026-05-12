import type { Metadata } from 'next'
import Link from 'next/link'
import { HardDrive, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Backup & Disaster Recovery for UK Businesses | North Stream Systems',
  description: 'Never lose critical business data again. North Stream Systems implements, monitors, and regularly tests backup and disaster recovery solutions for UK SMBs.',
  alternates: { canonical: 'https://northstreamsystems.com/services/backup-disaster-recovery' },
  openGraph: {
    title: 'Backup & Disaster Recovery for UK Businesses | North Stream Systems',
    description: 'Never lose critical business data again. Implemented, monitored, and tested backup and disaster recovery solutions for UK SMBs.',
    url: 'https://northstreamsystems.com/services/backup-disaster-recovery',
    siteName: 'North Stream Systems',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: 'https://northstreamsystems.com/photos/North Stream Systems Logo Full.png', width: 1200, height: 630, alt: 'Backup & Disaster Recovery | North Stream Systems' }],
  },
  twitter: { card: 'summary_large_image', title: 'Backup & Disaster Recovery | North Stream Systems', description: 'Implemented, monitored, and tested backup solutions for UK SMBs.' },
}

const bullets = [
  'Automated daily backups (local and cloud)',
  'Microsoft 365 data backup (email, Teams, SharePoint)',
  'Ransomware-resilient backup architecture',
  'Regular restore testing — not just set and forget',
  'Recovery time objective (RTO) planning',
  'Recovery point objective (RPO) alignment',
  'Offsite and air-gapped backup options',
  'Incident response and data recovery support',
]

const faqs = [
  {
    q: "Doesn't Microsoft 365 back up my data automatically?",
    a: "No — and this is one of the most dangerous misconceptions we encounter. Microsoft provides data redundancy (so their infrastructure doesn&apos;t fail), but they do not provide backup in the traditional sense. If you accidentally delete emails, if a ransomware attack encrypts your data, or if a disgruntled employee deliberately removes files, Microsoft cannot recover your data beyond a very limited retention window. A proper Microsoft 365 backup solution is essential.",
  },
  {
    q: 'How often should business data be backed up?',
    a: "It depends on how quickly your data changes and how much data loss you could tolerate in a worst-case scenario. For most businesses, daily backups are a minimum. For businesses with high transaction volumes or critical real-time data, more frequent backups — or continuous replication — may be appropriate. We discuss your recovery point objective (RPO) with you to find the right approach.",
  },
  {
    q: 'How quickly can you restore our data after an incident?',
    a: "That depends on the nature and scale of the incident and how your backup solution is configured. For a small number of files accidentally deleted, restoration can typically happen within minutes. For a full system recovery after a major incident, it depends on your recovery time objective (RTO) — which we agree in advance. We design backup solutions specifically around how quickly you need to be back up and running.",
  },
  {
    q: "What's the difference between backup and disaster recovery?",
    a: "Backup is the process of copying your data to a separate location so it can be restored if lost or corrupted. Disaster recovery is the broader plan for how your business continues to operate — or gets back to operating — after a major incident. Disaster recovery includes backup, but also covers things like system recovery, failover infrastructure, communication plans, and the procedures your team follows. We help businesses build both.",
  },
]

export default function BackupDisasterRecoveryPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center">
              <HardDrive size={32} className="text-light-accent" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">When the Worst Happens, You&apos;ll Be Ready</h1>
          <p className="text-xl text-light-accent max-w-2xl">Robust backup and recovery — implemented properly, tested regularly, and ready when you need it most.</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-5 text-[#374151] leading-relaxed">
              <p>
                Backup is one of those things that businesses know they need — but often treat as an afterthought. A USB drive plugged in under someone&apos;s desk, a shared folder that &apos;gets backed up automatically somewhere&apos;, or a cloud storage account that nobody has actually checked in months. This is not backup. This is the illusion of backup.
              </p>
              <p>
                Real backup means your data is copied regularly, stored securely in multiple locations, protected from ransomware, and — critically — tested to confirm it can actually be restored. We&apos;ve seen too many businesses discover that their backup was failing silently only at the moment they needed it most. We make sure that never happens to our clients.
              </p>
              <p>
                We design backup solutions around your specific business — what data you have, how critical it is, how quickly you need to be back online after an incident, and how much data loss (if any) you can tolerate. Microsoft 365 data, local servers, cloud workloads — everything is covered.
              </p>
              <p>
                And we test it. Regularly. A backup that hasn&apos;t been restored is a backup you can&apos;t trust. We run restore tests on a scheduled basis and give you the documentation to prove it — because your cyber insurer, your clients, and your own peace of mind deserve nothing less.
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
