"use client";
import { useState } from "react";
import { projects } from "../data/portfolio";
import { Icon, Tags } from "../components/ui";
const filters = [
  "All projects",
  "Featured",
  "AI & experiments",
  "Web platforms",
  "Mobile apps",
  "Backend",
  "Active",
  "In Progress",
  "Completed",
  "Personal",
];
export default function ProjectsClient({
  initialFilter = "All projects",
}: {
  initialFilter?: string;
}) {
  const [filter, setFilter] = useState(initialFilter);
  const filtered = projects.filter(
    (p) =>
      filter === "All projects" ||
      filter === p.status ||
      (filter === "Featured" && p.featured) ||
      (filter === "AI & experiments" &&
        ["AI Gaming", "Game Platform", "AI / ML", "Chatbot", "AI Tool", "AI / Fintech", "Ad Tech"].includes(
          p.category,
        )) ||
      (filter === "Web platforms" &&
        ["Web Platform", "E-Commerce", "News Portal", "SaaS", "Quick Commerce", "Dashboard", "Ad Tech"].includes(p.category)) ||
      (filter === "Mobile apps" && p.category === "Mobile App") ||
      (filter === "Backend" && p.category === "Backend"),
  );
  return (
    <>
      <div className="filters" role="group" aria-label="Filter projects">
        {filters.map((f) => (
          <button
            key={f}
            className={`filter-btn ${filter === f ? "active" : ""}`}
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <p className="results-count" role="status">
        {filtered.length} PROJECTS / {filter.toUpperCase()}
      </p>
      <div className="archive-grid">
        {filtered.map((project) => (
          <article className="archive-card" key={project.title}>
            <div className="archive-meta">
              <span>{project.category}</span>
              <span className="project-status">
                {project.featured && <span className="featured-badge">★ Featured · </span>}
                {project.status}
              </span>
            </div>
            <h2>{project.title}</h2>
            <p>{project.desc}</p>
            <Tags items={project.tech} />
            {(() => {
              const live = project.url && project.url !== "#" && !project.url.includes("github.com") ? project.url : "";
              const code = project.repo || (project.url?.includes("github.com") ? project.url : "");
              if (!live && !code)
                return <span className="small-label">Public link not available</span>;
              return (
                <div className="archive-links">
                  {live && (
                    <a className="text-link" href={live} target="_blank" rel="noreferrer">
                      Visit live website <Icon name="external" />
                    </a>
                  )}
                  {code && (
                    <a className="text-link" href={code} target="_blank" rel="noreferrer">
                      {code === "https://github.com/sarbeshtiwari" ? "Explore my GitHub" : "View the code"}{" "}
                      <Icon name="external" />
                    </a>
                  )}
                </div>
              );
            })()}
          </article>
        ))}
      </div>
    </>
  );
}
