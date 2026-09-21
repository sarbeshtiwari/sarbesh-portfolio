import { pageMetadata } from "../data/site";
import Link from "next/link";
import { ExperienceSection } from "../components/PortfolioSections";
import { SectionHeading } from "../components/ui";
export const metadata = pageMetadata("/experience");
export default function Experience() {
  return (
    <>
      <div className="page-container container" style={{ paddingBottom: 0 }}>
        <div className="page-header" style={{ marginBottom: 0 }}>
          <Link href="/#experience">← Back to the portfolio</Link>
          <div className="eyebrow">EXPERIENCE & EDUCATION</div>
          <h1>Learning by building.</h1>
          <p>
            My professional journey across mobile development, full-stack
            engineering, and interactive AI platforms.
          </p>
        </div>
      </div>
      <ExperienceSection full />
      <section className="section container education-section">
        <SectionHeading number="↳" label="THE FOUNDATION" title="Education" />
        <div className="education-grid">
          {[
            [
              "2020 – 2024",
              "B.Tech · Data Science & Artificial Intelligence",
              "Shri Ramswaroop Memorial University, Lucknow",
            ],
            [
              "2019 – 2020",
              "Intermediate · Class 12",
              "Kendriya Vidyalaya Lucknow Cantt",
            ],
            [
              "2017 – 2018",
              "High School · Class 10",
              "Kendriya Vidyalaya Lucknow Cantt",
            ],
          ].map(([years, title, school]) => (
            <article className="education-card" key={title}>
              <span>{years}</span>
              <h3>{title}</h3>
              <p>{school}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
