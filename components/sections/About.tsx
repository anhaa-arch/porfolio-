'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Rocket, Users, Zap } from 'lucide-react'
import Image from 'next/image'

const facts = [
  {
    icon: <Code2 className="w-6 h-6" />,
    label: 'Full Stack',
    value: 'Frontend & Backend',
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    label: 'Хөгжүүлэлт',
    value: 'Веб & Мобайл Апп',
  },
  {
    icon: <Users className="w-6 h-6" />,
    label: 'Арга зүй',
    value: 'Agile үйл явц',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    label: 'Байршил',
    value: 'Монгол',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="section" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Миний тухай
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta rounded-2xl blur-2xl opacity-20 group-hover:opacity-50 animate-pulse-slow transition-opacity duration-500" />
              <div className="relative w-full h-full bg-white/80 dark:bg-dark-lighter backdrop-blur-sm border-2 border-neon-cyan rounded-2xl overflow-hidden shadow-2xl shadow-neon-cyan/20 group-hover:shadow-neon-cyan/40 transition-all duration-500">
                <Image
                  src="/profile.jpg"
                  alt="Ankhbayr - Web & App Developer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="text-gradient">Мэргэжлийн  Веб ба Апп хөгжүүлэгч</span>
            </h3>
            
            <div className="space-y-6 text-black leading-relaxed">
  <p className="text-lg font-medium">
    <span className="font-semibold"></span> 
    Би орчин үеийн веб аппликэйшн болон backend үйлчилгээ хөгжүүлэх чиглэлээр суралцаж, 
    бодитоор ажиллаж эхэлж байгаа 
    <span className="font-semibold"> full-stack хөгжүүлэгч</span>.
    Frontend болон backend талын технологид сонирхолтой бөгөөд бодит хэрэглээнд нийцсэн, 
    хурдан ажиллагаатай, ойлгомжтой шийдлүүдийг бүтээхэд анхаардаг.
  </p>

  <p className="text-lg font-medium">
    Хөгжүүлэлтийн явцдаа 
    <span className="font-semibold">цэвэр, ойлгомжтой код бичих</span>, 
    дахин ашиглах боломжтой бүтэцтэй ажиллахыг чухалчилдаг.
    Цөөн гишүүнтэй багуудтай хамтран ажиллаж байсан туршлагатай бөгөөд 
    <span className="italic font-semibold"> Agile, Scrum </span>
    арга барилыг ашиглан санаанаас бодит бүтээгдэхүүн хүртэл ажиллаж үзсэн.
  </p>

  <p className="text-lg font-medium">
    <span className="font-semibold">React, Next.js</span> ашиглан UI тал дээр, 
    <span className="font-semibold">Node.js</span> ашиглан backend API болон үйлчилгээний тал дээр ажиллаж байсан туршлагатай.
    Одоогоор 
    <span className="underline decoration-dotted font-semibold">"MalchinCamp"</span> 
    нэртэй төсөл дээр хоёр хамтрагчтайгаа хамтран хөгжүүлж байна.
  </p>
</div>

            {/* Quick Facts Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {facts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="card flex items-start gap-3"
                >
                  <div className="text-neon-cyan dark:text-neon-cyan text-sky-600 mt-1">{fact.icon}</div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{fact.label}</p>
                    <p className="text-gray-900 dark:text-white font-semibold">{fact.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

