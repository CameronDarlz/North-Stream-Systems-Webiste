const stats = [
  { value: '24/7', label: 'Support Coverage' },
  { value: '<1hr', label: 'Average Response Time' },
  { value: '100%', label: 'UK-Based Team' },
  { value: 'CE', label: 'Cyber Essentials Aligned' },
]

export default function SocialProofBar() {
  return (
    <section
      className="py-10 border-y-2"
      style={{ backgroundColor: '#1E3A5F', borderColor: '#2E86C1' }}
      aria-label="Trust statistics"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-wider mb-8 text-white/80">
          Trusted by SMBs across North Wales and beyond
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center px-6 py-2">
              <span
                className="text-3xl md:text-4xl font-bold mb-1"
                style={{ color: '#AED6F1' }}
              >
                {stat.value}
              </span>
              <span className="text-sm text-white leading-snug">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
