"use client";

import { useState } from "react";
import { useLanguage } from "@/components/LanguageContext";
import type { MessageKey } from "@/lib/i18n/messages";

type RoleKey =
  | "ads"
  | "seo"
  | "design"
  | "video"
  | "social"
  | "crm"
  | "appointments"
  | "data";

const tabs: Array<{ key: RoleKey; label: MessageKey; title: MessageKey; copy: MessageKey }> = [
  {
    key: "ads",
    label: "human.role.ads.short",
    title: "human.role.ads",
    copy: "human.member.1.d",
  },
  {
    key: "seo",
    label: "human.role.seo.short",
    title: "human.role.seo",
    copy: "human.member.5.d",
  },
  {
    key: "design",
    label: "human.role.design.short",
    title: "human.role.designFull",
    copy: "human.member.3.d",
  },
  {
    key: "video",
    label: "human.role.video.short",
    title: "human.role.video",
    copy: "human.member.4.d",
  },
  {
    key: "social",
    label: "human.role.social.short",
    title: "human.role.social",
    copy: "human.member.7.d",
  },
  {
    key: "crm",
    label: "human.role.crm.short",
    title: "human.role.crmExpert",
    copy: "human.member.2.d",
  },
  {
    key: "appointments",
    label: "human.role.appointments.short",
    title: "human.role.appointments.t",
    copy: "human.member.6.d",
  },
  {
    key: "data",
    label: "human.role.data.short",
    title: "human.role.dataAdmin",
    copy: "human.member.8.d",
  },
];

export function HumanRoleSpotlight() {
  const { t } = useLanguage();
  const [role, setRole] = useState<RoleKey>("ads");
  const [bounceKey, setBounceKey] = useState<RoleKey | null>(null);
  const active = tabs.find((tab) => tab.key === role) ?? tabs[0];

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
        <strong>{t(active.title)}</strong>
        <p>{t(active.copy)}</p>
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
