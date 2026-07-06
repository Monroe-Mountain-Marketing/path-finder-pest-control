import { Link } from 'react-router-dom'

const areas = [
  { name: 'Broken Arrow', zip: '74112', img: 'https://pathfinderpestcontrol.com/wp-content/uploads/2025/10/960px-Building_in_Broken_Arrow_Oklahoma-768x511.jpg', path: '/sap/broken-arrow' },
  { name: 'Sand Springs', zip: '74063', img: 'https://pathfinderpestcontrol.com/wp-content/uploads/2025/10/960px-I-44_at_OK66_With_Bypassed_Turnpike_Section_-_Catoosa_50619249636-768x512.jpg', path: '/sap/sand-springs' },
  { name: 'Bixby', zip: '74008', img: 'https://pathfinderpestcontrol.com/wp-content/uploads/2025/10/Old_bridge_across_Arkansas_River.jpg', path: '/sap/bixby' },
  { name: 'Tulsa', zip: '74105', img: 'https://pathfinderpestcontrol.com/wp-content/uploads/2025/10/960px-Glenpool_Conference_Center_pond_view-768x575.jpg', path: '/sap/tulsa' },
  { name: 'Owasso', zip: '74055', img: 'https://pathfinderpestcontrol.com/wp-content/uploads/2025/10/Jenks_riverwalk.jpg', path: '/sap/owasso' },
  { name: 'Sapulpa', zip: '74066', img: 'https://pathfinderpestcontrol.com/wp-content/uploads/2025/10/960px-Building_in_Broken_Arrow_Oklahoma-768x511.jpg', path: '/sap/sapulpa' },
  { name: 'Jenks', zip: '74037', img: 'https://pathfinderpestcontrol.com/wp-content/uploads/2025/10/960px-I-44_at_OK66_With_Bypassed_Turnpike_Section_-_Catoosa_50619249636-768x512.jpg', path: '/sap/jenks' },
  { name: 'Glenpool', zip: '74033', img: 'https://pathfinderpestcontrol.com/wp-content/uploads/2025/10/Old_bridge_across_Arkansas_River.jpg', path: '/sap/glenpool' },
  { name: 'Coweta', zip: '74429', img: 'https://pathfinderpestcontrol.com/wp-content/uploads/2025/10/960px-Glenpool_Conference_Center_pond_view-768x575.jpg', path: '/sap/coweta' },
  { name: 'Berryhill', zip: '74107', img: 'https://pathfinderpestcontrol.com/wp-content/uploads/2025/10/Jenks_riverwalk.jpg', path: '/sap/berryhill' },
]

export default function AreasSection() {
  return (
    <section className="py-20 bg-[#faf8ee]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#568d22] uppercase text-sm font-semibold tracking-widest mb-2">AREAS WE SERVE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#112a44]">Local Pest Control in Tulsa & Surrounding Areas</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {areas.map((area) => (
            <Link
              key={area.name}
              to={area.path}
              className="relative rounded-xl overflow-hidden group cursor-pointer shadow-md block"
            >
              <img
                src={area.img}
                alt={area.name}
                className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-[#112a44]/60 flex flex-col items-center justify-center text-white">
                <h3 className="font-bold text-base">{area.name}</h3>
                <p className="text-sm text-gray-200">{area.zip}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
