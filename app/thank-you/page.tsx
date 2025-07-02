'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ThankYou() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/')
    }, 2000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <section className="py-10 max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Thank You for Reaching Out!</h2>
      <p className="text-lg mb-6">Your message has been successfully sent. We will get back to you shortly.</p>
      <a href="/" className="text-blue-600">Go Back to Home</a>
    </section>
  )
}
