# Sarbesh Kumar Tiwari — Portfolio

A light-first AI/ML and full-stack engineering portfolio built with Next.js 15 App Router, React 19, TypeScript, and Tailwind 4/custom CSS.

## Local development

```sh
npm install
npm run dev
npm run types
npm run build
npm start
```

The default preview runs at http://localhost:3000. Use `npm run dev -- --port 3100` for an alternative port. No deployment or Git commit is required.

## Content and architecture

- `app/data/portfolio.ts`: original project and experience records, social links, and categorized technologies.
- `app/data/certifications.ts`: asset-backed credentials and verified certificate paths. All 21 certificate scans, badges, and continuation pages are grouped into 14 credentials with selectable preview images.
- `app/components/PortfolioSections.tsx`: server-rendered homepage sections, shared with the About and Experience routes.
- `app/components/EngineeringMap.tsx`: keyboard/touch-enabled capability diagram.
- `app/components/LoadingScreen.tsx`: first-session intro, driven by hydration and font readiness. No minimum hold; a 1.2-second font deadline prevents blocking. Reduced motion bypasses it. Storage failures are harmless.
- `app/components/Reveal.tsx`: progressive scroll reveals using IntersectionObserver. Content remains visible without JavaScript.
- `app/components/ProjectVisual.tsx`: lightweight CSS concept illustrations, explicitly labeled as concepts rather than real screenshots.
- `app/globals.css`: shared light design system, responsive layouts, and reduced-motion rules.
- `public/fonts/`: self-hosted Inter and JetBrains Mono variable fonts (Latin subsets), loaded with `next/font/local`; licenses included.
- `app/opengraph-image.tsx`: generated PNG social-sharing image.
- `app/api/sendQuery/route.ts`: existing Gmail/Nodemailer transport, with input validation and authenticated sender/reply-to handling.

The original About, Experience, Projects, Certifications, Contact, and Thank-you routes remain accessible. All 15 project records and four work roles are retained. Placeholder project URLs are not rendered as links. Existing GitHub profile links are labeled as profile links.

The homepage no longer loads a continuous WebGL scene. Motion uses CSS and IntersectionObserver; unused Three.js, React Three Fiber, Drei, and Framer Motion packages have been removed. Vercel Analytics and Speed Insights remain enabled on Vercel deployments; local previews skip their platform-only endpoints.

## Email configuration

Create `.env.local` with:

```env
GMAIL_USER=your-email@gmail.com
GMAIL_PASS=your-gmail-app-password
```

Without credentials the API returns HTTP 503 and the form offers a direct-email alternative. Email addresses and form values are never included in server error logs. The confirmation page provides an explicit return link instead of a timed redirect.

## Design and verification

See [DESIGN.md](DESIGN.md) for the audit, content constraints, and visual system.

`scripts/verify-portfolio.cjs` runs browser checks against a running local server. It uses Playwright Core and installed Chrome. Supply `PLAYWRIGHT_PATH` if Playwright is available outside this repository; set `PORTFOLIO_URL` to override http://localhost:3100. It checks responsive overflow, navigation, filters, dialogs, image decoding, reduced motion, local links, API validation, and contact UI states. Form success/error responses are mocked, so this does not send email.

Generated screenshots and verification output live in the ignored `artifacts/` directory. No live SMTP delivery is claimed by the browser tests.

## SEO

`app/data/site.ts` defines the canonical host and page-specific search/social titles and descriptions. Next.js generates the sitemap and robots.txt from that source. Person and WebSite structured data identify the portfolio and its author; the confirmation page remains noindex. The existing host, https://sarbeshtiwari.vercel.app, and Google verification token are preserved. Change `site.url` when moving to a custom domain.

The favicon set includes a vector monogram, a multi-resolution ICO (16/32/48px), a 180px Apple touch icon, and 192/512px manifest icons. Social previews use the generated 1200?630 PNG.
