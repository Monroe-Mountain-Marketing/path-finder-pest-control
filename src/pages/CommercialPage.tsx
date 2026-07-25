import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import ProcessSection from '../components/ProcessSection'
import FAQSection from '../components/FAQSection'

const industries = [
  { name: 'Restaurants & Food Service', icon: '🍽️', desc: 'Health code compliance, roach and rodent elimination, fly control, and pre-inspection preparation for food service establishments.' },
  { name: 'Office Buildings', icon: '🏢', desc: 'Discreet, after-hours treatment that keeps workspaces pest-free without disrupting operations or alarming employees and clients.' },
  { name: 'Retail & Shopping', icon: '🛍️', desc: 'Preventive programs that protect inventory, store fixtures, and customer experience from rodents, ants, and stored product pests.' },
  { name: 'Warehouses & Distribution', icon: '📦', desc: 'Large-scale rodent control, stored product pest programs, and perimeter treatments for high-volume storage and distribution facilities.' },
  { name: 'Healthcare & Medical', icon: '🏥', desc: 'Strict sanitation and pest-free environments for clinics, dental offices, and medical buildings where health standards are non-negotiable.' },
  { name: 'Hospitality & Hotels', icon: '🏨', desc: 'Bed bug inspection programs, discreet treatments, and guest-safe solutions that protect your reputation and star rating.' },
  { name: 'Multi-Family Housing', icon: '🏘️', desc: 'Unit-by-unit treatment programs and common area service for apartment complexes, condos, and rental properties.' },
  { name: 'Schools & Childcare', icon: '🏫', desc: 'Low-toxicity IPM programs designed to protect children while effectively managing pest populations in educational environments.' },
]

const services = [
  { title: 'Cockroach Elimination', desc: 'Restaurant-grade gel bait programs and IGRs for complete colony elimination.' },
  { title: 'Rodent Control', desc: 'Tamper-resistant bait stations, trapping, and full exclusion services.' },
  { title: 'Fly Control', desc: 'Source identification, drain treatments, and light traps for food service businesses.' },
  { title: 'Bed Bug Programs', desc: 'Inspection protocols and treatment solutions for hospitality and multi-family properties.' },
  { title: 'Ant Control', desc: 'Colony elimination for fire ants, odorous house ants, and pavement ants on commercial grounds.' },
  { title: 'Mosquito & Stinging Insects', desc: 'Perimeter treatments and nest removal for outdoor commercial spaces and parking areas.' },
  { title: 'Termite Protection', desc: 'Annual inspections, liquid barriers, and bait systems with documentation for property management.' },
  { title: 'Fumigation Services', desc: 'Full-structure fumigation for severe or widespread infestations that require complete elimination.' },
]

const faqs = [
  { question: 'Do you offer service contracts for businesses?', answer: 'Yes. We offer monthly, bi-monthly, and quarterly service contracts tailored to the needs and pest pressure of your facility. All contracts include detailed service documentation.' },
  { question: 'Can you service our business after hours?', answer: 'Yes. We offer flexible scheduling including early morning, evening, and weekend service to minimize disruption to your operations and customers.' },
  { question: 'Do you provide documentation for health inspections?', answer: 'Absolutely. We provide detailed service reports after every visit, including pest activity findings, treatments applied, and recommendations. This documentation supports health department inspections and audits.' },
  { question: 'How quickly can you respond to a commercial pest emergency?', answer: 'We prioritize commercial emergencies. Contact us and we will work to schedule same-day or next-day service for urgent situations that threaten your operations or compliance.' },
  { question: 'What is Integrated Pest Management (IPM)?', answer: 'IPM is a science-based approach that prioritizes non-chemical methods first and uses the least-toxic pesticides only when necessary. It reduces chemical exposure, lowers long-term costs, and is preferred for sensitive environments like food service and healthcare.' },
  { question: 'Are your services compliant with health codes?', answer: 'Yes. Our technicians are licensed by the Oklahoma Department of Agriculture and follow all applicable regulations. We use only EPA-registered products applied according to label directions, fully compliant with Oklahoma health and safety codes.' },
]

export default function CommercialPage() {
  return (
    <>
      <Helmet>
        <title>Commercial Pest Control Tulsa OK | Pathfinder Pest Control</title>
        <meta name="description" content="Professional commercial pest control in Tulsa, OK. Pathfinder Pest Control serves restaurants, offices, warehouses, healthcare, hotels, and multi-family properties." />
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[560px] flex items-center overflow-hidden text-white">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/commercial.jpeg)' }} />
        <div className="absolute inset-0 bg-[#112a44]/88" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-14 items-center w-full">
          <div>
            <p className="text-[#fdd20a] uppercase text-sm font-semibold tracking-widest mb-3">BUSINESS PROTECTION</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Commercial Pest Control in Tulsa, Oklahoma
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              A pest problem in your business isn't just a nuisance — it threatens your reputation, your compliance, and your bottom line. Pathfinder Pest Control delivers reliable, discreet commercial pest management tailored to your industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:9189259658" className="inline-flex items-center justify-center gap-2 bg-[#fdd20a] text-[#112a44] font-bold px-8 py-4 rounded-lg text-lg hover:bg-[#f76a0c] hover:text-white transition-colors">
                Call +1 918-925-9658
              </a>
              <Link to="/contact-us" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-[#112a44] transition-colors">
                Get a Business Quote
              </Link>
            </div>
          </div>
          {/* Feature list */}
          <div className="grid grid-cols-2 gap-4">
            {[
              'Licensed & Insured',
              'Service Contracts Available',
              'After-Hours Scheduling',
              'Health Code Compliant',
              'IPM-Based Programs',
              'Detailed Service Reports',
              'Same-Day Emergencies',
              'Discreet Service Vehicles',
            ].map(f => (
              <div key={f} className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-3 border border-white/15">
                <div className="w-5 h-5 bg-[#f76a0c] rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm text-gray-200 font-medium">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#f76a0c] uppercase text-sm font-semibold tracking-widest mb-2">INDUSTRIES WE SERVE</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#112a44] mb-4">Pest Control for Every Type of Tulsa Business</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We build customized pest management programs around the specific risks, regulations, and operational needs of your industry.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.map(ind => (
              <div key={ind.name} className="bg-[#faf8ee] rounded-xl p-5 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{ind.icon}</div>
                <h3 className="font-bold text-[#112a44] mb-2 text-sm">{ind.name}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[#faf8ee]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#f76a0c] uppercase text-sm font-semibold tracking-widest mb-2">OUR COMMERCIAL SERVICES</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#112a44]">What's Included in Our Commercial Programs</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(s => (
              <div key={s.title} className="bg-white rounded-xl p-5 shadow-sm">
                <div className="w-8 h-8 bg-[#112a44] rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-4 h-4 text-[#fdd20a]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#112a44] mb-1 text-sm">{s.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us for commercial */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-[#f76a0c] uppercase text-sm font-semibold tracking-widest mb-2">WHY PATHFINDER</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#112a44] mb-6">The Commercial Pest Control Standard Tulsa Businesses Expect</h2>
            <div className="flex flex-col gap-5">
              {[
                { title: 'Customized Service Plans', desc: 'No two businesses are alike. We assess your facility, identify pest pressure points, and build a program that matches your schedule and budget.' },
                { title: 'Integrated Pest Management', desc: 'We prioritize prevention and non-chemical solutions first, minimizing pesticide use and environmental impact while maintaining full effectiveness.' },
                { title: 'Detailed Documentation', desc: 'Every service visit is documented with findings, treatments applied, and recommendations — giving you the records you need for health inspections and audits.' },
                { title: 'Responsive Communication', desc: 'You\'ll always be able to reach us. We respond quickly to service requests, pest emergencies, and questions between scheduled visits.' },
              ].map(r => (
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
          <div className="bg-[#112a44] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Request a Commercial Quote</h3>
            <p className="text-gray-300 text-sm mb-6">Tell us about your business and we'll build a program that fits your facility, industry, and budget.</p>
            <div className="flex flex-col gap-3">
              <a href="tel:9189259658" className="block text-center bg-[#fdd20a] text-[#112a44] font-bold px-6 py-3 rounded-lg hover:bg-[#f76a0c] hover:text-white transition-colors">
                Call +1 918-925-9658
              </a>
              <Link to="/contact-us" className="block text-center border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-[#112a44] transition-colors">
                Request a Quote Online
              </Link>
            </div>
            <div className="mt-6 pt-6 border-t border-white/20 grid grid-cols-2 gap-4 text-center">
              {[
                { v: 'Flexible', l: 'Scheduling' },
                { v: 'Licensed', l: '& Insured' },
                { v: 'IPM', l: 'Approach' },
                { v: 'Documented', l: 'Service Reports' },
              ].map(s => (
                <div key={s.l}>
                  <div className="font-bold text-[#fdd20a]">{s.v}</div>
                  <div className="text-xs text-gray-400">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProcessSection />
      <FAQSection faqs={faqs} title="Commercial Pest Control FAQ" />

      {/* Bottom CTA */}
      <section className="bg-[#f76a0c] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Keep Your Tulsa Business Pest-Free</h2>
          <p className="text-green-100 mb-8 text-lg">Service contracts available. After-hours scheduling. Detailed documentation for every visit.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:9189259658" className="inline-flex items-center justify-center bg-[#fdd20a] text-[#112a44] font-bold px-8 py-4 rounded-lg text-lg hover:bg-white transition-colors">
              +1 918-925-9658
            </a>
            <Link to="/contact-us" className="inline-flex items-center justify-center border-2 border-white text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-[#f76a0c] transition-colors">
              Get a Business Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
