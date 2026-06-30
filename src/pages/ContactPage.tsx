import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import WhyUsSection from '../components/WhyUsSection'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Helmet>
        <title>Contact Us | Pathfinder Pest Control Tulsa OK</title>
        <meta name="description" content="Contact Pathfinder Pest Control for pest control services in Tulsa, OK. Call +1 918-856-6554 or request a quote online." />
      </Helmet>

      {/* Hero */}
      <section className="bg-[#112a44] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[#fdd20a] uppercase text-sm font-semibold tracking-widest mb-2">GET IN TOUCH</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us!</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Feel free to contact us at any time. Our team is ready to assist you with any pest control services you might need.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-[#112a44] mb-6">Request a Quote or Schedule Service</h2>
            <p className="text-gray-600 mb-8">
              Pathfinder Pest Control provides online estimates and onsite services. You can schedule your service or call directly for pest control services in Tulsa, Oklahoma.
            </p>
            {submitted ? (
              <div className="bg-[#568d22]/10 border border-[#568d22] rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-[#568d22] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#112a44] mb-2">Message Sent!</h3>
                <p className="text-gray-600">Thank you for contacting Pathfinder Pest Control. We will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#112a44] mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#568d22] focus:ring-1 focus:ring-[#568d22]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#112a44] mb-1">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#568d22] focus:ring-1 focus:ring-[#568d22]"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#112a44] mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#568d22] focus:ring-1 focus:ring-[#568d22]"
                    placeholder="Your email address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#112a44] mb-1">Service Needed</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#568d22] focus:ring-1 focus:ring-[#568d22]"
                  >
                    <option value="">Select a service</option>
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
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#112a44] mb-1">Message</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#568d22] focus:ring-1 focus:ring-[#568d22] resize-none"
                    placeholder="Describe your pest problem..."
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#fdd20a] text-[#112a44] font-bold px-8 py-4 rounded-lg hover:bg-[#f76a0c] hover:text-white transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-[#112a44] mb-6">Our Contact Information</h2>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-[#568d22] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#112a44] mb-1">Address</h3>
                  <p className="text-gray-600">3240 S 82nd E Ave Suite A,<br />Tulsa, OK 74145, United States</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-[#568d22] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#112a44] mb-1">Phone</h3>
                  <a href="tel:9188566554" className="text-[#568d22] font-bold text-lg hover:text-[#112a44] transition-colors">
                    +1 918-856-6554
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-[#568d22] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#112a44] mb-1">Working Hours</h3>
                  <div className="text-gray-600 text-sm flex flex-col gap-1">
                    <p>Mon–Thursday: 8AM–6PM</p>
                    <p>Friday: 8AM–5PM</p>
                    <p>Saturday: 9AM–12PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Van image */}
      <section className="bg-white">
        <img
          src="/images/path-finder-pest-control-van.jpg"
          alt="Pathfinder Pest Control service van"
          className="w-full max-h-[420px] object-cover"
        />
      </section>

      <WhyUsSection />
    </>
  )
}
