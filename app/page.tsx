'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[80vh]">
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold mb-6"
      >
        Hi, I'm <span className="text-blue-600">Sarbesh Kumar Tiwari</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-xl mb-8 max-w-2xl"
      >
        A passionate Full Stack Developer and Mobile App Enthusiast. Building beautiful products with React, Next.js, Python, and AI.
      </motion.p>

      <motion.div
        whileHover={{ scale: 1.1 }}
      >
        <Link href="/projects">
          <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all">
            View My Work
          </button>
        </Link>
      </motion.div>
    </section>
  )
}