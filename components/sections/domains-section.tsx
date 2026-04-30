'use client'

import { motion } from 'framer-motion'
import { GlowCard } from '@/components/glow-card'
import { COURSE_DOMAINS } from '@/lib/constants'

export function DomainsSection() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-[#00d4ff] uppercase tracking-widest mb-4">
            Core Competencies
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Master Key Cybersecurity <span className="text-[#00ff88]">Domains</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Comprehensive training in the most critical areas of cybersecurity
          </p>
        </motion.div>

        {/* Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COURSE_DOMAINS.map((domain, index) => (
            <GlowCard key={domain.id} delay={index * 0.1} className="p-6 flex flex-col items-center text-center group">
              <motion.div
                className="text-5xl mb-4 group-hover:scale-110 transition-transform"
                whileHover={{ scale: 1.2 }}
              >
                {domain.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2">{domain.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{domain.description}</p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  )
}
