'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Metadata } from 'next'

export function generateMetadata(): Metadata {
  return {
    title: 'Contact',
    description: 'Contact Sarbesh Kumar Tiwari - Full Stack Developer. Available for freelance work and full-time opportunities. Reach out for project inquiries or collaborations.',
  }
}

export default function ContactClient() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [responseMessage, setResponseMessage] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setResponseMessage('')

    try {
      const res = await fetch('/api/sendQuery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setResponseMessage('Message sent successfully!')
        setTimeout(() => router.push('/thank-you'), 1000)
      } else {
        setResponseMessage('Failed to send. Please try again.')
      }
    } catch {
      setResponseMessage('Network error. Please try again.')
    }
    setIsSubmitting(false)
  }

  return (
    <div className="page-container" style={{ minHeight: '100vh', paddingTop: '6rem', paddingBottom: '4rem' }}>
      <div className="container">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">Get in Touch</span>
            <h2 style={{ color: '#f1f5f9', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700 }}>
              Let's<span className="gradient-text"> Connect</span>
            </h2>
            <p style={{ color: '#64748b', maxWidth: '500px', margin: '1rem auto 0' }}>
              Have a project in mind or want to collaborate? Drop me a message!
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '3rem',
            alignItems: 'start'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{
                padding: '2rem',
                background: 'rgba(168,85,247,0.05)',
                border: '1px solid rgba(168,85,247,0.1)',
                borderRadius: '1rem'
              }}>
                <h3 style={{ color: '#f1f5f9', fontSize: '1.25rem', marginBottom: '1.5rem' }}>Contact Info</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ 
                      width: '48px', 
                      height: '48px', 
                      borderRadius: '0.75rem',
                      background: 'rgba(168,85,247,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#a855f7'
                    }}>
                      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <p style={{ color: '#64748b', fontSize: '0.875rem' }}>Email</p>
                      <p style={{ color: '#f1f5f9', fontSize: '1rem' }}>tiwarisarbesh02@gmail.com</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ 
                      width: '48px', 
                      height: '48px', 
                      borderRadius: '0.75rem',
                      background: 'rgba(34,197,94,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#22c55e'
                    }}>
                      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <p style={{ color: '#64748b', fontSize: '0.875rem' }}>Location</p>
                      <p style={{ color: '#f1f5f9', fontSize: '1rem' }}>Noida, India</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ 
                      width: '48px', 
                      height: '48px', 
                      borderRadius: '0.75rem',
                      background: 'rgba(34,211,238,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#22d3ee'
                    }}>
                      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <p style={{ color: '#64748b', fontSize: '0.875rem' }}>Availability</p>
                      <p style={{ color: '#22c55e', fontSize: '1rem' }}>Open to work</p>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{
                padding: '2rem',
                background: 'rgba(0,0,0,0.2)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '1rem'
              }}>
                <h3 style={{ color: '#f1f5f9', fontSize: '1.25rem', marginBottom: '1.5rem' }}>Social Links</h3>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="https://www.linkedin.com/in/sarbeshtiwari" target="_blank" rel="noopener noreferrer" style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '0.75rem',
                    background: 'rgba(168,85,247,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#a855f7',
                    textDecoration: 'none',
                    transition: 'all 0.2s'
                  }}>
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <a href="https://github.com/sarbeshtiwari" target="_blank" rel="noopener noreferrer" style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '0.75rem',
                    background: 'rgba(168,85,247,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#a855f7',
                    textDecoration: 'none',
                    transition: 'all 0.2s'
                  }}>
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                </div>

                <a href="/assets/certs/Sarbesh Kumar Tiwari.docx" download style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginTop: '1.5rem',
                  padding: '0.75rem 1.5rem',
                  background: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
                  borderRadius: '0.5rem',
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  Download Resume
                </a>
              </div>
            </div>

            <div style={{
              padding: '2.5rem',
              background: 'rgba(0,0,0,0.3)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '1rem'
            }}>
              <h3 style={{ color: '#f1f5f9', fontSize: '1.25rem', marginBottom: '2rem' }}>Send a Message</h3>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Name</label>
                  <input 
                    type="text" 
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    style={{
                      width: '100%',
                      padding: '0.875rem 1rem',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '0.5rem',
                      color: '#f1f5f9',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Email</label>
                  <input 
                    type="email" 
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    style={{
                      width: '100%',
                      padding: '0.875rem 1rem',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '0.5rem',
                      color: '#f1f5f9',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Message</label>
                  <textarea 
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    style={{
                      width: '100%',
                      padding: '0.875rem 1rem',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '0.5rem',
                      color: '#f1f5f9',
                      fontSize: '1rem',
                      outline: 'none',
                      resize: 'vertical',
                      minHeight: '120px',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  style={{
                    padding: '1rem 2rem',
                    background: isSubmitting ? 'rgba(168,85,247,0.5)' : 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
                    border: 'none',
                    borderRadius: '0.5rem',
                    color: '#fff',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {responseMessage && (
                  <p style={{ 
                    color: responseMessage.includes('success') ? '#22c55e' : '#ef4444',
                    fontSize: '0.875rem'
                  }}>
                    {responseMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}