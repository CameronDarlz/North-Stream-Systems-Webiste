const faqs = [
  {
    q: 'What does managed IT support include?',
    a: "Managed IT support covers proactive monitoring of your systems, a responsive helpdesk for your team, regular patching and maintenance, cybersecurity management, and a dedicated engineer who understands your business. Think of it as having your own IT department — without the overhead of hiring one.",
  },
  {
    q: 'What areas do you cover?',
    a: "We're based in Llandudno and primarily serve businesses across North Wales — including Conwy, Gwynedd, Denbighshire, and the surrounding areas. We also support businesses remotely across the wider UK.",
  },
  {
    q: 'How quickly do you respond to IT issues?',
    a: "Our standard SLA is under one hour for critical issues. We'll always keep you updated on progress so you're never left wondering what's happening.",
  },
  {
    q: 'Do I need to commit to a long-term contract?',
    a: "We believe you should stay with us because we're doing a great job — not because you're locked in. We offer flexible arrangements and will always be transparent about terms before you sign anything.",
  },
]

export default function HomeFAQ() {
  return (
    <section className="py-20 bg-white" aria-label="Frequently asked questions">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: '#1E3A5F' }}>
          Common questions.
        </h2>
        <div className="space-y-10">
          {faqs.map((faq) => (
            <div key={faq.q} className="border-b border-gray-100 pb-10 last:border-0 last:pb-0">
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#1E3A5F' }}>
                {faq.q}
              </h3>
              <p className="leading-relaxed" style={{ color: '#374151' }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map((f) => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": { "@type": "Answer", "text": f.a },
              })),
            }),
          }}
        />
      </div>
    </section>
  )
}
