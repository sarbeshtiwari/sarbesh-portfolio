'use client'

import { useState } from 'react'

const projects = [
  { 
    title: 'Arc-AGI-3 Games Platform', 
    desc: 'AI-based gaming platform for playing arc-agi-3 games with real-time interactions and analytics.', 
    tech: ['Python', 'JavaScript', 'Docker', 'MongoDB'], 
    url: '#', 
    category: 'AI Gaming',
    status: 'Active'
  },
  { 
    title: 'Pencil Puzzle Bench', 
    desc: 'Platform for pencil puzzles with multiple game modes and tracking system.', 
    tech: ['Python', 'JavaScript', 'Docker'], 
    url: '#', 
    category: 'Game Platform',
    status: 'In Progress'
  },
  { 
    title: 'Multi-User Authentication System', 
    desc: 'Complete authentication platform with login, signup, user management, and activity tracking.', 
    tech: ['Python', 'Node.js', 'JWT', 'MongoDB'], 
    url: '#', 
    category: 'Backend',
    status: 'Active'
  },
  { 
    title: 'Ecommerce Website', 
    desc: 'Architected multi-faceted portal to handle 10,000-15,000 daily users. Built headless CMS for dynamic content management. Implemented scalable e-commerce solution with product management, cart, checkout, order tracking, and payment integration.', 
    tech: ['Node.js', 'React', 'Next.js', 'MongoDB', 'AWS'], 
    url: '#', 
    category: 'E-Commerce',
    status: 'Completed'
  },
  { 
    title: 'Full-Stack Real Estate Platform', 
    desc: 'Scaled platform to handle 10,000-15,000 daily active users. Built property listing platform with Node.js/Express backend and React/Next.js frontend. Implemented CRUD operations, AWS S3 for image storage, and responsive admin dashboard.', 
    tech: ['Node.js', 'React', 'Next.js', 'MySQL', 'MongoDB', 'AWS S3', 'Tailwind'], 
    url: '#', 
    category: 'Web Platform',
    status: 'Completed'
  },
  { 
    title: 'Blog & News Management System', 
    desc: 'Built platform supporting ~5,000 daily users with fast content delivery. Created full-stack content platform with categorized articles and real-time updates. Deployed on AWS with PM2 for reliability.', 
    tech: ['Node.js', 'Next.js', 'MongoDB', 'AWS EC2', 'PM2'], 
    url: '#', 
    category: 'News Portal',
    status: 'Completed'
  },
  { 
    title: 'Dynamic School Management Portal', 
    desc: 'Architected multi-faceted portal for 10,000-15,000 daily users (students, parents, staff). Built headless CMS for dynamic content control. Developed secure student portals and integrated online admission system.', 
    tech: ['Node.js', 'React', 'Next.js', 'MySQL', 'AWS EC2'], 
    url: '#', 
    category: 'Web Platform',
    status: 'Completed'
  },
  { 
    title: 'Meramahi (Matrimonial App)', 
    desc: 'Shaadi.com clone with matchmaking profiles, search filters, chat, and recommendations. Developed using Flutter & Firebase with real-time sync. Integrated push notifications and image uploads.', 
    tech: ['Flutter', 'Firebase', 'Node.js', 'MySQL'], 
    url: 'https://github.com/sarbeshtiwari', 
    category: 'Mobile App',
    status: 'Completed'
  },
  { 
    title: 'IwashHub (Laundry Booking App)', 
    desc: 'Service booking app for laundry pickup/delivery. Integrated Google Maps API for location services and real-time order tracking. Payment gateway integration with Razorpay.', 
    tech: ['Flutter', 'Node.js', 'Firebase', 'MySQL', 'Google Maps API', 'Razorpay'], 
    url: 'https://github.com/sarbeshtiwari', 
    category: 'Mobile App',
    status: 'Completed'
  },
  { 
    title: 'Rentass (Property & Rent Management)', 
    desc: 'Cross-platform mobile app for tenants and landlords to manage rent, maintenance, and property listings. Added secure login, rent payment tracking, and push reminders.', 
    tech: ['Flutter', 'Firebase', 'Node.js', 'MySQL'], 
    url: 'https://github.com/sarbeshtiwari', 
    category: 'Mobile App',
    status: 'Completed'
  },
  { 
    title: 'Starestate', 
    desc: 'A full-featured real estate platform with dynamic property listings, advanced search filters, and admin dashboard.', 
    tech: ['Next.js', 'React', 'Node.js', 'MongoDB'], 
    url: 'https://starestate.com', 
    category: 'Web Platform',
    status: 'Completed'
  },
  { 
    title: 'Maphomes', 
    desc: 'Real estate listing platform with map-based property search and comprehensive admin panel.', 
    tech: ['Next.js', 'React', 'Node.js', 'MongoDB'], 
    url: 'https://maphomesrealestate.com', 
    category: 'Web Platform',
    status: 'Completed'
  },
  { 
    title: 'BurocrazyIndia', 
    desc: 'News portal with categorized articles, real-time content updates, and custom CMS.', 
    tech: ['Next.js', 'Node.js', 'MySQL'], 
    url: 'https://burocrazyindia.com', 
    category: 'News Portal',
    status: 'Completed'
  },
  { 
    title: 'Emotion Music Player', 
    desc: 'AI app that detects emotion via webcam and recommends music matching your mood.', 
    tech: ['Python', 'OpenCV', 'TensorFlow'], 
    category: 'AI / ML',
    status: 'Personal'
  },
  { 
    title: 'Food Order WhatsApp Chatbot', 
    desc: 'Conversational chatbot enabling food ordering through WhatsApp.', 
    tech: ['Python', 'Twilio API'], 
    category: 'Chatbot',
    status: 'Personal'
  },
]

export default function ProjectsClient() {
  const [filter, setFilter] = useState('all')

  const categories = ['all', 'Active', 'In Progress', 'Completed', 'Personal', 'Web Platform', 'Mobile App', 'E-Commerce', 'AI Gaming', 'Game Platform', 'Backend']
  const filtered = filter === 'all' ? projects : projects.filter(p => filter === p.status || filter === p.category)

  return (
    <div className="page-container">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Projects</span>
          <h2>Things I've<span className="gradient-text"> built</span></h2>
          <p>A collection of production applications and side projects.</p>
        </div>

        <div className="filters">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)} className={`filter-btn ${filter === cat ? 'active' : ''}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((proj, idx) => (
            <div key={idx} className="project-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <div className="project-category">{proj.category}</div>
                <span style={{ 
                  fontSize: '0.6875rem', 
                  padding: '0.125rem 0.5rem', 
                  borderRadius: '0.25rem',
                  background: proj.status === 'Active' ? 'rgba(34,197,94,0.1)' : proj.status === 'In Progress' ? 'rgba(245,158,11,0.1)' : 'rgba(107,114,128,0.1)',
                  color: proj.status === 'Active' ? '#22c55e' : proj.status === 'In Progress' ? '#f59e0b' : '#6b7280'
                }}>
                  {proj.status}
                </span>
              </div>
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-desc">{proj.desc}</p>
              <div className="project-tags">
                {proj.tech.map((t, i) => (<span key={i} className="tag">{t}</span>))}
              </div>
              {proj.url && proj.url !== '#' && (
                <a href={proj.url} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '1rem', color: '#a855f7', fontSize: '0.875rem' }}>
                  Visit Site →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}