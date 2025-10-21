'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, FileText } from 'lucide-react'
import Image from 'next/image'
import type { Project } from '@/components/sections/Projects'

interface ProjectCardProps {
  project: Project
  delay: number
  isInView: boolean
  onViewDetails: () => void
}

export default function ProjectCard({ project, delay, isInView, onViewDetails }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="card group overflow-hidden relative
                 before:absolute before:inset-0 before:-z-10 before:rounded-xl
                 before:bg-gradient-to-br before:from-neon-cyan/5 before:to-neon-purple/5
                 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500
                 hover:shadow-xl hover:shadow-neon-cyan/10 hover:-translate-y-1
                 transition-all duration-300"
    >
      {/* Project Image */}
      <div className="relative h-48 rounded-lg overflow-hidden mb-4 group-hover:shadow-2xl group-hover:shadow-neon-cyan/20 transition-all duration-300">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-lg" />
      </div>

      {/* Project Info */}
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white 
                         group-hover:text-sky-600 dark:group-hover:text-neon-cyan transition-colors duration-300
                         drop-shadow-sm">
            {project.title}
          </h3>
          <span className="px-3 py-1 text-xs font-semibold 
                           bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 
                           dark:from-neon-cyan/20 dark:to-neon-purple/20
                           from-sky-500/20 to-purple-500/20
                           text-neon-cyan dark:text-neon-cyan text-sky-600 
                           rounded-full border border-neon-cyan/30 dark:border-neon-cyan/30 border-sky-500/30
                           shadow-sm">
            {project.category}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs 
                         bg-gray-100 dark:bg-dark
                         border border-gray-300 dark:border-dark-border
                         rounded text-gray-800 dark:text-white
                         hover:border-sky-600 hover:text-sky-600
                         dark:hover:border-neon-cyan dark:hover:text-neon-cyan
                         transition-all duration-200 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <button
            onClick={onViewDetails}
            className="flex-1 btn-primary text-sm py-2 
                       shadow-lg shadow-neon-cyan/30 hover:shadow-neon-cyan/50
                       relative overflow-hidden group/btn"
          >
            <span className="relative z-10">Case Study</span>
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-cyan 
                          bg-[length:200%_100%] animate-gradient opacity-0 group-hover/btn:opacity-20 
                          transition-opacity duration-300" />
          </button>
          
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-neon-cyan/50 text-neon-cyan rounded-lg 
                         hover:bg-neon-cyan hover:text-white hover:border-neon-cyan
                         hover:shadow-lg hover:shadow-neon-cyan/50
                         transition-all duration-300 hover:scale-110"
              aria-label="View on GitHub"
            >
              <Github size={20} />
            </a>
          )}
          
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-neon-cyan/50 text-neon-cyan rounded-lg 
                         hover:bg-neon-cyan hover:text-white hover:border-neon-cyan
                         hover:shadow-lg hover:shadow-neon-cyan/50
                         transition-all duration-300 hover:scale-110"
              aria-label="View live demo"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

