'use client'

import { useState } from 'react'

const certs = [
  { name: 'Smart India Hackathon Finalist', issued: 'Gov. of India - SIH 2022', image: '/assets/certs/1665763375951.jpg', category: 'Achievement' },
  { name: 'Flutter & Dart', issued: 'Udemy', image: '/assets/certs/UC-30ed9331-1fd2-45cf-ae51-f48805ad8d3b.jpg', category: 'Mobile Dev' },
  { name: 'Android Bug Bounty Hunting', issued: 'EC-Council', image: '/assets/certs/2140d980-ff9b-41d5-ab51-3eb8b817d2a7.png', category: 'Cybersecurity' },
  { name: 'Big Data', issued: 'IBM', image: '/assets/certs/Big Data_page-0001.jpg', category: 'Data Science' },
  { name: 'Hadoop', issued: 'IBM', image: '/assets/certs/Hadoop_page-0001.jpg', category: 'Data Science' },
  { name: 'Machine Learning', issued: 'IBM', image: '/assets/certs/machine learning_page-0001.jpg', category: 'AI/ML' },
  { name: 'SQL and Relational Databases', issued: 'IBM', image: '/assets/certs/sql_certificate.jpg', category: 'Database' },
  { name: 'AWS Cloud Practitioner', issued: 'Amazon Web Services', image: '/assets/certs/aws.png', category: 'Cloud' },
  { name: 'Introduction to Cyber Security', issued: 'Cisco', image: '/assets/certs/cisco_cyber.jpg', category: 'Cybersecurity' },
  { name: 'SQL Injection Attacks', issued: 'EC-Council', image: '/assets/certs/sql_injection.jpg', category: 'Cybersecurity' },
  { name: 'HTML, CSS, and JavaScript', issued: 'Coursera', image: '/assets/certs/html_css_js.jpg', category: 'Web Dev' },
  { name: 'Data Science Foundations', issued: 'IBM', image: '/assets/certs/data_science.jpg', category: 'Data Science' },
  { name: 'Python for Data Science', issued: 'IBM', image: '/assets/certs/python_ds.jpg', category: 'Data Science' },
  { name: 'React - The Complete Guide', issued: 'Udemy', image: '/assets/certs/react_complete.jpg', category: 'Frontend' },
  { name: 'Node.js Developer Course', issued: 'Udemy', image: '/assets/certs/nodejs_course.jpg', category: 'Backend' },
]

export default function CertificationsClient() {
  const [selectedCert, setSelectedCert] = useState<typeof certs[0] | null>(null)
  const [filter, setFilter] = useState('all')

  const categories = ['all', 'Achievement', 'Mobile Dev', 'Cybersecurity', 'Data Science', 'AI/ML', 'Database', 'Cloud', 'Web Dev', 'Frontend', 'Backend']
  const filtered = filter === 'all' ? certs : certs.filter(c => c.category === filter)

  return (
    <div className="page-container">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Certifications</span>
          <h2>Skills<span className="gradient-text"> certified</span></h2>
          <p>Continuous learning and professional development.</p>
        </div>

        <div className="filters">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)} className={`filter-btn ${filter === cat ? 'active' : ''}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="certs-grid">
          {filtered.map((cert, idx) => (
            <div key={idx} className="cert-card" onClick={() => setSelectedCert(cert)} style={{ cursor: 'pointer' }}>
              <div className="cert-image">
                <img src={cert.image} alt={cert.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.5rem' }} />
              </div>
              <h4 className="cert-name">{cert.name}</h4>
              <p className="cert-issuer">{cert.issued}</p>
              <span className="cert-category">{cert.category}</span>
            </div>
          ))}
        </div>

        {selectedCert && (
          <div className="modal-overlay" onClick={() => setSelectedCert(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedCert(null)}>×</button>
              <img src={selectedCert.image} alt={selectedCert.name} style={{ width: '100%', maxHeight: '70vh', objectFit: 'contain', borderRadius: '0.5rem' }} />
              <h3 style={{ marginTop: '1rem', color: '#f1f5f9' }}>{selectedCert.name}</h3>
              <p style={{ color: '#94a3b8' }}>{selectedCert.issued}</p>
              <span style={{ display: 'inline-block', marginTop: '0.5rem', padding: '0.25rem 0.75rem', background: 'rgba(168,85,247,0.1)', borderRadius: '0.25rem', color: '#a855f7', fontSize: '0.875rem' }}>{selectedCert.category}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}