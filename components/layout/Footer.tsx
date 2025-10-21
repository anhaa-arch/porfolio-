'use client'

import Link from 'next/link'
import { Github, Mail, Phone, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-dark-lighter border-t border-gray-200 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">Ankhbayr</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Freelance төсөл болон бүтэн цагийн ажил хайж байгаа Full-stack хөгжүүлэгч
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/anhaa-arch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-sky-600 dark:hover:text-neon-cyan transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:diwebsters9@gmail.com"
                className="text-gray-600 dark:text-gray-300 hover:text-sky-600 dark:hover:text-neon-cyan transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:90560444"
                className="text-gray-600 dark:text-gray-300 hover:text-sky-600 dark:hover:text-neon-cyan transition-colors"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Холбоосууд</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-neon-cyan transition-colors">
                  Миний тухай
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-neon-cyan transition-colors">
                  Төслүүд
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-neon-cyan transition-colors">
                  Ур чадвар
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-neon-cyan transition-colors">
                  Холбоо барих
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Холбоо барих</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>
                <a href="tel:90560444" className="hover:text-neon-cyan transition-colors">
                  Утас: 90560444
                </a>
              </li>
              <li>
                <a href="mailto:diwebsters9@gmail.com" className="hover:text-neon-cyan transition-colors">
                  И-мэйл: diwebsters9@gmail.com
                </a>
              </li>
              <li>
                Байршил: Монгол
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-dark-border text-center text-gray-600 dark:text-gray-300">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Ankhbayr. <Heart size={16} className="text-neon-magenta" />-оор Next.js & Tailwind CSS ашиглан бүтээсэн
          </p>
        </div>
      </div>
    </footer>
  )
}

