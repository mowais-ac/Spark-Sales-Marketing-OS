"use client";

import { useState } from "react";

const resultWeeks = {
  week1: {
    kicker: "WEEK 1 / FOUNDATION",
    title: "Map the customer journey and connect the core system.",
    copy: "Audit lead sources, follow-up, CRM stages and handoffs. Connect the essential channels so every enquiry enters one operating flow.",
    items: [
      "Map lead sources and current customer journey",
      "Structure CRM, pipeline and ownership",
      "Connect forms, inboxes and key channels",
      "Define the first response and follow-up logic",
    ],
    progress: "25%",
    width: "25%",
    outcome: "One clear system blueprint and connected lead flow.",
  },
  week2: {
    kicker: "WEEK 2 / AUTOMATION",
    title: "Build the workflows that keep opportunities moving.",
    copy: "Configure routing, follow-up, booking and pipeline automation so the next action does not depend on someone remembering.",
    items: [
      "Build lead routing and ownership rules",
      "Automate follow-up and reminder sequences",
      "Configure appointment and no-show workflows",
      "Create pipeline actions and internal alerts",
    ],
    progress: "50%",
    width: "50%",
    outcome: "A working follow-up engine with clear next actions.",
  },
  week3: {
    kicker: "WEEK 3 / ACTIVATION",
    title: "Launch the system and operate it with real enquiries.",
    copy: "Activate the connected journey, test handoffs and start running live lead activity through the platform with AI and human support where required.",
    items: [
      "Activate live lead capture and conversations",
      "Test AI-to-human handoffs",
      "Run appointment and pipeline workflows",
      "Review live operational reporting",
    ],
    progress: "75%",
    width: "75%",
    outcome: "Live opportunities moving through one controlled journey.",
  },
  week4: {
    kicker: "WEEK 4 / OPTIMIZATION",
    title: "Measure what moved, fix what stalled and improve conversion.",
    copy: "Use response, pipeline and follow-up data to identify bottlenecks, reactivate missed opportunities and define the next optimization priorities.",
    items: [
      "Review response and follow-up performance",
      "Identify stalled stages and conversion gaps",
      "Reactivate missed or dormant opportunities",
      "Prioritize the next growth experiments",
    ],
    progress: "100%",
    width: "100%",
    outcome: "Visible performance data and a clear optimization roadmap.",
  },
} as const;

type WeekKey = keyof typeof resultWeeks;

const tabs: Array<{
  key: WeekKey;
  num: string;
  label: string;
  small: string;
}> = [
  { key: "week1", num: "01", label: "Week 1", small: "Map & Connect" },
  { key: "week2", num: "02", label: "Week 2", small: "Build & Automate" },
  { key: "week3", num: "03", label: "Week 3", small: "Launch & Operate" },
  { key: "week4", num: "04", label: "Week 4", small: "Measure & Improve" },
];

const stepLabels = ["Map", "Automate", "Operate", "Optimize"];

export function ResultsTimeline() {
  const [week, setWeek] = useState<WeekKey>("week1");
  const data = resultWeeks[week];
  const activeIndex = tabs.findIndex((tab) => tab.key === week);

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
            <strong>{tab.label}</strong>
            <small>{tab.small}</small>
          </button>
        ))}
      </div>

      <div className="results-week-panel" aria-live="polite">
        <div className="results-week-copy">
          <span className="results-week-kicker">{data.kicker}</span>
          <h3>{data.title}</h3>
          <p>{data.copy}</p>
          <ul className="results-week-list">
            {data.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="results-progress-card" aria-hidden="true">
          <div className="results-progress-head">
            <span>4-WEEK ROLLOUT</span>
            <b>{data.progress}</b>
          </div>
          <div className="results-progress-track">
            <i style={{ width: data.width }} />
          </div>
          <div className="results-progress-steps">
            {stepLabels.map((label, index) => (
              <span key={label} className={index <= activeIndex ? "done" : undefined}>
                {label}
              </span>
            ))}
          </div>
          <div className="results-outcome">
            <span>VISIBLE OUTCOME</span>
            <strong>{data.outcome}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
