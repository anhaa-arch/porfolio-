'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import ProjectCard from '@/components/ui/ProjectCard'
import ProjectModal from '@/components/ui/ProjectModal'

export interface Project {
  id: string
  title: string
  category: 'web' | 'app' | 'backend' | 'fullstack'
  description: string
  longDescription: string
  image: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  caseStudy: {
    overview: string
    role: string
    challenges: string[]
    solutions: string[]
    architecture: string
    results: string[]
  }
}

// TODO: Replace with actual project data, images, and descriptions
const projects: Project[] = [
  {
    id: 'malchincamp',
    title: 'Malchincamp',
    category: 'fullstack',
    description: 'Малчин дэргэдэх гэр түрээсийн үйлчилгээ болон малчдын бүтээгдэхүүний шууд худалдааны платформ',
    longDescription: 'Malchincamp нь малчид өөрсдийн бүтээгдэхүүнээ change-ийн гар дамжуулахгүйгээр шууд худалдан борлуулах, гэр түрээслэх боломжтой систем. Жуулчид малчин дэргэдэх гэрийн түрээсийн үйлчилгээ авах, орон нутгийн бүтээгдэхүүн худалдан авах боломжтой.',
    image: '/malchincamp.png',
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'GraphQL'],
    githubUrl: 'https://github.com/anhaa-arch',
    liveUrl: 'https://gerbook-travel-site.vercel.app/',
    caseStudy: {
      overview: 'Malchincamp нь малчдад өөрсдийн бүтээгдэхүүнээ шууд борлуулах, гэр түрээслэх боломж олгох, жуулчдад малчин дэргэдэх гэрийн түрээс болон орон нутгийн бүтээгдэхүүн худалдан авах боломжийг олгох орчин үеийн платформ юм.',
      role: 'Full-Stack Developer - Responsible for end-to-end development including frontend UI, backend API design, database architecture, and deployment.',
      challenges: [
        'Complex scheduling system with multiple time zones and concurrent activities',
        'Real-time availability tracking for limited camp spots',
        'Secure payment integration with multiple payment providers',
        'Mobile-responsive design for on-the-go access',
        'Performance optimization for handling peak registration periods',
      ],
      solutions: [
        'Implemented optimistic UI updates with React Query for real-time data synchronization',
        'Built a custom scheduling engine with conflict detection algorithms',
        'Integrated Stripe API with webhook handlers for secure payment processing',
        'Designed mobile-first responsive layouts using TailwindCSS',
        'Implemented Redis caching layer to reduce database load during high traffic',
      ],
      architecture: 'Next.js frontend with server-side rendering, Node.js/Express backend API, PostgreSQL database with Prisma ORM, Redis for caching, deployed on Vercel with CI/CD pipeline.',
      results: [
        'Successfully handled 500+ concurrent users during peak registration',
        '40% reduction in registration processing time',
        '95% positive user feedback on interface usability',
        'Zero payment processing errors since launch',
        'Mobile usage accounts for 60% of total traffic',
      ],
    },
  },
  {
    id: 'bathongorhiits',
    title: 'bathongorhiits.mn',
    category: 'web',
    description: 'Төмөр хаяа үйлдвэрлэл, зуслангийн төмөр хашаа болон халаа зэргийг борлуулах цахим худалдааны систем',
    longDescription: 'bathongorhiits.mn нь төмөр хаяа үйлдвэрлэлийн худалдааны систем бөгөөд зуслангийн төмөр хашаа, халаа зэрэг төмөр бүтээгдэхүүнүүдийг борлуулах, захиалга авах, бүтээгдэхүүний каталогийг удирдах цогц шийдэл юм.',
    image: '/bathongor.png',
    techStack: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Express', 'TailwindCSS'],
    githubUrl: 'https://github.com/anhaa-arch',
    liveUrl: 'https://www.bathongorhiits.mn/',
    caseStudy: {
      overview: 'bathongorhiits.mn нь төмөр хаяа үйлдвэрлэлийн бүтээгдэхүүнийг онлайнаар борлуулах, захиалга хүлээн авах, бүтээгдэхүүний каталог удирдах зориулалттай мэргэжлийн цахим худалдааны платформ юм.',
      role: 'Lead Developer - Architected the entire solution including product catalog system, quote calculator, admin dashboard, and third-party integrations.',
      challenges: [
        'Complex pricing logic based on quantity, material type, and delivery location',
        'Real-time inventory synchronization across multiple warehouses',
        'Custom quote generation with PDF export functionality',
        'Image optimization for large product catalogs',
        'SEO optimization for product discoverability',
      ],
      solutions: [
        'Developed a flexible pricing engine with rule-based calculations',
        'Built inventory management system with webhook integration to warehouse APIs',
        'Implemented PDF generation service using React-PDF with custom templates',
        'Utilized Next.js Image optimization and lazy loading for performance',
        'Implemented structured data (JSON-LD) and dynamic meta tags for SEO',
      ],
      architecture: 'React SPA frontend, RESTful Node.js/Express backend, MongoDB database with aggregation pipelines for reporting, AWS S3 for image storage, deployed on Vercel and AWS.',
      results: [
        '200+ products successfully migrated to new platform',
        '3x increase in online quote requests within first quarter',
        '50% improvement in page load times compared to legacy system',
        'Search engine traffic increased by 120%',
        'Reduced manual inventory errors by 85%',
      ],
    },
  },
]

const filterOptions = ['Бүгд', 'Веб', 'Апп', 'Backend', 'Full Stack']

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [filter, setFilter] = useState('Бүгд')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = projects.filter((project) => {
    if (filter === 'Бүгд') return true
    const filterMap: { [key: string]: string } = {
      'Веб': 'web',
      'Апп': 'app',
      'Backend': 'backend',
      'Full Stack': 'fullstack'
    }
    return project.category === filterMap[filter]
  })

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Онцлох төслүүд
        </motion.h2>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => setFilter(option)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                filter === option
                  ? 'bg-gradient-to-r from-neon-cyan to-neon-purple text-white shadow-lg shadow-neon-cyan/50'
                  : 'bg-dark-lighter border border-dark-border text-gray-300 hover:border-neon-cyan'
              }`}
            >
              {option}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={index * 0.1}
              isInView={isInView}
              onViewDetails={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-400 text-lg">Энэ ангилалд төсөл олдсонгүй</p>
          </motion.div>
        )}

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  )
}

