import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import companyLogo from '../../assets/BramhakrupaInfraLLP_Logo_300x300.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Products', path: '/products' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 md:px-8 lg:px-16">

        <Link to="/" className="flex items-center gap-3">
        <div>
           <img className='w-14 h-01 object-contain ' src={companyLogo} alt="Company Logo" />
        </div>
           <div>
            <p className="font-serif font-bold text-gray-700 text-sm leading-tight tracking-widest">BRAMHAKRUPA</p>
            <p className="text-xs text-yellow-600 tracking-[0.2em] leading-tight">INFRA LLP</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                location.pathname === link.path
                  ? 'text-yellow-600 border-b-2 border-yellow-600 pb-0.5'
                  : 'text-gray-700 hover:text-yellow-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-medium px-5 py-2 rounded transition-colors duration-200">
            Get In Touch
          </Link>
        </div>

        <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-6 py-3 text-sm font-medium border-b border-gray-50 transition-colors ${
                location.pathname === link.path ? 'text-yellow-600 bg-yellow-50' : 'text-gray-700 hover:text-yellow-600 hover:bg-yellow-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="px-6 py-4">
            <Link to="/contact" className="block bg-yellow-600 text-white text-center py-2.5 rounded text-sm font-medium">
              Get In Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
