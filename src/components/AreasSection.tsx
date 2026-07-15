import { Link } from 'react-router-dom'

const areas = [
  { name: 'Broken Arrow', zip: '74112', path: '/sap/broken-arrow' },
  { name: 'Sand Springs', zip: '74063', path: '/sap/sand-springs' },
  { name: 'Bixby', zip: '74008', path: '/sap/bixby' },
  { name: 'Tulsa', zip: '74105', path: '/sap/tulsa' },
  { name: 'Owasso', zip: '74055', path: '/sap/owasso' },
  { name: 'Sapulpa', zip: '74066', path: '/sap/sapulpa' },
  { name: 'Jenks', zip: '74037', path: '/sap/jenks' },
  { name: 'Glenpool', zip: '74033', path: '/sap/glenpool' },
  { name: 'Coweta', zip: '74429', path: '/sap/coweta' },
  { name: 'Berryhill', zip: '74107', path: '/sap/berryhill' },
]

export default function AreasSection() {
  return (
    <section className="py-20 bg-[#faf8ee]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#f76a0c] uppercase text-sm font-semibold tracking-widest mb-2">AREAS WE SERVE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#112a44]">Local Pest Control in Tulsa & Surrounding Areas</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {areas.map((area) => (
            <Link
              key={area.name}
              to={area.path}
              className="rounded-xl border border-[#112a44]/10 bg-[#f76a0c] p-5 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <h3 className="font-bold text-base text-white">{area.name}</h3>
              <p className="text-sm text-orange-100 mt-1">{area.zip}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
