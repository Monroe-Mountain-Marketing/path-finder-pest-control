import { Link } from 'react-router-dom'

const steps = [
  { num: '01', title: 'Schedule Service', desc: 'Book a convenient appointment for professional pest control service at a time that works for you.' },
  { num: '02', title: 'Get Guidance', desc: 'Receive expert advice on pest issues, prevention, and the best treatment options for your home or business.' },
  { num: '03', title: 'Inspection', desc: 'A trained technician performs a thorough inspection to identify pest activity, entry points, and problem areas.' },
  { num: '04', title: 'Meet Technician', desc: 'Your friendly, licensed technician arrives on time, explains the process, and answers any questions before starting.' },
  { num: '05', title: 'Complete Job', desc: 'We treat the affected areas efficiently and ensure your pest problem is handled safely and effectively.' },
]

export default function ProcessSection() {
  return (
    <section className="bg-[#112a44] text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#fdd20a] uppercase text-sm font-semibold tracking-widest mb-2">OUR WORKING PROCESS</p>
          <h2 className="text-3xl md:text-4xl font-bold">How Pathfinder Pest Control<br />Process Works For You</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#568d22] flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.num}
              </div>
              <h3 className="font-bold text-base mb-2">{step.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <p className="text-gray-300 mb-3">Need More Help?</p>
          <a href="tel:9188566554" className="text-2xl font-bold text-[#fdd20a] hover:text-white transition-colors">
            +1 918-856-6554
          </a>
        </div>
      </div>
    </section>
  )
}
