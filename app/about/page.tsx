import { Metadata } from 'next'

export function generateMetadata(): Metadata {
  return {
    title: 'About',
    description: 'Learn about Sarbesh Kumar Tiwari - Full Stack Developer with 2+ years experience. Skills include React, Next.js, Node.js, Python, MongoDB, MySQL, AWS, Flutter. View my journey and tech stack.',
  }
}

const skills = [
  { name: 'React', category: 'frontend', level: 90 },
  { name: 'Next.js', category: 'frontend', level: 85 },
  { name: 'TypeScript', category: 'frontend', level: 80 },
  { name: 'JavaScript', category: 'frontend', level: 90 },
  { name: 'Tailwind CSS', category: 'frontend', level: 85 },
  { name: 'Flutter', category: 'frontend', level: 75 },
  { name: 'Node.js', category: 'backend', level: 88 },
  { name: 'Python', category: 'backend', level: 90 },
  { name: 'Express.js', category: 'backend', level: 88 },
  { name: 'MongoDB', category: 'backend', level: 85 },
  { name: 'MySQL', category: 'backend', level: 85 },
  { name: 'Firebase', category: 'backend', level: 80 },
  { name: 'REST APIs', category: 'backend', level: 88 },
  { name: 'AWS', category: 'cloud', level: 85 },
  { name: 'Docker', category: 'cloud', level: 80 },
  { name: 'Linux', category: 'cloud', level: 82 },
  { name: 'Nginx', category: 'cloud', level: 80 },
  { name: 'PM2', category: 'cloud', level: 85 },
  { name: 'Git', category: 'tools', level: 88 },
]

const timeline = [
  { year: '2020', title: 'Started B.Tech in Data Science & AI', desc: 'Began formal education at Shri Ramswaroop Memorial University, diving into data structures, algorithms, machine learning, and web development fundamentals.' },
  { year: '2022', title: 'Smart India Hackathon Finalist', desc: 'Competed at the national level in SIH 2022, solving real-world problems with technology.' },
  { year: '2023', title: 'Flutter Developer at iWashhub', desc: 'Built iWashHub laundry booking app from scratch with authentication, order tracking, and payment integration.' },
  { year: '2024', title: 'Flutter Developer at Aayan India', desc: 'First professional role building cross-platform mobile applications with Flutter and React Native.' },
  { year: '2024', title: 'Full Stack Developer at Ecorp Infosystems', desc: 'Shipped 10+ production web apps including real estate platforms, news portals, and school management systems. Improved user engagement by 40%.' },
  { year: '2026', title: 'Full Stack Developer at Ethara.ai', desc: 'Currently building arc-agi-3 games platform, multi-user authentication systems, and pencil-puzzle-bench project. Working with Python, JavaScript, and Docker for deployment.' },
]

export default function About() {
  return (
    <div className="page-container">
      <div className="container">
        <div className="section-header">
          <span className="section-label">About Me</span>
          <h2>Building things that live<br /><span className="gradient-text">on the internet</span></h2>
        </div>

        <div className="bio-grid">
          <div className="bio-text">
            <p>I'm Sarbesh Kumar Tiwari, a full-stack developer with over 2 years of experience in designing, developing, and deploying high-traffic web applications. With a B.Tech in Data Science and Artificial Intelligence from Shri Ramswaroop Memorial University, I've been building across the entire stack.</p>
            <p>Currently working as a Full Stack Developer at Quess Corp X Ethara.ai since February 2026. I specialize in building interactive platforms, games, and AI-driven applications. I've developed platforms for playing arc-agi-3 games with multi-user authentication and tracking systems.</p>
            <p>My tech stack includes Python, JavaScript, React, Node.js, MongoDB, MySQL, and AWS. I've deployed 10+ production applications on AWS EC2 with high availability, improving user engagement by 40%. I'm experienced with Linux server management, Nginx, PM2, and Docker for deployment.</p>
            <p>Connect with me on <a href="https://www.linkedin.com/in/sarbeshtiwari" target="_blank" rel="noopener noreferrer" style={{ color: '#a855f7' }}>LinkedIn</a> or check out my code on <a href="https://github.com/sarbeshtiwari" target="_blank" rel="noopener noreferrer" style={{ color: '#a855f7' }}>GitHub</a>.</p>
          </div>

          <div className="quick-facts">
            <h3>Quick Facts</h3>
            <div className="fact-item">
              <span className="fact-label">Location</span>
              <span className="fact-value">Noida, India</span>
            </div>
            <div className="fact-item">
              <span className="fact-label">Education</span>
              <span className="fact-value">B.Tech Data Science & AI</span>
            </div>
            <div className="fact-item">
              <span className="fact-label">Current Role</span>
              <span className="fact-value">Full Stack Developer</span>
            </div>
            <div className="fact-item">
              <span className="fact-label">Company</span>
              <span className="fact-value">Ethara.ai</span>
            </div>
            <div className="fact-item">
              <span className="fact-label">Deployment</span>
              <span className="fact-value">Quess Corp</span>
            </div>
            <div className="fact-item">
              <span className="fact-label">Joined</span>
              <span className="fact-value">Feb 2026</span>
            </div>
            <div className="fact-item">
              <span className="fact-label">Status</span>
              <span style={{ color: '#22c55e' }}>● Open to work</span>
            </div>
          </div>
        </div>

        <div className="section" style={{ marginTop: '4rem' }}>
          <div className="section-header">
            <span className="section-label">Tech Stack</span>
            <h2>Skills & Technologies</h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill, idx) => (
              <div key={idx} className="skill-item">
                <span className={`skill-category ${skill.category}`}>{skill.category}</span>
                <span className="skill-name">{skill.name}</span>
                <div className="skill-bar">
                  <div className={`skill-fill ${skill.category}`} style={{ width: `${skill.level}%` }} />
                </div>
                <span className="skill-percent">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="section" style={{ marginTop: '4rem' }}>
          <div className="section-header">
            <span className="section-label">Timeline</span>
            <h2>My Journey</h2>
          </div>

          <div className="timeline">
            {timeline.map((item, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-date">{item.year}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}