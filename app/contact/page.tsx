import { pageMetadata } from "../data/site";
import Link from "next/link";
import ContactClient from "./ContactClient";
import ContactActions from "../components/ContactActions";
import { profile } from "../data/portfolio";
export const metadata = pageMetadata("/contact");
export default function Contact() {
  return (
    <div className="page-container container">
      <div className="page-header">
        <Link href="/#contact">← Back to the portfolio</Link>
        <div className="eyebrow">LET'S MAKE SOMETHING MEANINGFUL</div>
        <h1>
          A conversation.
          <br />A new possibility.
        </h1>
        <p>
          Have a product idea or an interesting engineering challenge? I'd love
          to hear about it.
        </p>
      </div>
      <div className="contact-grid">
        <aside className="contact-info-card">
          <h2>Let's connect.</h2>
          <p>
            Based in Noida, India.
            <br />
            Open to work and new collaborations.
          </p>
          <ContactActions />
          <div className="social-links">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </div>
          <a href={profile.resume} className="btn-secondary" download>
            Download résumé ↓
          </a>
        </aside>
        <ContactClient />
      </div>
    </div>
  );
}
