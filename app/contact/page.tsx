'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [responseMessage, setResponseMessage] = useState('')
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setResponseMessage('')

    const res = await fetch('/api/sendQuery', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    console.log(res);

    const data = await res.json()
    if (res.ok) {
      setResponseMessage('Message sent successfully!')
      setTimeout(() => router.push('/thank-you'), 1000)
    } else {
      setResponseMessage('Failed to send the message. Please try again later.')
    }
    setIsSubmitting(false)
  }

  return (
    <section className="py-10 max-w-2xl mx-auto">
      <motion.h2 className="text-3xl font-bold mb-6 text-center">Contact Me</motion.h2>

      <form className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="input"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="input"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="input"
          rows={5}
          required
        ></textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition-all"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </motion.button>
      </form>

      {responseMessage && (
        <p className={`mt-4 text-center ${responseMessage.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
          {responseMessage}
        </p>
      )}
    </section>
  )
}
