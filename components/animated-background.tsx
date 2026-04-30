'use client'

import { motion } from 'framer-motion'

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1020] via-[#050810] to-[#000000]" />

      {/* Animated cyber grid */}
      <div className="absolute inset-0 cyber-grid" />

      {/* Floating orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.3), transparent)',
          top: '-10%',
          left: '-5%',
        }}
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute w-80 h-80 rounded-full blur-3xl opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(0, 255, 136, 0.2), transparent)',
          bottom: '-5%',
          right: '-10%',
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Top right accent */}
      <motion.div
        className="absolute w-72 h-72 rounded-full blur-3xl opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(255, 0, 110, 0.15), transparent)',
          top: '20%',
          right: '5%',
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}
