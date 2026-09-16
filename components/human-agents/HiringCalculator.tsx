"use client";

import { useMemo, useState } from "react";

const roles = [
  { id: "ads", title: "Digital Advertising Specialist", salary: 7000, label: "AED 7.0K" },
  { id: "seo", title: "SEO Specialist", salary: 4100, label: "AED 4.1K" },
  { id: "design", title: "Graphic Designer", salary: 3900, label: "AED 3.9K" },
  { id: "video", title: "Video Editor", salary: 4000, label: "AED 4.0K" },
  { id: "social", title: "Social Media Manager", salary: 3800, label: "AED 3.8K" },
  { id: "crm", title: "CRM Expert", salary: 9700, label: "AED 9.7K" },
  { id: "appointments", title: "Appointment Setter", salary: 5100, label: "AED 5.1K" },
  { id: "data", title: "Data & Admin Support", salary: 3100, label: "AED 3.1K" },
];

export function HiringCalculator() {
  const [selected, setSelected] = useState<Set<string>>(
    () => new Set(roles.map((role) => role.id))
  );

  const stats = useMemo(() => {
    const active = roles.filter((role) => selected.has(role.id));
    const count = active.length;
    const total = active.reduce((sum, role) => sum + role.salary, 0);
    const pct = Math.max(0, Math.min(100, (count / 8) * 100));
    let label = "Low";
    if (count >= 6) label = "High";
    else if (count >= 3) label = "Medium";
    return {
      count,
      peopleLabel: `${count} ${count === 1 ? "person" : "people"}`,
      payroll: count
        ? `≈ AED ${(total / 1000).toFixed(1)}K / month`
        : "AED 0 / month",
      pct,
      label,
    };
  }, [selected]);

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
            <div className="eyebrow">THE HIRING REALITY</div>
            <h2 className="h2">
              Eight hires. Eight salaries. Eight people to manage.
            </h2>
            <p className="section-lead">
              Tap any role to see how quickly the hiring load adds up.
            </p>
          </div>

          <div className="hiring-live-card" aria-live="polite">
            <span>YOUR HIRING LOAD</span>
            <strong>{stats.peopleLabel}</strong>
            <b>{stats.payroll}</b>
          </div>
        </div>

        <div className="hiring-stress-grid">
          <div className="hiring-team-builder">
            <div className="hiring-builder-top">
              <span>BUILD THE TEAM YOURSELF</span>
              <small>Click roles to add or remove them.</small>
            </div>

            <div className="salary-role-grid hiring-role-grid">
              {roles.map((role) => {
                const active = selected.has(role.id);
                return (
                  <button
                    key={role.id}
                    className={`salary-role-card hiring-role${active ? " active" : ""}`}
                    type="button"
                    aria-pressed={active}
                    onClick={() => toggle(role.id)}
                  >
                    <span className="human-role-icon">
                      <i className="fa-solid fa-user" aria-hidden="true" />
                    </span>
                    <div>
                      <strong>{role.title}</strong>
                    </div>
                    <b>{role.label}</b>
                  </button>
                );
              })}
            </div>

            <div className="hiring-stress-meter">
              <div className="hiring-meter-head">
                <span>Management Load</span>
                <b>{stats.label}</b>
              </div>
              <div className="hiring-meter-track">
                <i style={{ width: `${stats.pct}%` }} />
              </div>
              <div className="hiring-stress-tags">
                <span>
                  <i className="fa-solid fa-user-plus" /> Recruit{" "}
                  <b>{stats.count}</b>
                </span>
                <span>
                  <i className="fa-solid fa-clipboard-check" /> Onboard{" "}
                  <b>{stats.count}</b>
                </span>
                <span>
                  <i className="fa-solid fa-calendar-days" /> Coordinate{" "}
                  <b>{stats.count}</b>
                </span>
                <span>
                  <i className="fa-solid fa-wallet" /> Pay <b>{stats.count}</b>
                </span>
              </div>
            </div>
          </div>

          <aside className="easy-option-card">
            <span className="easy-option-kicker">THE EASIER OPTION</span>
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
              One coordinated team.
              <br />
              One connected system.
            </h3>
            <div className="easy-price">
              <small>STARTING FROM</small>
              <strong>AED 5K</strong>
              <span>/ month</span>
            </div>
            <ul>
              <li>Human specialists around the same OS</li>
              <li>One Growth Manager coordinating execution</li>
              <li>AI + human handoff in one customer journey</li>
              <li>No need to build eight separate hires</li>
            </ul>
            <a className="btn btn-primary" href="#plans">
              See Human Agent Plans
            </a>
          </aside>
        </div>

        <p className="salary-source-note">
          Salary figures are indicative monthly comparisons only and vary by
          experience, employer and role scope.
        </p>
      </div>
    </section>
  );
}
