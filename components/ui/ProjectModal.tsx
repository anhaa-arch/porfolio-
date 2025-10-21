'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, ExternalLink, CheckCircle2 } from 'lucide-react'
import type { Project } from '@/components/sections/Projects'
import { useEffect } from 'react'

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [onClose])

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative bg-dark-lighter border border-dark-border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-dark rounded-lg text-gray-400 hover:text-white hover:bg-dark-border transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>

          <div className="p-8">
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
              <p className="text-gray-400">{project.longDescription}</p>
              
              {/* Links */}
              <div className="flex gap-4 mt-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm py-2 px-4 flex items-center gap-2"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm py-2 px-4 flex items-center gap-2"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-dark border border-neon-cyan/30 rounded-lg text-neon-cyan text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Case Study Sections */}
            <div className="space-y-6">
              {/* Overview */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Overview</h3>
                <p className="text-gray-300 leading-relaxed">{project.caseStudy.overview}</p>
              </div>

              {/* Role */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">My Role</h3>
                <p className="text-gray-300 leading-relaxed">{project.caseStudy.role}</p>
              </div>

              {/* Challenges */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Challenges</h3>
                <ul className="space-y-2">
                  {project.caseStudy.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <span className="text-neon-magenta mt-1">▪</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Solutions</h3>
                <ul className="space-y-2">
                  {project.caseStudy.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle2 className="text-neon-cyan mt-1 flex-shrink-0" size={20} />
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Architecture */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Architecture</h3>
                <p className="text-gray-300 leading-relaxed bg-dark p-4 rounded-lg border border-dark-border">
                  {project.caseStudy.architecture}
                </p>
              </div>

              {/* Results */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Results & Impact</h3>
                <ul className="space-y-2">
                  {project.caseStudy.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={20} />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

