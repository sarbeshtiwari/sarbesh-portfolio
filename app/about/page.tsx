'use client'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="max-w-4xl mx-auto py-10 px-4">
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-3xl font-bold mb-6 text-center"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.3 }}
        className="text-gray-600 text-lg leading-8"
      >
        I'm Sarbesh Kumar Tiwari, a passionate full-stack developer with a focus on MERN and cross-platform mobile app development. 
        I hold a B.Tech in Computer Science from Shri Ramswaroop Memorial University and have completed multiple internships in web, mobile, and Python development. 
        Professionally, I've worked at Ericsson as an Associate Engineer Trainee and contributed to real-world projects across web and mobile domains. 
        I have certifications in Machine Learning, Data Analysis, and Cybersecurity, and love working on creative and AI-driven side projects."
      </motion.p>

      <div className="mt-8 flex flex-wrap gap-4">
        <span className="badge">React</span>
        <span className="badge">Next.js</span>
        <span className="badge">Node.js</span>
        <span className="badge">Python</span>
        <span className="badge">Machine Learning</span>
        <span className="badge">Flutter</span>
        <span className="badge">Firebase</span>
        <span className="badge">Data Structures</span>
        <span className="badge">UI/UX</span>
      </div>
    </section>
  )
}
