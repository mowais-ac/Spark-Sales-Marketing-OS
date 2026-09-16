"use client";

import { PageShell } from "@/components/PageShell";
import { OpenConsultationButton } from "@/components/OpenConsultationButton";
import { HiringCalculator } from "@/components/human-agents/HiringCalculator";
import { HumanRoleSpotlight } from "@/components/human-agents/HumanRoleSpotlight";
import { useLanguage } from "@/components/LanguageContext";

export function HumanAgentsPageContent() {
  return (
    <PageShell
      bodyClass="human-agents-page"
      variant="humanAgents"
      headerCtaHref="/"
      headerCtaLabelKey="nav.salesOs"
    >
      <HumanAgentsMain />
    </PageShell>
  );
}

function HumanAgentsMain() {
  const { t } = useLanguage();

  return (
    <main>
      <section className="subhero human-hero">
        <div className="container">
          <div className="eyebrow">{t("human.hero.eyebrow")}</div>
          <h1 className="h1">
            {t("human.hero.title.1")}
            <br />
            {t("human.hero.title.2")}
          </h1>
          <p className="lead">{t("human.hero.lead")}</p>
          <div className="actions">
            <a className="btn btn-dark" href="#plans">
              {t("human.hero.plans")}
            </a>
            <OpenConsultationButton className="btn">
              {t("cta.consultation")}
            </OpenConsultationButton>
          </div>
        </div>
      </section>

      {/* <section
        className="human-spotlight section-space"
        aria-labelledby="humanSpotlightTitle"
      >
        <div className="container">
          <HumanRoleSpotlight />
        </div>
      </section> */}

      <HiringCalculator />

      <section className="section dark growth-infra-section">
        <div className="container">
          <div className="eyebrow">{t("human.infra.eyebrow")}</div>
          <h2 className="h2">{t("human.infra.title")}</h2>
          <div className="growth-stack">
            <div className="growth-core-card">
              <span>SPARK AI</span>
              <strong>
                AI + HUMAN
                <br />
                GROWTH TEAM
              </strong>
              <small>{t("human.infra.sub")}</small>
            </div>
            <div className="growth-role-grid">
              <div>
                <b>01</b>
                <span>{t("footer.salesOs")}</span>
              </div>
              <div>
                <b>02</b>
                <span>{t("footer.aiAgent")}</span>
              </div>
              <div>
                <b>03</b>
                <span>{t("human.role.growth")}</span>
              </div>
              <div>
                <b>04</b>
                <span>{t("human.role.performance.t")}</span>
              </div>
              <div>
                <b>05</b>
                <span>SEO Specialist</span>
              </div>
              <div>
                <b>06</b>
                <span>Designer</span>
              </div>
              <div>
                <b>07</b>
                <span>Video Editor</span>
              </div>
              <div>
                <b>08</b>
                <span>Social Media Manager</span>
              </div>
              <div>
                <b>09</b>
                <span>{t("human.role.appointments.t")}</span>
              </div>
              <div>
                <b>10</b>
                <span>CRM Expert</span>
              </div>
              <div>
                <b>11</b>
                <span>Data & Research Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow">{t("aiHuman.eyebrow")}</div>
          <div className="ai-human-head">
            <h2 className="h2">
              {t("aiHuman.title.1")}
              <br />
              {t("aiHuman.title.2")}
            </h2>
            <p>{t("aiHuman.lead")}</p>
          </div>
          <div className="ai-human-grid">
            <article>
              <h3>{t("aiHuman.ai")}</h3>
              <div className="chips">
                <span>Research</span>
                <span>Drafting</span>
                <span>Lead scoring</span>
                <span>Initial responses</span>
                <span>Follow-ups</span>
                <span>Content variations</span>
                <span>Reporting</span>
                <span>Data enrichment</span>
                <span>Qualification</span>
                <span>Scheduling</span>
              </div>
            </article>
            <article className="human-card">
              <h3>{t("aiHuman.human")}</h3>
              <div className="chips">
                <span>Strategy</span>
                <span>Creative direction</span>
                <span>Media buying</span>
                <span>Optimization</span>
                <span>Relationship building</span>
                <span>Quality control</span>
                <span>Objection handling</span>
                <span>Decision making</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        className="human-handoff-promo section-space compact-section"
        aria-label={t("human.handoff.title")}
      >
        <div className="container">
          <a
            className="handoff-promo-shell interactive-surface motion-reveal"
            href="#team"
          >
            <div className="handoff-promo-copy">
              <span className="eyebrow">{t("human.handoff.eyebrow")}</span>
              <h3>{t("human.handoff.title")}</h3>
              <p>{t("human.handoff.copy")}</p>
            </div>
            <div className="handoff-promo-flow" aria-hidden="true">
              <span>Lead</span>
              <i>→</i>
              <span>AI</span>
              <i>→</i>
              <span className="human-node">Human Agent</span>
              <i>→</i>
              <span>Customer</span>
            </div>
            <b>{t("human.handoff.cta")}</b>
          </a>
        </div>
      </section>

      <section className="growth-team section-space dark-section" id="growth-team">
        <div className="container growth-grid">
          <div>
            <div className="eyebrow light">{t("human.growth.eyebrow")}</div>
            <h2>{t("human.growth.title")}</h2>
            <p className="section-lead light-copy">{t("human.growth.lead")}</p>
            <a className="text-link light-link" href="#team">
              {t("human.growth.meet")}
            </a>
          </div>
          <div className="team-list">
            <div>
              <strong>Strategy &amp; funnel ownership</strong>
              <span>Customer journey, offers, campaigns and priorities.</span>
            </div>
            <div>
              <strong>Performance marketing</strong>
              <span>Campaign setup, optimization and acquisition support.</span>
            </div>
            <div>
              <strong>Creative &amp; content</strong>
              <span>Ad creative, landing page content and campaign assets.</span>
            </div>
            <div>
              <strong>CRM &amp; sales support</strong>
              <span>
                Pipeline hygiene, follow-up processes and appointment workflows.
              </span>
            </div>
            <div>
              <strong>Analytics &amp; improvement</strong>
              <span>
                See what is working, where leads stall and what to improve next.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section soft-green" id="team">
        <div className="container">
          <div className="eyebrow">{t("human.team.eyebrow")}</div>
          <h2 className="h2">{t("human.team.title")}</h2>
          <div className="team-grid">
            <article>
              <b>01</b>
              <h3>Digital Advertising Specialist</h3>
              <p>
                Manages Meta, Google, TikTok and YouTube campaigns, including
                targeting, tracking and optimization.
              </p>
            </article>
            <article>
              <b>02</b>
              <h3>{t("human.role.crm.t")}</h3>
              <p>
                Builds funnels, pipelines, automations, routing and integrations.
              </p>
            </article>
            <article>
              <b>03</b>
              <h3>Graphic Designer</h3>
              <p>
                Creates ad creatives, social assets, landing pages and brand
                visuals.
              </p>
            </article>
            <article>
              <b>04</b>
              <h3>Video Editor</h3>
              <p>Produces Reels, Shorts, VSLs and motion content.</p>
            </article>
            <article>
              <b>05</b>
              <h3>SEO Specialist</h3>
              <p>
                Improves technical SEO, on-page SEO, local visibility and
                backlinks.
              </p>
            </article>
            <article>
              <b>06</b>
              <h3>{t("human.role.appointments.t")}</h3>
              <p>
                Works with AI agents to move qualified leads toward meetings.
              </p>
            </article>
            <article>
              <b>07</b>
              <h3>Social Media Manager</h3>
              <p>Plans content, publishing and community engagement.</p>
            </article>
            <article>
              <b>08</b>
              <h3>Data &amp; Research Assistant</h3>
              <p>
                Supports research, CRM hygiene, data management and campaign
                operations.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section pricing-human" id="plans">
        <div className="container">
          <div className="eyebrow">{t("human.plans.eyebrow")}</div>
          <p className="lead">{t("human.plans.lead")}</p>
          <p className="lead human-plans-sub">{t("human.plans.sub")}</p>
          <div className="plan-grid human-plan-grid">
            <article className="plan-card">
              <div className="plan-top">
                <h3 className="plan-tier">STARTER + HUMAN AGENTS</h3>
                <span className="plan-level">Essential Team</span>
              </div>
              <div className="plan-price">
                <span>AED</span>
                <strong>5,000</strong>
                <small>{t("home.plan.month")}</small>
              </div>
              <ul className="plan-list">
                <li>{t("footer.salesOs")}</li>
                <li>{t("human.role.growth")}</li>
                <li>Performance Marketing</li>
                <li>Design Support</li>
                <li>CRM &amp; Automation</li>
                <li>Monthly Optimization</li>
              </ul>
              <OpenConsultationButton className="btn plan-cta">
                {t("cta.consultation")}
              </OpenConsultationButton>
            </article>
            <article className="plan-card featured-plan">
              <div className="popular-badge">{t("home.plan.popular")}</div>
              <div className="plan-top">
                <h3 className="plan-tier">PRO + HUMAN AGENTS</h3>
                <span className="plan-level">Full Growth Team</span>
              </div>
              <div className="plan-price">
                <span>AED</span>
                <strong>7,500</strong>
                <small>{t("home.plan.month")}</small>
              </div>
              <ul className="plan-list">
                <li>Everything in Starter + Human Agents</li>
                <li>SEO Specialist</li>
                <li>Video Editing</li>
                <li>Social Media Management</li>
                <li>Appointment Support</li>
                <li>Advanced Reporting</li>
              </ul>
              <OpenConsultationButton className="btn btn-light plan-cta">
                {t("cta.consultation")}
              </OpenConsultationButton>
            </article>
            <article className="plan-card">
              <div className="plan-top">
                <h3 className="plan-tier">ELITE + HUMAN AGENTS</h3>
                <span className="plan-level">Scale Team</span>
              </div>
              <div className="plan-price">
                <span>AED</span>
                <strong>10,000</strong>
                <small>{t("home.plan.month")}</small>
              </div>
              <ul className="plan-list">
                <li>Everything in Pro + Human Agents</li>
                <li>Higher Creative Capacity</li>
                <li>AI Agents</li>
                <li>Data &amp; Research Support</li>
                <li>Advanced Automation</li>
                <li>Priority Growth Management</li>
              </ul>
              <OpenConsultationButton className="btn plan-cta">
                {t("cta.consultation")}
              </OpenConsultationButton>
            </article>
          </div>

          <div className="pricing-details premium-details">
            <details>
              <summary>
                <span>{t("home.addons.usage")}</span>
                <b>{t("home.addons.usageBtn")}</b>
              </summary>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Usage / Add-on</th>
                      <th>Client rate</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>AI Employee — Growth</strong>
                      </td>
                      <td>AED 275.44 / location / mo</td>
                      <td>
                        1,000 Conversation AI responses + 100 Voice AI
                        minutes/month; overages may apply.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>AI Employee — Unlimited</strong>
                      </td>
                      <td>AED 534.35 / location / mo</td>
                      <td>
                        Conversation AI and Voice AI subject to fair use; phone
                        charges remain separate.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>WhatsApp platform</strong>
                      </td>
                      <td>AED 55.09 / location / mo</td>
                      <td>Messaging usage is additional.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </details>
            <details>
              <summary>
                <span>{t("home.addons.optional")}</span>
                <b>{t("home.addons.optionalBtn")}</b>
              </summary>
              <div className="addon-cards">
                <div>
                  <span>Dedicated email IP</span>
                  <strong>AED 325.02</strong>
                  <small>{t("home.plan.month")}</small>
                </div>
                <div>
                  <span>Online Listings</span>
                  <strong>AED 165.26</strong>
                  <small>{t("home.plan.month")}</small>
                </div>
                <div>
                  <span>Prospecting Tool</span>
                  <strong>AED 159.75</strong>
                  <small>{t("home.plan.month")}</small>
                </div>
              </div>
            </details>
            <details>
              <summary>
                <span>{t("home.addons.terms")}</span>
                <b>{t("home.addons.termsBtn")}</b>
              </summary>
              <div className="commercial commercial-grid">
                <p>
                  <strong>Telephony &amp; SMS</strong>
                  <br />
                  Phone numbers, calls, SMS/MMS and carrier fees vary by country,
                  destination and number type. Live provider rates apply.
                </p>
                <p>
                  <strong>Usage billing</strong>
                  <br />
                  Usage-based services and paid add-ons are billed separately
                  unless explicitly included in a signed proposal.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container">
          <div className="cta-box green-cta">
            <div>
              <div className="eyebrow light">{t("human.final.eyebrow")}</div>
              <h2 className="h2">{t("human.final.title")}</h2>
            </div>
            <OpenConsultationButton className="btn btn-light">
              {t("cta.consultation")}
            </OpenConsultationButton>
          </div>
        </div>
      </section>
    </main>
  );
}
