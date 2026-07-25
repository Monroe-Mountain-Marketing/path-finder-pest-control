import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import ProcessSection from '../components/ProcessSection'
import WhyUsSection from '../components/WhyUsSection'
import ReviewsSection from '../components/ReviewsSection'
import AreasSection from '../components/AreasSection'
import FAQSection from '../components/FAQSection'
import { submitLead } from '../utils/submitLead'

const services = [
  {
    title: 'Bed Bug Control',
    desc: 'We use heat treatments and targeted chemical applications to eliminate bed bugs from every life stage, providing lasting relief.',
    img: '/images/2025-10-inspection-for-bed-bugs.jpg',
    path: '/service/bed-bug-removal',
  },
  {
    title: 'Flea Control',
    desc: 'Pathfinder Pest Control removes fleas from homes and yards with effective treatments that protect pets and families from recurring infestations.',
    img: '/images/2025-10-flea.jpg',
    path: '/service/flea-control',
  },
  {
    title: 'Commercial Pest Control',
    desc: 'We deliver reliable commercial pest control services that help Tulsa businesses maintain clean, compliant, and pest-free environments.',
    img: '/images/2025-10-commercial-pest-control.jpg',
    path: '/service/commercial-pest-control',
  },
  {
    title: 'Mosquito Control',
    desc: 'Pathfinder Pest Control reduces mosquito populations around your property with treatments designed to make outdoor spaces safer and more comfortable.',
    img: '/images/mosquitos.jpeg',
    path: '/service/mosquito-control',
  },
  {
    title: 'Rodent Control',
    desc: 'We handle rodent problems by removing mice and rats, sealing entry points, and helping prevent future infestations in homes.',
    img: '/images/rodents.jpeg',
    path: '/service/rodent-control',
  },
  {
    title: 'Wasp & Hornet Control',
    desc: 'Pathfinder Pest Control safely removes wasp and hornet nests and reduces stinging insect activity around homes and businesses.',
    img: '/images/wasps.jpeg',
    path: '/service/wasp-hornet-elimination',
  },
]

const stats = [
  { value: '500+', label: 'Happy Customers' },
  { value: '220+', label: 'Successful Projects' },
  { value: '50+', label: 'Five Star Reviews' },
  { value: '100%', label: 'Satisfied Guarantee' },
]

const homeFaqs = [
  {
    question: 'What pests do you treat in Tulsa, Oklahoma?',
    answer: 'Pathfinder Pest Control provides professional pest control in Tulsa for ants, spiders, roaches, termites, bed bugs, rodents, wasps, and more. We customize treatment plans based on the specific pest problem and property type to ensure long-lasting results for homes and businesses throughout Tulsa.',
  },
  {
    question: 'How soon can I schedule a pest control service in Tulsa?',
    answer: 'We offer flexible scheduling to accommodate your needs. Contact us by phone or our online form and we can typically schedule service within 24–48 hours for most pest control needs in the Tulsa area.',
  },
  {
    question: 'Are your pest control treatments safe for families and pets?',
    answer: 'Yes. We use EPA-registered products and follow all safety protocols. Our technicians will advise you on any precautions needed after treatment, such as keeping pets away from treated areas until dry.',
  },
  {
    question: 'Do you offer bed bug extermination in Tulsa?',
    answer: 'Absolutely. We offer comprehensive bed bug inspection and extermination services in Tulsa and surrounding areas, including heat treatments and chemical treatments designed to eliminate all life stages of bed bugs.',
  },
]

export default function HomePage() {
  const [quickFormData, setQuickFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    smsConsent: false,
  })
  const [quickSubmitted, setQuickSubmitted] = useState(false)
  const [quickSubmitting, setQuickSubmitting] = useState(false)
  const [quickSubmitError, setQuickSubmitError] = useState('')

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setQuickSubmitting(true)
    setQuickSubmitError('')

    try {
      await submitLead(quickFormData)

      setQuickSubmitted(true)
      setQuickFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        smsConsent: false,
      })
    } catch (error) {
      setQuickSubmitError(error instanceof Error ? error.message : 'Unable to submit your request right now.')
    } finally {
      setQuickSubmitting(false)
    }
  }

  return (
    <>
      <Helmet>
        <title>Affordable Pest Control Tulsa OK | Pathfinder Pest Control</title>
        <meta name="description" content="Pathfinder Pest Control is a trusted local exterminator providing safe, effective pest control solutions for homes and businesses throughout Tulsa, Oklahoma." />
        <link rel="preload" as="image" href="/images/path-finder-hero.jpg" />
      </Helmet>

      {/* Hero */}
      <section
        className="relative min-h-[600px] flex items-center overflow-visible"
      >
        {/* Use a real image element so the browser can discover and prioritize LCP correctly. */}
        <img
          src="/images/path-finder-hero.jpg"
          alt="Pathfinder Pest Control truck in Tulsa"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: 'scaleX(-1)' }}
          width={1920}
          height={1080}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#112a44]/80" />
        <div className="relative max-w-7xl mx-auto px-4 pt-24 pb-40 grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="text-white">
            <p className="text-[#fdd20a] uppercase text-sm font-semibold tracking-widest mb-3">Tulsa's Trusted Exterminators</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Affordable Pest Control <span className="text-[#fdd20a]">Tulsa OK</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-lg">
              Pathfinder Pest Control is a trusted local exterminator providing safe, effective pest control solutions for homes and businesses throughout Tulsa, Oklahoma.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:9188566554"
                className="inline-flex items-center justify-center gap-2 bg-[#fdd20a] text-[#112a44] font-bold px-8 py-4 rounded-lg text-lg hover:bg-[#f76a0c] hover:text-white transition-colors"
              >
                Call Now +1 918-504-5245
              </a>
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-[#112a44] transition-colors"
              >
                Get a Free Inspection
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
              <p className="text-[#f76a0c] uppercase text-xs font-semibold tracking-widest mb-2">Quick Contact</p>
              <h2 className="text-2xl font-bold text-[#112a44] mb-2">Get A Fast Response</h2>
              <p className="text-gray-600 text-sm mb-5">Send your info and our team will contact you shortly.</p>

              {quickSubmitted ? (
                <div className="bg-[#f76a0c]/10 border border-[#f76a0c] rounded-xl p-4 text-center">
                  <h3 className="text-lg font-bold text-[#112a44] mb-1">Request Sent</h3>
                  <p className="text-gray-700 text-sm">Thanks, we will reach out as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} className="flex flex-col gap-3">
                  <input
                    type="text"
                    required
                    value={quickFormData.name}
                    onChange={(e) => setQuickFormData({ ...quickFormData, name: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#f76a0c] focus:ring-1 focus:ring-[#f76a0c]"
                    placeholder="Full Name *"
                  />
                  <input
                    type="email"
                    required
                    value={quickFormData.email}
                    onChange={(e) => setQuickFormData({ ...quickFormData, email: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#f76a0c] focus:ring-1 focus:ring-[#f76a0c]"
                    placeholder="Email *"
                  />
                  <input
                    type="tel"
                    required
                    value={quickFormData.phone}
                    onChange={(e) => setQuickFormData({ ...quickFormData, phone: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#f76a0c] focus:ring-1 focus:ring-[#f76a0c]"
                    placeholder="Phone *"
                  />
                  <select
                    value={quickFormData.service}
                    onChange={(e) => setQuickFormData({ ...quickFormData, service: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#f76a0c] focus:ring-1 focus:ring-[#f76a0c]"
                  >
                    <option value="">Service Needed</option>
                    <option>Bed Bug Removal</option>
                    <option>Rodent Control</option>
                    <option>Termite Treatment</option>
                    <option>Mosquito Control</option>
                    <option>Cockroach Extermination</option>
                    <option>Flea Control</option>
                    <option>Gopher Removal</option>
                    <option>Commercial Pest Control</option>
                    <option>General Pest Control</option>
                    <option>Other</option>
                  </select>
                  <textarea
                    rows={3}
                    value={quickFormData.message}
                    onChange={(e) => setQuickFormData({ ...quickFormData, message: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#f76a0c] focus:ring-1 focus:ring-[#f76a0c] resize-none"
                    placeholder="Message (optional)"
                  />
                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="quickSmsConsent"
                      required
                      checked={quickFormData.smsConsent}
                      onChange={(e) => setQuickFormData({ ...quickFormData, smsConsent: e.target.checked })}
                      className="mt-0.5 w-4 h-4 accent-[#f76a0c] flex-shrink-0 cursor-pointer"
                    />
                    <label htmlFor="quickSmsConsent" className="text-xs text-gray-500 leading-relaxed cursor-pointer">
                      I agree to receive SMS and email communications from Pathfinder Pest Control. Message and data rates may apply. Reply STOP to opt out.
                    </label>
                  </div>
                  {quickSubmitError ? (
                    <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                      {quickSubmitError}
                    </p>
                  ) : null}
                  <button
                    type="submit"
                    disabled={quickSubmitting}
                    className="bg-[#fdd20a] text-[#112a44] font-bold px-6 py-3 rounded-lg hover:bg-[#f76a0c] hover:text-white transition-colors"
                  >
                    {quickSubmitting ? 'Sending...' : 'Send Request'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Floating Stats Box */}
        <div className="absolute left-1/2 bottom-0 z-20 w-full max-w-7xl -translate-x-1/2 translate-y-1/2 px-4">
          <div className="rounded-2xl bg-brand-navy shadow-2xl ring-1 ring-white/10 px-6 py-6 md:px-10 md:py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((s) => (
                <div key={s.label} className="text-center py-2">
                  <div className="text-4xl md:text-5xl font-bold text-brand-yellow leading-none">{s.value}</div>
                  <div className="mt-2 text-base md:text-lg text-gray-100 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="pt-36 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#f76a0c] uppercase text-sm font-semibold tracking-widest mb-2">ABOUT PATHFINDER PEST CONTROL</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#112a44] mb-6">
              Tulsa's Trusted Pest Control Company
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Pathfinder Pest Control is a trusted Tulsa pest control company dedicated to protecting homes and businesses from unwanted pests. As a reliable pest control company in the state of Oklahoma, we provide safe and effective treatments backed by experienced technicians delivering dependable local pest control Tulsa residents can trust.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 bg-[#f76a0c] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#112a44] transition-colors"
            >
              More About Us →
            </Link>
          </div>
          <div>
            <img
              src="/images/pathfinder-home.png"
              alt="Pathfinder Pest Control home service"
              width={1200}
              height={900}
              className="rounded-xl w-full shadow-lg object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[#faf8ee]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#f76a0c] uppercase text-sm font-semibold tracking-widest mb-2">OUR SERVICES</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#112a44] mb-4">Comprehensive Pest Control Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our pest control services cover a wide range of common pests that affect homes and businesses throughout the Tulsa area. From insects to rodents, our trained technicians use targeted treatments to eliminate infestations and help prevent future pest problems.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                <div className="overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#112a44] mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.desc}</p>
                  <span className="text-[#f76a0c] font-semibold text-sm group-hover:text-[#f76a0c] transition-colors">
                    Learn More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/service/commercial-pest-control"
              className="inline-flex items-center gap-2 bg-[#112a44] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#f76a0c] transition-colors"
            >
              VIEW ALL SERVICES
            </Link>
          </div>
        </div>
      </section>

      <WhyUsSection />
      <ReviewsSection />
      <ProcessSection />
      <AreasSection />

      {/* Latest Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#f76a0c] uppercase text-sm font-semibold tracking-widest mb-2">OUR LATEST ARTICLES</p>
            <h2 className="text-3xl font-bold text-[#112a44]">Pest Control Tips & Insights</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/mosquito-pest-control-season-in-oklahoma" className="bg-[#faf8ee] rounded-xl overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="p-6">
                <p className="text-[#f76a0c] text-xs uppercase font-semibold mb-2">May 8, 2026</p>
                <h3 className="text-xl font-bold text-[#112a44] mb-3 group-hover:text-[#f76a0c] transition-colors">
                  Mosquito Season in Oklahoma
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Expert Tips to Protect Your Family | Pathfinder Pest Control Mosquitoes are more than a backyard annoyance they are a genuine health risk...
                </p>
                <span className="inline-block mt-4 text-[#f76a0c] font-semibold text-sm">Read More →</span>
              </div>
            </Link>
            <Link to="/tulsas-mosquito-problem-just-met-its-match" className="bg-[#faf8ee] rounded-xl overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="p-6">
                <p className="text-[#f76a0c] text-xs uppercase font-semibold mb-2">May 8, 2026</p>
                <h3 className="text-xl font-bold text-[#112a44] mb-3 group-hover:text-[#f76a0c] transition-colors">
                  Tulsa's Mosquito Problem Just Met Its Match!
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Pathfinder Pest Control Introduces Professional Mosquito Traps. If you live in the Tulsa area, you already know — mosquito season is no joke...
                </p>
                <span className="inline-block mt-4 text-[#f76a0c] font-semibold text-sm">Read More →</span>
              </div>
            </Link>
          </div>
          <div className="text-center mt-8">
            <Link
              to="/new-articles"
              className="inline-flex items-center gap-2 border-2 border-[#112a44] text-[#112a44] font-bold px-6 py-3 rounded-lg hover:bg-[#112a44] hover:text-white transition-colors"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={homeFaqs} />
    </>
  )
}
