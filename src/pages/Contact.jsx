import { useState } from 'react'
import axios from 'axios'
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaCheckCircle } from 'react-icons/fa'

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      await axios.post(`${API}/api/contact`, form)
      setStatus('success')
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-yellow-500 text-sm tracking-widest uppercase mb-3">Get In Touch</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <div className="w-16 h-0.5 bg-yellow-600 mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl">Have a project in mind? Let's talk. We respond within 24 hours.</p>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Contact Info */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-gray-800 mb-6">Let's Connect</h2>
            <div className="w-10 h-0.5 bg-yellow-600 mb-8"></div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt className="text-yellow-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800 text-sm">Location</p>
                  <p className="text-gray-500 text-sm mt-0.5">Pune, Maharashtra, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center shrink-0">
                  <FaEnvelope className="text-yellow-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800 text-sm">Email</p>
                  <a href="mailto:info@bramhakrupainfra.com" className="text-yellow-600 text-sm hover:underline mt-0.5 block">
                    info@bramhakrupainfra.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center shrink-0">
                  <FaPhone className="text-yellow-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800 text-sm">Phone</p>
                  <a href="tel:+919999999999" className="text-gray-500 text-sm hover:text-yellow-600 mt-0.5 block">
                    +91 9826012605
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center shrink-0">
                  <FaLinkedin className="text-yellow-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800 text-sm">LinkedIn</p>
                  <a href="https://linkedin.com/company/bramhakrupa-infra-llp" target="_blank" rel="noreferrer" className="text-yellow-600 text-sm hover:underline mt-0.5 block">
                    @bramhakrupa-infra-llp
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-gray-50 rounded-xl">
              <p className="font-medium text-gray-800 mb-2">Business Hours</p>
              <p className="text-gray-500 text-sm">Mon – Sat: 9:00 AM – 7:00 PM IST</p>
              <p className="text-gray-500 text-sm">Sunday: Closed</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            <div className="w-10 h-0.5 bg-yellow-600 mb-8"></div>

            {status === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center gap-3">
                <FaCheckCircle className="text-green-600" />
                <p className="text-green-700 text-sm font-medium">Message sent successfully! We'll get back to you within 24 hours.</p>
              </div>
            )}
            {status === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-red-700 text-sm">Something went wrong. Please try again or email us directly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                  <input
                    type="text" name="name" value={form.name} onChange={handleChange} required
                    placeholder="Your full name"
                    className="w-full bordefr border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                  <input
                    type="email" name="email" value={form.email} onChange={handleChange} required
                    placeholder="your@email.com"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                  <input
                    type="tel" name="phone" value={form.phone} onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject *</label>
                  <select
                    name="subject" value={form.subject} onChange={handleChange} required
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors bg-white"
                  >
                    <option value="">Select a subject</option>
                    <option>Web Development</option>
                    <option>Mobile App Development</option>
                    <option>IT Consulting</option>
                    <option>Product Demo</option>
                    <option>Cloud Solutions</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange} required
                  rows={5} placeholder="Tell us about your project or requirement..."
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors resize-none"
                />
              </div>
              <button
                type="submit" disabled={loading}
                className="bg-yellow-600 hover:bg-yellow-700 disabled:opacity-60 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors duration-200 text-sm"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
