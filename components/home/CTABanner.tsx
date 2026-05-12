import Link from 'next/link'

export default function CTABanner() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-24"
      style={{ backgroundColor: '#1E3A5F' }}
      aria-label="Call to action"
    >
      {/* Diagonal stripe texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            rgba(255,255,255,0.03) 0px,
            rgba(255,255,255,0.03) 1px,
            transparent 1px,
            transparent 12px
          )`,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
          Ready to make IT one less thing to worry about?
        </h2>
        <p className="text-lg leading-relaxed mb-8 max-w-xl mx-auto" style={{ color: '#AED6F1' }}>
          Let&apos;s have a conversation about where your business is and where you want to go.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center bg-white hover:bg-[#AED6F1] font-semibold text-base px-8 py-4 rounded-lg transition-colors shadow-sm"
          style={{ color: '#1E3A5F' }}
        >
          Book a Free Consultation
        </Link>
      </div>
    </section>
  )
}
