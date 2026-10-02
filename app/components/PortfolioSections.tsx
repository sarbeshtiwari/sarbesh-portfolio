import Link from "next/link";
import { experiences, profile, projects } from "../data/portfolio";
import { Icon, SectionHeading, Tags } from "./ui";
import Reveal from "./Reveal";
import Skills from "./Skills";
import ProjectVisual, { type Flow } from "./ProjectVisual";
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
type Showcase = {
  project: string;
  kind: "arc" | "commerce" | "mobile" | "flow";
  flow?: Flow;
  title: string;
  role: string;
  text: string;
  features: string[];
  challenge: string;
};
const selected: Showcase[] = [
  {
    project: "Reachout",
    kind: "flow",
    flow: {
      tone: "green",
      caption: "OUTREACH, ORGANISED",
      brand: ["reach", "out."],
      icon: "mail",
      steps: [["Write", "mail"], ["Send", "send"], ["Track", "chart"]],
      line: ["Contacts", "Personal emails", "Replies & applications"],
    },
    title: "Outreach and the job search in one place",
    role: "Product, design & full-stack engineering · Personal product",
    text: "I designed and built Reachout end to end: campaigns sent from the user's own email, reply detection that works out what each person wants, application tracking from the inbox, job matches and a no-code website builder.",
    features: [
      "Personal email & WhatsApp campaigns",
      "Reply detection & application tracking",
      "No-code one-page website builder",
      "Encrypted at rest, deployed on Render + Netlify",
    ],
    challenge:
      "Keep every message personal and sent from the user's own account, while keeping their data private and encrypted.",
  },
  {
    project: "AdPilot",
    kind: "flow",
    flow: {
      tone: "violet",
      caption: "ATTENTION, MONETISED",
      brand: ["ad", "pilot."],
      icon: "spark",
      steps: [["Model thinks", "spark"], ["One card", "layers"], ["Viewer earns", "check"]],
      line: ["AI starts generating", "Sponsored card", "Viewer credited"],
    },
    title: "An ad network for AI thinking time",
    role: "Architecture & full-stack engineering · Personal product",
    text: "I built a browser extension that detects when ChatGPT, Claude or Gemini start generating and shows one sponsored card, plus the ad server and portals for advertisers, earners and the platform team.",
    features: [
      "Chrome extension (Manifest V3)",
      "Geo targeting down to city and area",
      "Prepaid wallets with Razorpay",
      "Mandatory TOTP for admin accounts",
    ],
    challenge:
      "Turn a few seconds of waiting into a fair, privacy-respecting ad slot: advertisers only ever see aggregates, never an earner's identity.",
  },
  {
    project: "VoicePilot",
    kind: "flow",
    flow: {
      tone: "blue",
      caption: "VOICE, NOT KEYBOARD",
      brand: ["voice", "pilot."],
      icon: "mic",
      steps: [["Speak", "mic"], ["Agent works", "code"], ["Hear reply", "volume"]],
      line: ["Your voice", "Terminal AI agent", "Spoken reply"],
    },
    title: "Talking to terminal AI agents",
    role: "Design & engineering · Open source",
    text: "I built a voice layer that wraps any terminal agent (Claude, Codex, Aider, Ollama), reads its reply aloud when it finishes and types your next spoken prompt. Solo mode controls the computer itself.",
    features: [
      "Works with any terminal agent",
      "Local speech recognition, no API keys",
      "Solo mode with a custom wake word",
      "macOS and Windows installers",
    ],
    challenge:
      "Know when an agent has actually finished, without changing how the agent runs, and keep the user's voice on their machine.",
  },
  {
    project: "Ziptat",
    kind: "flow",
    flow: {
      tone: "amber",
      caption: "FASHION IN 30 MINUTES",
      brand: ["zip", "tat."],
      icon: "bolt",
      steps: [["Browse", "layers"], ["Order", "check"], ["Delivered", "location"]],
      line: ["Customer app", "Seller & ops consoles", "Rider app"],
    },
    title: "A quick-commerce fashion platform",
    role: "Full-stack & mobile engineering",
    text: "I worked across the whole Ziptat platform: the NestJS API with its background worker and WebSocket gateway, the seller and ops consoles, the marketing site and the Flutter customer and rider apps.",
    features: [
      "Customer & rider Flutter apps",
      "Seller studio & ops console",
      "Real-time order updates",
      "PostgreSQL/PostGIS location logic",
    ],
    challenge:
      "Coordinate customers, sellers and riders in real time to deliver clothing within 30 minutes.",
  },
  {
    project: "Arc-AGI-3 Games Platform",
    kind: "arc",
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
            description="Products I've built recently, and selected work from my professional roles."
          />
        </Reveal>
        <div className="showcase-list">
          {selected.map((item, i) => {
            const project = projects.find((p) => p.title === item.project)!;
            const live = project.url && project.url !== "#" && !project.url.includes("github.com") ? project.url : "";
            return (
              <Reveal key={project.title}>
                <article className={`showcase ${i % 2 ? "reverse" : ""}`}>
                  <ProjectVisual kind={item.kind} flow={item.flow} />
                  <div className="showcase-copy">
                    <div className="project-kicker">
                      <span>
                        {String(i + 1).padStart(2, "0")} / {project.category}
                      </span>
                      <span className="project-status">{project.status}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                    <Tags items={project.tech} />
                    {(live || project.repo) && (
                      <div className="showcase-links">
                        {live && (
                          <a className="text-link" href={live} target="_blank" rel="noreferrer">
                            Visit live website <Icon name="external" />
                          </a>
                        )}
                        {project.repo && (
                          <a className="text-link" href={project.repo} target="_blank" rel="noreferrer">
                            View the code <Icon name="external" />
                          </a>
                        )}
                      </div>
                    )}
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
            Explore all {projects.length} projects <Icon name="arrow" />
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
