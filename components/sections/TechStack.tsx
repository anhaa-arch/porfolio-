'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

interface TechNode {
  id: string
  label: string
  category: 'frontend' | 'backend' | 'database' | 'tools'
  x: number
  y: number
}

// Tech stack nodes positioned in a visual network
const techNodes: TechNode[] = [
  // Frontend
  { id: 'react', label: 'React', category: 'frontend', x: 25, y: 20 },
  { id: 'nextjs', label: 'Next.js', category: 'frontend', x: 15, y: 35 },
  { id: 'typescript', label: 'TypeScript', category: 'frontend', x: 35, y: 35 },
  { id: 'tailwind', label: 'Tailwind', category: 'frontend', x: 25, y: 50 },
  
  // Backend
  { id: 'nodejs', label: 'Node.js', category: 'backend', x: 75, y: 20 },
  { id: 'express', label: 'Express', category: 'backend', x: 65, y: 35 },
  { id: 'nestjs', label: 'NestJS', category: 'backend', x: 85, y: 35 },
  { id: 'graphql', label: 'GraphQL', category: 'backend', x: 75, y: 50 },
  
  // Database
  { id: 'postgresql', label: 'PostgreSQL', category: 'database', x: 50, y: 65 },
  { id: 'mongodb', label: 'MongoDB', category: 'database', x: 40, y: 80 },
  { id: 'redis', label: 'Redis', category: 'database', x: 60, y: 80 },
  
  // Tools
  { id: 'docker', label: 'Docker', category: 'tools', x: 15, y: 70 },
  { id: 'git', label: 'Git', category: 'tools', x: 85, y: 70 },
  { id: 'vercel', label: 'Vercel', category: 'tools', x: 50, y: 95 },
]

// Connections between technologies
const connections = [
  ['react', 'nextjs'],
  ['react', 'typescript'],
  ['nextjs', 'typescript'],
  ['nextjs', 'tailwind'],
  ['typescript', 'nodejs'],
  ['nodejs', 'express'],
  ['nodejs', 'nestjs'],
  ['express', 'graphql'],
  ['nestjs', 'graphql'],
  ['nodejs', 'postgresql'],
  ['nodejs', 'mongodb'],
  ['mongodb', 'redis'],
  ['postgresql', 'redis'],
  ['nextjs', 'vercel'],
  ['docker', 'vercel'],
  ['git', 'vercel'],
]

const categoryColors = {
  frontend: '#00d9ff',
  backend: '#a855f7',
  database: '#ff0080',
  tools: '#3b82f6',
}

export default function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)

  return (
    <section id="tech-stack" className="section" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Технологийн багц
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 dark:text-white mb-12 max-w-2xl mx-auto"
        >
          Өдөр бүр ашигладаг технологиудын холбогдсон экосистем. 
          Холболтыг харахын тулд цэгүүдийн дээр хулгана аваачна уу.
        </motion.p>

        {/* Interactive Tech Network */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full aspect-video max-w-5xl mx-auto mb-12 card"
        >
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            {/* Render connections */}
            {connections.map(([from, to], index) => {
              const fromNode = techNodes.find(n => n.id === from)
              const toNode = techNodes.find(n => n.id === to)
              
              if (!fromNode || !toNode) return null

              const isHighlighted = hoveredNode === from || hoveredNode === to

              return (
                <motion.line
                  key={index}
                  x1={fromNode.x}
                  y1={fromNode.y}
                  x2={toNode.x}
                  y2={toNode.y}
                  stroke={isHighlighted ? categoryColors[fromNode.category] : 'rgba(255, 255, 255, 0.1)'}
                  strokeWidth={isHighlighted ? '0.3' : '0.15'}
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 0.6 + index * 0.02 }}
                />
              )
            })}

            {/* Render nodes */}
            {techNodes.map((node, index) => {
              const isHovered = hoveredNode === node.id
              const isConnected = hoveredNode 
                ? connections.some(([from, to]) => 
                    (from === hoveredNode && to === node.id) || 
                    (to === hoveredNode && from === node.id)
                  )
                : false

              return (
                <g key={node.id}>
                  <motion.circle
                    cx={node.x}
                    cy={node.y}
                    r={isHovered ? 3.5 : 2.5}
                    fill={categoryColors[node.category]}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    className="cursor-pointer"
                    style={{
                      filter: isHovered || isConnected 
                        ? `drop-shadow(0 0 4px ${categoryColors[node.category]})` 
                        : 'none',
                      opacity: hoveredNode && !isHovered && !isConnected ? 0.3 : 1,
                    }}
                  />
                  <motion.text
                    x={node.x}
                    y={node.y - 4}
                    textAnchor="middle"
                    fill="white"
                    fontSize="2.5"
                    fontWeight="bold"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: isHovered || isConnected ? 1 : 0.7 } : {}}
                    transition={{ duration: 0.5, delay: 1 + index * 0.05 }}
                    className="pointer-events-none"
                  >
                    {node.label}
                  </motion.text>
                </g>
              )
            })}
          </svg>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {Object.entries(categoryColors).map(([category, color]) => (
            <div key={category} className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: color }}
              />
              <span className="text-gray-800 dark:text-white capitalize">{category}</span>
            </div>
          ))}
        </motion.div>

        {/* Technology Description Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
            { category: 'Frontend', tech: 'React, Next.js, TypeScript, Tailwind' },
            { category: 'Backend', tech: 'Node.js, Express, NestJS, GraphQL' },
            { category: 'Өгөгдлийн сан', tech: 'MySQL, Firebase, PostgreSQL, MongoDB, Redis' },
            { category: 'DevOps', tech: 'Docker, Git, Vercel, CI/CD' },
          ].map((item, index) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              className="card text-center"
            >
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.category}</h4>
              <p className="text-gray-800 dark:text-white text-sm">{item.tech}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

