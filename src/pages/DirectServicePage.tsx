import { Helmet } from 'react-helmet-async'
import { getServiceBySlug } from '../data/servicesData'
import ProcessSection from '../components/ProcessSection'
import WhyUsSection from '../components/WhyUsSection'
import FAQSection from '../components/FAQSection'
import { Link } from 'react-router-dom'

interface DirectServicePageProps {
  slug: string
}

export default function DirectServicePage({ slug }: DirectServicePageProps) {
  const service = getServiceBySlug(slug)

  if (!service) return (
    <div className="py-20 text-center">
      <h1 className="text-3xl font-bold text-[#112a44]">Service Not Found</h1>
      <Link to="/" className="mt-4 inline-block text-[#568d22]">Return Home</Link>
    </div>
  )

  return (
    <>
      <Helmet>
        <title>{service.title}</title>
        <meta name="description" content={service.metaDesc} />
      </Helmet>

      <section className="bg-[#112a44] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{service.heroTitle}</h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">{service.heroSubtitle}</p>
            <a
              href="tel:9188566554"
              className="inline-flex items-center gap-2 bg-[#fdd20a] text-[#112a44] font-bold px-8 py-4 rounded-lg text-lg hover:bg-[#f76a0c] hover:text-white transition-colors"
            >
              Schedule Service Today
            </a>
          </div>
          <div>
            <img src={service.heroImage} alt={service.heroTitle} className="rounded-xl shadow-2xl w-full object-cover" />
          </div>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 flex flex-col gap-16">
          {service.sections.map((section, i) => (
            <div key={i} className={`grid gap-10 items-center ${section.image ? 'lg:grid-cols-2' : 'grid-cols-1'}`}>
              <div className={section.image && i % 2 !== 0 ? 'lg:order-2' : ''}>
                <h2 className="text-2xl md:text-3xl font-bold text-[#112a44] mb-4">{section.heading}</h2>
                {section.content.split('\n\n').map((para, j) => (
                  <p key={j} className="text-gray-600 leading-relaxed mb-4">{para}</p>
                ))}
              </div>
              {section.image && (
                <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
                  <img src={section.image} alt={section.heading} className="rounded-xl shadow-md w-full object-cover" />
                </div>
              )}
            </div>
          ))}
        </div>
      </article>

      <WhyUsSection />
      <ProcessSection />
      <FAQSection faqs={service.faqs} />
    </>
  )
}
