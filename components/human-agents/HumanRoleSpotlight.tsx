"use client";

import { useState } from "react";

const humanRoles = {
  growth: [
    "Growth Manager",
    "Coordinates priorities, campaigns, specialists and funnel decisions around one customer journey.",
  ],
  performance: [
    "Performance Marketer",
    "Runs and optimizes paid acquisition with conversion tracking tied back to pipeline outcomes.",
  ],
  creative: [
    "Creative Team",
    "Builds ad creative, landing-page visuals, social assets and video content around campaign goals.",
  ],
  crm: [
    "CRM & Automation Expert",
    "Keeps routing, automations, pipelines and customer history structured inside the same operating system.",
  ],
  appointments: [
    "Appointment Setter",
    "Works with AI Agent and sales teams to move qualified opportunities toward meetings and follow-up.",
  ],
} as const;

type RoleKey = keyof typeof humanRoles;

const tabs: Array<{ key: RoleKey; label: string }> = [
  { key: "growth", label: "Growth Manager" },
  { key: "performance", label: "Performance" },
  { key: "creative", label: "Creative" },
  { key: "crm", label: "CRM" },
  { key: "appointments", label: "Appointments" },
];

export function HumanRoleSpotlight() {
  const [role, setRole] = useState<RoleKey>("growth");
  const [bounceKey, setBounceKey] = useState<RoleKey | null>(null);
  const [title, copy] = humanRoles[role];

  return (
    <div className="human-spotlight-shell interactive-surface motion-reveal">
      <div className="human-spotlight-copy">
        <div className="eyebrow">Human Agents</div>
        <h2 id="humanSpotlightTitle">
          Software runs the system.
          <br />
          People move the work forward.
        </h2>
        <p className="section-lead">
          Add specialists around your Sales &amp; Marketing OS without building
          an in-house department.
        </p>
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
              {tab.label}
            </button>
          ))}
        </div>
        <div className="actions human-spotlight-actions">
          <a className="btn btn-primary human-promo-cta" href="#team">
            Meet the Team
          </a>
          <a className="text-link" href="#plans">
            View Human Agent Plans →
          </a>
        </div>
      </div>
      <div className="human-role-preview interactive-surface" aria-live="polite">
        <div className="role-preview-top">
          <span>ACTIVE HUMAN AGENT</span>
          <b>LIVE WITH YOUR OS</b>
        </div>
        <div className="role-orbit" aria-hidden="true">
          <span />
          <i />
          <b />
        </div>
        <strong>{title}</strong>
        <p>{copy}</p>
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
