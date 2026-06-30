import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const services = [
  { label: 'Bed Bug Removal', path: '/service/bed-bug-removal' },
  { label: 'Rodent Control', path: '/service/rodent-control' },
  { label: 'Commercial Pest Control', path: '/service/commercial-pest-control' },
  { label: 'Cockroach Extermination', path: '/service/cockroach-extermination' },
  { label: 'Flea Control', path: '/service/flea-control' },
  { label: 'Fumigation Services', path: '/service/fumigation-services' },
  { label: 'Home Pest Inspection', path: '/service/home-pest-inspection' },
  { label: 'Mosquito Control', path: '/service/mosquito-control' },
  { label: 'Spider Exterminator', path: '/service/spider-exterminator' },
  { label: 'Termite Treatment', path: '/service/termite-treatment' },
  { label: 'Wasp & Hornet Elimination', path: '/service/wasp-hornet-elimination' },
  { label: 'Wildlife Removal', path: '/service/wildlife-removal' },
  { label: 'Gopher Removal', path: '/gopher-removal' },
  { label: 'Moles & Voles Removal', path: '/moles-voles-removal' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  return (
    <header className="bg-white text-[#112a44] sticky top-0 z-50 shadow-md border-b border-gray-100">
      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/images/2025-10-pathfinder-logo-website.png"
            alt="Pathfinder Pest Control"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'text-[#568d22] font-semibold' : 'text-[#112a44] hover:text-[#568d22] transition-colors'}>
            Home
          </NavLink>

          {/* Services dropdown */}
          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button className="text-[#112a44] hover:text-[#568d22] transition-colors flex items-center gap-1">
              Services
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 bg-white text-[#112a44] shadow-xl rounded-lg py-2 min-w-[220px] z-50">
                {services.map((s) => (
                  <Link
                    key={s.path}
                    to={s.path}
                    className="block px-4 py-2 text-sm hover:bg-[#faf8ee] hover:text-[#568d22] transition-colors"
                    onClick={() => setServicesOpen(false)}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/new-articles" className={({ isActive }) => isActive ? 'text-[#568d22] font-semibold' : 'text-[#112a44] hover:text-[#568d22] transition-colors'}>
            Blog
          </NavLink>
          <NavLink to="/contact-us" className={({ isActive }) => isActive ? 'text-[#568d22] font-semibold' : 'text-[#112a44] hover:text-[#568d22] transition-colors'}>
            Contact
          </NavLink>
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="tel:9188566554"
            className="hidden md:inline-flex items-center gap-2 bg-[#fdd20a] text-[#112a44] font-bold px-4 py-2 rounded-lg text-sm hover:bg-[#f76a0c] hover:text-white transition-colors"
          >
            Call Now
          </a>
          <button
            className="lg:hidden text-[#112a44] p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-2 text-sm font-medium shadow-lg">
          <Link to="/" className="text-[#112a44] py-2 hover:text-[#568d22]" onClick={() => setMobileOpen(false)}>Home</Link>
          <button
            className="text-[#112a44] py-2 hover:text-[#568d22] flex items-center justify-between"
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
          >
            Services
            <svg className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          {mobileServicesOpen && (
            <div className="pl-4 flex flex-col gap-1">
              {services.map((s) => (
                <Link
                  key={s.path}
                  to={s.path}
                  className="text-gray-500 py-1.5 hover:text-[#568d22]"
                  onClick={() => { setMobileOpen(false); setMobileServicesOpen(false) }}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          )}
          <Link to="/new-articles" className="text-[#112a44] py-2 hover:text-[#568d22]" onClick={() => setMobileOpen(false)}>Blog</Link>
          <Link to="/contact-us" className="text-[#112a44] py-2 hover:text-[#568d22]" onClick={() => setMobileOpen(false)}>Contact</Link>
          <a href="tel:9188566554" className="mt-2 bg-[#fdd20a] text-[#112a44] font-bold px-4 py-2 rounded-lg text-center hover:bg-[#f76a0c] hover:text-white transition-colors">
            +1 918-856-6554
          </a>
        </div>
      )}
    </header>
  )
}
