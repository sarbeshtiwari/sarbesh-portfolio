import { Metadata } from 'next'
import ContactClient from './ContactClient'

export function generateMetadata(): Metadata {
  return {
    title: 'Contact',
    description: 'Contact Sarbesh Kumar Tiwari - Full Stack Developer. Available for freelance work and full-time opportunities. Reach out for project inquiries or collaborations.',
  }
}

export default function Contact() {
  return <ContactClient />
}