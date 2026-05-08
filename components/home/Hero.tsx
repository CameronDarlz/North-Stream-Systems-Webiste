'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-white"
      aria-label="Hero section"
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `radial-gradient(circle, #D0D9E8 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      {/* Gradient overlay to fade out the dots toward the edges */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, white 85%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            Managed IT for UK Business
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="text-5xl md:text-7xl font-bold text-primary leading-[1.05] tracking-tight mb-6"
        >
          Steady. Secure.{' '}
          <span className="text-accent">Scalable.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Managed IT services built for UK businesses that are serious about growth.
          We handle your technology so you can focus on what you do best.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-primary text-white font-semibold text-base px-8 py-3.5 rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
          >
            Talk to Us
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center border-2 border-primary text-primary font-semibold text-base px-8 py-3.5 rounded-lg hover:bg-surface transition-colors"
          >
            Our Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
