"use client";
import { useState } from "react";
import { skillGroups } from "../data/portfolio";
import { Icon, Tags } from "./ui";
export default function Skills() {
  const [filter, setFilter] = useState("All disciplines");
  return (
    <>
      <div className="filters" role="group" aria-label="Filter skills">
        {["All disciplines", ...skillGroups.map((g) => g.name)].map((name) => (
          <button
            key={name}
            className={`filter-btn ${filter === name ? "active" : ""}`}
            aria-pressed={filter === name}
            onClick={() => setFilter(name)}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="skill-grid">
        {skillGroups
          .filter((g) => filter === "All disciplines" || filter === g.name)
          .map((group) => (
            <article className="skill-card" key={group.name}>
              <span className="skill-icon">
                <Icon name={group.icon} />
              </span>
              <h3>{group.name}</h3>
              <p>{group.description}</p>
              <Tags items={group.skills} />
            </article>
          ))}
      </div>
    </>
  );
}
