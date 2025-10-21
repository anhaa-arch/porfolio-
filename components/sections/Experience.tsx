'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, GraduationCap } from 'lucide-react'
import TimelineItem from '@/components/ui/TimelineItem'

const experiences = [
  {
    id: 1,
    title: 'Full Stack хөгжүүлэгч',
    company: 'Malchincamp',
    location: 'Монгол',
    period: '2022 - Одоо',
    type: 'work' as const,
    description: 'Малчин дэргэдэх гэр түрээсийн үйлчилгээ болон малчдын бүтээгдэхүүний шууд худалдааны платформын хөгжүүлэлтийг удирдсан.',
    responsibilities: [
      'Next.js, TypeScript, Node.js ашиглан full-stack веб аппликэйшнийг архитектур хийж хөгжүүлсэн',
      'Docker ашиглан containerization хийж deployment-ийг хялбарчилсан',
      'GraphQL API дизайн хийж хэрэгжүүлсэн',
      'Өгөгдлийн сангийн асуулгыг оновчлон ачаалах хугацааг 60% бууруулсан',
      'Багийн гишүүдтэй хамтран Agile арга барилаар ажилласан',
    ],
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'GraphQL'],
  },
  {
    id: 2,
    title: 'Веб хөгжүүлэгч',
    company: 'bathongorhiits.mn',
    location: 'Монгол',
    period: '2021 - 2022',
    type: 'work' as const,
    description: 'Төмөр хаяа үйлдвэрлэлийн цахим худалдааны систем хөгжүүлсэн.',
    responsibilities: [
      'React болон TailwindCSS ашиглан хариуцлагатай цахим худалдааны frontend бүтээсэн',
      'Төмөр бүтээгдэхүүний каталог болон захиалгын систем хөгжүүлсэн',
      'Төлбөрийн гарц болон бараа материалын удирдлагын системүүдийг интеграцчилсон',
      'Бүтээгдэхүүн болон захиалгын удирдлагын админ dashboard үүсгэсэн',
      'Responsive дизайн хэрэгжүүлж бүх төхөөрөмж дээр ажиллахаар хийсэн',
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS', 'AWS'],
  },
]

const education = [
  {
    id: 1,
    title: 'Компьютер шинжлэх ухаан',
    company: 'Улаанбаатар их сургууль',
    location: 'Монгол',
    period: '2025 оны хавар',
    type: 'education' as const,
    description: 'Компьютер шинжлэх ухааны чиглэлээр бакалаврын зэрэг хамгаалсан.',
    responsibilities: [
      'Бакалаврын зэрэг',
      'Веб технологи болон өгөгдлийн сангийн системд төвлөрсөн',
      'Өргөтгөх боломжтой веб аппликэйшны төсөл хийсэн',
    ],
    technologies: [],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="section" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Туршлага & боловсрол
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <Briefcase className="text-neon-cyan" size={32} />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Ажлын туршлага</h3>
            </motion.div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <TimelineItem
                  key={exp.id}
                  item={exp}
                  index={index}
                  isInView={isInView}
                />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <GraduationCap className="text-neon-purple" size={32} />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Боловсрол</h3>
            </motion.div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <TimelineItem
                  key={edu.id}
                  item={edu}
                  index={index}
                  isInView={isInView}
                />
              ))}
            </div>

            {/* Additional Certifications Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 card"
            >
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                📜 Нэмэлт боловсрол болон амжилтуудыг{' '}
                <a href="#certifications" className="text-neon-cyan hover:underline">
                  Боловсрол ба амжилт хэсэгт
                </a> үзнэ үү
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

