import { useParams, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { getServiceBySlug } from '../data/servicesData'
import ProcessSection from '../components/ProcessSection'
import WhyUsSection from '../components/WhyUsSection'
import FAQSection from '../components/FAQSection'

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>()
  const service = getServiceBySlug(slug || '')

  if (!service) return <Navigate to="/" replace />

  return (
    <>
      <Helmet>
        <title>{service.title}</title>
        <meta name="description" content={service.metaDesc} />
      </Helmet>

      {/* Hero */}
      <section className="bg-[#112a44] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2">
            <p className="text-[#fdd20a] uppercase text-sm font-semibold tracking-widest mb-3">PEST CONTROL EXPERTS</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{service.heroTitle}</h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">{service.heroSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:9188566554"
                className="inline-flex items-center gap-2 bg-[#fdd20a] text-[#112a44] font-bold px-8 py-4 rounded-lg text-lg hover:bg-[#f76a0c] hover:text-white transition-colors"
              >
                Schedule Service Today
              </a>
            </div>
          </div>
          <div className="lg:order-1">
            <img
              src={service.heroImage}
              alt={service.heroTitle}
              className="rounded-xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <article className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 flex flex-col gap-16">
          {service.sections.map((section, i) => (
            <div key={i} className="grid grid-cols-1 gap-10 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#112a44] mb-4">{section.heading}</h2>
                {section.content.split('\n\n').map((para, j) => (
                  <p key={j} className="text-gray-600 leading-relaxed mb-4">{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </article>

      {/* CTA */}
      <section className="bg-[#f76a0c] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Solve Your Pest Problem?</h2>
          <p className="text-green-100 mb-8 text-lg">
            Contact Pathfinder Pest Control today for a free inspection and quote. Our licensed technicians are ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9188566554"
              className="inline-flex items-center justify-center gap-2 bg-[#fdd20a] text-[#112a44] font-bold px-8 py-4 rounded-lg text-lg hover:bg-white transition-colors"
            >
              +1 918-856-6554
            </a>
            <a
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-[#f76a0c] transition-colors"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </section>

      <WhyUsSection />
      <ProcessSection />
      <FAQSection faqs={service.faqs} />
    </>
  )
}
