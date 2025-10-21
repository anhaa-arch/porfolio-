'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Calendar, ExternalLink } from 'lucide-react'

const certifications = [
  {
    id: 1,
    title: 'Бакалаврын зэрэг',
    issuer: 'Улаанбаатар их сургууль',
    date: '2025 оны хавар',
    icon: '🎓',
    description: 'Компьютер шинжлэх ухаан',
    link: '#',
  },
]

const achievements = [
  {
    id: 1,
    icon: '💻',
    title: 'Dev Hackathon оролцоо',
    description: '2024-2025 онд амжилттай оролцсон',
  },
  {
    id: 2,
    icon: '🌐',
    title: 'Англи хэлний мэдлэг',
    description: 'Зохих түвшний мэдлэгтэй',
  },
  {
    id: 3,
    icon: '📚',
    title: 'Meta Front-End & Oracle сургалт',
    description: 'Онлайнаар суралцаж байгаа',
  },
]

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="certifications" className="section" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Боловсрол ба амжилт
        </motion.h2>

        {/* Certifications Grid */}
        <div className="mb-16">
        <section className="bg-white dark:bg-gray-900 py-12 px-6">
  <motion.h3
    initial={{ opacity: 0, x: -20 }}
    animate={isInView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3"
  >
    <Award className="text-cyan-400" size={28} />
    Боловсрол
  </motion.h3>
</section>



          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="card group hover:scale-105 transition-transform"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{cert.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-neon-cyan transition-colors">
                        {cert.title}
                      </h4>
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neon-cyan hover:text-neon-purple transition-colors"
                          aria-label="View credential"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                    <p className="text-neon-cyan text-sm font-semibold mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{cert.description}</p>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-500 text-xs">
                      <Calendar size={14} />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3"
          >
            <span className="text-3xl">🌟</span>
            Гол амжилт
          </motion.h3>

          <div className="grid grid-cols-1 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="card text-center hover:scale-105 transition-transform"
              >
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <h4 className="text-gray-900 dark:text-white font-bold mb-2">{achievement.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

