'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GlowCard } from '@/components/glow-card'
import { Button } from '@/components/ui/button'
import { COURSES, CONTACT_INFO } from '@/lib/constants'
import { Clock, Zap } from 'lucide-react'

export function CoursesSection() {
  const [selectedCourse, setSelectedCourse] = useState(0)
  const course = COURSES[selectedCourse]

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi, I&apos;m interested in the ${course.title} course. Can you provide more details?`
    )
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`, '_blank')
  }

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
            Comprehensive Learning
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Industry-Leading <span className="text-[#00ff88]">Courses</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Choose from our curated selection of certifications and training programs
          </p>
        </motion.div>

        {/* Course Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {COURSES.map((c, index) => (
            <motion.button
              key={c.id}
              onClick={() => setSelectedCourse(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedCourse === index
                  ? 'bg-[#00d4ff] text-black shadow-lg shadow-[#00d4ff]/50'
                  : 'border border-[#1e3a52] text-white hover:border-[#00d4ff]'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {c.title.split('(')[0]}
            </motion.button>
          ))}
        </div>

        {/* Course Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCourse}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Course Card */}
              <GlowCard className="lg:col-span-2 p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{course.title}</h3>
                    <p className="text-gray-400">{course.description}</p>
                  </div>

                  {/* Course Meta */}
                  <div className="flex flex-col sm:flex-row gap-6 py-6 border-y border-[#1e3a52]">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-[#00d4ff]" />
                      <div>
                        <p className="text-sm text-gray-400">Duration</p>
                        <p className="font-semibold text-white">{course.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-[#00ff88]" />
                      <div>
                        <p className="text-sm text-gray-400">Level</p>
                        <p className="font-semibold text-white">{course.level}</p>
                      </div>
                    </div>
                  </div>

                  {/* Modules */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Course Modules</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {course.modules.map((module, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-3 p-3 rounded-lg bg-[#0a2540] border border-[#1e3a52]"
                        >
                          <div className="w-2 h-2 bg-[#00d4ff] rounded-full flex-shrink-0" />
                          <span className="text-gray-300">{module}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={handleWhatsApp}
                    className="w-full bg-[#00d4ff] hover:bg-[#00b8cc] text-black font-semibold py-6 rounded-lg text-lg"
                  >
                    Enroll Now
                  </Button>
                </div>
              </GlowCard>

              {/* Sidebar Features */}
              <div className="space-y-4">
                <GlowCard className="p-6 h-full flex flex-col">
                  <h4 className="text-lg font-semibold text-white mb-4">What You&apos;ll Get</h4>
                  <div className="space-y-3 flex-1">
                    {[
                      'Expert Instructor Access',
                      'Hands-on Lab Environment',
                      'Certification Ready',
                      'Job Placement Support',
                      'Lifetime Materials',
                      'Community Forum',
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-1.5 h-1.5 bg-[#00ff88] rounded-full flex-shrink-0" />
                        <span className="text-sm text-gray-300">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </GlowCard>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
