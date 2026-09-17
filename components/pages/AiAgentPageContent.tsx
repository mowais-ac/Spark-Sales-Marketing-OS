"use client";

import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { OpenConsultationButton } from "@/components/OpenConsultationButton";
import { useLanguage } from "@/components/LanguageContext";

export function AiAgentPageContent() {
  return (
    <PageShell
      bodyClass="ai-agent-page"
      variant="aiAgent"
      headerCtaHref="/human-agents"
      headerCtaLabelKey="nav.humanAgents"
    >
      <AiAgentMain />
    </PageShell>
  );
}

function AiAgentMain() {
  const { t } = useLanguage();

  return (
    <main>
      <section className="agent-hero section-space">
        <div className="container agent-hero-grid">
          <div>
            <div className="eyebrow">{t("ai.eyebrow")}</div>
            <h1>{t("ai.title")}</h1>
            <p className="hero-lead">{t("ai.lead")}</p>
            <div className="agent-actions">
              <OpenConsultationButton className="btn btn-dark">
                {t("cta.consultation")}
              </OpenConsultationButton>
              <Link className="btn" href="/#platform-features">
                {t("ai.seeOs")}
              </Link>
            </div>
          </div>
          <div className="agent-conversation">
            <div className="agent-top">
              <span>{t("ai.live")}</span>
              <b>{t("ai.liveTag")}</b>
            </div>
            <div className="agent-bubble customer">{t("ai.bubble.c1")}</div>
            <div className="agent-bubble ai">{t("ai.bubble.a1")}</div>
            <div className="agent-bubble customer">{t("ai.bubble.c2")}</div>
            <div className="handoff-note">{t("ai.handoff")}</div>
            <div className="agent-bubble human">{t("ai.bubble.h1")}</div>
          </div>
        </div>
      </section>

      <section className="section-space dark-section">
        <div className="container">
          <div className="section-intro dark-intro">
            <div className="eyebrow light">{t("ai.layer.eyebrow")}</div>
            <h2>{t("ai.layer.title")}</h2>
          </div>
          <div className="agent-cap-grid">
            {(
              [
                ["01", "ai.cap.1.t", "ai.cap.1.d"],
                ["02", "ai.cap.2.t", "ai.cap.2.d"],
                ["03", "ai.cap.3.t", "ai.cap.3.d"],
                ["04", "ai.cap.4.t", "ai.cap.4.d"],
                ["05", "ai.cap.5.t", "ai.cap.5.d"],
                ["06", "ai.cap.6.t", "ai.cap.6.d"],
              ] as const
            ).map(([num, title, desc]) => (
              <article key={num}>
                <span>{num}</span>
                <h3>{t(title)}</h3>
                <p>{t(desc)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <div className="section-intro">
            <div className="eyebrow">{t("ai.trigger.eyebrow")}</div>
            <h2>{t("ai.trigger.title")}</h2>
          </div>
          <div className="trigger-list">
            {(
              [
                "ai.trigger.1",
                "ai.trigger.2",
                "ai.trigger.3",
                "ai.trigger.4",
                "ai.trigger.5",
                "ai.trigger.6",
                "ai.trigger.7",
                "ai.trigger.8",
              ] as const
            ).map((key) => (
              <span key={key}>{t(key)}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="agent-human-promo section-space">
        <div className="container">
          <div className="agent-human-shell interactive-surface motion-reveal">
            <div>
              <div className="eyebrow">{t("ai.promo.eyebrow")}</div>
              <h2>{t("ai.promo.title")}</h2>
              <p className="section-lead">{t("ai.promo.lead")}</p>
            </div>
            <div className="agent-human-roles">
              <span>{t("human.role.ads")}</span>
              <span>{t("human.role.seo")}</span>
              <span>{t("human.role.designFull")}</span>
              <span>{t("human.role.video")}</span>
              <span>{t("human.role.social")}</span>
              <span>{t("human.role.crmExpert")}</span>
              <span>{t("human.role.appointments.t")}</span>
              <span>{t("human.role.dataAdmin")}</span>
            </div>
            <Link className="btn btn-primary human-promo-cta" href="/human-agents">
              {t("ai.promo.cta")}
            </Link>
          </div>
        </div>
      </section>

      <section className="final-cta section-space">
        <div className="container final-cta-box">
          <div>
            <div className="eyebrow light">{t("ai.final.eyebrow")}</div>
            <h2>{t("ai.final.title")}</h2>
          </div>
          <OpenConsultationButton className="btn btn-light">
            {t("cta.consultation")}
          </OpenConsultationButton>
        </div>
      </section>
    </main>
  );
}
