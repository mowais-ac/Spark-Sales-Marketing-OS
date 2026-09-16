"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type NavLink = { href: string; label: string };

type Props = {
  ctaHref: string;
  ctaLabel: string;
  brandHref?: string;
  navLinks?: NavLink[];
  sectionNav?: boolean;
};

const defaultNav: NavLink[] = [
  { href: "/#platform", label: "Platform" },
  { href: "/#solutions", label: "Solution" },
  { href: "/#results", label: "Results" },
  { href: "/#pricing", label: "Pricing" },
];

const homeSectionNav: NavLink[] = [
  { href: "#platform", label: "Platform" },
  { href: "#solutions", label: "Solution" },
  { href: "#results", label: "Results" },
  { href: "#pricing", label: "Pricing" },
];

export function SiteHeader({
  ctaHref,
  ctaLabel,
  brandHref = "/",
  navLinks,
  sectionNav = false,
}: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const links = navLinks ?? (sectionNav ? homeSectionNav : defaultNav);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onDocClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        menuOpen &&
        navRef.current &&
        menuRef.current &&
        !navRef.current.contains(target) &&
        !menuRef.current.contains(target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [menuOpen]);

  useEffect(() => {
    if (!sectionNav) return;
    const targets = homeSectionNav
      .map((link) => document.querySelector(link.href))
      .filter(Boolean) as Element[];
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        setActiveSection(`#${visible.target.id}`);
      },
      { threshold: [0.25, 0.45, 0.65], rootMargin: "-18% 0px -60% 0px" }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [sectionNav]);

  return (
    <header className="site-header" id="siteHeader">
      <div className="nav-shell">
        <Link
          className="brand-lockup"
          href={sectionNav ? "#top" : brandHref}
          aria-label="Spark AI Sales & Marketing OS home"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="brand-mark"
            src="/spark-ai-mark.png"
            alt=""
            aria-hidden="true"
          />
          <span className="brand-name">SPARK AI</span>
          <span className="brand-divider" aria-hidden="true" />
          <span className="brand-product">SALES &amp; MARKETING OS</span>
        </Link>
        <nav
          className={`main-nav${menuOpen ? " mobile-open" : ""}`}
          id="mainNav"
          aria-label="Primary navigation"
          ref={navRef}
        >
          {links.map((link) =>
            link.href.startsWith("#") ? (
              <a
                key={link.href}
                href={link.href}
                className={activeSection === link.href ? "is-active" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
        <div className="nav-actions">
          <div className="language-switch" aria-label="Language selector">
            <button
              className="lang-btn active"
              type="button"
              data-lang="en"
              aria-pressed="true"
            >
              EN
            </button>
            <span aria-hidden="true">/</span>
            <button
              className="lang-btn"
              type="button"
              data-lang="ar"
              disabled
              aria-disabled="true"
              title="Arabic version is being prepared"
            >
              AR
            </button>
          </div>
          <Link className="btn btn-primary nav-cta" href={ctaHref}>
            {ctaLabel}
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mainNav"
            ref={menuRef}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
