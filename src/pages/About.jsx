import { FaUsers, FaLightbulb, FaHandshake, FaRocket } from 'react-icons/fa'

const values = [
  { icon: <FaLightbulb size={24} />, title: 'Innovation', desc: 'We constantly explore new technologies to deliver cutting-edge solutions.' },
  { icon: <FaHandshake size={24} />, title: 'Integrity', desc: 'Transparent, honest partnerships with every client we work with.' },
  { icon: <FaUsers size={24} />, title: 'Collaboration', desc: 'We work as an extension of your team to achieve shared goals.' },
  { icon: <FaRocket size={24} />, title: 'Excellence', desc: 'Delivering high-quality work that exceeds expectations every time.' },
]

const team = [
  { name: 'Founder & CEO', dept: 'Leadership', initials: 'HK' },
  { name: 'CTO', dept: 'Technology', initials: 'AM' },
  { name: 'Lead Developer', dept: 'Engineering', initials: 'AM' },
  { name: 'UI/UX Designer', dept: 'Design', initials: 'RJ' },
]

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-yellow-500 text-sm tracking-widest uppercase mb-3">Who We Are</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">About Bramhakrupa Infra LLP</h1>
          <div className="w-16 h-0.5 bg-yellow-600 mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl leading-relaxed">
            A passionate IT company founded in 2026, based in Pune, Maharashtra — delivering innovative software solutions and technology products to businesses across India and beyond.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-yellow-600 text-sm tracking-widest uppercase mb-2">Our Story</p>
            <h2 className="font-serif text-3xl font-bold text-gray-800 mb-6">Built on Vision, Driven by Purpose</h2>
            <div className="w-12 h-0.5 bg-yellow-600 mb-6"></div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Bramhakrupa Infra LLP was founded with a clear mission — to bridge the gap between technology and business growth for companies of all sizes. Starting from Pune, we set out to provide world-class IT services and products that make a real difference.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our name draws inspiration from the divine blessings of Brahma — the creator — symbolizing our commitment to creating meaningful technology solutions that stand the test of time.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we offer a full spectrum of IT services — from custom software development and mobile apps to IT consulting and ready-to-use products — all under one roof.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-10">
            <div className="grid grid-cols-2 gap-6">
              {[
                { val: '2026', label: 'Founded' },
                { val: 'Pune', label: 'Headquarters' },
                { val: 'LLP', label: 'Business Type' },
                { val: 'IT', label: 'Industry' },
              ].map((item, i) => (
                <div key={i} className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-serif text-2xl font-bold text-yellow-600">{item.val}</p>
                  <p className="text-gray-500 text-sm mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 text-sm tracking-widest uppercase mb-2">What Drives Us</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <div className="w-16 h-0.5 bg-yellow-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="text-yellow-600 flex justify-center mb-4">{v.icon}</div>
                <h3 className="font-semibold text-gray-800 text-lg mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 text-sm tracking-widest uppercase mb-2">The People</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <div className="w-16 h-0.5 bg-yellow-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 rounded-full bg-yellow-100 border-2 border-yellow-300 flex items-center justify-center mx-auto mb-4 group-hover:border-yellow-600 transition-colors">
                  <span className="font-serif font-bold text-yellow-700 text-xl">{member.initials}</span>
                </div>
                <h4 className="font-semibold text-gray-800">{member.name}</h4>
                <p className="text-yellow-600 text-sm">{member.dept}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-8">* Update team member details in the code</p>
        </div>
      </section>
    </div>
  )
}
