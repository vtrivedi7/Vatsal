"use client"

import { motion } from "framer-motion"

interface StatCardProps {
  number: string
  label: string
  subtitle: string
}

export default function StatCard({ number, label, subtitle }: StatCardProps) {
  return (
    <motion.div className="stat-card" whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <motion.div
        className="stat-number"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {number}
      </motion.div>
      <div className="font-medium text-gray-800 mb-1">{label}</div>
      <div className="stat-label">{subtitle}</div>
    </motion.div>
  )
}
