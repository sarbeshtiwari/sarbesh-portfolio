import Link from 'next/link'
import { Metadata } from 'next'
import HeroWrapper from './components/HeroWrapper'

export function generateMetadata(): Metadata {
  return {
    title: 'Home',
    description: 'Portfolio of Sarbesh Kumar Tiwari - Full Stack Developer specializing in MERN stack, Python, React, Next.js, and AWS. View projects, experience, and contact info.',
  }
}

const stats = [
  { value: '15+', label: 'Projects Delivered' },
  { value: '2+', label: 'Years Experience' },
  { value: '25+', label: 'Certifications' },
  { value: '10+', label: 'Tech Stack' },
]

export default function Home() {
  return (
    <>
      <HeroWrapper />

      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '6rem 2rem 4rem' }}>
        <div style={{ maxWidth: '700px' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            padding: '0.5rem 1rem',
            background: 'rgba(168,85,247,0.1)',
            borderRadius: '2rem',
            marginBottom: '1.5rem',
            fontSize: '0.875rem',
            color: '#a855f7',
            border: '1px solid rgba(168,85,247,0.2)'
          }}>
            <span style={{ width: '6px', height: '6px', background: '#22c55e', borderRadius: '50%' }}></span>
            Available for work
          </div>

          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '0.5rem', color: '#f8fafc' }}>
            Sarbesh Kumar Tiwari
          </h1>

          <p style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', color: '#a855f7', fontWeight: 500, marginBottom: '1.5rem' }}>
            Full Stack Developer
          </p>

          <p style={{ maxWidth: '550px', color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            Building production-grade web applications, gaming platforms, and AI-driven solutions. 
            Currently working at Ethara.ai on next-gen platforms.
          </p>

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
            <Link href="/projects" className="btn-primary">
              View Projects
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Me
            </Link>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <a href="https://www.linkedin.com/in/sarbeshtiwari" target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8' }}>
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://github.com/sarbeshtiwari" target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8' }}>
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem', background: 'rgba(10,10,15,0.8)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            {stats.map((stat, idx) => (
              <div key={idx} style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#a855f7', marginBottom: '0.25rem' }}>{stat.value}</div>
                <div style={{ color: '#64748b', fontSize: '0.9rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <span className="section-label">Featured</span>
          <h2 style={{ color: '#f8fafc', fontSize: '1.75rem', marginTop: '0.5rem', marginBottom: '2rem' }}>Latest Work</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { name: 'Arc-AGI-3 Games Platform', type: 'AI Gaming Platform' },
              { name: 'Ecommerce Website', type: 'Full-stack E-commerce' },
              { name: 'Real Estate Platform', type: 'Property Listing Platform' },
              { name: 'School Management Portal', type: 'Educational Platform' },
            ].map((project, idx) => (
              <Link key={idx} href="/projects" style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '1.25rem 1.5rem',
                background: 'rgba(255,255,255,0.02)',
                borderRadius: '0.5rem',
                border: '1px solid rgba(255,255,255,0.05)',
                textDecoration: 'none',
                transition: 'all 0.2s'
              }}>
                <div>
                  <h4 style={{ color: '#f8fafc', fontSize: '1.1rem', marginBottom: '0.25rem' }}>{project.name}</h4>
                  <p style={{ color: '#64748b', fontSize: '0.9rem' }}>{project.type}</p>
                </div>
                <svg width="20" height="20" fill="none" stroke="#a855f7" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Link href="/projects" style={{ color: '#a855f7', textDecoration: 'none', fontSize: '0.95rem' }}>
              View all projects →
            </Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ color: '#f8fafc', fontSize: '1.75rem', marginBottom: '1rem' }}>Let's Work Together</h2>
          <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>Have a project in mind? I'd love to hear about it.</p>
          <Link href="/contact" className="btn-primary">Get In Touch</Link>
        </div>
      </section>
    </>
  )
}