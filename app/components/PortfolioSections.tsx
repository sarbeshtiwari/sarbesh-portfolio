import Link from "next/link";
import { experiences, profile, projects } from "../data/portfolio";
import { Icon, SectionHeading, Tags } from "./ui";
import Reveal from "./Reveal";
import Skills from "./Skills";
import ProjectVisual from "./ProjectVisual";
import ContactActions from "./ContactActions";

export function AboutSection() {
  return (
    <section id="about" className="section container">
      <Reveal>
        <SectionHeading
          number="02"
          label="ABOUT ME"
          title="A little about my background."
        />
        <div className="about-grid">
          <div className="about-statement">
            <span className="small-label">A LITTLE ABOUT ME</span>
            <h3>
              I started with data science.
              <br />
              I kept coming back to
              <br />
              <em>building things with code.</em>
            </h3>
            <p>
              I'm Sarbesh Kumar Tiwari, a developer based in Noida, India, with
              a B.Tech in Data Science & Artificial Intelligence. I build across
              the stack—from the interface people touch to the systems that make
              it work.
            </p>
            <p>
              At Quess Corp, I work on interactive AI gaming
              platforms, authentication, and puzzle experiences. My work brings
              together a foundation in machine learning and hands-on product
              engineering.
            </p>
            <a className="text-link" href={profile.resume} download>
              Get my résumé <Icon name="down" />
            </a>
          </div>
          <aside className="background-note">
            <span className="small-label">MY PATH SO FAR</span>
            <h3>From the classroom to working applications.</h3>
            <p>I studied Data Science & Artificial Intelligence at Shri Ramswaroop
              Memorial University from 2020 to 2024. Along the way, I worked on
              Flutter apps, web development, and machine learning projects.</p>
            <p>Since then, my work has taken me across frontend interfaces,
              backend APIs, cloud deployment, and interactive AI games.</p>
            <Link className="text-link" href="/experience">Read my experience <Icon name="arrow" /></Link>
          </aside>
        </div>
        <div className="credential-line">
          <span>
            <Icon name="location" /> Noida, India
          </span>
          <span>B.Tech · Data Science & AI</span>
          <Link href="/certifications">
            Smart India Hackathon 2022 finalist <Icon name="external" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
export function SkillsSection() {
  return (
    <section id="skills" className="section tinted">
      <div className="container">
        <Reveal>
          <SectionHeading
            number="04"
            label="SKILLS"
            title="Tools I work with."
            description="Languages, frameworks, and tools I use across my projects and day-to-day work."
          />
          <Skills />
        </Reveal>
      </div>
    </section>
  );
}
export function ExperienceSection({ full = false }: { full?: boolean }) {
  return (
    <section id="experience" className="section container">
      <Reveal>
        <SectionHeading
          number="03"
          label="THE JOURNEY"
          title="Where I've worked."
          description="From mobile products to production web platforms—and now, interactive AI."
        />
      </Reveal>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <Reveal key={exp.company}>
            <article className="experience-row">
              <div className="experience-date">
                <span
                  className={`timeline-dot ${exp.current ? "current" : ""}`}
                />
                <span>{exp.period}</span>
                {exp.current && (
                  <span className="current-label">CURRENT CHAPTER</span>
                )}
              </div>
              <div className="experience-body">
                <div className="experience-title">
                  <div>
                    <h3>{exp.company.replace(" X ", " × ")}</h3>
                    <p>
                      {exp.role} <span>· {exp.location}</span>
                    </p>
                  </div>
                  <span className="experience-number">0{index + 1}</span>
                </div>
                {full ? (
                  <ul>
                    {exp.description.map((desc) => (
                      <li key={desc}>{desc}</li>
                    ))}
                  </ul>
                ) : (
                  <p>
                    {index === 0
                      ? "Building interactive AI gaming platforms, multi-user authentication and activity tracking. Working on ARC-AGI-3 games and Pencil Puzzle Bench."
                      : exp.description[0]}
                  </p>
                )}
                <Tags items={exp.tech} />
                {!full && index > 0 && (
                  <details>
                    <summary>
                      More about this role <span>+</span>
                    </summary>
                    <ul>
                      {exp.description.slice(1).map((desc) => (
                        <li key={desc}>{desc}</li>
                      ))}
                    </ul>
                  </details>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
const selected = [
  {
    index: 0,
    kind: "arc" as const,
    title: "My work on an interactive AI games platform",
    role: "Full-stack development · Quess Corp",
    text: "I work on gameplay interactions, user authentication, and activity tracking for a platform built around ARC-AGI-3 games.",
    features: [
      "Interactive gameplay",
      "Multi-user authentication",
      "Activity tracking",
    ],
    challenge:
      "Bring game interactions and player activity into one usable platform.",
  },
  {
    index: 3,
    kind: "commerce" as const,
    title: "Building a storefront and its backend",
    role: "Full-stack development",
    text: "I built a headless CMS and connected product management, checkout, payments, and order tracking across the storefront and backend.",
    features: [
      "Headless CMS",
      "Payment integration",
      "Product & order management",
    ],
    challenge:
      "Support a multi-faceted commerce portal designed for 10,000–15,000 daily users.",
  },
  {
    index: 8,
    kind: "mobile" as const,
    title: "Developing a laundry booking app at iWashhub",
    role: "Flutter & backend development · iWashhub",
    text: "I built this Flutter app from scratch, integrating pickup scheduling, Google Maps, Razorpay payments, and order tracking.",
    features: [
      "Google Maps integration",
      "Razorpay payments",
      "Pickup & delivery tracking",
    ],
    challenge:
      "Connect the entire laundry booking journey in a single mobile experience.",
  },
];
export function ProjectsSection() {
  return (
    <section id="projects" className="section tinted">
      <div className="container">
        <Reveal>
          <SectionHeading
            number="01"
            label="SELECTED PROJECTS"
            title="Some things I've worked on."
            description="Selected work from my professional roles. Here's what I built and where I contributed."
          />
        </Reveal>
        <div className="showcase-list">
          {selected.map((item, i) => {
            const project = projects[item.index];
            return (
              <Reveal key={project.title}>
                <article className={`showcase ${i % 2 ? "reverse" : ""}`}>
                  <ProjectVisual kind={item.kind} />
                  <div className="showcase-copy">
                    <div className="project-kicker">
                      <span>
                        0{i + 1} / {project.category}
                      </span>
                      <span className="project-status">{project.status}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                    <Tags items={project.tech} />
                    <details>
                      <summary>
                        My role & project details <Icon name="arrow" />
                      </summary>
                      <div className="project-details">
                        <span className="small-label">THE CHALLENGE</span>
                        <p>{item.challenge}</p>
                        <span className="small-label">MY CONTRIBUTION</span>
                        <p>{item.role}</p>
                        <ul>
                          {item.features.map((f) => (
                            <li key={f}>{f}</li>
                          ))}
                        </ul>
                      </div>
                    </details>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
        <div className="section-end">
          <span>More web platforms, mobile apps, and experiments.</span>
          <Link href="/projects" className="btn-secondary">
            Explore all 15 projects <Icon name="arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
export function AISection() {
  return (
    <section id="ai" className="section container">
      <Reveal>
        <div className="ai-panel">
          <SectionHeading
            number="05"
            label="PERSONAL PROJECTS & AI"
            title="What I've been exploring."
            description="Exploring how machine learning can turn everyday interactions into more useful experiences."
          />
          <div className="ai-grid">
            <div>
              <span className="ai-feature-label">
                <Icon name="nodes" /> COMPUTER VISION × MUSIC
              </span>
              <h3>
                Emotion Music Player
              </h3>
              <p>
                My Emotion Music Player uses webcam-based emotion detection to
                recommend music that matches a listener's mood. It connects
                computer vision with an everyday experience.
              </p>
              <Tags items={["Python", "OpenCV", "TensorFlow"]} />
              <div
                className="ai-workflow"
                aria-label="Emotion Music Player conceptual workflow"
              >
                {[
                  ["01", "Webcam input"],
                  ["02", "Emotion detection"],
                  ["03", "Music recommendation"],
                ].map(([n, label]) => (
                  <div key={n}>
                    <span>{n}</span>
                    <strong>{label}</strong>
                    <Icon name="arrow" />
                  </div>
                ))}
              </div>
              <span className="small-label">
                PROJECT WORKFLOW · NO LIVE CAMERA ACCESS
              </span>
            </div>
            <div className="ai-experiments">
              <span className="small-label">ALSO EXPLORING</span>
              <article>
                <span>01 / INTERACTIVE AI</span>
                <h4>ARC-AGI-3 Games Platform</h4>
                <p>
                  Interactive gameplay with real-time interactions and
                  analytics.
                </p>
                <a className="text-link" href="#projects">
                  See my work on this project <Icon name="arrow" />
                </a>
              </article>
              <article>
                <span>02 / CONVERSATIONAL EXPERIENCES</span>
                <h4>Food Order WhatsApp Chatbot</h4>
                <p>
                  A Python and Twilio chatbot that makes food ordering
                  conversational.
                </p>
                <Link className="text-link" href="/projects?filter=ai">
                  View AI projects <Icon name="arrow" />
                </Link>
              </article>
              <Link className="ai-cert-link" href="/certifications">
                The foundations: IBM machine learning & data science{" "}
                <Icon name="external" />
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
export function ContactSection() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <Reveal>
          <div className="contact-heading">
            <div>
              <div className="eyebrow">
                <span>06 /</span> GET IN TOUCH
              </div>
              <h2>
                Want to say <em>hello?</em>
              </h2>
            </div>
            <span className="contact-mark" aria-hidden="true">
              ↗
            </span>
          </div>
          <div className="contact-bottom">
            <div>
              <p>
                If you'd like to talk about a role, collaborate on a project,
                <br />
                or ask about my work, I'd love to hear from you.
              </p>
              <ContactActions />
            </div>
            <div className="contact-buttons">
              <Link href="/contact" className="btn-primary">
                Let's talk <Icon name="external" />
              </Link>
              <div className="social-links">
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn ↗
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
