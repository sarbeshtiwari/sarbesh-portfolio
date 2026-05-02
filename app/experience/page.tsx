import { Metadata } from 'next'

export function generateMetadata(): Metadata {
  return {
    title: 'Experience',
    description: 'Work experience of Sarbesh Kumar Tiwari - Full Stack Developer at Quess Corp X Ethara.ai, Ecorp Infosystems, Aayan India, and iWashhub. View professional journey and internships.',
  }
}

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Quess Corp X Ethara.ai',
    location: 'Gurugram, India',
    period: 'Feb 2026 - Present',
    description: [
      'Working on arc-agi-3 games platform development',
      'Building interactive AI gaming solutions',
      'Developing multi-user authentication systems with tracking',
      'Currently working on pencil-puzzle-bench project',
      'Tech stack: Python, JavaScript, Docker for deployment',
    ],
    tech: ['Python', 'JavaScript', 'Docker', 'Node.js', 'MongoDB', 'AWS'],
    current: true,
  },
  {
    role: 'Full Stack Developer',
    company: 'Ecorp Infosystems Pvt. Ltd.',
    location: 'Noida, India',
    period: 'Jul 2024 - Feb 2026',
    description: [
      'Developed and deployed 10+ full-stack applications on AWS EC2, improving system scalability and increasing user engagement by 40%.',
      'Built secure, stateless RESTful APIs using Node.js with JWT-based authentication, reducing identified vulnerabilities by 90%.',
      'Automated server provisioning and deployment on Linux environments using shell scripts, reducing manual setup time by 70%.',
      'Ensured high availability for Node.js applications using PM2 and configured Nginx as a reverse proxy for load balancing and SSL termination.',
      'Improved team efficiency by leading peer code reviews and adhering to Agile practices, accelerating sprint delivery by 25%.',
    ],
    tech: ['React', 'Next.js', 'Node.js', 'MongoDB', 'MySQL', 'Tailwind', 'AWS', 'Linux', 'PM2', 'Nginx'],
    current: false,
  },
  {
    role: 'Flutter Developer',
    company: 'Aayan India',
    location: 'Lucknow, India',
    period: 'Apr 2024 - Jun 2024',
    description: [
      'Designed and implemented modern UIs for Flutter and React Native apps, including authentication flows, dashboards, booking modules, and property listing screens.',
      'Created responsive, pixel-perfect mobile layouts with animations, push notifications, and offline support.',
    ],
    tech: ['Flutter', 'React Native', 'Firebase'],
    current: false,
  },
  {
    role: 'Flutter Developer',
    company: 'iWashhub',
    location: 'Lucknow, India',
    period: 'Jun 2023 - Oct 2023',
    description: [
      'Designed and developed the iWashHub mobile app from scratch using Flutter, delivering a seamless laundry booking experience with authentication, order scheduling, and payment integration.',
      'Built a full-stack backend with Node.js & Express, handling user management, booking workflows, and real-time order tracking.',
    ],
    tech: ['Flutter', 'Node.js', 'Firebase', 'MySQL', 'Google Maps API', 'Razorpay'],
    current: false,
  },
]

export default function Experience() {
  return (
    <div className="page-container">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Experience</span>
          <h2>Where I've<span className="gradient-text"> worked</span></h2>
          <p>Professional journey building real products for real users.</p>
        </div>

        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-date">{exp.period}</div>
              <h3 className="timeline-title">{exp.role} {exp.current && <span className="current-badge">Current</span>}</h3>
              <p className="timeline-company">{exp.company}</p>
              <p className="timeline-location">{exp.location}</p>
              <ul className="timeline-desc">
                {exp.description.map((desc, i) => (<li key={i}>{desc}</li>))}
              </ul>
              <div className="project-tags" style={{ marginTop: '1rem' }}>
                {exp.tech.map((t, i) => (<span key={i} className="tag">{t}</span>))}
              </div>
            </div>
          ))}
        </div>

        <div className="section" style={{ marginTop: '4rem' }}>
          <div className="section-header">
            <span className="section-label">Education</span>
            <h2>Education</h2>
          </div>

          <div className="education-card">
            <h3 className="education-title">B. Tech in Data Science and Artificial Intelligence</h3>
            <p className="education-school">Shri Ramswaroop Memorial University, Lucknow</p>
            <div className="education-details">
              <span>2020 - 2024</span>
            </div>
          </div>

          <div className="education-card" style={{ marginTop: '1rem' }}>
            <h3 className="education-title">Intermediate (Class 12)</h3>
            <p className="education-school">Kendriya Vidyalaya Lucknow Cantt</p>
            <div className="education-details">
              <span>2019 - 2020</span>
            </div>
          </div>

          <div className="education-card" style={{ marginTop: '1rem' }}>
            <h3 className="education-title">High School (Class 10)</h3>
            <p className="education-school">Kendriya Vidyalaya Lucknow Cantt</p>
            <div className="education-details">
              <span>2017 - 2018</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}