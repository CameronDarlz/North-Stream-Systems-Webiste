'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Monitor,
  Shield,
  Cloud,
  Server,
  HardDrive,
  Network,
  ArrowRight,
} from 'lucide-react'
import { type LucideIcon } from 'lucide-react'

interface ServiceCard {
  icon: LucideIcon
  name: string
  description: string
  href: string
  accent?: boolean
}

const services: ServiceCard[] = [
  {
    icon: Monitor,
    name: 'Managed IT Support',
    description: 'Proactive monitoring and helpdesk support so issues get fixed before they become problems.',
    href: '/services',
  },
  {
    icon: Shield,
    name: 'Cybersecurity & Compliance',
    description: 'Keep your business protected and audit-ready with layered, enterprise-grade security.',
    href: '/services',
  },
  {
    icon: Cloud,
    name: 'Microsoft 365 Management',
    description: 'Licencing, configuration, security hardening, and ongoing administration — fully handled.',
    href: '/services',
  },
  {
    icon: Server,
    name: 'Cloud Infrastructure & Migration',
    description: 'Move to the cloud with confidence. We plan, migrate, and manage your infrastructure end to end.',
    href: '/services',
  },
  {
    icon: HardDrive,
    name: 'Backup & Disaster Recovery',
    description: 'Your data, always recoverable. We implement and test backup solutions you can rely on.',
    href: '/services',
  },
  {
    icon: Network,
    name: 'Network & Connectivity',
    description: 'Reliable, secure networks designed around how your business actually operates.',
    href: '/services',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function ServicesPreview() {
  return (
    <section className="py-20 md:py-28 bg-white" aria-label="Services overview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Everything your business needs.{' '}
            <span className="text-accent">One trusted partner.</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            From helpdesk to cloud infrastructure — we cover the full IT stack for UK SMBs.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div key={service.name} variants={cardVariants}>
                <Link
                  href={service.href}
                  className="group flex flex-col h-full p-6 bg-white border border-gray-100 rounded-xl hover:border-accent hover:-translate-y-1 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center mb-4 group-hover:bg-light-accent/30 transition-colors">
                    <Icon size={22} className="text-accent" />
                  </div>
                  <h3 className="text-base font-semibold text-primary mb-2">{service.name}</h3>
                  <p className="text-sm text-muted leading-relaxed flex-1">{service.description}</p>
                  <div className="mt-4 text-accent text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight size={14} />
                  </div>
                </Link>
              </motion.div>
            )
          })}

          {/* More card */}
          <motion.div variants={cardVariants}>
            <Link
              href="/services"
              className="group flex flex-col items-center justify-center h-full p-6 bg-surface border border-dashed border-gray-200 rounded-xl hover:border-accent hover:-translate-y-1 transition-all duration-200 min-h-[180px]"
            >
              <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-3 group-hover:border-accent transition-colors">
                <ArrowRight size={20} className="text-muted group-hover:text-accent transition-colors" />
              </div>
              <span className="text-sm font-semibold text-muted group-hover:text-accent transition-colors">
                And more →
              </span>
              <span className="text-xs text-muted/70 mt-1">View all services</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
