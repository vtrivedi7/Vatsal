"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      className="bg-gray-50 border-t border-gray-200"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Link href="/" className="text-lg font-semibold text-primary">
                Vatsal Trivedi
              </Link>
            </motion.div>
            <p className="text-sm text-gray-600 mt-1">Founder & CEO of RunLog AI</p>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            {[
              { name: "About", path: "/about" },
              { name: "RunLog AI", path: "/runlogai" },
              { name: "Projects", path: "/projects" },
              { name: "Contact", path: "/contact" },
            ].map((item, index) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={item.path} className="text-sm text-gray-600 hover:text-primary transition-colors">
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>© {currentYear} Vatsal Trivedi. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
