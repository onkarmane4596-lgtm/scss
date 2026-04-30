'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { CONTACT_INFO } from '@/lib/constants'

export function MobileCTA() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(CONTACT_INFO.whatsappMessage)
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`, '_blank')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-0 left-0 right-0 md:hidden bg-gradient-to-t from-[#0a1020] to-transparent p-4 pb-6 z-30"
    >
      <Button
        onClick={handleWhatsApp}
        className="w-full bg-[#00d4ff] hover:bg-[#00b8cc] text-black font-semibold py-4 rounded-lg text-base"
      >
        Start Your Journey Now
      </Button>
    </motion.div>
  )
}
