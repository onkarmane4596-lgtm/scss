'use client'

import { motion } from 'framer-motion'
import { GlowCard } from '@/components/glow-card'
import { WHY_CHOOSE_US } from '@/lib/constants'
import { CheckCircle2 } from 'lucide-react'

export function WhyChooseUsSection() {
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
            Why Us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose <span className="text-[#00ff88]">CyberSecure Academy</span>?
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We&apos;re committed to providing world-class cybersecurity education
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((feature, index) => (
            <GlowCard
              key={index}
              delay={index * 0.1}
              className="p-8 flex flex-col gap-4 group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-lg bg-[#0a2540] flex items-center justify-center group-hover:bg-[rgb(0_212_255_/_0.2)] transition-colors"
              >
                <CheckCircle2 className="w-6 h-6 text-[#00d4ff]" strokeWidth={2} />
              </motion.div>
              <h3 className="text-xl font-bold text-white">{feature}</h3>
            </GlowCard>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 p-8 glow-card"
        >
          {[
            { number: '5000+', label: 'Students' },
            { number: '95%', label: 'Success Rate' },
            { number: '10+', label: 'Instructors' },
            { number: '4', label: 'Certifications' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-bold text-[#00d4ff] mb-2">
                {stat.number}
              </p>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
