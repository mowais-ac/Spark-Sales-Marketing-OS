"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/components/LanguageContext";
import type { MessageKey } from "@/lib/i18n/messages";

const roles: {
  id: string;
  titleKey: MessageKey;
  salary: number;
  label: string;
}[] = [
  {
    id: "ads",
    titleKey: "human.role.ads",
    salary: 7000,
    label: "AED 7.0K",
  },
  {
    id: "seo",
    titleKey: "human.role.seo",
    salary: 4100,
    label: "AED 4.1K",
  },
  {
    id: "design",
    titleKey: "human.role.designFull",
    salary: 3900,
    label: "AED 3.9K",
  },
  {
    id: "video",
    titleKey: "human.role.video",
    salary: 4000,
    label: "AED 4.0K",
  },
  {
    id: "social",
    titleKey: "human.role.social",
    salary: 3800,
    label: "AED 3.8K",
  },
  {
    id: "crm",
    titleKey: "human.role.crmExpert",
    salary: 9700,
    label: "AED 9.7K",
  },
  {
    id: "appointments",
    titleKey: "human.role.appointments.t",
    salary: 5100,
    label: "AED 5.1K",
  },
  {
    id: "data",
    titleKey: "human.role.dataAdmin",
    salary: 3100,
    label: "AED 3.1K",
  },
];

export function HiringCalculator() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<Set<string>>(
    () => new Set(roles.map((role) => role.id))
  );

  const stats = useMemo(() => {
    const active = roles.filter((role) => selected.has(role.id));
    const count = active.length;
    const total = active.reduce((sum, role) => sum + role.salary, 0);
    const pct = Math.max(0, Math.min(100, (count / 8) * 100));
    let labelKey: "human.hire.low" | "human.hire.medium" | "human.hire.high" =
      "human.hire.low";
    if (count >= 6) labelKey = "human.hire.high";
    else if (count >= 3) labelKey = "human.hire.medium";
    return {
      count,
      peopleLabel: `${count} ${
        count === 1 ? t("human.hire.person") : t("human.hire.people")
      }`,
      payroll: count
        ? `≈ AED ${(total / 1000).toFixed(1)}K ${t("home.plan.month")}`
        : `AED 0 ${t("home.plan.month")}`,
      pct,
      labelKey,
    };
  }, [selected, t]);

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section className="section hiring-stress-section">
      <div className="container">
        <div className="hiring-stress-head">
          <div>
            <div className="eyebrow">{t("human.hire.eyebrow")}</div>
            <h2 className="h2">{t("human.hire.title")}</h2>
            <p className="section-lead">{t("human.hire.lead")}</p>
          </div>
        </div>

        <div className="hiring-stress-grid">
          <div className="hiring-team-builder">
            <div className="hiring-builder-top">
              <span>{t("human.hire.build")}</span>
              <small>{t("human.hire.click")}</small>
            </div>

            <div className="salary-role-grid hiring-role-grid">
              {roles.map((role) => {
                const active = selected.has(role.id);
                return (
                  <button
                    key={role.id}
                    className={`salary-role-card hiring-role${
                      active ? " active" : ""
                    }`}
                    type="button"
                    aria-pressed={active}
                    onClick={() => toggle(role.id)}
                  >
                    <span className="human-role-icon">
                      <i className="fa-solid fa-user" aria-hidden="true" />
                    </span>
                    <div>
                      <strong dir="auto">{t(role.titleKey)}</strong>
                    </div>
                    <b className="ltr-safe">{role.label}</b>
                  </button>
                );
              })}
            </div>

            <div className="hiring-live-card" aria-live="polite">
              <span>{t("human.hire.load")}</span>
              <strong dir="auto">{stats.peopleLabel}</strong>
              <b className="ltr-safe">{stats.payroll}</b>
            </div>
          </div>

          <aside className="easy-option-card">
            <span className="easy-option-kicker">{t("human.hire.easy")}</span>
            <div className="easy-team-visual" aria-hidden="true">
              <span>
                <i className="fa-solid fa-user" />
              </span>
              <span>
                <i className="fa-solid fa-user" />
              </span>
              <span>
                <i className="fa-solid fa-user" />
              </span>
              <span>
                <i className="fa-solid fa-user" />
              </span>
              <b>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/spark-ai-mark.png" alt="" />
              </b>
            </div>
            <h3>
              {t("human.hire.easyTitle.1")}
              <br />
              {t("human.hire.easyTitle.2")}
            </h3>
            <div className="easy-price">
              <small>{t("human.hire.from")}</small>
              <strong className="ltr-safe">AED 5K</strong>
              <span>{t("home.plan.month")}</span>
            </div>
            <ul>
              <li dir="auto">{t("human.hire.easy.1")}</li>
              <li dir="auto">{t("human.hire.easy.2")}</li>
              <li dir="auto">{t("human.hire.easy.3")}</li>
              <li dir="auto">{t("human.hire.easy.4")}</li>
            </ul>
            <a className="btn btn-primary" href="#plans">
              {t("human.hire.seePlans")}
            </a>
          </aside>
        </div>

        <p className="salary-source-note" dir="auto">
          {t("human.hire.note")}
        </p>
      </div>
    </section>
  );
}
