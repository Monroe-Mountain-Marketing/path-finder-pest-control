import { Helmet } from 'react-helmet-async'
import ProcessSection from '../components/ProcessSection'
import WhyUsSection from '../components/WhyUsSection'
import FAQSection from '../components/FAQSection'
import { Link } from 'react-router-dom'

const faqs = [
  { question: 'How do I get rid of gophers permanently?', answer: 'Permanent removal requires identifying active tunnels and using professional trapping or targeted control methods. Our technicians locate all active burrows and apply proven removal techniques followed by prevention recommendations.' },
  { question: 'What causes gopher infestations?', answer: 'Gophers are attracted to properties with fertile soil, abundant plant roots, and vegetation. Lawns with well-established grass root systems and gardens with root vegetables are particularly attractive to gophers.' },
  { question: 'What is the best method for gopher control?', answer: 'Professional trapping with proper placement in active tunnels is the most effective method for gopher control. Our technicians are trained to identify active tunnels and place traps where they will be most effective.' },
  { question: 'How quickly can gophers damage my yard?', answer: 'A single gopher can create an extensive tunnel network within days. Left untreated, gopher activity can destroy a lawn within weeks, damaging grass roots, underground irrigation, and landscape plants.' },
  { question: 'Does vinegar get rid of gophers?', answer: 'No, vinegar and other home remedies are not effective for eliminating established gopher infestations. Professional control methods are required for reliable results.' },
  { question: 'How can I prevent gophers from returning?', answer: 'After removal, we recommend monitoring for fresh soil mounds, maintaining healthy lawn roots, and scheduling follow-up inspections. Regular lawn maintenance also reduces conditions attractive to gophers.' },
]

export default function GopherRemovalPage() {
  return (
    <>
      <Helmet>
        <title>Professional Gopher Removal in Tulsa OK | Pathfinder Pest Control</title>
        <meta name="description" content="Pathfinder Pest Control offers reliable gopher removal services in Tulsa, OK. We identify active burrows, remove gophers, and protect your landscape." />
      </Helmet>

      {/* Hero */}
      <section className="bg-[#112a44] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2">
            <p className="text-[#fdd20a] uppercase text-sm font-semibold tracking-widest mb-3">GOPHER CONTROL EXPERTS</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Professional Gopher Removal in Tulsa OK
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Pathfinder Pest Control offers reliable gopher removal services in Tulsa, OK. We identify active burrows, remove gophers, and help protect your property from future infestations with effective pest control solutions designed for Tulsa homes and landscapes.
            </p>
            <a
              href="tel:9189259658"
              className="inline-flex items-center gap-2 bg-[#fdd20a] text-[#112a44] font-bold px-8 py-4 rounded-lg text-lg hover:bg-[#f76a0c] hover:text-white transition-colors"
            >
              Schedule Gopher Removal Today
            </a>
          </div>
          <div className="lg:order-1">
            <img
              src="/images/gopher.jpg"
              alt="Gopher removal Tulsa"
              className="rounded-xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Gophers may seem small, but their burrowing activity can quickly ruin yards, damage irrigation systems, and create dangerous sinkholes in lawns. Our trained pest control specialists identify active tunnels and apply proven removal methods designed to stop infestations and prevent future problems.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            If you are noticing fresh soil mounds or collapsing ground in your yard, professional gopher removal may be necessary to restore your property.
          </p>
        </div>
      </section>

      {/* Signs section */}
      <section className="py-16 bg-[#faf8ee]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#112a44] mb-6">Signs You May Have a Gopher Problem</h2>
          <p className="text-gray-600 mb-6">
            Gophers spend most of their time underground, so homeowners often do not see the animals themselves. Instead, the first signs appear in the yard or garden.
          </p>
          <ul className="flex flex-col gap-3 mb-8">
            {[
              'Fresh crescent-shaped dirt mounds in the lawn',
              'Soft or sinking areas in the soil',
              'Damaged plant roots and dying grass patches',
              'Underground irrigation line damage',
              'Visible tunnel openings near landscaping',
            ].map((sign) => (
              <li key={sign} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#f76a0c] rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-600">{sign}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600">
            Gophers constantly dig new tunnels as they search for roots and vegetation. In Tulsa's soil conditions, these tunnels can spread quickly across a yard. If left untreated, a single gopher can create an extensive tunnel network that continues to expand.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#112a44] mb-10">Our Professional Gopher Removal Process</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { step: 'Property Inspection', desc: 'Our technician inspects your yard to locate active burrows, soil mounds, and feeding areas. This helps determine the size of the infestation.' },
              { step: 'Tunnel Identification', desc: 'We map the active tunnel system to understand how the gopher is moving underground.' },
              { step: 'Targeted Removal', desc: 'Specialized removal methods are used to eliminate the gopher without causing unnecessary disruption to your property.' },
              { step: 'Prevention Strategy', desc: 'After removal, we provide recommendations to help prevent future infestations and reduce attractants around the yard.' },
            ].map((item) => (
              <div key={item.step} className="bg-[#faf8ee] rounded-xl p-6">
                <div className="w-8 h-8 bg-[#f76a0c] rounded-full flex items-center justify-center mb-3">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#112a44] mb-2">{item.step}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why DIY fails */}
      <section className="py-16 bg-[#faf8ee]">
        <div className="max-w-5xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#112a44] mb-6">Why DIY Gopher Control Often Fails</h2>
            <p className="text-gray-600 mb-6">
              Many homeowners attempt DIY gopher control using store-bought repellents or traps. Unfortunately, these methods rarely solve the problem.
            </p>
            <p className="text-gray-600 mb-6">
              Gophers are highly territorial and intelligent animals. They can quickly avoid ineffective traps or simply dig new tunnels away from treated areas.
            </p>
            <ul className="flex flex-col gap-2">
              {['Incorrect trap placement', 'Treating inactive tunnels', 'Missing secondary burrow systems', 'Temporary results without elimination'].map((issue) => (
                <li key={issue} className="flex items-center gap-2 text-gray-600 text-sm">
                  <span className="text-[#f76a0c]">✗</span> {issue}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img
              src="/images/gopher.jpg"
              alt="Emergency gopher removal Tulsa"
              className="rounded-xl shadow-md w-full"
            />
          </div>
        </div>
      </section>

      <WhyUsSection />
      <ProcessSection />
      <FAQSection faqs={faqs} title="Gopher Removal FAQ" />
    </>
  )
}
