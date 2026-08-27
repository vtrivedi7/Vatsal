"use client"
import { motion } from "framer-motion"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  type?: "heading" | "paragraph"
}

export default function AnimatedText({ text, className = "", delay = 0, type = "paragraph" }: AnimatedTextProps) {
  // Safely split text into words
  const words = text.split(" ")

  // Different animation variants based on text type
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay * i },
    }),
  }

  const child =
    type === "heading"
      ? {
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", damping: 12, stiffness: 100 },
          },
        }
      : {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { duration: 0.5 },
          },
        }

  return (
    <motion.div
      style={{ overflow: "hidden" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span key={index} className="inline-block mr-1" variants={child}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
