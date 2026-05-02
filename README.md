<div align="center">

# Sarbesh Kumar Tiwari - Portfolio

A modern, interactive portfolio built with Next.js 15, Three.js, and Tailwind CSS.

**[sarbeshtiwari.com](https://sarbeshtiwari.com)**

</div>

---

## Overview

Full Stack Developer portfolio featuring interactive 3D graphics, responsive design, and a dark theme with purple/cyan accents. Built from scratch with modern technologies.

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Framework** | Next.js 15 (App Router), React 19, TypeScript |
| **3D Graphics** | Three.js, React Three Fiber, Drei |
| **Styling** | Tailwind CSS, custom CSS with glassmorphism |
| **Email** | Nodemailer (Gmail SMTP) |
| **Deployment** | Vercel |
| **Analytics** | Vercel Analytics |

## Features

- **Interactive 3D Hero** -- Floating glowing orbs, code brackets, and particle effects that respond to mouse movement
- **Responsive Design** -- Fully optimized for mobile, tablet, and desktop
- **Project Showcase** -- Filterable project grid with detailed descriptions and tech stacks
- **Experience Timeline** -- Professional journey with work history and education
- **Certifications** -- Display of achievements and professional certifications
- **Contact Form** -- Working contact form with server-side email delivery
- **SEO Optimized** -- OpenGraph, Twitter cards, sitemap.xml, robots.txt
- **Dark Theme** -- Modern dark palette with purple (#a855f7) and cyan (#22d3ee) accents

## Project Structure

```
app/
  layout.tsx              # Root layout with fonts, metadata, SEO
  page.tsx                # Home with 3D hero, stats, featured work
  globals.css             # Design system, animations, theme
  about/page.tsx          # Bio, skill bars, journey timeline
  projects/page.tsx       # Filterable project grid
  experience/page.tsx     # Work timeline + education
  certifications/page.tsx # Certifications grid with filters
  contact/page.tsx        # Contact form + info
  thank-you/page.tsx     # Confirmation page
  api/sendQuery/          # Email API endpoint
  components/
    HeroScene.tsx         # Three.js 3D background
    HeroWrapper.tsx       # Client-side hero wrapper
    Navbar.tsx            # Navigation with social links
    Footer.tsx            # Footer with links
public/
  favicon.svg             # Custom favicon
  og-image.svg            # Social sharing image
  assets/certs/           # Resume and certifications
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Environment Variables

Create a `.env.local` file for the contact form:

```env
GMAIL_USER=your-email@gmail.com
GMAIL_PASS=your-app-password
```

## Deployment

Deployed on [Vercel](https://vercel.com). Push to `main` to trigger automatic deployments.

## Performance

- Static generation for all pages except the API route
- Dynamic imports for the 3D scene (no SSR overhead)
- Optimized images and assets

## Connect

- **LinkedIn**: [linkedin.com/in/sarbeshtiwari](https://linkedin.com/in/sarbeshtiwari)
- **GitHub**: [github.com/sarbeshtiwari](https://github.com/sarbeshtiwari)
- **Email**: tiwarisarbesh02@gmail.com

## License

MIT