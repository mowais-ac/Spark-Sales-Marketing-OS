"use client";

import { useState } from "react";
import { useLanguage } from "@/components/LanguageContext";
import type { MessageKey } from "@/lib/i18n/messages";

type WeekKey = "week1" | "week2" | "week3" | "week4";

export function ResultsTimeline() {
  const { t } = useLanguage();
  const [week, setWeek] = useState<WeekKey>("week1");

  const tabs: Array<{
    key: WeekKey;
    num: string;
    label: MessageKey;
    small: MessageKey;
  }> = [
    { key: "week1", num: "01", label: "results.tab.1", small: "results.tab.1.s" },
    { key: "week2", num: "02", label: "results.tab.2", small: "results.tab.2.s" },
    { key: "week3", num: "03", label: "results.tab.3", small: "results.tab.3.s" },
    { key: "week4", num: "04", label: "results.tab.4", small: "results.tab.4.s" },
  ];

  const data: Record<
    WeekKey,
    {
      kicker: MessageKey;
      title: MessageKey;
      copy: MessageKey;
      items: MessageKey[];
      progress: string;
      width: string;
      outcome: MessageKey;
    }
  > = {
    week1: {
      kicker: "results.w1.kicker",
      title: "results.w1.title",
      copy: "results.w1.copy",
      items: [
        "results.w1.i1",
        "results.w1.i2",
        "results.w1.i3",
        "results.w1.i4",
      ],
      progress: "25%",
      width: "25%",
      outcome: "results.w1.outcome",
    },
    week2: {
      kicker: "results.w2.kicker",
      title: "results.w2.title",
      copy: "results.w2.copy",
      items: [
        "results.w2.i1",
        "results.w2.i2",
        "results.w2.i3",
        "results.w2.i4",
      ],
      progress: "50%",
      width: "50%",
      outcome: "results.w2.outcome",
    },
    week3: {
      kicker: "results.w3.kicker",
      title: "results.w3.title",
      copy: "results.w3.copy",
      items: [
        "results.w3.i1",
        "results.w3.i2",
        "results.w3.i3",
        "results.w3.i4",
      ],
      progress: "75%",
      width: "75%",
      outcome: "results.w3.outcome",
    },
    week4: {
      kicker: "results.w4.kicker",
      title: "results.w4.title",
      copy: "results.w4.copy",
      items: [
        "results.w4.i1",
        "results.w4.i2",
        "results.w4.i3",
        "results.w4.i4",
      ],
      progress: "100%",
      width: "100%",
      outcome: "results.w4.outcome",
    },
  };

  const current = data[week];
  const activeIndex = tabs.findIndex((tab) => tab.key === week);
  const stepLabels: MessageKey[] = [
    "results.step.map",
    "results.step.automate",
    "results.step.operate",
    "results.step.optimize",
  ];

  return (
    <div className="results-workflow interactive-surface motion-reveal">
      <div className="results-week-tabs" role="tablist" aria-label="Four-week rollout">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`results-week${week === tab.key ? " active" : ""}`}
            type="button"
            role="tab"
            aria-selected={week === tab.key}
            onClick={() => setWeek(tab.key)}
          >
            <span>{tab.num}</span>
            <strong>{t(tab.label)}</strong>
            <small>{t(tab.small)}</small>
          </button>
        ))}
      </div>

      <div className="results-week-panel" aria-live="polite">
        <div className="results-week-copy">
          <span className="results-week-kicker">{t(current.kicker)}</span>
          <h3>{t(current.title)}</h3>
          <p>{t(current.copy)}</p>
          <ul className="results-week-list">
            {current.items.map((item) => (
              <li key={item}>{t(item)}</li>
            ))}
          </ul>
        </div>
        <div className="results-progress-card" aria-hidden="true">
          <div className="results-progress-head">
            <span>{t("results.rollout")}</span>
            <b>{current.progress}</b>
          </div>
          <div className="results-progress-track">
            <i style={{ width: current.width }} />
          </div>
          <div className="results-progress-steps">
            {stepLabels.map((label, index) => (
              <span
                key={label}
                className={index <= activeIndex ? "done" : undefined}
              >
                {t(label)}
              </span>
            ))}
          </div>
          <div className="results-outcome">
            <span>{t("results.outcomeLabel")}</span>
            <strong>{t(current.outcome)}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
