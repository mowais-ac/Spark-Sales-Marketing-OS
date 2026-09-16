"use client";

import Link from "next/link";
import { OpenConsultationButton } from "./OpenConsultationButton";
import { useLanguage } from "./LanguageContext";
import type { MessageKey } from "@/lib/i18n/messages";

type Props = {
  descriptionKey: MessageKey;
};

export function SiteFooter({ descriptionKey }: Props) {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/spark-ai-logo.png" alt="Spark AI" />
            <span>|</span>
            <b>{t("brand.product")}</b>
          </div>
          <p>{t(descriptionKey)}</p>
        </div>
        <div>
          <strong>{t("footer.platform")}</strong>
          <Link href="/#platform-features">{t("footer.features")}</Link>
          <Link href="/#pricing">{t("footer.pricing")}</Link>
        </div>
        <div>
          <strong>{t("footer.solutions")}</strong>
          <Link href="/">{t("footer.salesOs")}</Link>
          <Link href="/ai-agent">{t("footer.aiAgent")}</Link>
          <Link href="/human-agents">{t("footer.humanAgents")}</Link>
        </div>
        <div>
          <strong>{t("footer.contact")}</strong>
          <OpenConsultationButton>{t("cta.consultation")}</OpenConsultationButton>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>{t("footer.rights")}</span>
        <span>{t("footer.location")}</span>
      </div>
    </footer>
  );
}
