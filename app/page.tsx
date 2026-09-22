import { pageMetadata } from "./data/site";
import Link from "next/link";
import {
  AboutSection,
  SkillsSection,
  ExperienceSection,
  ProjectsSection,
  AISection,
  ContactSection,
} from "./components/PortfolioSections";
import { Icon } from "./components/ui";
import { profile } from "./data/portfolio";
export const metadata = pageMetadata("/");
export default function Home() {
  return (
    <>
      <section id="home" className="hero personal-hero container">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="hero-intro">Hello, I'm</div>
            <h1>Sarbesh<br />Kumar Tiwari<span className="brand-dot">.</span></h1>
            <p className="personal-role">Full-stack developer & AI/ML engineer</p>
            <p className="hero-description">
              I write code, build web and mobile apps, and explore machine learning.
              Based in Noida, India, this is a collection of my work and what
              I&apos;ve learned along the way.
            </p>
            <div className="hero-actions">
              <a className="btn-primary" href="#projects">View my projects <Icon name="down" /></a>
              <a className="btn-secondary" href={profile.resume} download>Download résumé <Icon name="down" /></a>
            </div>
            <div className="hero-socials">
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub <Icon name="external" /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Icon name="external" /></a>
              <a href={`mailto:${profile.email}`}>Email me <Icon name="external" /></a>
            </div>
          </div>
          <aside className="personal-note" aria-label="A little about me">
            <span className="small-label">A LITTLE CONTEXT</span>
            <p className="note-intro">A developer.<br />A curious mind.<br /><em>Always learning.</em></p>
            <dl>
              <div><dt>Currently</dt><dd>Working on interactive AI at<br />Quess Corp</dd></div>
              <div><dt>Studied</dt><dd>B.Tech in Data Science &<br />Artificial Intelligence</dd></div>
              <div><dt>Interests</dt><dd>Web, mobile, computer vision<br />and experiments in AI</dd></div>
            </dl>
            <Link href="/about" className="text-link">More about me <Icon name="arrow" /></Link>
          </aside>
        </div>
        <div className="personal-meta">
          <span><span className="status-dot" /> Open to opportunities</span>
          <span><Icon name="location" /> Noida, India</span>
          <a href="#projects">Selected work below <Icon name="down" /></a>
        </div>
      </section>
      <ProjectsSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <AISection />
      <ContactSection />
    </>
  );
}
