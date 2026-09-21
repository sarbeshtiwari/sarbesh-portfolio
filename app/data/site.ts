import type { Metadata } from "next";

export const site = {
  url: "https://sarbeshtiwari.vercel.app",
  name: "Sarbesh Kumar Tiwari",
  title: "Sarbesh Kumar Tiwari | AI/ML & Full-Stack Engineer",
  description:
    "Sarbesh Kumar Tiwari builds AI/ML applications, full-stack web platforms, and mobile products. Explore his projects, engineering experience, and technical skills.",
};

export const publicPages = [
  { path: "/", title: site.title, description: site.description },
  {
    path: "/about",
    title: "About & Skills",
    description:
      "Meet Sarbesh Kumar Tiwari, a full-stack developer in Noida with a B.Tech in Data Science & AI. Discover his background, engineering approach, and skills.",
  },
  {
    path: "/projects",
    title: "Projects | AI, Web & Mobile",
    description:
      "Explore Sarbesh Kumar Tiwari’s 15 projects: AI gaming, computer vision, e-commerce, real estate platforms, and Flutter mobile applications.",
  },
  {
    path: "/experience",
    title: "Engineering Experience",
    description:
      "Explore Sarbesh Kumar Tiwari’s engineering work at Quess Corp × Ethara.ai, Ecorp Infosystems, Aayan India, and iWashhub, plus his Data Science & AI education.",
  },
  {
    path: "/certifications",
    title: "Certifications & Achievements",
    description:
      "View Sarbesh Kumar Tiwari’s 19 credentials, including IBM machine learning, Python, SQL, Flutter, and Smart India Hackathon, with certificate scans and badges.",
  },
  {
    path: "/contact",
    title: "Contact & Collaboration",
    description:
      "Contact Sarbesh Kumar Tiwari for full-stack development, AI/ML projects, mobile applications, and engineering opportunities. Based in Noida, India.",
  },
];

export function pageMetadata(path: string): Metadata {
  const page = publicPages.find((entry) => entry.path === path);
  if (!page) throw new Error(`Missing page metadata: ${path}`);
  const title = path === "/" ? site.title : `${page.title} | ${site.name}`;
  return {
    title: { absolute: title },
    description: page.description,
    alternates: { canonical: new URL(path, site.url).href },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: site.name,
      url: new URL(path, site.url).href,
      title,
      description: page.description,
      images: [
        {
          url: `${site.url}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: site.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: page.description,
      images: [`${site.url}/opengraph-image`],
    },
  };
}
