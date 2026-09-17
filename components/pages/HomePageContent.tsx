"use client";

import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { OpenConsultationButton } from "@/components/OpenConsultationButton"; 
import { DashboardDemo } from "@/components/home/DashboardDemo";
import { ResultsTimeline } from "@/components/home/ResultsTimeline";
import { useLanguage } from "@/components/LanguageContext";

export function HomePageContent() {
  return (
    <PageShell
      bodyClass="home-page"
      variant="home"
      sectionNav
      showExtraFields
      headerCtaHref="/human-agents"
      headerCtaLabelKey="nav.humanAgents"
    >
      <HomeMain />
    </PageShell>
  );
}

function HomeMain() {
  const { t } = useLanguage();

  return (
    <main id="top">
      <section className="hero section-space">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">{t("home.eyebrow")}</div>
            <p className="hero-kicker">{t("home.kicker")}</p>
            <h1>{t("home.title")}</h1>
            <p className="hero-lead">{t("home.lead")}</p>
            <p className="hero-proof">{t("home.proof")}</p>
            <OpenConsultationButton className="btn btn-dark hero-cta">
              {t("cta.consultation")}
            </OpenConsultationButton>
          </div>
        </div>
      </section>

      <section
        className="lead-sources-banner"
        id="lead-sources"
        aria-label={t("home.sources.aria")}
      >
        <div className="container">
          <div className="lead-banner-shell">
            <div className="lead-banner-copy">
              <span className="eyebrow">{t("home.sources.eyebrow")}</span>
              <strong>{t("home.sources.title")}</strong>
            </div>
            <div
              className="lead-banner-icons"
              aria-label={t("home.sources.iconsAria")}
            >
              <div
                className="lead-banner-item source-whatsapp"
                title={t("home.sources.whatsapp")}
              >
                <span>
                  <i className="fa-brands fa-whatsapp" aria-hidden="true" />
                </span>
                <b>{t("home.sources.whatsapp")}</b>
              </div>
              <div
                className="lead-banner-item source-instagram"
                title={t("home.sources.instagram")}
              >
                <span>
                  <i className="fa-brands fa-instagram" aria-hidden="true" />
                </span>
                <b>{t("home.sources.instagram")}</b>
              </div>
              <div
                className="lead-banner-item source-phone"
                title={t("home.sources.phone")}
              >
                <span>
                  <i className="fa-solid fa-phone" aria-hidden="true" />
                </span>
                <b>{t("home.sources.phone")}</b>
              </div>
              <div
                className="lead-banner-item source-ads"
                title={t("home.sources.ads")}
              >
                <span>
                  <i className="fa-brands fa-meta" aria-hidden="true" />
                </span>
                <b>{t("home.sources.ads")}</b>
              </div>
              <div
                className="lead-banner-item source-forms"
                title={t("home.sources.forms")}
              >
                <span>
                  <i className="fa-solid fa-file-lines" aria-hidden="true" />
                </span>
                <b>{t("home.sources.forms")}</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="dashboard-section section-space dark-section"
        id="platform"
      >
        <div className="container">
          <div className="section-intro dark-intro">
            <div className="eyebrow light">{t("home.dash.eyebrow")}</div>
            <h2>{t("home.dash.title")}</h2>
            <p className="section-lead light-copy">{t("home.dash.lead")}</p>
          </div>
          <DashboardDemo />
        </div>
      </section>

      <section className="fragmentation section-space" id="solutions">
        <div className="container">
          <div className="section-intro wide">
            <div className="eyebrow">{t("home.problem.eyebrow")}</div>
            <h2>{t("home.problem.title")}</h2>
            <p className="statement">{t("home.problem.statement")}</p>
          </div>
          <div className="compare-grid">
            <article className="compare-panel bad-panel">
              <div className="panel-label">{t("home.problem.bad")}</div>
              <ul>
                <li>{t("home.problem.bad.1")}</li>
                <li>{t("home.problem.bad.2")}</li>
                <li>{t("home.problem.bad.3")}</li>
                <li>{t("home.problem.bad.4")}</li>
                <li>{t("home.problem.bad.5")}</li>
                <li>{t("home.problem.bad.6")}</li>
              </ul>
            </article>
            <article className="compare-panel good-panel">
              <div className="panel-label">{t("home.problem.good")}</div>
              <ul>
                <li>{t("home.problem.good.1")}</li>
                <li>{t("home.problem.good.2")}</li>
                <li>{t("home.problem.good.3")}</li>
                <li>{t("home.problem.good.4")}</li>
                <li>{t("home.problem.good.5")}</li>
                <li>{t("home.problem.good.6")}</li>
              </ul>
            </article>
          </div>
          <OpenConsultationButton className="btn btn-dark section-cta">
            {t("cta.findGaps")}
          </OpenConsultationButton>
        </div>
      </section>

      <section className="features section-space" id="platform-features">
        <div className="container">
          <div className="section-intro platform-modules-intro">
            <div className="eyebrow">{t("home.modules.eyebrow")}</div>
            <h2>{t("home.modules.title")}</h2>
            <p className="section-lead">{t("home.modules.lead")}</p>
          </div>
          <div className="feature-grid">
            {(
              [
                ["01", "home.mod.1.t", "home.mod.1.d"],
                ["02", "home.mod.2.t", "home.mod.2.d"],
                ["03", "home.mod.3.t", "home.mod.3.d"],
                ["04", "home.mod.4.t", "home.mod.4.d"],
                ["05", "home.mod.5.t", "home.mod.5.d"],
                ["06", "home.mod.6.t", "home.mod.6.d"],
                ["07", "home.mod.7.t", "home.mod.7.d"],
                ["08", "home.mod.8.t", "home.mod.8.d"],
                ["09", "home.mod.9.t", "home.mod.9.d"],
              ] as const
            ).map(([num, titleKey, descKey]) => (
              <article className="feature-card" key={num}>
                <span>{num}</span>
                <h3>{t(titleKey)}</h3>
                <p>{t(descKey)}</p>
              </article>
            ))}
            <Link className="feature-card feature-link" href="/ai-agent">
              <span>10</span>
              <h3>{t("home.mod.10.t")}</h3>
              <p>{t("home.mod.10.d")}</p>
              <b>{t("home.mod.10.cta")}</b>
            </Link>
          </div>
        </div>
      </section>

      <section className="journey section-space" id="journey">
        <div className="container">
          <div className="section-intro">
            <div className="eyebrow">{t("home.journey.eyebrow")}</div>
            <h2>{t("home.journey.title")}</h2>
            <p className="section-lead">{t("home.journey.lead")}</p>
          </div>
          <div className="journey-grid">
            {(
              [
                ["home.journey.1.k", "home.journey.1.t", "home.journey.1.d"],
                ["home.journey.2.k", "home.journey.2.t", "home.journey.2.d"],
                ["home.journey.3.k", "home.journey.3.t", "home.journey.3.d"],
                ["home.journey.4.k", "home.journey.4.t", "home.journey.4.d"],
              ] as const
            ).map(([k, title, d]) => (
              <article key={k}>
                <span>{t(k)}</span>
                <h3>{t(title)}</h3>
                <p>{t(d)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="results section-space" id="results">
        <div className="container">
          <div className="section-intro results-intro">
            <div className="eyebrow">{t("home.results.eyebrow")}</div>
            <h2>
              {t("home.results.title.1")}
              <br />
              {t("home.results.title.2")}
            </h2>
            <p className="section-lead">{t("home.results.lead")}</p>
          </div>
          <ResultsTimeline />
        </div>
      </section>

      <section className="pricing section-space" id="pricing">
        <div className="container">
          <div className="pricing-head pricing-head-centered">
            <div>
              <div className="eyebrow">{t("home.pricing.eyebrow")}</div>
              <h2>{t("home.pricing.title")}</h2>
              <p className="section-lead">{t("home.pricing.lead")}</p>
            </div>
          </div>
          <div className="plan-grid">
            <article className="plan-card">
              <div className="plan-top">
                <h3 className="plan-tier">{t("home.plan.starter")}</h3>
                <span className="plan-level">{t("home.plan.starter.level")}</span>
              </div>
              <p className="plan-summary">{t("home.plan.starter.summary")}</p>
              <div className="plan-price">
                <span>AED</span>
                <strong>2,500</strong>
                <small>{t("home.plan.month")}</small>
              </div>
              <OpenConsultationButton className="btn plan-cta">
                {t("cta.consultation")}
              </OpenConsultationButton>
              <div className="plan-includes">{t("home.plan.includes")}</div>
              <ul className="plan-list">
                {(
                  [
                    "home.feat.crm",
                    "home.feat.inbox",
                    "home.feat.forms",
                    "home.feat.booking",
                    "home.feat.tracking",
                    "home.feat.landing1",
                    "home.feat.email",
                    "home.feat.routing",
                    "home.feat.conn2",
                    "home.feat.loc1",
                  ] as const
                ).map((key) => (
                  <li key={key}>{t(key)}</li>
                ))}
              </ul>
              <div className="plan-footnote">{t("home.plan.starter.note")}</div>
            </article>

            <article className="plan-card featured-plan">
              <div className="popular-badge">{t("home.plan.popular")}</div>
              <div className="plan-top">
                <h3 className="plan-tier">{t("home.plan.pro")}</h3>
                <span className="plan-level">{t("home.plan.pro.level")}</span>
              </div>
              <p className="plan-summary">{t("home.plan.pro.summary")}</p>
              <div className="plan-price">
                <span>AED</span>
                <strong>3,500</strong>
                <small>{t("home.plan.month")}</small>
              </div>
              <OpenConsultationButton className="btn btn-light plan-cta">
                {t("cta.consultation")}
              </OpenConsultationButton>
              <div className="plan-includes">{t("home.plan.plusStarter")}</div>
              <ul className="plan-list">
                {(
                  [
                    "home.feat.wa",
                    "home.feat.landing3",
                    "home.feat.advRouting",
                    "home.feat.missed",
                    "home.feat.noshow",
                    "home.feat.quote",
                    "home.feat.reactivate",
                    "home.feat.social",
                    "home.feat.aiBasic",
                    "home.feat.conn5",
                  ] as const
                ).map((key) => (
                  <li key={key}>{t(key)}</li>
                ))}
              </ul>
              <div className="plan-footnote">{t("home.plan.pro.note")}</div>
            </article>

            <article className="plan-card">
              <div className="plan-top">
                <h3 className="plan-tier">{t("home.plan.elite")}</h3>
                <span className="plan-level">{t("home.plan.elite.level")}</span>
              </div>
              <p className="plan-summary">{t("home.plan.elite.summary")}</p>
              <div className="plan-price">
                <span>AED</span>
                <strong>5,000</strong>
                <small>{t("home.plan.month")}</small>
              </div>
              <OpenConsultationButton className="btn plan-cta">
                {t("cta.consultation")}
              </OpenConsultationButton>
              <div className="plan-includes">{t("home.plan.plusPro")}</div>
              <ul className="plan-list">
                {(
                  [
                    "home.feat.aiAdv",
                    "home.feat.aiQualify",
                    "home.feat.aiBook",
                    "home.feat.aiWa",
                    "home.feat.aiVoice",
                    "home.feat.aiMissed",
                    "home.feat.aiFollow",
                    "home.feat.landing5",
                    "home.feat.conn10",
                    "home.feat.loc3",
                  ] as const
                ).map((key) => (
                  <li key={key}>{t(key)}</li>
                ))}
              </ul>
              <div className="plan-footnote">{t("home.plan.elite.note")}</div>
            </article>
          </div>

          <div className="human-pricing-teaser interactive-surface motion-reveal">
            <div>
              <span className="mini-label">{t("home.teaser.label")}</span>
              <strong>{t("home.teaser.title")}</strong>
              <p>{t("home.teaser.copy")}</p>
            </div>
            <div
              className="human-price-pills"
              aria-label={t("home.teaser.plansAria")}
            >
              <span>
                <b>5K</b>
                <small>{t("home.plan.starter")}</small>
              </span>
              <span>
                <b>7.5K</b>
                <small>Pro</small>
              </span>
              <span>
                <b>10K</b>
                <small>{t("home.plan.elite")}</small>
              </span>
            </div>
            <Link
              className="btn btn-primary human-promo-cta"
              href="/human-agents#plans"
            >
              {t("home.teaser.cta")}
            </Link>
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

      <section className="final-cta section-space">
        <div className="container final-cta-box">
          <div>
            <div className="eyebrow light">{t("home.final.eyebrow")}</div>
            <h2>{t("home.final.title")}</h2>
          </div>
          <OpenConsultationButton className="btn btn-light">
            {t("cta.consultation")}
          </OpenConsultationButton>
        </div>
      </section>
    </main>
  );
}
