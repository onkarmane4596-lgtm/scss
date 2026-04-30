'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { CONTACT_INFO } from '@/lib/constants'

export function WhatsAppButton() {
  const handleClick = () => {
    const message = encodeURIComponent(CONTACT_INFO.whatsappMessage)
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`, '_blank')
  }

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-[#25d366] hover:bg-[#20ba5a] text-white shadow-lg flex items-center justify-center z-40"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
    >
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <MessageCircle className="w-8 h-8" />
      </motion.div>
    </motion.button>
  )
}
