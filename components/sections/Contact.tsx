'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, Github, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: <Mail size={24} />,
    label: 'И-мэйл',
    value: 'diwebsters9@gmail.com',
    href: 'mailto:diwebsters9@gmail.com',
  },
  {
    icon: <Phone size={24} />,
    label: 'Утас',
    value: '90560444',
    href: 'tel:90560444',
  },
  {
    icon: <Github size={24} />,
    label: 'GitHub',
    value: 'anhaa-arch',
    href: 'https://github.com/anhaa-arch',
  },
  {
    icon: <MapPin size={24} />,
    label: 'Байршил',
    value: 'Монгол',
    href: null,
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setErrorMessage(data.error || 'Failed to send message')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('Network error. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="section" ref={ref}>
    <div className="max-w-7xl mx-auto">
  <motion.h2
    className="section-title"
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6 }}
  >
    Холбоо барих
  </motion.h2>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
    {/* Contact Info */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="dark:bg-[#111] rounded-2xl p-8 transition-colors"
    >
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Хамтран ажиллацгаая
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
        Би шинэ төсөл, бүтээлч санаа, эсвэл таны алсын хараанд хамтрагч байх боломжийн талаар 
        ярилцахад үргэлж нээлттэй байдаг. Доорх сувгуудаар холбогдоно уу.
      </p>

      <div className="space-y-6">
        {contactInfo.map((info, index) => (
          <motion.div
            key={info.label}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center text-neon-cyan">
              {info.icon}
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{info.label}</p>
              {info.href ? (
                <a
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-gray-900 dark:text-white font-semibold hover:text-sky-600 dark:hover:text-neon-cyan transition-colors"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-gray-900 dark:text-white font-semibold">{info.value}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-8 card dark:bg-[#1a1a1a] dark:border-[#2a2a2a]"
      >
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          💼 Freelance төсөл болон бүтэн цагийн ажил хайж байна
        </p>
      </motion.div>
    </motion.div>

    {/* Contact Form */}
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="dark:bg-[#111] rounded-2xl p-8 transition-colors"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-gray-900 dark:text-white font-semibold mb-2">
            Нэр
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-[#2a2a2a] rounded-lg text-gray-900 dark:text-white focus:border-sky-500 dark:focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-sky-500/50 dark:focus:ring-neon-cyan/50 transition-all"
            placeholder="Таны нэр"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-gray-900 dark:text-white font-semibold mb-2">
            И-мэйл
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-[#2a2a2a] rounded-lg text-gray-900 dark:text-white focus:border-sky-500 dark:focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-sky-500/50 dark:focus:ring-neon-cyan/50 transition-all"
            placeholder="tanii.email@example.com"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-gray-900 dark:text-white font-semibold mb-2">
            Мессеж
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-[#2a2a2a] rounded-lg text-gray-900 dark:text-white focus:border-sky-500 dark:focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-sky-500/50 dark:focus:ring-neon-cyan/50 transition-all resize-none"
            placeholder="Таны мессеж..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Илгээж байна...
            </>
          ) : (
            <>
              Мессеж илгээх
              <Send size={20} />
            </>
          )}
        </button>

        {/* Status Messages */}
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-green-400 bg-green-400/10 border border-green-400/30 rounded-lg p-4 dark:bg-green-400/10 dark:border-green-400/30"
          >
            <CheckCircle2 size={20} />
            <p>Мессеж амжилттай илгээгдлээ! Би тантай удахгүй холбогдох болно.</p>
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/30 rounded-lg p-4 dark:bg-red-400/10 dark:border-red-400/30"
          >
            <AlertCircle size={20} />
            <p>{errorMessage || 'Мессеж илгээхэд алдаа гарлаа. Дахин оролдоно уу.'}</p>
          </motion.div>
        )}
      </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

