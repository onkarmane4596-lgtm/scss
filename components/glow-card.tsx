'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlowCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  delay?: number
}

export function GlowCard({ children, className = '', hover = true, delay = 0 }: GlowCardProps) {
  return (
    <motion.div
      className={`glow-card ${hover ? 'glow-card-hover' : ''} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}
