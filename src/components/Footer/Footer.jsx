   import { Link } from 'react-router-dom'
import { FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="mb-4">
              <p className="font-serif font-bold text-white text-lg tracking-widest">BRAMHAKRUPA</p>
              <p className="text-yellow-500 tracking-[0.3em] text-sm">INFRA LLP</p>
              <div className="w-12 h-0.5 bg-yellow-600 mt-2"></div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Powering Ideas. Delivering Solutions. Your trusted IT partner for software, consulting, and technology products.
            </p>
            <div className="flex gap-4 mt-5">
              <a href="https://www.linkedin.com/company/bramhakrupa-infra-llp/?viewAsMember=true" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-yellow-500 transition-colors"><FaLinkedin size={20} /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-yellow-500 transition-colors"><FaTwitter size={20} /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-yellow-500 transition-colors"><FaInstagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide">Quick Links</h4>
            <div className="w-8 h-0.5 bg-yellow-600 mb-4"></div>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Products', 'Contact'].map(item => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-sm text-gray-400 hover:text-yellow-500 transition-colors flex items-center gap-2">
                    <span className="text-yellow-600">›</span> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide">Our Services</h4>
            <div className="w-8 h-0.5 bg-yellow-600 mb-4"></div>
            <ul className="space-y-2">
              {['Web Development', 'Mobile Apps', 'IT Consulting', 'Cloud Solutions', 'UI/UX Design', 'Digital Transformation'].map(s => (
                <li key={s} className="text-sm text-gray-400 flex items-center gap-2">
                  <span className="text-yellow-600">›</span> {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide">Contact Us</h4>
            <div className="w-8 h-0.5 bg-yellow-600 mb-4"></div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <FaMapMarkerAlt className="text-yellow-500 mt-0.5 shrink-0" />
                <span>Pune, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <FaEnvelope className="text-yellow-500 shrink-0" />
                <a href="mailto:info@bramhakrupainfra.com" className="hover:text-yellow-500 transition-colors">
                  info@bramhakrupainfra.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <FaPhone className="text-yellow-500 shrink-0" />
                <a href="tel:+919999999999" className="hover:text-yellow-500 transition-colors">
                  +91 9826012605
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-16 py-5 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs text-gray-500">© 2026 Bramhakrupa Infra LLP. All rights reserved.</p>
          <p className="text-xs text-gray-500">Pune, Maharashtra, India · Est. 2026</p>
        </div>
      </div>
    </footer>
  )
}
