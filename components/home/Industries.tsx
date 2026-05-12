import { Heart, Briefcase, HardHat, ShoppingBag } from 'lucide-react'
import { type LucideIcon } from 'lucide-react'

interface Industry {
  icon: LucideIcon
  title: string
  body: string
}

const industries: Industry[] = [
  {
    icon: Heart,
    title: 'Healthcare & Social Care',
    body: "CQC-aware IT support built around the needs of care providers. We understand the compliance pressures, the remote working realities, and the absolute importance of reliability when your clients depend on your team.",
  },
  {
    icon: Briefcase,
    title: 'Professional Services',
    body: "Fast, secure IT for accountants, solicitors, financial advisers, and consultancies. We protect sensitive client data, keep your team productive, and ensure you stay compliant with regulatory requirements.",
  },
  {
    icon: HardHat,
    title: 'Construction & Trades',
    body: "IT that works on-site and in the office. From mobile device management to reliable connectivity across locations — we keep your project teams connected and your business data secure.",
  },
  {
    icon: ShoppingBag,
    title: 'Retail & Hospitality',
    body: "From EPOS systems to guest Wi-Fi to cybersecurity — we keep your customer-facing technology running without interruption, so your team can focus on delivering great service.",
  },
]

export default function Industries() {
  return (
    <section className="py-20 bg-white" aria-label="Industries we serve">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1E3A5F' }}>
            Built for the businesses that keep the UK running.
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
            We understand your sector — and the IT challenges that come with it.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {industries.map((ind) => {
            const Icon = ind.icon
            return (
              <div key={ind.title} className="flex gap-5 p-8 bg-surface rounded-2xl">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: '#EBF5FB' }}
                >
                  <Icon size={24} style={{ color: '#2E86C1' }} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#1E3A5F' }}>
                    {ind.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#374151' }}>
                    {ind.body}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
