'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    title: 'Starestate',
    desc: 'Dynamic real estate platform with admin panel, search, and live data updates.',
    tech: 'Node.js, React, Next.js, MongoDB, MySQL, Tailwind, PM2, Apache',
    url: 'https://starestate.com',
  },
  {
    title: 'Maphomes',
    desc: 'Real estate listing site with search, filter, and admin dashboard.',
    tech: 'Node.js, React, Next.js, MongoDB, MySQL',
    url: 'https://maphomesrealestate.com',
  },
  {
    title: 'BurocrazyIndia',
    desc: 'News portal with categories, real-time updates, and admin panel.',
    tech: 'Node.js, Next.js, MySQL',
    url: 'https://burocrazyindia.com',
  },
  {
    title: 'Dharav High School',
    desc: 'School management system with student portal and online admission.',
    tech: 'Node.js, React, MySQL',
    url: 'https://dharavhighschool.org',
  },
  {
    title: 'Emotion Music Player',
    desc: 'AI app that detects emotion via facial expression and recommends music.',
    tech: 'Python, OpenCV, Scikit-learn, TensorFlow, YouTube API',
    url: '',
  },
  {
    title: 'Food Order WhatsApp Chatbot',
    desc: 'WhatsApp chatbot for seamless food ordering experience.',
    tech: 'Python, Twilio API, MySQL',
    url: '',
  },
  {
    title: 'Wi-Fi War Comic Series',
    desc: 'Creative comic storytelling series using humor and tech themes.',
    tech: 'Illustrator, Canva, Scriptwriting, Social Media',
    url: '',
  },
]

export default function Projects() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  return (
    <section className="py-10 max-w-6xl mx-auto px-4 relative z-0">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-3xl font-bold mb-10 text-center"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-lg p-6 cursor-pointer border border-gray-200 hover:border-blue-500"
            onClick={() => proj.url && setPreviewUrl(proj.url)}
          >
            <h3 className="text-xl font-semibold text-blue-600">{proj.title}</h3>
            <p className="text-gray-600 mt-2">{proj.desc}</p>
            <p className="text-sm text-gray-500 mt-2">Tech: {proj.tech}</p>
            {proj.url && (
              <p className="text-blue-500 mt-3 underline">Click to preview</p>
            )}
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {previewUrl && (
          <motion.div
            key="modal"
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewUrl(null)}
          >
            <motion.div
              className="bg-white rounded-lg overflow-hidden max-w-5xl w-full max-h-[80vh] relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="text-xl font-semibold">Website Preview</h3>
                <button
                  onClick={() => setPreviewUrl(null)}
                  className="text-gray-600 hover:text-red-500 text-xl"
                >
                  ×
                </button>
              </div>
              <iframe
                src={previewUrl}
                title="Project Preview"
                width="100%"
                height="500px"
                className="w-full"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
