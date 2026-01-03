"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface TimelineItemProps {
  date: string
  title: string
  children: ReactNode
  delay?: number
}

export function AnimatedTimelineItem({ date, title, children, delay = 0 }: TimelineItemProps) {
  return (
    <motion.div
      className="timeline-item"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="timeline-dot"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3, delay: delay + 0.2 }}
        viewport={{ once: true }}
      ></motion.div>
      <div className="timeline-date">{date}</div>
      <div className="timeline-title">{title}</div>
      <div className="timeline-description">{children}</div>
    </motion.div>
  )
}
