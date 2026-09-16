"use client";

import type { ReactNode } from "react";
import { ConsultationProvider } from "./ConsultationContext";
import { ConsultationModal } from "./ConsultationModal";
import { PageEffects } from "./PageEffects";
import { ScrollProgress } from "./ScrollProgress";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type PageShellProps = {
  bodyClass: string;
  children: ReactNode;
  footerDescription: string;
  headerCtaHref: string;
  headerCtaLabel: string;
  sectionNav?: boolean;
  modal: {
    title: string;
    description: string;
    bottleneckLabel: string;
    bottleneckPlaceholder: string;
    footerNote: string;
    showExtraFields?: boolean;
  };
};

export function PageShell({
  bodyClass,
  children,
  footerDescription,
  headerCtaHref,
  headerCtaLabel,
  sectionNav = false,
  modal,
}: PageShellProps) {
  return (
    <ConsultationProvider>
      <div className={bodyClass}>
        <ScrollProgress />
        <SiteHeader
          ctaHref={headerCtaHref}
          ctaLabel={headerCtaLabel}
          sectionNav={sectionNav}
        />
        {children}
        <SiteFooter description={footerDescription} />
        <ConsultationModal {...modal} />
        <PageEffects />
      </div>
    </ConsultationProvider>
  );
}
