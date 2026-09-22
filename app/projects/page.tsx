import { pageMetadata } from "../data/site";
import Link from "next/link";
import ProjectsClient from "./ProjectsClient";
export const metadata = pageMetadata("/projects");
export default async function Projects({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>;
}) {
  const { filter } = await searchParams;
  return (
    <div className="page-container container">
      <div className="page-header">
        <Link href="/#projects">← Back to selected work</Link>
        <div className="eyebrow">THE PROJECT ARCHIVE</div>
        <h1>
          My projects.
        </h1>
        <p>
          Production platforms, mobile experiences, and personal experiments. A
          collection of the problems I've worked on across the stack.
        </p>
      </div>
      <ProjectsClient
        initialFilter={filter === "ai" ? "AI & experiments" : "All projects"}
      />
    </div>
  );
}
