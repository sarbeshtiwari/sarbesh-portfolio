import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './globals.css'
import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  metadataBase: new URL('https://sarbeshtiwari.vercel.app'),
  title: {
    default: 'Sarbesh Kumar Tiwari | Full Stack Developer',
    template: '%s | Sarbesh Kumar Tiwari',
  },
  description: 'Full Stack Developer with 2+ years of experience in MERN stack, Python, React, Next.js, AWS. Building production-grade web applications, mobile apps, and AI-driven solutions.',
  keywords: [
    'Full Stack Developer',
    'MERN Stack',
    'React Developer',
    'Next.js Developer',
    'Python Developer',
    'Node.js Developer',
    'Flutter Developer',
    'AWS Developer',
    'MongoDB',
    'MySQL',
    'Full Stack Developer India',
    'Full Stack Developer Noida',
    'Web Developer',
    'Mobile App Developer',
    'Freelance Developer',
  ],
  authors: [{ name: 'Sarbesh Kumar Tiwari' }],
  creator: 'Sarbesh Kumar Tiwari',
  publisher: 'Sarbesh Kumar Tiwari',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sarbeshtiwari.vercel.app',
    siteName: 'Sarbesh Kumar Tiwari',
    title: 'Sarbesh Kumar Tiwari | Full Stack Developer',
    description: 'Full Stack Developer with 2+ years of experience in MERN stack, Python, React, Next.js, AWS. Building production-grade web applications.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Sarbesh Kumar Tiwari - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sarbesh Kumar Tiwari | Full Stack Developer',
    description: 'Full Stack Developer with 2+ years of experience in MERN stack, Python, React, Next.js, AWS.',
    creator: '@sarbeshtiwari',
    images: ['/og-image.svg'],
  },
  alternates: {
    canonical: 'https://sarbeshtiwari.vercel.app',
    languages: {
      en: 'https://sarbeshtiwari.vercel.app',
    },
  },
  verification: {
    google: 'EML1vh2mWaTVeo-4ltN28peNm262eeyjqmNjxJURu_U',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="EML1vh2mWaTVeo-4ltN28peNm262eeyjqmNjxJURu_U" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}