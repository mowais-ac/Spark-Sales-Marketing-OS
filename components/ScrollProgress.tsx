"use client";

import { useEffect } from "react";

export function ScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById("scrollProgress");
    if (!bar) return;

    const update = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct =
        max > 0
          ? Math.min(100, Math.max(0, (window.scrollY / max) * 100))
          : 0;
      bar.style.width = `${pct}%`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="scroll-progress" id="scrollProgress" aria-hidden="true" />
  );
}
