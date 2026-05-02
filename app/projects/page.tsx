import { Metadata } from 'next'
import ProjectsClient from './ProjectsClient'

export function generateMetadata(): Metadata {
  return {
    title: 'Projects',
    description: 'View portfolio of projects by Sarbesh Kumar Tiwari - E-commerce platforms, real estate websites, blog systems, school management portals, mobile apps (Flutter), AI gaming platforms, and more.',
  }
}

export default function Projects() {
  return <ProjectsClient />
}