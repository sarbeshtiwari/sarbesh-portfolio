"use client";
import { useEffect, useRef, type ReactNode } from "react";
export default function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.remove("reveal-pending");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.08 },
    );
    if (el.getBoundingClientRect().top > innerHeight)
      el.classList.add("reveal-pending");
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div className={`reveal ${className}`} ref={ref}>
      {children}
    </div>
  );
}
