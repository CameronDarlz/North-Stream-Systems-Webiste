import type { Metadata } from 'next'
import Link from 'next/link'
import {
  MonitorCheck,
  ShieldCheck,
  Cloud,
  Server,
  HardDrive,
  Wifi,
  Lightbulb,
} from 'lucide-react'
import { type LucideIcon } from 'lucide-react'
import ServiceTooltipButton from '@/components/services/ServiceTooltipButton'

export const metadata: Metadata = {
  title: 'Services',
}

interface Service {
  icon: LucideIcon
  name: string
  description: string
}

const services: Service[] = [
  {
    icon: MonitorCheck,
    name: 'Managed IT Support',
    description:
      'Your technology needs constant attention — we provide it. Our helpdesk is staffed by experienced engineers who respond fast and fix things properly. Alongside reactive support, we proactively monitor your systems around the clock to catch issues before your team even notices them. No more scrambling when something breaks.',
  },
  {
    icon: ShieldCheck,
    name: 'Cybersecurity & Compliance',
    description:
      'Cyber threats are not going away, and SMBs are increasingly in the crosshairs. We implement layered, enterprise-grade security controls — from endpoint protection to email filtering to access management — and help you stay aligned with frameworks like Cyber Essentials. Secure by default, not as an afterthought.',
  },
  {
    icon: Cloud,
    name: 'Microsoft 365 Management',
    description:
      "Microsoft 365 is powerful, but only if it's configured correctly and kept secure. We handle everything: licence management, security hardening, Teams and SharePoint setup, and ongoing administration. You get the full value of your M365 investment without the complexity of managing it yourself.",
  },
  {
    icon: Server,
    name: 'Cloud Infrastructure & Migration',
    description:
      'Whether you\'re moving from on-premise servers, rationalising existing cloud spend, or building cloud-native from the start — we plan and execute migrations that minimise disruption and maximise efficiency. We manage your cloud infrastructure on an ongoing basis so it stays performant, secure, and cost-effective.',
  },
  {
    icon: HardDrive,
    name: 'Backup & Disaster Recovery',
    description:
      "Data loss is not just inconvenient — it can be catastrophic. We design and implement backup strategies that are appropriate to your business, and we test them regularly so you know they'll work when it matters. From ransomware recovery to accidental deletion, we have you covered.",
  },
  {
    icon: Wifi,
    name: 'Network & Connectivity',
    description:
      "A slow or unreliable network costs you more than you realise. We design, install, and manage network infrastructure that's fit for purpose — whether that's a single office, multiple sites, or a hybrid workforce. Secure Wi-Fi, VPNs, firewalls, and connectivity solutions built around how your business actually works.",
  },
  {
    icon: Lightbulb,
    name: 'IT Consultancy & Projects',
    description:
      'Sometimes you need expert input to make a big decision or lead a complex project. Our consultancy service gives you access to senior engineering expertise without the overhead of hiring full-time. From technology strategy to vendor selection to project delivery — we help you make smart choices and see them through.',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface pt-16 pb-20 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            What We Do
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Services</h1>
          <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            Flexible, modular managed IT services — take what you need, scale as you grow.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon
              const isEven = index % 2 === 1

              return (
                <div
                  key={service.name}
                  className={`flex flex-col md:flex-row gap-8 md:gap-14 items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Icon block */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-surface border border-gray-100 flex items-center justify-center">
                      <Icon size={36} className="text-accent" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-primary mb-3">{service.name}</h2>
                    <p className="text-muted leading-relaxed mb-5">{service.description}</p>
                    <ServiceTooltipButton />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-surface py-16 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Not sure which services are right for you?
          </h2>
          <p className="text-muted mb-8">
            We&apos;ll help you figure out exactly what your business needs — no upsell, no pressure.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-primary text-white font-semibold px-7 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Let&apos;s Have a Chat
          </Link>
        </div>
      </section>
    </>
  )
}
