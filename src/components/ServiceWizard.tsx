import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

interface Option {
  label: string
  icon: string
  next?: string     // next question key
  result?: Result   // jump straight to result
}

interface Question {
  key: string
  heading: string
  sub?: string
  options: Option[]
}

interface Result {
  title: string
  description: string
  path: string
  cta: string
}

const results: Record<string, Result> = {
  bed_bugs:     { title: 'Bed Bug Removal', description: 'Our licensed technicians use heat treatments and targeted applications to eliminate bed bugs at every life stage — including eggs hidden in furniture and walls.', path: '/service/bed-bug-removal', cta: 'See Bed Bug Treatment' },
  cockroaches:  { title: 'Cockroach Extermination', description: 'We use gel baits, residual insecticides, and IGRs to break the roach life cycle and eliminate colonies hiding in kitchens, bathrooms, and wall voids.', path: '/service/cockroach-extermination', cta: 'See Roach Treatment' },
  fleas:        { title: 'Flea Control', description: 'Our flea treatment targets all life stages — eggs, larvae, pupae, and adults — both indoors and in your yard to protect your pets and family.', path: '/service/flea-control', cta: 'See Flea Treatment' },
  spiders:      { title: 'Spider Exterminator', description: 'Oklahoma has both brown recluse and black widow spiders. We inspect, treat, and seal entry points to reduce dangerous spider activity in your home.', path: '/service/spider-exterminator', cta: 'See Spider Treatment' },
  termites:     { title: 'Termite Treatment', description: 'Protect your home from Oklahoma\'s most destructive pest. We provide liquid soil barriers, bait systems, and annual monitoring to eliminate termite colonies.', path: '/service/termite-treatment', cta: 'See Termite Treatment' },
  mosquitoes:   { title: 'Mosquito Control', description: 'Our recurring treatment program significantly reduces mosquito populations around your property — so you can enjoy your outdoor spaces all season long.', path: '/service/mosquito-control', cta: 'See Mosquito Control' },
  wasps:        { title: 'Wasp & Hornet Elimination', description: 'Don\'t risk a sting. Our technicians safely remove nests and treat nesting sites — including wall voids and structural cavities — with the right protective gear.', path: '/service/wasp-hornet-elimination', cta: 'See Wasp Treatment' },
  ants:         { title: 'General Pest Control', description: 'From fire ants to odorous house ants, we identify the species and apply targeted treatments that eliminate the colony at the source — not just the foragers you see.', path: '/service/commercial-pest-control', cta: 'See Our Services' },
  rodents:      { title: 'Rodent Control', description: 'We remove mice and rats, seal entry points, and help prevent future infestations — protecting your home from the health risks and structural damage rodents cause.', path: '/service/rodent-control', cta: 'See Rodent Control' },
  gophers:      { title: 'Gopher Removal', description: 'Our technicians locate active tunnels and use proven removal methods to eliminate gophers and protect your lawn, garden, and irrigation system.', path: '/gopher-removal', cta: 'See Gopher Removal' },
  moles:        { title: 'Moles & Voles Removal', description: 'We identify whether you have moles (tunneling for grubs) or voles (feeding on roots) and apply the right removal strategy for your yard.', path: '/moles-voles-removal', cta: 'See Moles & Voles' },
  wildlife:     { title: 'Wildlife Removal', description: 'We humanely trap and relocate raccoons, squirrels, opossums, and other nuisance wildlife, then seal entry points to prevent re-entry.', path: '/service/wildlife-removal', cta: 'See Wildlife Removal' },
  inspection:   { title: 'Home Pest Inspection', description: 'Not sure what you\'re dealing with? Our thorough inspection identifies pest activity, entry points, and conducive conditions — then we explain all your options.', path: '/service/home-pest-inspection', cta: 'Schedule an Inspection' },
}

const questions: Question[] = [
  {
    key: 'start',
    heading: 'What are you dealing with?',
    sub: 'Answer a few quick questions and we\'ll point you to the right solution.',
    options: [
      { label: 'Bugs or insects inside my home', icon: '🏠', next: 'indoor' },
      { label: 'Biting or stinging insects outside', icon: '🌿', next: 'outdoor' },
      { label: 'Lawn or yard is being damaged', icon: '🌱', next: 'yard' },
      { label: 'Rodents or wildlife', icon: '🐾', next: 'rodents' },
      { label: 'Not sure — I need an inspection', icon: '🔍', result: results.inspection },
    ],
  },
  {
    key: 'indoor',
    heading: 'What are you seeing inside?',
    options: [
      { label: 'Small bugs in my bed, mattress, or furniture', icon: '🛏️', result: results.bed_bugs },
      { label: 'Roaches in the kitchen or bathroom', icon: '🪳', result: results.cockroaches },
      { label: 'Ants trailing across floors or counters', icon: '🐜', result: results.ants },
      { label: 'Fleas — my pet is scratching constantly', icon: '🐾', result: results.fleas },
      { label: 'Spiders or webs throughout the home', icon: '🕷️', result: results.spiders },
      { label: 'Flying insects (swarmers) or sawdust near wood', icon: '🪵', result: results.termites },
    ],
  },
  {
    key: 'outdoor',
    heading: 'What\'s happening outside?',
    options: [
      { label: 'Getting bitten by mosquitoes in the yard', icon: '🦟', result: results.mosquitoes },
      { label: 'Wasp or hornet nests near the house', icon: '🐝', result: results.wasps },
      { label: 'Ants in the yard, driveway, or patio', icon: '🐜', result: results.ants },
      { label: 'Termite swarmers or mud tubes on foundation', icon: '🪵', result: results.termites },
    ],
  },
  {
    key: 'yard',
    heading: 'What does the damage look like?',
    options: [
      { label: 'Dirt mounds or tunnels in the lawn', icon: '⛰️', result: results.gophers },
      { label: 'Raised ridges or soft spots in turf', icon: '🌾', result: results.moles },
      { label: 'Dead grass patches, gnawed plant roots', icon: '🌱', result: results.moles },
    ],
  },
  {
    key: 'rodents',
    heading: 'What are you dealing with?',
    options: [
      { label: 'Droppings, gnaw marks, or scratching sounds indoors', icon: '🐭', result: results.rodents },
      { label: 'Raccoons, squirrels, or opossums', icon: '🦝', result: results.wildlife },
      { label: 'Gophers burrowing in the yard', icon: '🦔', result: results.gophers },
    ],
  },
]

const qMap = Object.fromEntries(questions.map(q => [q.key, q]))

export default function ServiceWizard() {
  const [visible, setVisible] = useState(false)
  const [currentKey, setCurrentKey] = useState('start')
  const [result, setResult] = useState<Result | null>(null)
  const [history, setHistory] = useState<string[]>([])

  useEffect(() => {
    if (sessionStorage.getItem('wizard-dismissed')) return
    const timer = setTimeout(() => setVisible(true), 1800)
    return () => clearTimeout(timer)
  }, [])

  function dismiss() {
    sessionStorage.setItem('wizard-dismissed', '1')
    setVisible(false)
  }

  function choose(opt: Option) {
    if (opt.result) {
      setResult(opt.result)
    } else if (opt.next) {
      setHistory(h => [...h, currentKey])
      setCurrentKey(opt.next!)
    }
  }

  function back() {
    if (result) {
      setResult(null)
      return
    }
    const prev = history[history.length - 1]
    if (prev) {
      setHistory(h => h.slice(0, -1))
      setCurrentKey(prev)
    }
  }

  if (!visible) return null

  const q = qMap[currentKey]

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-[10000] backdrop-blur-sm" onClick={dismiss} />

      {/* Modal */}
      <div className="fixed z-[10001] inset-0 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto pointer-events-auto"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-[#112a44] rounded-t-2xl px-6 py-5 flex items-start justify-between">
            <div>
              <p className="text-[#fdd20a] text-xs font-semibold uppercase tracking-widest mb-1">
                Pathfinder Pest Control
              </p>
              <h2 className="text-white font-bold text-xl leading-snug">
                {result ? 'We Recommend This Service' : q.heading}
              </h2>
              {!result && q.sub && (
                <p className="text-gray-300 text-sm mt-1">{q.sub}</p>
              )}
            </div>
            <button onClick={dismiss} className="text-gray-400 hover:text-white transition-colors ml-4 mt-0.5 flex-shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="p-6">
            {result ? (
              /* Result screen */
              <div>
                <div className="bg-[#faf8ee] rounded-xl p-5 mb-5">
                  <h3 className="text-xl font-bold text-[#112a44] mb-2">{result.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{result.description}</p>
                </div>
                <div className="flex flex-col gap-3">
                  <Link
                    to={result.path}
                    onClick={dismiss}
                    className="block text-center bg-[#568d22] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#112a44] transition-colors"
                  >
                    {result.cta}
                  </Link>
                  <Link
                    to="/contact-us"
                    onClick={dismiss}
                    className="block text-center bg-[#fdd20a] text-[#112a44] font-bold px-6 py-3 rounded-xl hover:bg-[#f76a0c] hover:text-white transition-colors"
                  >
                    Get a Free Quote
                  </Link>
                  <a
                    href="tel:9188566554"
                    className="block text-center border-2 border-[#112a44] text-[#112a44] font-bold px-6 py-3 rounded-xl hover:bg-[#112a44] hover:text-white transition-colors"
                  >
                    Call +1 918-856-6554
                  </a>
                </div>
                <button onClick={back} className="mt-4 text-sm text-gray-400 hover:text-gray-600 w-full text-center">
                  ← Start over
                </button>
              </div>
            ) : (
              /* Question screen */
              <div>
                <div className="flex flex-col gap-2">
                  {q.options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => choose(opt)}
                      className="flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl border border-gray-200 hover:border-[#568d22] hover:bg-[#faf8ee] transition-colors group"
                    >
                      <span className="text-xl w-8 text-center flex-shrink-0">{opt.icon}</span>
                      <span className="text-sm font-medium text-[#112a44] group-hover:text-[#568d22]">{opt.label}</span>
                      <svg className="w-4 h-4 text-gray-300 group-hover:text-[#568d22] ml-auto flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ))}
                </div>
                {history.length > 0 && (
                  <button onClick={back} className="mt-4 text-sm text-gray-400 hover:text-gray-600 w-full text-center">
                    ← Back
                  </button>
                )}
                <p className="text-center text-xs text-gray-400 mt-4">
                  Already know what you need?{' '}
                  <Link to="/contact-us" onClick={dismiss} className="text-[#568d22] hover:underline font-semibold">
                    Skip to contact us
                  </Link>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
