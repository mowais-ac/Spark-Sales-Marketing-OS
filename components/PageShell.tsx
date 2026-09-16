"use client";

import type { ReactNode } from "react";
import { ConsultationProvider } from "./ConsultationContext";
import { ConsultationModal } from "./ConsultationModal";
import { LanguageProvider } from "./LanguageContext";
import { PageEffects } from "./PageEffects";
import { ScrollProgress } from "./ScrollProgress";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import type { MessageKey } from "@/lib/i18n/messages";
import type { PageVariant } from "@/lib/pageVariant";

export type { PageVariant };

type PageShellProps = {
  bodyClass: string;
  children: ReactNode;
  variant: PageVariant;
  headerCtaHref: string;
  headerCtaLabelKey: MessageKey;
  sectionNav?: boolean;
  showExtraFields?: boolean;
};

const footerKey: Record<PageVariant, MessageKey> = {
  home: "footer.home",
  aiAgent: "footer.aiAgentDesc",
  humanAgents: "footer.humanAgentsDesc",
};

export function PageShell({
  bodyClass,
  children,
  variant,
  headerCtaHref,
  headerCtaLabelKey,
  sectionNav = false,
  showExtraFields = false,
}: PageShellProps) {
  return (
    <LanguageProvider>
      <ConsultationProvider>
        <div className={bodyClass}>
          <ScrollProgress />
          <SiteHeader
            ctaHref={headerCtaHref}
            ctaLabelKey={headerCtaLabelKey}
            sectionNav={sectionNav}
          />
          {children}
          <SiteFooter descriptionKey={footerKey[variant]} />
          <ConsultationModal
            variant={variant}
            showExtraFields={showExtraFields}
          />
          <PageEffects />
        </div>
      </ConsultationProvider>
    </LanguageProvider>
  );
}
