"use client";

import { useLanguage } from "@/components/LanguageContext";
import type { MessageKey } from "@/lib/i18n/messages";

const implementedItems: MessageKey[] = [ 
  "caseStudy.item.1",
  "caseStudy.item.2",
  "caseStudy.item.3",
  "caseStudy.item.4",
  "caseStudy.item.5",
  "caseStudy.item.6",
  "caseStudy.item.7",
];

const stats: Array<{ value: MessageKey; label: MessageKey; icon: string }> = [
  {
    value: "caseStudy.stat.1.value",
    label: "caseStudy.stat.1.label",
    icon: "fa-solid fa-comments",
  },
  {
    value: "caseStudy.stat.2.value",
    label: "caseStudy.stat.2.label",
    icon: "fa-solid fa-file-lines",
  },
  {
    value: "caseStudy.stat.3.value",
    label: "caseStudy.stat.3.label",
    icon: "fa-solid fa-chart-column",
  },
];

export function CaseStudySection() {
  const { t } = useLanguage();

  return (
    <section className="case-study section-space" id="case-study" aria-labelledby="caseStudyTitle">
      <div className="container case-study-grid">
        <div className="case-study-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/case-study-baku.png?v=4"
            alt={t("caseStudy.brand")}
            loading="lazy"
          />
        </div>

        <div className="case-study-copy">
          <div className="eyebrow">{t("caseStudy.eyebrow")}</div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="case-study-brand-logo"
            src="/baku-holidays-logo.png?v=1"
            alt={t("caseStudy.brand")}
          />
          <h2 className="h2" id="caseStudyTitle" dir="auto">
            {t("caseStudy.title")}
          </h2>
          <p className="section-lead" dir="auto">
            {t("caseStudy.lead")}
          </p>

          <div className="case-study-implemented">
            <strong dir="auto">{t("caseStudy.implemented")}</strong>
            <ul>
              {implementedItems.map((key) => (
                <li key={key} dir="auto">
                  {t(key)}
                </li>
              ))}
            </ul>
          </div>

          <div className="case-study-stats">
            {stats.map((stat) => (
              <article key={stat.label}>
                <span className="case-study-stat-icon" aria-hidden="true">
                  <i className={stat.icon} />
                </span>
                <b className="ltr-safe">{t(stat.value)}</b>
                <small dir="auto">{t(stat.label)}</small>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
