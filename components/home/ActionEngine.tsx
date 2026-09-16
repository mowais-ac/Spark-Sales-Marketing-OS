"use client";

import { useState } from "react";

const engineData = {
  lead: {
    kicker: "RECOMMENDED NEXT ACTION",
    title: "Respond while intent is still high.",
    copy: "Reply to the new enquiry now, capture the requirement and move the opportunity into the right pipeline stage.",
    owner: "Sales Team",
    stage: "New Lead",
    action: "Reply now",
  },
  whatsapp: {
    kicker: "QUALIFIED OPPORTUNITY",
    title: "Turn interest into a booked conversation.",
    copy: "The lead is qualified. Send the booking link and move the opportunity into the appointment stage.",
    owner: "Account Manager",
    stage: "Qualified",
    action: "Book meeting",
  },
  proposal: {
    kicker: "FOLLOW-UP DUE",
    title: "Do not let the proposal go quiet.",
    copy: "Follow up with context from the previous conversation and keep the deal moving without restarting the relationship.",
    owner: "Sales Team",
    stage: "Proposal",
    action: "Send follow-up",
  },
  meeting: {
    kicker: "MEETING TODAY",
    title: "Give the team the context before the call.",
    copy: "Customer history, source, notes and previous messages are already together, so the meeting starts with the right context.",
    owner: "Growth Manager",
    stage: "Appointment",
    action: "Prepare meeting",
  },
} as const;

type ActionKey = keyof typeof engineData;

const cards: Array<{
  key: ActionKey;
  icon: string;
  meta: string;
  title: string;
  copy: string;
  action: string;
}> = [
  {
    key: "lead",
    icon: "fa-solid fa-globe",
    meta: "NEW LEAD · 2 MIN AGO",
    title: "Website enquiry",
    copy: "Asked about pricing and setup.",
    action: "Reply now",
  },
  {
    key: "whatsapp",
    icon: "fa-brands fa-whatsapp",
    meta: "WHATSAPP · QUALIFIED",
    title: "Omar — BuildCo",
    copy: "Interested in a team demo.",
    action: "Book meeting",
  },
  {
    key: "proposal",
    icon: "fa-solid fa-file-lines",
    meta: "PROPOSAL · TODAY",
    title: "Atlas Clinic",
    copy: "No response since proposal sent.",
    action: "Follow up",
  },
  {
    key: "meeting",
    icon: "fa-solid fa-calendar-check",
    meta: "APPOINTMENT · 3:30 PM",
    title: "Urban Keys",
    copy: "Meeting booked for today.",
    action: "Prepare",
  },
];

export function ActionEngine() {
  const [active, setActive] = useState<ActionKey>("lead");
  const [pulse, setPulse] = useState(false);
  const data = engineData[active];

  const select = (key: ActionKey) => {
    setActive(key);
    setPulse(false);
    requestAnimationFrame(() => setPulse(true));
  };

  return (
    <div
      className="hero-action-engine interactive-surface"
      aria-label="Next Action Engine"
    >
      <div className="action-engine-top">
        <div className="action-engine-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/spark-ai-mark.png" alt="" aria-hidden="true" />
          <div>
            <small>SALES &amp; MARKETING OS</small>
            <strong>Next Action Engine</strong>
          </div>
        </div>
        <span className="engine-status">
          <i /> ACTIVE
        </span>
      </div>

      <div className="action-engine-summary">
        <div>
          <span>OPPORTUNITIES NEEDING ATTENTION</span>
          <strong>5</strong>
        </div>
        <p>Every lead has a clear next step.</p>
      </div>

      <div className="action-engine-body">
        <div className="action-queue" role="listbox" aria-label="Opportunity queue">
          {cards.map((card) => (
            <button
              key={card.key}
              className={`action-card${active === card.key ? " active" : ""}`}
              type="button"
              role="option"
              aria-selected={active === card.key}
              onClick={() => select(card.key)}
            >
              <span className="action-source">
                <i className={card.icon} />
              </span>
              <div>
                <small>{card.meta}</small>
                <strong>{card.title}</strong>
                <p>{card.copy}</p>
              </div>
              <b>{card.action}</b>
            </button>
          ))}
        </div>

        <aside
          className={`action-detail-panel${pulse ? " engine-panel-pulse" : ""}`}
          aria-live="polite"
        >
          <span className="action-detail-kicker">{data.kicker}</span>
          <h3>{data.title}</h3>
          <p>{data.copy}</p>
          <div className="action-detail-meta">
            <div>
              <span>OWNER</span>
              <strong>{data.owner}</strong>
            </div>
            <div>
              <span>STAGE</span>
              <strong>{data.stage}</strong>
            </div>
          </div>
          <div className="action-detail-cta">
            <span>{data.action}</span>
            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </div>
        </aside>
      </div>
    </div>
  );
}
