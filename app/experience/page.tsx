'use client'
import { motion } from 'framer-motion'

export default function Experience() {
  return (
    <section className="py-10 max-w-4xl mx-auto px-4">
      <motion.h2 className="text-3xl font-bold mb-8 text-center">Experience</motion.h2>

      <div className="space-y-8">

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold">Full Stack Developer</h3>
          <p className="text-gray-700">Ecorp Infosystems Pvt. Ltd. | Noida, India</p>
          <p className="text-sm text-gray-500 mb-3">Jul 2024 – Present</p>
          <p className="text-gray-600">
            Designed and developed 10+ production-level web applications, including real estate platforms, student portals, and news websites, resulting in a 40% boost in user engagement. Implement RESTful APIs for smooth client-server communication. Manage and optimize Linux-based servers using PuTTY for configuration, deployment, and security to ensure high availability and performance.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold">Technical Trainee – Flutter Application Developer</h3>
          <p className="text-gray-700">Aayan India | Lucknow, India</p>
          <p className="text-sm text-gray-500 mb-3">Apr 2024 – Jun 2024</p>
          <p className="text-gray-600">
            Developed cross-platform mobile applications using Flutter for Android and iOS. Enhanced UI/UX with responsive design and efficient state management. Integrated Firebase for authentication and real-time data sync. Collaborated with backend teams to improve API response and app stability.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
