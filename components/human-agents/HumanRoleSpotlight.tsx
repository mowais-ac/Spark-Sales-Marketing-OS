"use client";

import { useState } from "react";
import { useLanguage } from "@/components/LanguageContext";
import type { MessageKey } from "@/lib/i18n/messages";

type RoleKey = "growth" | "performance" | "creative" | "crm" | "appointments";

export function HumanRoleSpotlight() {
  const { t } = useLanguage();
  const [role, setRole] = useState<RoleKey>("growth");
  const [bounceKey, setBounceKey] = useState<RoleKey | null>(null);

  const tabs: Array<{ key: RoleKey; label: MessageKey }> = [
    { key: "growth", label: "human.role.growth" },
    { key: "performance", label: "human.role.performance" },
    { key: "creative", label: "human.role.creative" },
    { key: "crm", label: "human.role.crm" },
    { key: "appointments", label: "human.role.appointments" },
  ];

  const titles: Record<RoleKey, MessageKey> = {
    growth: "human.role.growth",
    performance: "human.role.performance.t",
    creative: "human.role.creative.t",
    crm: "human.role.crm.t",
    appointments: "human.role.appointments.t",
  };

  const copies: Record<RoleKey, MessageKey> = {
    growth: "human.role.growth.d",
    performance: "human.role.performance.d",
    creative: "human.role.creative.d",
    crm: "human.role.crm.d",
    appointments: "human.role.appointments.d",
  };

  return (
    <div className="human-spotlight-shell interactive-surface motion-reveal">
      <div className="human-spotlight-copy">
        <div className="eyebrow">{t("human.spot.eyebrow")}</div>
        <h2 id="humanSpotlightTitle">
          {t("human.spot.title.1")}
          <br />
          {t("human.spot.title.2")}
        </h2>
        <p className="section-lead">{t("human.spot.lead")}</p>
        <div className="human-role-tabs" role="tablist" aria-label="Human Agent roles">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`human-role${role === tab.key ? " active" : ""}${
                bounceKey === tab.key ? " is-bouncing" : ""
              }`}
              type="button"
              role="tab"
              aria-selected={role === tab.key}
              onClick={() => {
                setRole(tab.key);
                setBounceKey(null);
                requestAnimationFrame(() => setBounceKey(tab.key));
              }}
            >
              {t(tab.label)}
            </button>
          ))}
        </div>
        <div className="actions human-spotlight-actions">
          <a className="btn btn-primary human-promo-cta" href="#team">
            {t("human.spot.meet")}
          </a>
          <a className="text-link" href="#plans">
            {t("human.spot.viewPlans")}
          </a>
        </div>
      </div>
      <div className="human-role-preview interactive-surface" aria-live="polite">
        <div className="role-preview-top">
          <span>{t("human.spot.active")}</span>
          <b>{t("human.spot.live")}</b>
        </div>
        <div className="role-orbit" aria-hidden="true">
          <span />
          <i />
          <b />
        </div>
        <strong>{t(titles[role])}</strong>
        <p>{t(copies[role])}</p>
        <div className="human-role-flow">
          <span>Plan</span>
          <i>→</i>
          <span>Execute</span>
          <i>→</i>
          <span>Review</span>
          <i>→</i>
          <span>Improve</span>
        </div>
      </div>
    </div>
  );
}
