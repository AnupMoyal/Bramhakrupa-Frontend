import { Link } from 'react-router-dom'
import { FaCode, FaMobileAlt, FaCloud, FaLaptopCode, FaChartLine, FaShieldAlt, FaDatabase, FaPaintBrush, FaArrowRight } from 'react-icons/fa'

const services = [
  {
    icon: <FaCode size={32} />,
    title: 'Web Development',
    desc: 'We build fast, responsive, and scalable web applications using modern frameworks like React, Node.js, and more.',
    features: ['React / Next.js Frontend', 'Node.js Backend', 'REST & GraphQL APIs', 'Database Integration'],
  },
  {
    icon: <FaMobileAlt size={32} />,
    title: 'Mobile App Development',
    desc: 'Cross-platform mobile apps for Android and iOS that are performant, beautiful, and user-friendly.',
    features: ['React Native Apps', 'Android & iOS', 'App Store Deployment', 'Push Notifications'],
  },
  {
    icon: <FaCloud size={32} />,
    title: 'Cloud Solutions',
    desc: 'Cloud infrastructure setup, migration, and management on AWS, Azure, and Google Cloud platforms.',
    features: ['AWS / GCP / Azure', 'CI/CD Pipelines', 'Docker & Kubernetes', 'Cloud Migration'],
  },
  {
    icon: <FaLaptopCode size={32} />,
    title: 'IT Consulting',
    desc: 'Strategic IT advisory to help you make the right technology decisions aligned with your business goals.',
    features: ['Tech Stack Advisory', 'Architecture Review', 'Digital Strategy', 'Cost Optimization'],
  },
  {
    icon: <FaChartLine size={32} />,
    title: 'Digital Transformation',
    desc: 'End-to-end digital transformation services to modernize your business processes and operations.',
    features: ['Process Automation', 'Legacy Modernization', 'ERP Integration', 'Analytics Setup'],
  },
  {
    icon: <FaShieldAlt size={32} />,
    title: 'Cyber Security',
    desc: 'Protect your business with robust security solutions, audits, and compliance frameworks.',
    features: ['Security Audits', 'Penetration Testing', 'SSL & Data Encryption', 'Compliance Consulting'],
  },
  {
    icon: <FaDatabase size={32} />,
    title: 'Database Management',
    desc: 'Database design, optimization, and management for MongoDB, MySQL, PostgreSQL and more.',
    features: ['Schema Design', 'Performance Tuning', 'Data Migration', 'Backup Solutions'],
  },
  {
    icon: <FaPaintBrush size={32} />,
    title: 'UI/UX Design',
    desc: 'User-centric design that creates engaging digital experiences and drives conversions.',
    features: ['Wireframing', 'Figma Prototypes', 'Brand Identity', 'Responsive Design'],
  },
]

export default function Services() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-yellow-500 text-sm tracking-widest uppercase mb-3">What We Offer</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <div className="w-16 h-0.5 bg-yellow-600 mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            From custom software development to strategic IT consulting, we offer end-to-end technology services tailored for your business.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <div key={i} className="group border border-gray-100 rounded-xl p-8 hover:shadow-xl hover:border-yellow-200 transition-all duration-300">
                <div className="flex items-start gap-5">
                  <div className="text-yellow-600 shrink-0 mt-1">{s.icon}</div>
                  <div>
                    <h3 className="font-serif font-bold text-gray-800 text-xl mb-2">{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                    <ul className="grid grid-cols-2 gap-1">
                      {s.features.map((f, j) => (
                        <li key={j} className="text-xs text-gray-500 flex items-center gap-1.5">
                          <span className="text-yellow-600">✓</span> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-yellow-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-yellow-100 mb-8 text-lg">Tell us about your project and we'll find the best approach for you.</p>
          <Link to="/contact" className="bg-white text-yellow-600 hover:bg-gray-100 font-semibold px-10 py-4 rounded text-lg transition-colors inline-flex items-center gap-2">
            Discuss Your Project <FaArrowRight />
          </Link>
        </div>
      </section>
    </div>
  )
}
