import { Link } from 'react-router-dom'

const services = [
  { label: 'Residential Pest Control', path: '/residential-pest-control' },
  { label: 'Commercial Pest Control', path: '/commercial-pest-control' },
  { label: 'Bed Bug Removal', path: '/services/bed-bug-exterminator' },
  { label: 'Rodent Control', path: '/service/rodent-control' },
  { label: 'Gopher Removal', path: '/gopher-removal' },
  { label: 'Mosquito Control', path: '/service/mosquito-control' },
  { label: 'Flea Control', path: '/service/flea-control' },
]

const quickLinks = [
  { label: 'About Us', path: '/contact-us' },
  { label: 'Contact Us', path: '/contact-us' },
  { label: 'Privacy Policy', path: '/privacy-policy' },
  { label: 'Blog', path: '/new-articles' },
  { label: 'Pest Control Glossary', path: '/glossary' },
  { label: 'Request a Quote', path: '/request-a-qoute' },
]

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/pathfinderpestcontrol', icon: 'f' },
  { label: 'Instagram', href: 'https://www.instagram.com/pathfinderpestcontrol/', icon: 'ig' },
  { label: 'YouTube', href: 'https://www.youtube.com/@pathfinderpestcontrol', icon: 'yt' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/pathfinderpestcontrol', icon: 'in' },
]

export default function Footer() {
  return (
    <footer className="bg-white text-[#112a44] border-t border-gray-200">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src="/images/2025-10-pathfinder-logo-website.png"
              alt="Pathfinder Pest Control"
              width={500}
              height={370}
              className="h-14 w-auto object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Pathfinder Pest Control is a trusted Tulsa exterminator providing reliable, effective pest control solutions for homes and businesses.
          </p>
          <div className="flex gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs text-[#112a44] hover:bg-[#568d22] hover:text-white transition-colors"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold text-[#568d22] uppercase text-sm tracking-widest mb-4">Services</h4>
          <ul className="flex flex-col gap-2">
            {services.map((s) => (
              <li key={s.path}>
                <Link to={s.path} className="text-gray-600 text-sm hover:text-[#568d22] transition-colors">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-[#568d22] uppercase text-sm tracking-widest mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-2">
            {quickLinks.map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="text-gray-600 text-sm hover:text-[#568d22] transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="font-bold text-[#568d22] uppercase text-sm tracking-widest mb-4">Contact Us in Tulsa</h4>
          <div className="flex flex-col gap-3 text-sm text-gray-600">
            <p>3240 S 82nd E Ave Suite A,<br />Tulsa, OK 74145</p>
            <a href="tel:9188566554" className="hover:text-[#568d22] transition-colors font-semibold text-[#112a44]">
              +1 918-856-6554
            </a>
            <div>
              <p className="font-semibold text-[#112a44] mb-1">Working Hours</p>
              <p>Mon–Thur: 8AM–6PM</p>
              <p>Friday: 8AM–5PM</p>
              <p>Saturday: 9AM–12PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>© 2026 Pathfinder Pest Control. All Rights Reserved.</p>
          <p>Tulsa, Oklahoma</p>
        </div>
      </div>
    </footer>
  )
}
