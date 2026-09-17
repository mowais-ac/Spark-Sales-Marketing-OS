"use client";

import { PageShell } from "@/components/PageShell";
import { OpenConsultationButton } from "@/components/OpenConsultationButton";
import { HiringCalculator } from "@/components/human-agents/HiringCalculator";
import { CaseStudySection } from "@/components/CaseStudySection";
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

      <HiringCalculator />

      <section className="section dark growth-infra-section">
        <div className="container">
          <div className="eyebrow">{t("human.infra.eyebrow")}</div>
          <h2 className="h2">{t("human.infra.title")}</h2>
          <div className="growth-stack">
            <div className="growth-core-card">
              <span>SPARK AI</span>
              <strong dir="auto">{t("human.infra.core")}</strong>
              <small dir="auto">{t("human.infra.sub")}</small>
            </div>
            <div className="growth-role-grid">
              <div>
                <b>01</b>
                <span dir="auto">{t("human.role.ads")}</span>
              </div>
              <div>
                <b>02</b>
                <span dir="auto">{t("human.role.seo")}</span>
              </div>
              <div>
                <b>03</b>
                <span dir="auto">{t("human.role.designFull")}</span>
              </div>
              <div>
                <b>04</b>
                <span dir="auto">{t("human.role.video")}</span>
              </div>
              <div>
                <b>05</b>
                <span dir="auto">{t("human.role.social")}</span>
              </div>
              <div>
                <b>06</b>
                <span dir="auto">{t("human.role.crmExpert")}</span>
              </div>
              <div>
                <b>07</b>
                <span dir="auto">{t("human.role.appointments.t")}</span>
              </div>
              <div>
                <b>08</b>
                <span dir="auto">{t("human.role.dataAdmin")}</span>
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
            <p dir="auto">{t("aiHuman.lead")}</p>
          </div>
          <div className="ai-human-grid">
            <article>
              <h3 className="ai-human-title" dir="auto">
                {t("aiHuman.ai")}
              </h3>
              <div className="chips ltr-safe">
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
              <h3 className="ai-human-title" dir="auto">
                {t("aiHuman.human")}
              </h3>
              <div className="chips ltr-safe">
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

      <CaseStudySection />

      <section
        className="human-handoff-promo section-space compact-section"
        aria-label={t("human.handoff.title")}
      >
        <div className="container">
          <a
            className="handoff-promo-shell interactive-surface"
            href="#team"
          >
            <div className="handoff-promo-copy">
              <span className="eyebrow">{t("human.handoff.eyebrow")}</span>
              <h3 dir="auto">{t("human.handoff.title")}</h3>
              <p dir="auto">{t("human.handoff.copy")}</p>
            </div>
            <div className="handoff-promo-flow" aria-hidden="true">
              <span>{t("human.flow.lead")}</span>
              <i>→</i>
              <span>{t("human.flow.ai")}</span>
              <i>→</i>
              <span className="human-node">{t("human.flow.human")}</span>
              <i>→</i>
              <span>{t("human.flow.customer")}</span>
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
            <p className="section-lead light-copy" dir="auto">
              {t("human.growth.lead")}
            </p>
            <a className="text-link light-link" href="#team">
              {t("human.growth.meet")}
            </a>
          </div>
          <div className="team-list">
            <div>
              <strong dir="auto">{t("human.growth.item1.t")}</strong>
              <span dir="auto">{t("human.growth.item1.d")}</span>
            </div>
            <div>
              <strong dir="auto">{t("human.growth.item2.t")}</strong>
              <span dir="auto">{t("human.growth.item2.d")}</span>
            </div>
            <div>
              <strong dir="auto">{t("human.growth.item3.t")}</strong>
              <span dir="auto">{t("human.growth.item3.d")}</span>
            </div>
            <div>
              <strong dir="auto">{t("human.growth.item4.t")}</strong>
              <span dir="auto">{t("human.growth.item4.d")}</span>
            </div>
            <div>
              <strong dir="auto">{t("human.growth.item5.t")}</strong>
              <span dir="auto">{t("human.growth.item5.d")}</span>
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
              <h3 dir="auto">{t("human.role.ads")}</h3>
              <p dir="auto">{t("human.member.1.d")}</p>
            </article>
            <article>
              <b>02</b>
              <h3 dir="auto">{t("human.role.seo")}</h3>
              <p dir="auto">{t("human.member.5.d")}</p>
            </article>
            <article>
              <b>03</b>
              <h3 dir="auto">{t("human.role.designFull")}</h3>
              <p dir="auto">{t("human.member.3.d")}</p>
            </article>
            <article>
              <b>04</b>
              <h3 dir="auto">{t("human.role.video")}</h3>
              <p dir="auto">{t("human.member.4.d")}</p>
            </article>
            <article>
              <b>05</b>
              <h3 dir="auto">{t("human.role.social")}</h3>
              <p dir="auto">{t("human.member.7.d")}</p>
            </article>
            <article>
              <b>06</b>
              <h3 dir="auto">{t("human.role.crmExpert")}</h3>
              <p dir="auto">{t("human.member.2.d")}</p>
            </article>
            <article>
              <b>07</b>
              <h3 dir="auto">{t("human.role.appointments.t")}</h3>
              <p dir="auto">{t("human.member.6.d")}</p>
            </article>
            <article>
              <b>08</b>
              <h3 dir="auto">{t("human.role.dataAdmin")}</h3>
              <p dir="auto">{t("human.member.8.d")}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section pricing-human" id="plans">
        <div className="container">
          <div className="eyebrow">{t("human.plans.eyebrow")}</div>
          <p className="lead" dir="auto">
            {t("human.plans.lead")}
          </p>
          <p className="lead human-plans-sub" dir="auto">
            {t("human.plans.sub")}
          </p>
          <div className="plan-grid human-plan-grid">
            <article className="plan-card">
              <div className="plan-top">
                <h3 className="plan-tier">{t("human.plan.tier.starter")}</h3>
                <span className="plan-level">{t("human.plan.level.starter")}</span>
              </div>
              <div className="plan-price">
                <span>AED</span>
                <strong>5,000</strong>
                <small>{t("home.plan.month")}</small>
              </div>
              <ul className="plan-list">
                <li dir="auto">{t("human.plan.starter.1")}</li>
                <li dir="auto">{t("human.plan.starter.2")}</li>
                <li dir="auto">{t("human.plan.starter.3")}</li>
                <li dir="auto">{t("human.plan.starter.4")}</li>
                <li dir="auto">{t("human.plan.starter.5")}</li>
                <li dir="auto">{t("human.plan.starter.6")}</li>
              </ul>
              <OpenConsultationButton className="btn plan-cta">
                {t("cta.consultation")}
              </OpenConsultationButton>
            </article>
            <article className="plan-card featured-plan">
              <div className="popular-badge">{t("home.plan.popular")}</div>
              <div className="plan-top">
                <h3 className="plan-tier">{t("human.plan.tier.pro")}</h3>
                <span className="plan-level">{t("human.plan.level.pro")}</span>
              </div>
              <div className="plan-price">
                <span>AED</span>
                <strong>7,500</strong>
                <small>{t("home.plan.month")}</small>
              </div>
              <ul className="plan-list">
                <li dir="auto">{t("human.plan.pro.1")}</li>
                <li dir="auto">{t("human.plan.pro.2")}</li>
                <li dir="auto">{t("human.plan.pro.3")}</li>
                <li dir="auto">{t("human.plan.pro.4")}</li>
                <li dir="auto">{t("human.plan.pro.5")}</li>
                <li dir="auto">{t("human.plan.pro.6")}</li>
              </ul>
              <OpenConsultationButton className="btn btn-light plan-cta">
                {t("cta.consultation")}
              </OpenConsultationButton>
            </article>
            <article className="plan-card">
              <div className="plan-top">
                <h3 className="plan-tier">{t("human.plan.tier.elite")}</h3>
                <span className="plan-level">{t("human.plan.level.elite")}</span>
              </div>
              <div className="plan-price">
                <span>AED</span>
                <strong>10,000</strong>
                <small>{t("home.plan.month")}</small>
              </div>
              <ul className="plan-list">
                <li dir="auto">{t("human.plan.elite.1")}</li>
                <li dir="auto">{t("human.plan.elite.2")}</li>
                <li dir="auto">{t("human.plan.elite.3")}</li>
                <li dir="auto">{t("human.plan.elite.4")}</li>
                <li dir="auto">{t("human.plan.elite.5")}</li>
                <li dir="auto">{t("human.plan.elite.6")}</li>
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
