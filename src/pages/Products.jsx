import { Link } from 'react-router-dom'
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa'

const products = [
  {
    name: 'BizTrack ERP',
    category: 'Business Management',
    desc: 'A complete ERP solution for small and medium businesses to manage inventory, billing, HR, and more from one platform.',
    features: ['Inventory Management', 'GST Billing', 'HR & Payroll', 'Analytics Dashboard', 'Multi-branch Support'],
    badge: 'Popular',
    badgeColor: 'bg-yellow-600',
  },
  {
    name: 'SchoolSync',
    category: 'Education Technology',
    desc: 'A school management system covering admissions, attendance, fees, exams, and parent communication.',
    features: ['Student Management', 'Fee Collection', 'Attendance Tracking', 'Exam Results', 'Parent Portal'],
    badge: 'New',
    badgeColor: 'bg-green-600',
  },
  {
    name: 'ClinicPlus',
    category: 'Healthcare',
    desc: 'Digital clinic management software for doctors and hospitals to manage appointments, records, and billing.',
    features: ['Appointment Booking', 'Patient Records', 'Prescription Generator', 'Billing & Reports', 'SMS Alerts'],
    badge: null,
    badgeColor: '',
  },
  {
    name: 'RetailPOS',
    category: 'Retail & Commerce',
    desc: 'A point-of-sale system designed for retail shops with GST support, inventory, and customer management.',
    features: ['Billing & POS', 'GST Reports', 'Stock Alerts', 'Customer Loyalty', 'Multi-device'],
    badge: 'Coming Soon',
    badgeColor: 'bg-gray-500',
  },
]

export default function Products() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-yellow-500 text-sm tracking-widest uppercase mb-3">Our Products</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Ready-to-Use IT Products</h1>
          <div className="w-16 h-0.5 bg-yellow-600 mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Off-the-shelf yet customizable software products designed for Indian businesses — affordable, reliable, and scalable.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((p, i) => (
              <div key={i} className="border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="bg-gray-50 p-8 border-b border-gray-100">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-yellow-600 text-xs tracking-widest uppercase mb-1">{p.category}</p>
                      <h3 className="font-serif font-bold text-gray-800 text-2xl">{p.name}</h3>
                    </div>
                    {p.badge && (
                      <span className={`${p.badgeColor} text-white text-xs px-3 py-1 rounded-full font-medium`}>{p.badge}</span>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
                <div className="p-8">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-3 font-medium">Key Features</p>
                  <ul className="space-y-2 mb-6">
                    {p.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                        <FaCheckCircle className="text-yellow-600 shrink-0" size={14} /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-yellow-600 hover:gap-3 transition-all">
                    Request Demo <FaArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom product CTA */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">Need a Custom Product?</h2>
          <p className="text-gray-500 mb-8 text-lg">We build tailor-made software products from scratch based on your specific business needs.</p>
          <Link to="/contact" className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-10 py-4 rounded text-lg transition-colors inline-flex items-center gap-2">
            Let's Build Together <FaArrowRight />
          </Link>
        </div>
      </section>
    </div>
  )
}
