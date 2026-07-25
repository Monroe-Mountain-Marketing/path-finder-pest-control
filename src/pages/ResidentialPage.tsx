import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import ProcessSection from '../components/ProcessSection'
import WhyUsSection from '../components/WhyUsSection'
import FAQSection from '../components/FAQSection'
import AreasSection from '../components/AreasSection'

const services = [
  {
    title: 'Bed Bug Removal',
    desc: 'Complete elimination using heat treatment or targeted chemical applications that reach every life stage.',
    path: '/service/bed-bug-removal',
    img: '/images/2025-10-inspection-for-bed-bugs.jpg',
  },
  {
    title: 'Rodent Control',
    desc: 'Remove mice and rats, seal entry points, and prevent future infestations from taking hold.',
    path: '/service/rodent-control',
    img: '/images/rodents.jpeg',
  },
  {
    title: 'Cockroach Extermination',
    desc: 'Break the roach life cycle with gel baits and IGRs that eliminate colonies at the source.',
    path: '/service/cockroach-extermination',
    img: '/images/cockroach.jpeg',
  },
  {
    title: 'Flea Control',
    desc: 'Treat homes and yards to protect pets and families from recurring flea infestations.',
    path: '/service/flea-control',
    img: '/images/flea.jpeg',
  },
  {
    title: 'Mosquito Control',
    desc: 'Recurring yard treatments that reduce mosquito populations and make outdoor spaces enjoyable.',
    path: '/service/mosquito-control',
    img: '/images/mosquitos.jpeg',
  },
  {
    title: 'Termite Treatment',
    desc: 'Soil barriers, bait systems, and annual monitoring protect your home\'s structural integrity.',
    path: '/service/termite-treatment',
    img: '/images/termite.jpeg',
  },
  {
    title: 'Spider Exterminator',
    desc: 'Safe removal of brown recluse, black widow, and other nuisance spiders with entry point sealing.',
    path: '/service/spider-exterminator',
    img: '/images/spiders.jpeg',
  },
  {
    title: 'Wasp & Hornet Elimination',
    desc: 'Professional nest removal and void treatment so stinging insects stay away from your family.',
    path: '/service/wasp-hornet-elimination',
    img: '/images/wasps.jpeg',
  },
]

const benefits = [
  { title: 'Protect Your Family & Pets', desc: 'Pests carry bacteria, allergens, and diseases. Professional treatment eliminates health risks before they affect the people and animals you love.' },
  { title: 'Prevent Structural Damage', desc: 'Termites, carpenter ants, and rodents can cause thousands of dollars in damage. Early intervention protects your biggest investment.' },
  { title: 'Year-Round Peace of Mind', desc: 'Oklahoma\'s climate means pest pressure every season. A recurring treatment plan keeps your home protected 12 months a year.' },
  { title: 'Safe, Family-Friendly Products', desc: 'We use EPA-registered products applied according to label, with re-entry intervals that keep your household safe.' },
  { title: 'Licensed & Experienced', desc: 'Our certified technicians understand Oklahoma\'s specific pest species and use targeted methods — not one-size-fits-all spraying.' },
]

const faqs = [
  { question: 'How often should I have my home treated for pests?', answer: 'Most Tulsa homes benefit from quarterly pest control service. Homes with previous infestations, pets, or surrounded by wooded areas may need monthly or bi-monthly service.' },
  { question: 'Are your treatments safe for children and pets?', answer: 'Yes. We use EPA-registered products and advise you on any re-entry intervals. Most treatments are safe once dry (typically 30–60 minutes). We will explain any precautions specific to your service.' },
  { question: 'Do I need to leave my home during treatment?', answer: 'For standard interior treatments, we ask that you and your pets vacate for 1–2 hours while we work and let surfaces dry. We\'ll confirm specific requirements when you schedule.' },
  { question: 'What pests do you treat in residential homes?', answer: 'We treat all common Oklahoma home pests including ants, cockroaches, spiders (including brown recluse and black widow), bed bugs, fleas, termites, mosquitoes, wasps, rodents, and more.' },
  { question: 'Do you offer a satisfaction guarantee?', answer: 'Yes. We stand behind our work. If pests return between scheduled visits, contact us and we will re-treat at no additional charge.' },
  { question: 'How do I prepare for a pest control visit?', answer: 'Generally, clear countertops of food and small appliances, store pet food in sealed containers, and ensure access to all treatment areas including under sinks and behind appliances. We\'ll send specific prep instructions with your confirmation.' },
]

export default function ResidentialPage() {
  return (
    <>
      <Helmet>
        <title>Residential Pest Control Tulsa OK | Pathfinder Pest Control</title>
        <meta name="description" content="Professional residential pest control in Tulsa, Oklahoma. Pathfinder Pest Control protects Tulsa homes from ants, roaches, termites, bed bugs, rodents, and more." />
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[560px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/residential.jpeg)' }} />
        <div className="absolute inset-0 bg-[#112a44]/88" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="text-white">
            <p className="text-[#fdd20a] uppercase text-sm font-semibold tracking-widest mb-3">HOME PROTECTION</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Residential Pest Control in Tulsa, Oklahoma
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Your home is your family's sanctuary. Pathfinder Pest Control provides safe, effective residential pest control services designed to eliminate infestations and keep your Tulsa home pest-free year-round.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:9189259658" className="inline-flex items-center justify-center gap-2 bg-[#fdd20a] text-[#112a44] font-bold px-8 py-4 rounded-lg text-lg hover:bg-[#f76a0c] hover:text-white transition-colors">
                Call +1 918-925-9658
              </a>
              <Link to="/contact-us" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-[#112a44] transition-colors">
                Get a Free Inspection
              </Link>
            </div>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '500+', label: 'Homes Protected' },
              { value: '50+', label: 'Five-Star Reviews' },
              { value: '100%', label: 'Satisfaction Guarantee' },
              { value: '24hr', label: 'Response Time' },
            ].map(s => (
              <div key={s.label} className="bg-white/10 rounded-xl p-5 text-center text-white border border-white/20">
                <div className="text-3xl font-bold text-[#fdd20a]">{s.value}</div>
                <div className="text-sm text-gray-300 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why residential pest control */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#f76a0c] uppercase text-sm font-semibold tracking-widest mb-2">WHY IT MATTERS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#112a44] mb-4">Why Tulsa Homeowners Choose Professional Pest Control</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Pest problems don't solve themselves. Oklahoma's warm climate creates year-round pressure from dozens of pest species that threaten your family's health, comfort, and home value.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(b => (
              <div key={b.title} className="bg-[#faf8ee] rounded-xl p-6">
                <div className="w-8 h-8 bg-[#f76a0c] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#112a44] mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
            {/* CTA card */}
            <div className="bg-[#112a44] rounded-xl p-6 text-white flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-xl mb-2">Ready to Protect Your Home?</h3>
                <p className="text-gray-300 text-sm">Schedule a free inspection and get a same-day quote for your Tulsa home.</p>
              </div>
              <Link to="/contact-us" className="mt-6 block text-center bg-[#fdd20a] text-[#112a44] font-bold px-4 py-3 rounded-lg hover:bg-[#f76a0c] hover:text-white transition-colors">
                Schedule Inspection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[#faf8ee]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#f76a0c] uppercase text-sm font-semibold tracking-widest mb-2">OUR HOME SERVICES</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#112a44]">Residential Pest Control Services We Provide</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(s => (
              <Link key={s.path} to={s.path} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
                <img src={s.img} alt={s.title} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-4">
                  <h3 className="font-bold text-[#112a44] mb-1 group-hover:text-[#f76a0c] transition-colors">{s.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WhyUsSection />
      <ProcessSection />
      <AreasSection />
      <FAQSection faqs={faqs} title="Residential Pest Control FAQ" />

      {/* Bottom CTA */}
      <section className="bg-[#f76a0c] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Protect Your Tulsa Home Today</h2>
          <p className="text-green-100 mb-8 text-lg">Same-day service available. Licensed technicians. 100% satisfaction guarantee.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:9189259658" className="inline-flex items-center justify-center bg-[#fdd20a] text-[#112a44] font-bold px-8 py-4 rounded-lg text-lg hover:bg-white transition-colors">
              +1 918-925-9658
            </a>
            <Link to="/contact-us" className="inline-flex items-center justify-center border-2 border-white text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-[#f76a0c] transition-colors">
              Request a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
