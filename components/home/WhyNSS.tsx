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
    <section className="py-20 md:py-28 bg-surface" aria-label="Why North Stream Systems">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            IT support that actually supports you.
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            We built NSS around the things that matter most to growing businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
              >
                <div className="w-14 h-14 rounded-xl bg-surface flex items-center justify-center mb-5">
                  <Icon size={26} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">{pillar.title}</h3>
                <p className="text-muted leading-relaxed">{pillar.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
