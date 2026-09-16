"use client";

import { useEffect } from "react";

export function PageEffects() {
  useEffect(() => {
    const revealTargets = document.querySelectorAll(
      "section .section-intro, .human-spotlight-shell, .handoff-promo-shell, .human-pricing-teaser, .agent-human-shell, .dashboard-shell, .final-cta-box, .cta-box"
    );
    revealTargets.forEach((el) => el.classList.add("motion-reveal"));

    const staggerGroups = document.querySelectorAll(
      ".feature-grid, .result-grid, .journey-grid, .plan-grid, .team-grid, .agent-cap-grid, .hire-list, .growth-role-grid"
    );
    staggerGroups.forEach((group) => {
      [...group.children].forEach((el, i) => {
        el.classList.add("motion-stagger");
        (el as HTMLElement).style.setProperty(
          "--motion-delay",
          `${Math.min(i, 8) * 55}ms`
        );
      });
    });

    let observer: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer?.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
      );
      document
        .querySelectorAll(".motion-reveal, .motion-stagger")
        .forEach((el) => observer?.observe(el));
    } else {
      document
        .querySelectorAll(".motion-reveal, .motion-stagger")
        .forEach((el) => el.classList.add("is-visible"));
    }

    const cleanups: Array<() => void> = [];
    if (window.matchMedia("(hover:hover) and (pointer:fine)").matches) {
      document.querySelectorAll(".interactive-surface").forEach((surface) => {
        const onMove = (event: Event) => {
          const e = event as PointerEvent;
          const el = surface as HTMLElement;
          const rect = el.getBoundingClientRect();
          el.style.setProperty("--pointer-x", `${e.clientX - rect.left}px`);
          el.style.setProperty("--pointer-y", `${e.clientY - rect.top}px`);
        };
        surface.addEventListener("pointermove", onMove);
        cleanups.push(() => surface.removeEventListener("pointermove", onMove));
      });
    }

    return () => {
      observer?.disconnect();
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return null;
}
