import { Helmet } from 'react-helmet-async'
import ProcessSection from '../components/ProcessSection'
import WhyUsSection from '../components/WhyUsSection'
import FAQSection from '../components/FAQSection'

const faqs = [
  { question: 'How do I know if I have moles or voles?', answer: 'Moles create raised ridges and volcano-shaped mounds of dirt. Voles create surface runways through grass and may chew on plant roots. Our technicians can accurately identify which pest is causing your yard damage.' },
  { question: 'What damage do moles and voles cause?', answer: 'Moles tunnel through lawns creating raised ridges and mounds that kill grass and make turf uneven. Voles eat plant roots, bulbs, and bark, often killing plants and trees.' },
  { question: 'Can I get rid of moles myself?', answer: 'DIY mole control with repellents or castor oil rarely provides lasting results. Professional trapping in the correct locations is the most reliable method for mole removal.' },
  { question: 'Do moles and voles carry diseases?', answer: 'Moles rarely interact with humans and pose minimal disease risk. Voles can carry diseases but direct contact is uncommon. The main concern is property damage from their tunneling and feeding activity.' },
]

export default function MolesVolesPage() {
  return (
    <>
      <Helmet>
        <title>Moles & Voles Removal Tulsa OK | Pathfinder Pest Control</title>
        <meta name="description" content="Professional moles and voles removal in Tulsa, OK. Pathfinder Pest Control eliminates lawn damage caused by moles and voles." />
      </Helmet>

      {/* Hero */}
      <section className="bg-[#112a44] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2">
            <p className="text-[#fdd20a] uppercase text-sm font-semibold tracking-widest mb-3">LAWN PEST CONTROL</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Moles & Voles Removal Service</h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Professional moles and voles removal available now in Tulsa and surrounding areas. Protect your lawn from tunneling damage with expert removal from Pathfinder Pest Control.
            </p>
            <a
              href="tel:9189259658"
              className="inline-flex items-center gap-2 bg-[#fdd20a] text-[#112a44] font-bold px-8 py-4 rounded-lg text-lg hover:bg-[#f76a0c] hover:text-white transition-colors"
            >
              Schedule Removal Today
            </a>
          </div>
          <div className="lg:order-1">
            <img
              src="/images/moles.jpg"
              alt="Moles and voles removal service in Tulsa"
              className="rounded-xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#112a44] mb-6">Understanding Moles & Voles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#faf8ee] rounded-xl p-6">
              <h3 className="font-bold text-[#112a44] text-xl mb-3">Moles</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Moles are insectivores that tunnel through soil searching for earthworms and grubs. Their tunneling creates raised ridges across lawns and volcano-shaped mounds of displaced dirt. While moles do not eat plants directly, their tunnels disrupt root systems and make lawns uneven and unsightly.
              </p>
              <ul className="flex flex-col gap-2 text-sm text-gray-600">
                <li>• Raised ridges in lawn</li>
                <li>• Volcano-shaped dirt mounds</li>
                <li>• Soft, spongy turf</li>
                <li>• Root system disruption</li>
              </ul>
            </div>
            <div className="bg-[#faf8ee] rounded-xl p-6">
              <h3 className="font-bold text-[#112a44] text-xl mb-3">Voles</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Voles are small rodents that create surface runways through grass and feed on plant roots, bulbs, bark, and vegetation. Vole activity can kill plants and small trees. They are particularly damaging in gardens and landscaped areas.
              </p>
              <ul className="flex flex-col gap-2 text-sm text-gray-600">
                <li>• Surface runways in grass</li>
                <li>• Gnawed plant stems and bark</li>
                <li>• Damaged bulbs and roots</li>
                <li>• Dead patches in lawn</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <WhyUsSection />
      <ProcessSection />
      <FAQSection faqs={faqs} title="Moles & Voles FAQ" />
    </>
  )
}
