import { Link } from 'react-router-dom'
import { FaCode, FaMobileAlt, FaCloud, FaLaptopCode, FaChartLine, FaShieldAlt, FaArrowRight, FaCheckCircle } from 'react-icons/fa'

const services = [
  { icon: <FaCode size={28} />, title: 'Web Development', desc: 'Modern, responsive websites and web applications built with latest technologies.' },
  { icon: <FaMobileAlt size={28} />, title: 'Mobile Apps', desc: 'Cross-platform mobile apps for Android and iOS using React Native.' },
  { icon: <FaCloud size={28} />, title: 'Cloud Solutions', desc: 'Scalable cloud infrastructure and DevOps solutions for your business.' },
  { icon: <FaLaptopCode size={28} />, title: 'IT Consulting', desc: 'Strategic IT guidance to align technology with your business goals.' },
  { icon: <FaChartLine size={28} />, title: 'Digital Transformation', desc: 'End-to-end digital transformation for modern business operations.' },
  { icon: <FaShieldAlt size={28} />, title: 'Cyber Security', desc: 'Protect your business with robust security solutions and audits.' },
]

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '5+', label: 'IT Products' },
  { value: '100%', label: 'Client Satisfaction' },
]

const whyUs = [
  'Dedicated team of experienced IT professionals',
  'Agile development methodology for faster delivery',
  'Transparent communication throughout the project',
  'Post-delivery support and maintenance',
  'Competitive pricing with premium quality',
  'Based in Pune — serving clients across India & globally',
]

export default function Home() {
  return (
    <div className="pt-16">

      {/* Hero Section */}
      <section className="bg-gray-900 text-white min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 border border-yellow-500 rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 border border-yellow-500 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 border border-yellow-500 rotate-45"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20 relative z-10">
          <div className="max-w-3xl">
            <p className="text-yellow-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">Welcome to Bramhakrupa Infra LLP</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Powering Ideas.<br />
              <span className="text-yellow-500">Delivering Solutions.</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              Your trusted IT partner for innovative software, cutting-edge products, and strategic consulting. We turn your vision into digital reality.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-8 py-3.5 rounded transition-all duration-200 flex items-center gap-2">
                Explore Services <FaArrowRight size={14} />
              </Link>
              <Link to="/contact" className="border border-yellow-600 text-yellow-500 hover:bg-yellow-600 hover:text-white font-semibold px-8 py-3.5 rounded transition-all duration-200">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-yellow-600 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <p className="text-3xl md:text-4xl font-bold text-white font-serif">{s.value}</p>
                <p className="text-yellow-100 text-sm mt-1 tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 text-sm tracking-widest uppercase font-medium mb-2">What We Do</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Core Services</h2>
            <div className="w-16 h-0.5 bg-yellow-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="group p-8 border border-gray-100 rounded-lg hover:shadow-xl hover:border-yellow-200 transition-all duration-300 cursor-pointer">
                <div className="text-yellow-600 mb-4 group-hover:scale-110 transition-transform duration-200">{s.icon}</div>
                <h3 className="font-semibold text-gray-800 text-lg mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-yellow-600 font-medium hover:gap-3 transition-all duration-200">
              View All Services <FaArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-yellow-600 text-sm tracking-widest uppercase font-medium mb-2">Why Choose Us</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                We Build Technology That Works For You
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                At Bramhakrupa Infra LLP, we combine technical excellence with business understanding to deliver IT solutions that drive real growth. Based in Pune, we serve clients across India and globally.
              </p>
              <ul className="space-y-3">
                {whyUs.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <FaCheckCircle className="text-yellow-600 mt-0.5 shrink-0" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="inline-flex items-center gap-2 mt-8 bg-gray-800 hover:bg-gray-900 text-white font-medium px-6 py-3 rounded transition-colors duration-200">
                Learn More About Us <FaArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { bg: 'bg-yellow-600', title: 'Startup Friendly', desc: 'Affordable solutions for early-stage startups' },
                { bg: 'bg-gray-800', title: 'Enterprise Ready', desc: 'Scalable architecture for large organizations' },
                { bg: 'bg-gray-800', title: 'Agile Process', desc: 'Iterative development with regular updates' },
                { bg: 'bg-yellow-600', title: 'Full Support', desc: '24/7 post-delivery maintenance & support' },
              ].map((card, i) => (
                <div key={i} className={`${card.bg} text-white p-6 rounded-lg`}>
                  <h4 className="font-semibold mb-2">{card.title}</h4>
                  <p className="text-xs opacity-80 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-400 mb-8 text-lg">Let's discuss your requirements and build something amazing together.</p>
          <Link to="/contact" className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-10 py-4 rounded text-lg transition-colors duration-200 inline-flex items-center gap-2">
            Get a Free Consultation <FaArrowRight />
          </Link>
        </div>
      </section>
    </div>
  )
}
