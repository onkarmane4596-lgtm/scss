'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedShield } from '@/components/animated-shield'
import { CONTACT_INFO } from '@/lib/constants'

export function HeroSection() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(CONTACT_INFO.whatsappMessage)
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`, '_blank')
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sm font-medium text-[#00d4ff] uppercase tracking-widest flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-[#00d4ff] rounded-full" />
              Cybersecurity Excellence
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold leading-tight text-white"
            >
              Master <span className="text-[#00d4ff]">Cybersecurity</span> Today
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              Join industry experts and learn advanced cybersecurity skills. Get certified, build a career, and protect the digital world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                onClick={handleWhatsApp}
                className="bg-[#00d4ff] hover:bg-[#00b8cc] text-black font-semibold px-8 py-6 rounded-lg"
              >
                Start Learning Now
              </Button>
              <Button
                variant="outline"
                className="border border-[#1e3a52] text-white hover:bg-[#0d2540] px-8 py-6 rounded-lg"
              >
                Explore Courses
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-8 pt-8 border-t border-[#1e3a52]"
            >
              <div>
                <p className="text-2xl font-bold text-[#00d4ff]">5000+</p>
                <p className="text-sm text-gray-400">Students Trained</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#00ff88]">95%</p>
                <p className="text-sm text-gray-400">Placement Rate</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#00d4ff]">10+</p>
                <p className="text-sm text-gray-400">Expert Instructors</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center items-center"
          >
            <div className="relative w-full max-w-sm h-96 flex items-center justify-center">
              {/* Animated rings */}
              {[1, 2, 3].map((ring) => (
                <motion.div
                  key={ring}
                  className="absolute border border-[#00d4ff] rounded-full"
                  style={{
                    width: `${120 + ring * 60}px`,
                    height: `${120 + ring * 60}px`,
                    opacity: 0.2 - ring * 0.05,
                  }}
                  animate={{
                    rotate: ring % 2 === 0 ? 360 : -360,
                  }}
                  transition={{
                    duration: 10 + ring * 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              ))}

              {/* Center shield */}
              <AnimatedShield />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-[#00d4ff]" />
      </motion.div>
    </section>
  )
}
