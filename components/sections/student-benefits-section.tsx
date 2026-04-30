'use client'

import { motion } from 'framer-motion'
import { GlowCard } from '@/components/glow-card'
import { STUDENT_BENEFITS } from '@/lib/constants'

export function StudentBenefitsSection() {
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
            Student Success
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Exclusive <span className="text-[#00ff88]">Student Benefits</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Access a comprehensive support system designed for your success
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STUDENT_BENEFITS.map((benefit, index) => (
            <GlowCard key={benefit.id} delay={index * 0.1} className="p-8 space-y-4 group">
              <motion.div
                className="text-5xl"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {benefit.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              <motion.div
                className="h-1 bg-gradient-to-r from-[#00d4ff] to-[#00ff88] rounded-full origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              />
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  )
}
