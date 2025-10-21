'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Github, Moon, Sun } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { name: 'Нүүр', href: '#hero' },
  { name: 'Миний тухай', href: '#about' },
  { name: 'Ур чадвар', href: '#skills' },
  { name: 'Төслүүд', href: '#projects' },
  { name: 'Туршлага', href: '#experience' },
  { name: 'Холбоо барих', href: '#contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Check localStorage for theme preference
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light') {
      setDarkMode(false)
      document.documentElement.classList.remove('dark')
    } else {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? darkMode 
            ? 'bg-dark/80 backdrop-blur-lg border-b border-dark-border' 
            : 'bg-white/80 backdrop-blur-lg border-b border-gray-200'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gradient glow-text">
            Ankhbayr
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`transition-colors duration-300 font-medium ${
                  darkMode 
                    ? 'text-gray-300 hover:text-neon-cyan' 
                    : 'text-gray-700 hover:text-neon-cyan'
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://github.com/anhaa-arch"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${
                darkMode ? 'text-gray-300 hover:text-neon-cyan' : 'text-gray-700 hover:text-neon-cyan'
              }`}
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <button
              onClick={toggleTheme}
              className={`transition-colors ${
                darkMode ? 'text-gray-300 hover:text-neon-cyan' : 'text-gray-700 hover:text-neon-cyan'
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <a
              href="https://github.com/anhaa-arch"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${
                darkMode ? 'text-gray-300 hover:text-neon-cyan' : 'text-gray-700 hover:text-neon-cyan'
              }`}
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors ${
                darkMode ? 'text-gray-300 hover:text-neon-cyan' : 'text-gray-700 hover:text-neon-cyan'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-b ${
              darkMode 
                ? 'bg-dark-lighter border-dark-border' 
                : 'bg-white border-gray-200'
            }`}
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block transition-colors font-medium ${
                    darkMode ? 'text-gray-300 hover:text-neon-cyan' : 'text-gray-700 hover:text-neon-cyan'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={toggleTheme}
                className={`flex items-center space-x-2 transition-colors ${
                  darkMode ? 'text-gray-300 hover:text-neon-cyan' : 'text-gray-700 hover:text-neon-cyan'
                }`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                <span>{darkMode ? 'Цайвар горим' : 'Харанхуй горим'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

