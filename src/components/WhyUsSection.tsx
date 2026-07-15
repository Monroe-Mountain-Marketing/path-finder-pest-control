const reasons = [
  { title: 'Experienced Exterminators', desc: 'Our trained Tulsa exterminators use proven pest treatment methods to remove pests safely and effectively.' },
  { title: 'Residential & Commercial Pest Control', desc: 'We provide reliable residential and commercial pest control services tailored for homes and businesses.' },
  { title: 'Thorough Pest Inspection', desc: 'Every service begins with a detailed pest inspection to identify pests, entry points, and infestation levels.' },
  { title: 'Safe Pest Treatments', desc: 'We use safe, effective pest control treatments designed to protect families, pets, and property.' },
  { title: 'Long-Term Prevention', desc: 'Our pest prevention strategies help keep homes and businesses pest-free throughout every season.' },
]

export default function WhyUsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <p className="text-[#f76a0c] uppercase text-sm font-semibold tracking-widest mb-2">WHY CHOOSE US</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#112a44] mb-6">
              Why We Are The Best Pest Control<br />Service Provider in Tulsa
            </h2>
            <div className="flex flex-col gap-5">
              {reasons.map((r) => (
                <div key={r.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#f76a0c] rounded flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#112a44] mb-1">{r.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right - image */}
          <div className="relative">
            <img
              src="/images/why-us-team.jpg"
              alt="Pathfinder Pest Control employee spraying for pest treatment"
              width={900}
              height={675}
              className="rounded-xl w-full h-auto object-cover shadow-lg"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-[#faf8ee] rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-[#112a44] mb-3">
            Schedule Your Integrated Pest Management in Tulsa Today
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Stop searching for pest control near me Tulsa and choose real protection. With upfront pricing, licensed expertise and guaranteed results, we are Tulsa's Pest control contractor.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:9188566554"
              className="inline-flex items-center justify-center gap-2 bg-[#fdd20a] text-[#112a44] font-bold px-8 py-3 rounded-lg hover:bg-[#f76a0c] hover:text-white transition-colors"
            >
              CALL NOW
            </a>
            <span className="inline-flex items-center justify-center font-bold text-[#f76a0c] text-sm">
              Best Exterminator In Tulsa
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
