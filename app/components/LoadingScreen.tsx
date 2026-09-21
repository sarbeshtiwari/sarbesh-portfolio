"use client";
import { useEffect, useState } from "react";
// Hydration and font readiness drive completion; there is no minimum hold time.
export default function LoadingScreen() {
  const [phase, setPhase] = useState<"hidden" | "loading" | "ready">("hidden");
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    try {
      if (sessionStorage.getItem("portfolio-intro")) return;
    } catch {
      /* Storage is optional. */
    }
    let alive = true;
    let frame = 0;
    let finished = false;
    setPhase("loading");
    const finish = () => {
      if (!alive || finished) return;
      finished = true;
      frame = requestAnimationFrame(() => {
        if (!alive) return;
        setPhase("ready");
        try {
          sessionStorage.setItem("portfolio-intro", "seen");
        } catch {
          /* Storage is optional. */
        }
      });
    };
    // Font delivery must never trap visitors on the intro.
    const deadline = setTimeout(finish, 1200);
    document.fonts.ready.then(finish);
    return () => {
      alive = false;
      clearTimeout(deadline);
      cancelAnimationFrame(frame);
    };
  }, []);
  if (phase === "hidden") return null;
  return (
    <div
      className={`loading-screen ${phase}`}
      aria-hidden="true"
      onAnimationEnd={(e) => {
        if (e.animationName === "intro-exit") setPhase("hidden");
      }}
    >
      <div className="intro-lockup">
        <span className="monogram">
          st<span>.</span>
        </span>
        <strong>Sarbesh Kumar Tiwari</strong>
        <span className="eyebrow">AI / ML / FULL-STACK ENGINEERING</span>
        <span className="intro-progress">
          <i />
        </span>
        <span className="intro-status">
          {phase === "ready" ? "Ready to explore" : "Preparing the experience"}
        </span>
      </div>
    </div>
  );
}
