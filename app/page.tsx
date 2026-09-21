import { pageMetadata } from "./data/site";
import Link from "next/link";
import EngineeringMap from "./components/EngineeringMap";
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
      <section id="home" className="hero container">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot" /> OPEN TO OPPORTUNITIES{" "}
              <span className="availability-line" /> BASED IN INDIA
            </div>
            <div className="hero-intro">
              Hi, I'm Sarbesh <span aria-hidden="true">↗</span>
            </div>
            <h1>
              Engineering
              <br />
              what's next<span className="brand-dot">.</span>
            </h1>
            <div className="hero-role">
              <span>AI / ML ENGINEER</span>
              <i /> FULL-STACK DEVELOPER
            </div>
            <p className="hero-description">
              Intelligent systems. Seamless experiences.
              <br />I bring AI and full-stack engineering together to turn
              complex ideas into products that work.
            </p>
            <div className="hero-actions">
              <a className="btn-primary" href="#projects">
                Explore my work <Icon name="arrow" />
              </a>
              <Link className="btn-secondary" href="/contact">
                Let's connect <Icon name="external" />
              </Link>
            </div>
            <div className="hero-socials">
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub <Icon name="external" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn <Icon name="external" />
              </a>
              <a href={`mailto:${profile.email}`}>
                Email <Icon name="external" />
              </a>
              <span className="hero-location">
                <Icon name="location" /> Noida, India
              </span>
            </div>
          </div>
          <EngineeringMap />
        </div>
        <div className="hero-bottom">
          <span>
            <span className="status-dot" /> CURRENTLY BUILDING AT{" "}
            <strong>Ethara.ai</strong>
          </span>
          <a href="#about">
            SCROLL TO EXPLORE <Icon name="down" />
          </a>
        </div>
      </section>
      <div className="proof-strip">
        <div className="container proof-grid">
          <div>
            <strong>2+</strong>
            <span>
              Years of engineering
              <br />
              experience
            </span>
          </div>
          <div>
            <strong>15</strong>
            <span>
              Projects across web,
              <br />
              mobile & AI
            </span>
          </div>
          <div>
            <strong>10+</strong>
            <span>
              Production applications
              <br />
              deployed on AWS
            </span>
          </div>
          <div>
            <Icon name="nodes" />
            <span>
              B.Tech in
              <br />
              <strong className="degree-label">Data Science & AI</strong>
            </span>
          </div>
        </div>
      </div>
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <AISection />
      <ContactSection />
    </>
  );
}
