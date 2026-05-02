import { Metadata } from 'next'
import CertificationsClient from './CertificationsClient'

export function generateMetadata(): Metadata {
  return {
    title: 'Certifications',
    description: 'Certifications and achievements of Sarbesh Kumar Tiwari - Smart India Hackathon Finalist, AWS, SQL, Flutter, Android Bug Bounty Hunting, Big Data, Hadoop, and more.',
  }
}

export default function Certifications() {
  return <CertificationsClient />
}