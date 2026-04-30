'use client'

import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'

export function AnimatedShield() {
  return (
    <motion.div
      className="relative w-24 h-24"
      animate={{
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.2), transparent)',
        }}
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <Shield className="w-12 h-12 text-[#00d4ff]" strokeWidth={1.5} />
      </div>
    </motion.div>
  )
}
