'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar } from 'lucide-react'

interface TimelineItemProps {
  item: {
    title: string
    company: string
    location: string
    period: string
    type: 'work' | 'education'
    description: string
    responsibilities: string[]
    technologies: string[]
  }
  index: number
  isInView: boolean
}

export default function TimelineItem({ item, index, isInView }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
      className="relative pl-8 pb-8 border-l-2 border-dark-border last:pb-0"
    >
      {/* Timeline dot */}
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple shadow-lg shadow-neon-cyan/50" />

      <div className="card">
        {/* Header */}
        <div className="mb-3">
          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
          <p className="text-neon-cyan font-semibold">{item.company}</p>
        </div>

        {/* Meta info */}
        <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-600 dark:text-gray-300">
          <span className="flex items-center gap-1">
            <Calendar size={16} />
            {item.period}
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={16} />
            {item.location}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-800 dark:text-white mb-4">{item.description}</p>

        {/* Responsibilities */}
        {item.responsibilities.length > 0 && (
          <div className="mb-4">
            <ul className="space-y-2">
              {item.responsibilities.map((responsibility, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm">
                  <span className="text-neon-cyan mt-1">▪</span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        {item.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-gray-100 dark:bg-dark border border-gray-300 dark:border-neon-cyan/30 rounded text-gray-800 dark:text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

