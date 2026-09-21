"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Icon } from "./ui";
const sections = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Projects",
  "AI/ML",
  "Contact",
];
const idFor = (label: string) =>
  label === "AI/ML" ? "ai" : label.toLowerCase();
export default function Navbar() {
  const pathname = usePathname();
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const nav = useRef<HTMLElement>(null);
  useEffect(() => {
    setOpen(false);
    if (pathname !== "/") setActive(pathname.slice(1));
    const sentinel = document.getElementById("top");
    const observer = new IntersectionObserver(([entry]) =>
      setScrolled(!entry.isIntersecting),
    );
    if (sentinel) observer.observe(sentinel);
    let sectionObserver: IntersectionObserver;
    const trackSections = () => {
      sectionObserver?.disconnect();
      // Pixel margins follow viewport height; percentage margins follow width.
      sectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(entry.target.id);
          });
        },
        {
          rootMargin: `-${Math.round(innerHeight * 0.15)}px 0px -${Math.round(innerHeight * 0.65)}px 0px`,
          threshold: 0,
        },
      );
      if (pathname === "/")
        document
          .querySelectorAll("section[id]")
          .forEach((el) => sectionObserver.observe(el));
    };
    trackSections();
    window.addEventListener("resize", trackSections);
    return () => {
      observer.disconnect();
      sectionObserver.disconnect();
      window.removeEventListener("resize", trackSections);
    };
  }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const outside = (e: PointerEvent) => {
      if (!nav.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open]);
  return (
    <header className={`nav-shell ${scrolled ? "is-scrolled" : ""}`}>
      <nav
        ref={nav}
        className="nav container"
        aria-label="Main navigation"
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
        }}
      >
        <Link
          href="/#home"
          className="brand"
          aria-label="Sarbesh Tiwari home"
          onClick={() => setOpen(false)}
        >
          <span className="monogram">
            st<span>.</span>
          </span>
          <span>
            Sarbesh Tiwari<span className="brand-dot">.</span>
          </span>
        </Link>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="nav-links"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
        <div id="nav-links" className={`nav-links ${open ? "is-open" : ""}`}>
          {sections.map((label) => (
            <a
              key={label}
              href={`/#${idFor(label)}`}
              aria-current={active === idFor(label) ? "location" : undefined}
              className={`nav-link ${active === idFor(label) ? "active" : ""} ${label === "Contact" ? "nav-contact" : ""}`}
              onClick={() => {
                setOpen(false);
                setActive(idFor(label));
              }}
            >
              {label}
              {label === "Contact" && <Icon name="arrow" />}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
