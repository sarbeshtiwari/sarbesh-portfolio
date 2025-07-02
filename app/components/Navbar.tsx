'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full flex justify-between items-center py-4 px-6 md:px-20 bg-white shadow-lg z-50"
    >
      <Link href="/" className="text-2xl font-extrabold text-blue-600 hover:scale-105 transition-transform">
        Sarbesh
      </Link>
      <div className="flex gap-6 text-gray-700 text-sm md:text-base">
        <Link href="/about" className="hover:text-blue-600">About</Link>
        <Link href="/projects" className="hover:text-blue-600">Projects</Link>
        <Link href="/experience" className="hover:text-blue-600">Experience</Link>
        <Link href="/certifications" className="hover:text-blue-600">Certifications</Link>
        <Link href="/contact" className="hover:text-blue-600">Contact</Link>
      </div>
    </motion.nav>
  )
}
