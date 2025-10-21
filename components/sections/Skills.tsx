'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SkillCard from '@/components/ui/SkillCard'

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 95, description: 'Complex UI & state management' },
      { name: 'Next.js', level: 90, description: 'SSR, SSG, API routes' },
      { name: 'TypeScript', level: 90, description: 'Type-safe development' },
      { name: 'TailwindCSS', level: 95, description: 'Modern utility-first styling' },
      { name: 'JavaScript', level: 95, description: 'ES6+ & async patterns' },
      { name: 'HTML/CSS', level: 95, description: 'Semantic & responsive' },
      { name: 'Framer Motion', level: 85, description: 'Animation & transitions' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 90, description: 'API & microservices' },
      { name: 'Express', level: 90, description: 'REST API development' },
      { name: 'NestJS', level: 85, description: 'Scalable server apps' },
      { name: 'GraphQL', level: 80, description: 'Efficient data querying' },
      { name: 'REST API', level: 95, description: 'Design & implementation' },
      { name: 'Authentication', level: 85, description: 'JWT, OAuth, sessions' },
    ],
  },
  {
    category: 'Өгөгдлийн сан',
    skills: [
      { name: 'MySQL', level: 85, description: 'MySQL 8.0, 5.0 хувилбарууд' },
      { name: 'Firebase', level: 85, description: 'Realtime database & Firestore' },
      { name: 'PostgreSQL', level: 85, description: 'Харилцааны өгөгдлийн сангийн дизайн' },
      { name: 'MongoDB', level: 85, description: 'NoSQL & document stores' },
      { name: 'Prisma', level: 80, description: 'Орчин үеийн ORM' },
      { name: 'Redis', level: 75, description: 'Кэшлэлт & sessions' },
    ],
  },
  {
    category: 'Tools & Platforms',
    skills: [
      { name: 'Git/GitHub', level: 95, description: 'Version control & collaboration' },
      { name: 'Docker', level: 80, description: 'Containerization' },
      { name: 'Vercel', level: 90, description: 'Deployment & hosting' },
      { name: 'CI/CD', level: 85, description: 'Automated pipelines' },
      { name: 'Jest/Testing', level: 85, description: 'Unit & integration tests' },
      { name: 'Agile/Scrum', level: 90, description: 'Team collaboration' },
    ],
  },
  {
    category: 'Design & UX',
    skills: [
      { name: 'Responsive Design', level: 95, description: 'Mobile-first approach' },
      { name: 'UI/UX Principles', level: 85, description: 'User-centered design' },
      { name: 'Accessibility', level: 85, description: 'WCAG compliance' },
      { name: 'Performance', level: 90, description: 'Optimization & monitoring' },
    ],
  },
]

const competencies = [
  'Төслийн бүрэн эзэмшил',
  'API дизайн & баримтжуулалт',
  'Гүйцэтгэл оновчлол',
  'Хариуцлагатай UI хөгжүүлэлт',
  'Unit & integration тестлэх',
  'Кодын шалгалт & шилдэг практикууд',
  'Deployment & мониторинг',
  'Олон салбартай хамтын ажиллагаа',
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Ур чадвар & мэргэжил
        </motion.h2>

        {/* Skills by Category */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-neon-cyan to-neon-purple rounded-full" />
                {category.category}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    delay={categoryIndex * 0.1 + skillIndex * 0.05}
                    isInView={isInView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Work Style & Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Ажлын арга барил & чадамж
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {competencies.map((competency, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.05 }}
                className="card text-center p-4 hover:scale-105 transition-transform"
              >
                <p className="text-gray-800 dark:text-white text-sm">{competency}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

