"use client";
import { useState } from "react";
import { projects } from "../data/portfolio";
import { Icon, Tags } from "../components/ui";
const filters = [
  "All projects",
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
      (filter === "AI & experiments" &&
        ["AI Gaming", "Game Platform", "AI / ML", "Chatbot"].includes(
          p.category,
        )) ||
      (filter === "Web platforms" &&
        ["Web Platform", "E-Commerce", "News Portal"].includes(p.category)) ||
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
              <span className="project-status">{project.status}</span>
            </div>
            <h2>{project.title}</h2>
            <p>{project.desc}</p>
            <Tags items={project.tech} />
            {project.url && project.url !== "#" ? (
              <a
                className="text-link"
                href={project.url}
                target="_blank"
                rel="noreferrer"
              >
                {project.url.includes("github.com")
                  ? "Explore my GitHub"
                  : "Visit live website"}
                <Icon name="external" />
              </a>
            ) : (
              <span className="small-label">Public link not available</span>
            )}
          </article>
        ))}
      </div>
    </>
  );
}
