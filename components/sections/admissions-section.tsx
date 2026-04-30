'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { GlowCard } from '@/components/glow-card'
import { CONTACT_INFO } from '@/lib/constants'
import { Mail, Phone, MapPin } from 'lucide-react'
import { useState } from 'react'

export function AdmissionsSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - could send to API or WhatsApp
    const message = encodeURIComponent(
      `Hi, I'm ${formData.name}. I'm interested in the ${formData.course || 'your courses'}. Email: ${formData.email}, Phone: ${formData.phone}`
    )
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`, '_blank')
    setFormData({ name: '', email: '', phone: '', course: '' })
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
            Get Started
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Start Your <span className="text-[#00ff88]">Journey Today</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Connect with our admissions team and take the first step towards your cybersecurity career
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="space-y-6"
          >
            <GlowCard className="p-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#0a2540] flex items-center justify-center">
                <Mail className="w-6 h-6 text-[#00d4ff]" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Email</h3>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-[#00d4ff] hover:text-[#00b8cc] transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </GlowCard>

            <GlowCard className="p-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#0a2540] flex items-center justify-center">
                <Phone className="w-6 h-6 text-[#00ff88]" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Phone</h3>
                <a
                  href={`tel:${CONTACT_INFO.phoneLink}`}
                  className="text-[#00d4ff] hover:text-[#00b8cc] transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </GlowCard>

            <GlowCard className="p-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#0a2540] flex items-center justify-center">
                <MapPin className="w-6 h-6 text-[#ff006e]" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Location</h3>
                <p className="text-gray-400">{CONTACT_INFO.address}</p>
              </div>
            </GlowCard>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <GlowCard className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-white">Full Name</label>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-[#0a2540] border-[#1e3a52] text-white placeholder:text-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-white">Email</label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-[#0a2540] border-[#1e3a52] text-white placeholder:text-gray-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-white">Phone</label>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="bg-[#0a2540] border-[#1e3a52] text-white placeholder:text-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-white">Interested Course</label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      className="w-full bg-[#0a2540] border border-[#1e3a52] text-white rounded-lg px-4 py-2"
                    >
                      <option value="">Select a course</option>
                      <option value="CEH">CEH (Certified Ethical Hacker)</option>
                      <option value="OSCP">OSCP (Offensive Security)</option>
                      <option value="Security+">CompTIA Security+</option>
                      <option value="CISSP">CISSP (Senior Level)</option>
                    </select>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#00d4ff] hover:bg-[#00b8cc] text-black font-semibold py-6 rounded-lg text-lg"
                >
                  Send Inquiry
                </Button>
              </form>
            </GlowCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
