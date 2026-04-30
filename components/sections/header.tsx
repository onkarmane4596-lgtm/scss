'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Shield, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { CONTACT_INFO } from '@/lib/constants'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleWhatsApp = () => {
    const message = encodeURIComponent(CONTACT_INFO.whatsappMessage)
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`, '_blank')
  }

  const navItems = ['Home', 'Courses', 'About', 'Contact']

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-[#0a1020]/90 to-[#0a1020]/50 backdrop-blur-md border-b border-[#1e3a52]">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-2"
        >
          <Shield className="w-6 h-6 text-[#00d4ff]" />
          <span className="text-xl font-bold text-white">CyberSecure</span>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, idx) => (
            <motion.a
              key={item}
              href="#"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="text-gray-300 hover:text-[#00d4ff] transition-colors text-sm font-medium"
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="hidden md:block"
        >
          <Button
            onClick={handleWhatsApp}
            className="bg-[#00d4ff] hover:bg-[#00b8cc] text-black font-semibold px-6 py-2 rounded-lg"
          >
            Enroll Now
          </Button>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-[#0a1020]/95 backdrop-blur-md border-t border-[#1e3a52] p-4 space-y-4"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="block text-gray-300 hover:text-[#00d4ff] transition-colors py-2"
            >
              {item}
            </a>
          ))}
          <Button
            onClick={handleWhatsApp}
            className="w-full bg-[#00d4ff] hover:bg-[#00b8cc] text-black font-semibold py-2 rounded-lg"
          >
            Enroll Now
          </Button>
        </motion.div>
      )}
    </header>
  )
}
