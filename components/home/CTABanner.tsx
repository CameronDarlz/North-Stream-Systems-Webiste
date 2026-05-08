import Link from 'next/link'

export default function CTABanner() {
  return (
    <section
      className="bg-primary py-20 md:py-24"
      aria-label="Call to action"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
          Ready to make IT one less thing to worry about?
        </h2>
        <p className="text-light-accent text-lg leading-relaxed mb-8 max-w-xl mx-auto">
          Let&apos;s have a conversation about where your business is and where you want to go.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center bg-white text-primary font-semibold text-base px-8 py-3.5 rounded-lg hover:bg-light-accent transition-colors shadow-sm"
        >
          Book a Free Consultation
        </Link>
      </div>
    </section>
  )
}
