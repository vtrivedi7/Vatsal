"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import AnimatedSection from "@/components/animated-section"
import AnimatedText from "@/components/animated-text"
import AnimatedCard from "@/components/animated-card"
import AnimatedButton from "@/components/animated-button"
import { AnimatedTimelineItem } from "@/components/animated-timeline"

interface ClientPageWrapperProps {
  children: ReactNode
}

export default function ClientPageWrapper({ children }: ClientPageWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fade-in"
    >
      {children}
    </motion.div>
  )
}

// Export animation components for use in client wrapper
export { AnimatedSection, AnimatedText, AnimatedCard, AnimatedButton, AnimatedTimelineItem }
