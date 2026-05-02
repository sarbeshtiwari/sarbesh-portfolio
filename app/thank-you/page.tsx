'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function ThankYou() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => { router.push('/') }, 3000)
    return () => clearTimeout(timer)
  }, [router])

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="text-center max-w-md">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-8"
          style={{ background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.15)' }}
        >
          <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5, duration: 0.5 }}
              strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
        <h1 className="text-3xl font-bold text-slate-100">Message Sent</h1>
        <p className="mt-4 text-slate-500">Thanks for reaching out. I&apos;ll get back to you as soon as possible.</p>
        <p className="mt-6 text-xs text-slate-600 font-mono">Redirecting to home in 3 seconds...</p>
        <div className="mt-4 w-32 h-1 mx-auto rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.04)' }}>
          <motion.div initial={{ width: '0%' }} animate={{ width: '100%' }} transition={{ duration: 3, ease: 'linear' }}
            className="h-full rounded-full" style={{ background: 'linear-gradient(to right, #6366f1, #a855f7)' }} />
        </div>
      </motion.div>
    </section>
  )
}
