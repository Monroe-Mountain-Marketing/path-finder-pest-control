import { useParams, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { getSAPBySlug } from '../data/sapData'
import ProcessSection from '../components/ProcessSection'
import FAQSection from '../components/FAQSection'
import { Link } from 'react-router-dom'

export default function SAPPage() {
  const { city } = useParams<{ city: string }>()
  const sap = getSAPBySlug(city || '')

  if (!sap) return <Navigate to="/" replace />

  return (
    <>
      <Helmet>
        <title>{sap.title}</title>
        <meta name="description" content={sap.metaDesc} />
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[400px] flex items-center">
        <img
          src={sap.heroImage}
          alt={sap.city}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#112a44]/80" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 text-white">
          <p className="text-[#fdd20a] uppercase text-sm font-semibold tracking-widest mb-2">PEST CONTROL IN</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{sap.city}, Oklahoma</h1>
          <p className="text-gray-200 text-lg mb-2">Zip Code: {sap.zip}</p>
          <a
            href="tel:9188566554"
            className="inline-flex items-center gap-2 bg-[#fdd20a] text-[#112a44] font-bold px-8 py-3 rounded-lg hover:bg-[#f76a0c] hover:text-white transition-colors mt-4"
          >
            Call +1 918-856-6554
          </a>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#112a44] mb-6">
            Professional Pest Control in {sap.city}, OK
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-8">{sap.intro}</p>

          {/* Services grid */}
          <h3 className="text-xl font-bold text-[#112a44] mb-4">Services We Provide in {sap.city}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {sap.services.map((s) => (
              <div key={s} className="flex items-center gap-2 bg-[#faf8ee] rounded-lg px-4 py-3">
                <div className="w-6 h-6 bg-[#f76a0c] rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-[#112a44]">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f76a0c] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Schedule Pest Control in {sap.city} Today</h2>
          <p className="text-green-100 mb-8">
            Stop searching for pest control near me. Contact Pathfinder Pest Control for reliable service in {sap.city}, Oklahoma.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9188566554"
              className="inline-flex items-center justify-center gap-2 bg-[#fdd20a] text-[#112a44] font-bold px-8 py-4 rounded-lg text-lg hover:bg-white transition-colors"
            >
              +1 918-856-6554
            </a>
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-[#f76a0c] transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      <ProcessSection />
      <FAQSection faqs={sap.faqs} title={`Pest Control FAQ — ${sap.city}`} />
    </>
  )
}
