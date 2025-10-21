'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Download, Send } from 'lucide-react'
import ParticlesBackground from '@/components/ui/ParticlesBackground'

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-dark dark:via-dark dark:to-dark-lighter">
      <ParticlesBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Name with gradient and glow */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-gradient glow-text relative inline-block
                           before:absolute before:inset-0 before:text-gradient before:blur-xl 
                           before:opacity-50 before:animate-pulse-slow">
              Ankhbayr
            </span>
          </motion.h1>

          {/* Role */}
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Веб ба Апп хөгжүүлэгч
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Frontend & Backend
          </motion.p>

          {/* Tagline */}
          <motion.p
            className="text-base md:text-lg text-neon-cyan mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Төгсгөлөөс төгсгөл хүртэл веб болон апп хөгжүүлэгч — frontend-ээс backend хүртэл бүрэн шийдэл
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <button
              onClick={scrollToProjects}
              className="btn-primary flex items-center gap-2 group/cta"
            >
              <span className="group-hover/cta:translate-y-1 transition-transform duration-300">Төслүүд үзэх</span>
              <ArrowDown size={20} className="group-hover/cta:animate-bounce" />
            </button>
            
            <button
              disabled
              className="btn-secondary flex items-center gap-2 group/download opacity-50 cursor-not-allowed"
              title="Удахгүй"
            >
              Анкет татах (Удахгүй)
              <Download size={20} />
            </button>

            <button
              onClick={scrollToContact}
              className="btn-secondary flex items-center gap-2 group/contact"
            >
              Холбоо барих
              <Send size={20} className="group-hover/contact:translate-x-1 group-hover/contact:-translate-y-1 transition-transform duration-300" />
            </button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              opacity: { delay: 1.2, duration: 0.8 },
              y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
            }}
          >
            <ArrowDown className="text-neon-cyan" size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

