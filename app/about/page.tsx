import { pageMetadata } from "../data/site";
import Link from "next/link";
import { AboutSection, SkillsSection } from "../components/PortfolioSections";
export const metadata = pageMetadata("/about");
export default function About() {
  return (
    <div className="page-container standalone-about">
      <div className="container page-header">
        <Link href="/#about">← Back to the portfolio</Link>
        <div className="eyebrow">ENGINEER. BUILDER. ALWAYS CURIOUS.</div>
        <h1>A whole-stack perspective.</h1>
        <p>
          My journey began with Data Science & Artificial Intelligence at Shri
          Ramswaroop Memorial University (2020–2024), and grew through mobile
          apps, production platforms, and interactive AI.
        </p>
      </div>
      <AboutSection />
      <SkillsSection />
    </div>
  );
}
