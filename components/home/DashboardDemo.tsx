"use client";

import { useMemo, useState } from "react";

const views = {
  overview: {
    title: "Performance Overview",
    sub: "See acquisition, conversations and pipeline movement in one place.",
    html: (
      <>
        <div className="kpi-grid">
          <div className="kpi">
            <span>New leads</span>
            <strong>128</strong>
          </div>
          <div className="kpi">
            <span>Appointments</span>
            <strong>34</strong>
          </div>
          <div className="kpi">
            <span>Open opportunities</span>
            <strong>57</strong>
          </div>
        </div>
        <div className="demo-table">
          <div className="demo-row head">
            <span>Lead</span>
            <span>Source</span>
            <span>Status</span>
          </div>
          <div className="demo-row">
            <span>Northstar Fitout</span>
            <span>Meta</span>
            <span>Booked</span>
          </div>
          <div className="demo-row">
            <span>Atlas Clinic</span>
            <span>Website</span>
            <span>Qualified</span>
          </div>
          <div className="demo-row">
            <span>Urban Keys</span>
            <span>WhatsApp</span>
            <span>Follow-up</span>
          </div>
        </div>
      </>
    ),
  },
  leads: {
    title: "Lead Control",
    sub: "Every source feeds one customer record.",
    html: (
      <div className="demo-table">
        <div className="demo-row head">
          <span>Lead</span>
          <span>Source</span>
          <span>Owner</span>
        </div>
        <div className="demo-row">
          <span>BuildCo</span>
          <span>Google</span>
          <span>Sarah</span>
        </div>
        <div className="demo-row">
          <span>Prime Fit</span>
          <span>Instagram</span>
          <span>Omar</span>
        </div>
        <div className="demo-row">
          <span>Nova</span>
          <span>WhatsApp</span>
          <span>AI Agent</span>
        </div>
      </div>
    ),
  },
  inbox: {
    title: "Unified Inbox",
    sub: "WhatsApp, forms and customer conversations stay together.",
    html: (
      <div className="demo-chat">
        <div className="demo-bubble">
          Hi, I need more information about your service.
        </div>
        <div className="demo-bubble me">
          Of course. Are you looking for lead generation, sales follow-up, or
          both?
        </div>
        <div className="demo-bubble">
          Both. We currently lose track of WhatsApp enquiries.
        </div>
        <div className="demo-bubble me">
          Understood. I’ll qualify this and route it to the right owner.
        </div>
      </div>
    ),
  },
  pipeline: {
    title: "Sales Pipeline",
    sub: "See every opportunity and the next action.",
    html: (
      <div className="demo-kanban">
        <div className="demo-col">
          QUALIFIED
          <div className="demo-deal">Atlas Clinic</div>
          <div className="demo-deal">Nova Interiors</div>
        </div>
        <div className="demo-col">
          BOOKED
          <div className="demo-deal">Urban Keys</div>
        </div>
        <div className="demo-col">
          PROPOSAL
          <div className="demo-deal">BuildCo Group</div>
        </div>
      </div>
    ),
  },
  campaigns: {
    title: "Campaigns",
    sub: "Connect campaign activity to lead quality.",
    html: (
      <>
        <div className="kpi-grid">
          <div className="kpi">
            <span>Meta leads</span>
            <strong>74</strong>
          </div>
          <div className="kpi">
            <span>Google leads</span>
            <strong>39</strong>
          </div>
          <div className="kpi">
            <span>Organic</span>
            <strong>15</strong>
          </div>
        </div>
        <div className="demo-bars">
          <i className="bar-h-30" />
          <i className="bar-h-48" />
          <i className="bar-h-42" />
          <i className="bar-h-69" />
          <i className="bar-h-78" />
          <i className="bar-h-90" />
        </div>
      </>
    ),
  },
  automation: {
    title: "Automation",
    sub: "Keep follow-up consistent across the customer journey.",
    html: (
      <div className="demo-flow">
        <div className="demo-node">New lead</div>
        <span className="demo-arrow">→</span>
        <div className="demo-node">Instant response</div>
        <span className="demo-arrow">→</span>
        <div className="demo-node">Qualify</div>
        <span className="demo-arrow">→</span>
        <div className="demo-node">Book</div>
        <span className="demo-arrow">→</span>
        <div className="demo-node">Human handoff</div>
      </div>
    ),
  },
  appointments: {
    title: "Appointments",
    sub: "Manage booking, reminders and no-show recovery from one place.",
    html: (
      <>
        <div className="kpi-grid">
          <div className="kpi">
            <span>Booked</span>
            <strong>34</strong>
          </div>
          <div className="kpi">
            <span>Confirmed</span>
            <strong>27</strong>
          </div>
          <div className="kpi">
            <span>Recovered</span>
            <strong>6</strong>
          </div>
        </div>
        <div className="demo-table">
          <div className="demo-row head">
            <span>Contact</span>
            <span>Time</span>
            <span>Status</span>
          </div>
          <div className="demo-row">
            <span>Atlas Clinic</span>
            <span>10:30 AM</span>
            <span>Confirmed</span>
          </div>
          <div className="demo-row">
            <span>Urban Keys</span>
            <span>1:00 PM</span>
            <span>Reminder sent</span>
          </div>
          <div className="demo-row">
            <span>BuildCo Group</span>
            <span>4:30 PM</span>
            <span>Recovered</span>
          </div>
        </div>
      </>
    ),
  },
  reports: {
    title: "Reports",
    sub: "See response, pipeline and conversion activity in one view.",
    html: (
      <>
        <div className="kpi-grid">
          <div className="kpi">
            <span>Response</span>
            <strong>Fast</strong>
          </div>
          <div className="kpi">
            <span>Follow-up</span>
            <strong>Active</strong>
          </div>
          <div className="kpi">
            <span>Pipeline</span>
            <strong>Visible</strong>
          </div>
        </div>
        <div className="demo-bars">
          <i className="bar-h-28" />
          <i className="bar-h-45" />
          <i className="bar-h-61" />
          <i className="bar-h-57" />
          <i className="bar-h-74" />
          <i className="bar-h-88" />
        </div>
      </>
    ),
  },
} as const;

const stages = {
  attract: {
    title: "Attract",
    copy: "Track channels, campaign activity and source quality before leads reach sales.",
    list: [
      "Performance marketing",
      "SEO & social",
      "Creative & content",
      "Lead-source tracking",
    ],
  },
  capture: {
    title: "Capture",
    copy: "Turn enquiries into complete customer records.",
    list: ["Landing pages", "Forms", "WhatsApp", "CRM capture"],
  },
  convert: {
    title: "Convert",
    copy: "Move leads into qualified conversations, appointments and opportunities.",
    list: [
      "AI Agent",
      "Lead qualification",
      "Follow-up",
      "Appointments & pipeline",
    ],
  },
  retain: {
    title: "Retain",
    copy: "Keep customers and dormant opportunities engaged.",
    list: [
      "Retargeting",
      "Reviews",
      "Database reactivation",
      "Long-term nurture",
    ],
  },
} as const;

type ViewKey = keyof typeof views;
type StageKey = keyof typeof stages;

const navItems: Array<{ key: ViewKey; label: string }> = [
  { key: "overview", label: "Overview" },
  { key: "leads", label: "Leads" },
  { key: "inbox", label: "Inbox" },
  { key: "pipeline", label: "Pipeline" },
  { key: "campaigns", label: "Campaigns" },
  { key: "automation", label: "Automation" },
  { key: "appointments", label: "Appointments" },
  { key: "reports", label: "Reports" },
];

const stageItems: Array<{ key: StageKey; num: string; label: string }> = [
  { key: "attract", num: "01", label: "Attract" },
  { key: "capture", num: "02", label: "Capture" },
  { key: "convert", num: "03", label: "Convert" },
  { key: "retain", num: "04", label: "Retain" },
];

export function DashboardDemo() {
  const [view, setView] = useState<ViewKey>("overview");
  const [stage, setStage] = useState<StageKey>("attract");
  const currentView = views[view];
  const currentStage = stages[stage];
  const canvas = useMemo(() => currentView.html, [currentView]);

  return (
    <div className="dashboard-shell">
      <aside className="dash-sidebar">
        <div className="dash-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" aria-hidden="true" src="/spark-ai-mark.png" />
          <span>SPARK AI</span>
        </div>
        {navItems.map((item) => (
          <button
            key={item.key}
            className={`dash-nav${view === item.key ? " active" : ""}`}
            type="button"
            onClick={() => setView(item.key)}
          >
            {item.label}
          </button>
        ))}
      </aside>
      <div className="dash-main">
        <div className="dash-top">
          <div>
            <small>SALES & MARKETING OS</small>
            <h3>{currentView.title}</h3>
            <p>{currentView.sub}</p>
          </div>
          <span className="live-pill">LIVE SYSTEM</span>
        </div>
        <div className="dash-stage-row">
          {stageItems.map((item) => (
            <button
              key={item.key}
              className={`stage-btn${stage === item.key ? " active" : ""}`}
              type="button"
              onClick={() => setStage(item.key)}
            >
              <b>{item.num}</b>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
        <div className="dash-content">
          <div className="dash-canvas">{canvas}</div>
          <aside className="dash-inspector">
            <span>WHAT YOU CONTROL</span>
            <h4>{currentStage.title}</h4>
            <p>{currentStage.copy}</p>
            <ul>
              {currentStage.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
}
