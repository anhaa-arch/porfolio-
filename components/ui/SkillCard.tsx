'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface Skill {
  name: string
  level: number
  description: string
}

interface SkillCardProps {
  skill: Skill
  delay: number
  isInView: boolean
}

export default function SkillCard({ skill, delay, isInView }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="card group relative overflow-hidden
                 hover:-translate-y-1 hover:shadow-xl hover:shadow-neon-cyan/10
                 transition-all duration-300"
    >
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-neon-cyan/5 to-neon-purple/5 rounded-full blur-2xl 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2" />
      
      <div className="flex items-start justify-between mb-3 relative z-10">
        <div>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white 
                       group-hover:text-sky-600 dark:group-hover:text-neon-cyan transition-colors duration-300 drop-shadow-sm">
            {skill.name}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{skill.description}</p>
        </div>
        <span className="text-neon-cyan font-bold text-lg drop-shadow-[0_0_8px_rgba(0,217,255,0.5)]
                       group-hover:scale-110 transition-transform duration-300">
          {skill.level}%
        </span>
      </div>
      
      {/* Progress Bar */}
      <div className="relative h-2.5 bg-gray-200 dark:bg-dark rounded-full overflow-hidden 
                    shadow-inner">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.3, ease: "easeOut" }}
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-cyan 
                   rounded-full shadow-lg shadow-neon-cyan/50
                   bg-[length:200%_100%] group-hover:animate-gradient"
        />
        
        {/* Glow effect on hover */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-r from-neon-cyan/50 to-neon-purple/50 blur-md"
            style={{ width: `${skill.level}%` }}
          />
        )}
        
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                      -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
    </motion.div>
  )
}

