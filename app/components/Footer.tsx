import Link from "next/link";
import { profile } from "../data/portfolio";
import { Icon } from "./ui";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Link className="brand" href="/#home">
              <span className="monogram">
                st<span>.</span>
              </span>
              Sarbesh Tiwari.
            </Link>
            <p>My work, experience, and experiments with code.</p>
          </div>
          <div className="footer-links">
            <Link href="/projects">Projects</Link>
            <Link href="/certifications">Certifications</Link>
            <a href={profile.resume} download>
              Résumé ↓
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Sarbesh Kumar Tiwari</span>
          <span>Made by Sarbesh in Noida, India.</span>
          <a href="#top">
            Back to top <Icon name="arrow" className="up-arrow" />
          </a>
        </div>
      </div>
    </footer>
  );
}
