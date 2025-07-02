import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './globals.css'
import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: 'Sarbesh Kumar Tiwari | Portfolio',
  description: 'MERN Developer | Mobile App Developer | Python Enthusiast',
  robots: "max-image-preview:large, index, follow",
  alternates: {
    canonical: "https://sarbesh-portfolio.vercel.app/",
  },
  openGraph: {
    title: 'Sarbesh Kumar Tiwari | Portfolio',
    description: 'MERN Developer | Mobile App Developer | Python Enthusiast',
    url: 'https://sarbesh-portfolio.vercel.app/',
    site_name: 'Sarbesh Kumar Tiwari',
    images: [
      {
        url: 'https://sarbesh-portfolio.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sarbesh Kumar Tiwari Portfolio Preview Image',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sarbesh Kumar Tiwari | Portfolio',
    description: 'MERN Developer | Mobile App Developer | Python Enthusiast',
    image: 'https://sarbesh-portfolio.vercel.app/og-image.jpg',
    creator: '@sarbeshtiwari',
  },
  meta: {
    charset: 'UTF-8',
    viewport: 'width=device-width, initial-scale=1',
    author: 'Sarbesh Kumar Tiwari',
    'theme-color': '#1d4ed8',
  },
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sarbesh Kumar Tiwari',
    url: 'https://sarbesh-portfolio.vercel.app/',
    sameAs: [
      'https://www.linkedin.com/in/sarbeshkumartiwari/',
      'https://github.com/sarbeshkumar',
    ],
    jobTitle: 'MERN Developer | Mobile App Developer | Python Enthusiast',
    worksFor: {
      '@type': 'Organization',
      name: 'Self-Employed',
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-gray-50 to-blue-100 text-gray-800 font-sans">
        <Navbar />
        <main className="pt-20 px-4 md:px-20">{children}</main>
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
