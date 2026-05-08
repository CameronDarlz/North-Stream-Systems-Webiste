import { MessageSquare, Activity, Users } from 'lucide-react'

const pillars = [
  {
    icon: MessageSquare,
    title: 'No jargon. No runaround.',
    description:
      "We speak plain English and give you straight answers. You'll always know what's happening and why.",
  },
  {
    icon: Activity,
    title: 'Proactive, not reactive.',
    description:
      "We don't wait for things to break. Our monitoring and maintenance keeps your systems running smoothly.",
  },
  {
    icon: Users,
    title: 'A partner, not a ticket number.',
    description:
      "You get a dedicated team that knows your business — not a revolving door of different technicians.",
  },
]

export default function WhyNSS() {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: '#F4F6F8' }} aria-label="Why North Stream Systems">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1E3A5F' }}>
            IT support that actually supports you.
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#6B7280' }}>
            We built NSS around the things that matter most to growing businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className="bg-white rounded-xl p-8 shadow-sm border-l-4"
                style={{ borderLeftColor: '#AED6F1' }}
              >
                <div className="w-14 h-14 rounded-xl bg-surface flex items-center justify-center mb-5">
                  <Icon size={26} style={{ color: '#2E86C1' }} />
                </div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: '#1E3A5F' }}>{pillar.title}</h3>
                <p className="leading-relaxed" style={{ color: '#6B7280' }}>{pillar.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
