const stats = [
  { value: '24/7', label: 'Support Coverage' },
  { value: '<1hr', label: 'Average Response Time' },
  { value: '100%', label: 'UK-Based Team' },
  { value: 'CE', label: 'Cyber Essentials Aligned' },
]

export default function SocialProofBar() {
  return (
    <section className="bg-surface py-10 border-y border-gray-200" aria-label="Trust statistics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-muted uppercase tracking-wider mb-8">
          Trusted by SMBs across North Wales and beyond
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-gray-200">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center px-6 py-2">
              <span className="text-3xl md:text-4xl font-bold text-primary mb-1">
                {stat.value}
              </span>
              <span className="text-sm text-muted leading-snug">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
