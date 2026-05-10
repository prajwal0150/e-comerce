import { useState } from 'react'
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiMessageCircle,
  FiCheckCircle,
  FiAlertCircle,
} from 'react-icons/fi'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [formStatus, setFormStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setFormStatus({
        type: 'success',
        message: 'Thank you for your message! We will get back to you soon.',
      })
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setFormStatus(null), 5000)
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.',
      })
    } finally {
      setLoading(false)
    }
  }

  const contactMethods = [
    {
      icon: FiMail,
      title: 'Email',
      details: 'support@ecommerce.com',
      description: 'Send us an email for detailed inquiries',
    },
    {
      icon: FiPhone,
      title: 'Phone',
      details: '+1 (800) 123-4567',
      description: 'Available Monday - Friday, 9AM - 6PM EST',
    },
    {
      icon: FiMapPin,
      title: 'Office',
      details: '123 Commerce St, Tech City, TC 12345',
      description: 'Visit us in person for personalized assistance',
    },
    {
      icon: FiClock,
      title: 'Live Chat',
      details: 'Available 24/7',
      description: 'Get instant support from our team',
    },
  ]

  const faqs = [
    {
      question: 'How long does shipping take?',
      answer:
        'Standard shipping takes 5-7 business days. Express shipping is available for 2-3 business day delivery.',
    },
    {
      question: 'What is your return policy?',
      answer:
        'We offer 30-day returns on all items in original condition. Free returns for the first 15 days.',
    },
    {
      question: 'Do you offer international shipping?',
      answer:
        'Yes, we ship to over 150 countries. International shipping rates vary by location.',
    },
    {
      question: 'How can I track my order?',
      answer:
        'You will receive a tracking number via email once your order ships. Track it on our website anytime.',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Methods */}
          {contactMethods.map((method, idx) => {
            const Icon = method.icon
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-4">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-sm text-blue-600 font-medium mb-2">
                  {method.details}
                </p>
                <p className="text-sm text-gray-600">{method.description}</p>
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>

            {formStatus && (
              <div
                className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
                  formStatus.type === 'success'
                    ? 'bg-green-50 border border-green-200'
                    : 'bg-red-50 border border-red-200'
                }`}
              >
                {formStatus.type === 'success' ? (
                  <FiCheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <FiAlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                )}
                <p
                  className={
                    formStatus.type === 'success'
                      ? 'text-green-800'
                      : 'text-red-800'
                  }
                >
                  {formStatus.message}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FiMessageCircle className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition"
                >
                  <summary className="flex items-center justify-between cursor-pointer px-6 py-4 select-none">
                    <h3 className="font-semibold text-gray-900 text-base">
                      {faq.question}
                    </h3>
                    <span className="text-gray-500 group-open:text-blue-600 transition">
                      +
                    </span>
                  </summary>
                  <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Average Response Time
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              We typically respond to inquiries within 24 business hours
            </p>
            <p className="text-sm text-gray-500">
              For urgent matters, please call our support line at{' '}
              <span className="font-semibold text-blue-600">+1 (800) 123-4567</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
