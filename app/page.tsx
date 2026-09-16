import Link from "next/link";
import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { OpenConsultationButton } from "@/components/OpenConsultationButton";
import { ActionEngine } from "@/components/home/ActionEngine";
import { DashboardDemo } from "@/components/home/DashboardDemo";
import { ResultsTimeline } from "@/components/home/ResultsTimeline";

export const metadata: Metadata = {
  title: "Spark AI Sales & Marketing OS | Capture, Follow Up & Convert Leads",
  description:
    "Connect lead sources, WhatsApp, CRM, appointments, sales pipeline, automation and reporting inside one managed Sales & Marketing OS.",
};

export default function HomePage() {
  return (
    <PageShell
      bodyClass="home-page"
      sectionNav
      headerCtaHref="/human-agents"
      headerCtaLabel="Human Agents"
      footerDescription="One connected system for lead capture, conversations, follow-up, pipeline management and customer communication."
      modal={{
        title: "Where are leads getting lost today?",
        description:
          "Tell us about your current setup. We’ll map the gaps before recommending the system.",
        bottleneckLabel: "Where are leads getting lost?",
        bottleneckPlaceholder:
          "Follow-up, lead assignment, appointments, pipeline, reporting...",
        footerNote: "We start with your actual process, not a generic package.",
        showExtraFields: true,
      }}
    >
      <main id="top">
        <section className="hero section-space">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow" data-i18n="eyebrow">
                Sales & Marketing OS
              </div>
              <p className="hero-kicker" data-i18n="heroKicker">
                Leads get lost when marketing and sales work in separate places.
              </p>
              <h1 data-i18n="heroTitle">
                From First Enquiry to Final Follow-Up, Keep Every Opportunity
                Moving in the Right Direction.
              </h1>
              <p className="hero-lead" data-i18n="heroLead">
                Connect your channels, CRM, conversations, appointments and sales
                pipeline in one managed system.
              </p>
              <p className="hero-proof" data-i18n="heroProof">
                Capture. Respond. Follow up. Convert.
              </p>
              <OpenConsultationButton className="btn btn-dark hero-cta">
                Start Your Free Consultation
              </OpenConsultationButton>
            </div>
            <ActionEngine />
          </div>
        </section>

        <section
          className="dashboard-section section-space dark-section"
          id="platform"
        >
          <div className="container">
            <div className="section-intro dark-intro">
              <div className="eyebrow light">See It In Action</div>
              <h2>See the system in action.</h2>
              <p className="section-lead light-copy">
                Click through the platform to see how leads, conversations,
                appointments, automation and pipeline activity work together.
              </p>
            </div>
            <DashboardDemo />
          </div>
        </section>

        <section
          className="lead-sources-banner"
          id="lead-sources"
          aria-label="Lead Sources We Can Connect"
        >
          <div className="container">
            <div className="lead-banner-shell">
              <div className="lead-banner-copy">
                <span className="eyebrow">Lead Sources We Can Connect</span>
                <strong>Bring every enquiry into one flow.</strong>
              </div>
              <div
                className="lead-banner-icons"
                aria-label="Connected lead sources"
              >
                <div className="lead-banner-item" title="WhatsApp">
                  <span>
                    <i className="fa-brands fa-whatsapp" aria-hidden="true" />
                  </span>
                  <b>WhatsApp</b>
                </div>
                <div className="lead-banner-item" title="Instagram">
                  <span>
                    <i className="fa-brands fa-instagram" aria-hidden="true" />
                  </span>
                  <b>Instagram</b>
                </div>
                <div className="lead-banner-item" title="Phone">
                  <span>
                    <i className="fa-solid fa-phone" aria-hidden="true" />
                  </span>
                  <b>Phone</b>
                </div>
                <div className="lead-banner-item" title="Paid Ads">
                  <span className="brand-pair">
                    <i className="fa-brands fa-google" aria-hidden="true" />
                    <i className="fa-brands fa-facebook-f" aria-hidden="true" />
                  </span>
                  <b>Paid Ads</b>
                </div>
                <div className="lead-banner-item" title="Web Forms">
                  <span>
                    <i className="fa-solid fa-file-lines" aria-hidden="true" />
                  </span>
                  <b>Web Forms</b>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="fragmentation section-space" id="solutions">
          <div className="container">
            <div className="section-intro wide">
              <div className="eyebrow">The real problem</div>
              <h2>
                The problem isn’t getting leads. It’s what happens after they
                arrive.
              </h2>
              <p className="statement">
                See the difference between fragmented follow-up and one connected
                sales journey.
              </p>
            </div>
            <div className="compare-grid">
              <article className="compare-panel bad-panel">
                <div className="panel-label">Fragmented today</div>
                <ul>
                  <li>Leads in different inboxes</li>
                  <li>Slow or missed replies</li>
                  <li>Manual follow-up</li>
                  <li>Deals hidden in spreadsheets</li>
                  <li>No shared customer history</li>
                  <li>Marketing and sales disconnected</li>
                </ul>
              </article>
              <article className="compare-panel good-panel">
                <div className="panel-label">With Sales & Marketing OS</div>
                <ul>
                  <li>Every lead in one platform</li>
                  <li>Instant lead routing</li>
                  <li>Automated follow-up</li>
                  <li>Visible sales pipeline</li>
                  <li>One customer history</li>
                  <li>Campaigns linked to sales</li>
                </ul>
              </article>
            </div>
            <OpenConsultationButton className="btn btn-dark section-cta">
              Find Your Lead Gaps
            </OpenConsultationButton>
          </div>
        </section>

        <section className="features section-space" id="platform-features">
          <div className="container">
            <div className="section-intro platform-modules-intro">
              <div className="eyebrow">Platform Modules</div>
              <h2>Everything your team needs to move opportunities forward.</h2>
              <p className="section-lead">
                Ten connected modules working together across every stage of the
                customer journey.
              </p>
            </div>
            <div className="feature-grid">
              <article className="feature-card">
                <span>01</span>
                <h3>Unified CRM</h3>
                <p>Every lead and deal in one record.</p>
              </article>
              <article className="feature-card">
                <span>02</span>
                <h3>Unified Communications Inbox</h3>
                <p>All customer conversations in one inbox.</p>
              </article>
              <article className="feature-card">
                <span>03</span>
                <h3>Sales Pipeline</h3>
                <p>Track every deal and next step.</p>
              </article>
              <article className="feature-card">
                <span>04</span>
                <h3>Marketing Automation</h3>
                <p>Automate routing, nurture and reactivation.</p>
              </article>
              <article className="feature-card">
                <span>05</span>
                <h3>WhatsApp Automation</h3>
                <p>Route, reply and follow up automatically.</p>
              </article>
              <article className="feature-card">
                <span>06</span>
                <h3>Appointment Management</h3>
                <p>Booking, reminders and no-show recovery.</p>
              </article>
              <article className="feature-card">
                <span>07</span>
                <h3>Landing Pages &amp; Forms</h3>
                <p>Connected pages, forms and source tracking.</p>
              </article>
              <article className="feature-card">
                <span>08</span>
                <h3>Reputation Management</h3>
                <p>Automate reviews and post-sale follow-up.</p>
              </article>
              <article className="feature-card">
                <span>09</span>
                <h3>Reporting</h3>
                <p>See channels, pipeline and conversion.</p>
              </article>
              <Link className="feature-card feature-link" href="/ai-agent">
                <span>10</span>
                <h3>AI Assistance</h3>
                <p>Qualify, reply, book and hand off to humans.</p>
                <b>Explore AI Agent →</b>
              </Link>
            </div>
          </div>
        </section>

        <section className="journey section-space" id="journey">
          <div className="container">
            <div className="section-intro">
              <div className="eyebrow">How It Works</div>
              <h2>Attract. Capture. Convert. Retain.</h2>
              <p className="section-lead">
                Four connected stages. One customer history.
              </p>
            </div>
            <div className="journey-grid">
              <article>
                <span>01 / ATTRACT</span>
                <h3>Create demand.</h3>
                <p>Ads · SEO · Social · Content</p>
              </article>
              <article>
                <span>02 / CAPTURE</span>
                <h3>Own every lead.</h3>
                <p>Pages · Forms · WhatsApp · Calls</p>
              </article>
              <article>
                <span>03 / CONVERT</span>
                <h3>Move opportunities.</h3>
                <p>Qualify · Follow up · Book · Close</p>
              </article>
              <article>
                <span>04 / RETAIN</span>
                <h3>Stay relevant.</h3>
                <p>Retarget · Reviews · Reactivate · Nurture</p>
              </article>
            </div>
          </div>
        </section>

        <section className="results section-space" id="results">
          <div className="container">
            <div className="section-intro results-intro">
              <div className="eyebrow">Evident Progress in 4 Weeks</div>
              <h2>
                We Don’t Get Paid for Activity.
                <br />
                We Get Paid for Outcomes.
              </h2>
              <p className="section-lead">
                A focused four-week rollout designed to connect the journey,
                activate the system and make progress visible.
              </p>
            </div>
            <ResultsTimeline />
          </div>
        </section>

        <section className="pricing section-space" id="pricing">
          <div className="container">
            <div className="pricing-head pricing-head-centered">
              <div>
                <div className="eyebrow">Simple pricing</div>
                <h2>Choose the plan that fits your team.</h2>
                <p className="section-lead">
                  Start with the core system. Add automation and AI as your sales
                  process grows.
                </p>
              </div>
            </div>
            <div className="plan-grid">
              <article className="plan-card">
                <div className="plan-top">
                  <h3 className="plan-tier">Starter</h3>
                  <span className="plan-level">Foundation</span>
                </div>
                <p className="plan-summary">
                  The essentials to capture, organize and follow up every lead.
                </p>
                <div className="plan-price">
                  <span>AED</span>
                  <strong>2,500</strong>
                  <small>/ month</small>
                </div>
                <OpenConsultationButton className="btn plan-cta">
                  Start Your Free Consultation
                </OpenConsultationButton>
                <div className="plan-includes">Includes</div>
                <ul className="plan-list">
                  <li>CRM &amp; sales pipeline</li>
                  <li>Unified conversations inbox</li>
                  <li>Forms &amp; lead capture</li>
                  <li>Appointment booking</li>
                  <li>Lead source tracking</li>
                  <li>1 landing page / funnel</li>
                  <li>Email nurture &amp; speed-to-lead</li>
                  <li>Basic routing &amp; reporting</li>
                  <li>2 lead connectors</li>
                  <li>1 location</li>
                </ul>
                <div className="plan-footnote">
                  WhatsApp available as an add-on.
                </div>
              </article>
              <article className="plan-card featured-plan">
                <div className="popular-badge">MOST POPULAR</div>
                <div className="plan-top">
                  <h3 className="plan-tier">Professional</h3>
                  <span className="plan-level">Recommended</span>
                </div>
                <p className="plan-summary">
                  For teams that want stronger automation, recovery and
                  conversion workflows.
                </p>
                <div className="plan-price">
                  <span>AED</span>
                  <strong>3,500</strong>
                  <small>/ month</small>
                </div>
                <OpenConsultationButton className="btn btn-light plan-cta">
                  Start Your Free Consultation
                </OpenConsultationButton>
                <div className="plan-includes">Everything in Starter, plus</div>
                <ul className="plan-list">
                  <li>WhatsApp integration</li>
                  <li>Up to 3 landing pages / funnels</li>
                  <li>Advanced lead routing</li>
                  <li>Missed-call recovery</li>
                  <li>No-show recovery</li>
                  <li>Quote / proposal follow-up</li>
                  <li>Database reactivation</li>
                  <li>Social media planner</li>
                  <li>Conversation AI — Basic</li>
                  <li>5 lead connectors</li>
                </ul>
                <div className="plan-footnote">
                  Best fit for most growing sales teams.
                </div>
              </article>
              <article className="plan-card">
                <div className="plan-top">
                  <h3 className="plan-tier">Elite</h3>
                  <span className="plan-level">Advanced AI</span>
                </div>
                <p className="plan-summary">
                  Advanced AI agents and automation across the full sales journey.
                </p>
                <div className="plan-price">
                  <span>AED</span>
                  <strong>5,000</strong>
                  <small>/ month</small>
                </div>
                <OpenConsultationButton className="btn plan-cta">
                  Start Your Free Consultation
                </OpenConsultationButton>
                <div className="plan-includes">
                  Everything in Professional, plus
                </div>
                <ul className="plan-list">
                  <li>Conversation AI — Advanced</li>
                  <li>AI lead qualification</li>
                  <li>AI appointment booking</li>
                  <li>AI WhatsApp sales agent</li>
                  <li>AI voice receptionist / sales agent</li>
                  <li>AI missed-lead recovery</li>
                  <li>AI follow-up &amp; reactivation</li>
                  <li>Up to 5 landing pages / funnels</li>
                  <li>10 lead connectors</li>
                  <li>Up to 3 locations*</li>
                </ul>
                <div className="plan-footnote">
                  Built for high-volume and multi-location teams.
                </div>
              </article>
            </div>

            <div className="human-pricing-teaser interactive-surface motion-reveal">
              <div>
                <span className="mini-label">NEED THE TEAM TOO?</span>
                <strong>Add Human Agents to the platform.</strong>
                <p>
                  Add strategy, campaigns, creative, CRM support and appointment
                  setting around the same OS.
                </p>
              </div>
              <div
                className="human-price-pills"
                aria-label="Human Agents plan pricing"
              >
                <span>
                  <b>5K</b>
                  <small>Starter</small>
                </span>
                <span>
                  <b>7.5K</b>
                  <small>Pro</small>
                </span>
                <span>
                  <b>10K</b>
                  <small>Elite</small>
                </span>
              </div>
              <Link
                className="btn btn-primary human-promo-cta"
                href="/human-agents#plans"
              >
                Compare Human Agent Plans
              </Link>
            </div>

            <div className="pricing-details premium-details">
              <details>
                <summary>
                  <span>Usage &amp; Add-On Charges</span>
                  <b>View rates +</b>
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
                      <tr>
                        <td>WhatsApp UAE — Marketing</td>
                        <td>AED 0.290 / delivered msg</td>
                        <td>Provider service-window rules apply.</td>
                      </tr>
                      <tr>
                        <td>WhatsApp UAE — Utility</td>
                        <td>AED 0.090 / delivered msg</td>
                        <td>
                          Outside applicable free customer-service window.
                        </td>
                      </tr>
                      <tr>
                        <td>Email sending</td>
                        <td>AED 3.72 / 1,000</td>
                        <td>
                          Incoming, outgoing and forwarded email events may be
                          billable.
                        </td>
                      </tr>
                      <tr>
                        <td>Email verification</td>
                        <td>AED 13.77 / 1,000</td>
                        <td>Optional.</td>
                      </tr>
                      <tr>
                        <td>Premium workflow execution</td>
                        <td>AED 0.060 / execution</td>
                        <td>
                          When not covered by a Workflow Pro allowance.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </details>
              <details>
                <summary>
                  <span>Optional Platform Add-Ons</span>
                  <b>View add-ons +</b>
                </summary>
                <div className="addon-cards">
                  <div>
                    <span>Dedicated email IP</span>
                    <strong>AED 325.02</strong>
                    <small>/ month</small>
                  </div>
                  <div>
                    <span>Online Listings</span>
                    <strong>AED 165.26</strong>
                    <small>/ month</small>
                  </div>
                  <div>
                    <span>Prospecting Tool</span>
                    <strong>AED 159.75</strong>
                    <small>/ month</small>
                  </div>
                  <div>
                    <span>SEO — Search Atlas</span>
                    <strong>AED 435.19</strong>
                    <small>/ month</small>
                  </div>
                  <div>
                    <span>Workflow Pro — Starter</span>
                    <strong>AED 55.09</strong>
                    <small>/ month</small>
                  </div>
                  <div>
                    <span>Workflow Pro — Growth</span>
                    <strong>AED 137.72</strong>
                    <small>/ month</small>
                  </div>
                  <div>
                    <span>Workflow Pro — Scale</span>
                    <strong>AED 275.44</strong>
                    <small>/ month</small>
                  </div>
                </div>
              </details>
              <details>
                <summary>
                  <span>Telephony, SMS &amp; Commercial Rules</span>
                  <b>Read terms +</b>
                </summary>
                <div className="commercial commercial-grid">
                  <p>
                    <strong>Telephony &amp; SMS</strong>
                    <br />
                    Phone numbers, calls, SMS/MMS and carrier fees vary by
                    country, destination and number type. Live provider rates
                    apply.
                  </p>
                  <p>
                    <strong>Usage billing</strong>
                    <br />
                    Usage-based services and paid add-ons are billed separately
                    unless explicitly included in a signed proposal.
                  </p>
                  <p>
                    <strong>Third-party costs</strong>
                    <br />
                    External apps, AI models, domains, payment processing, ad
                    spend and custom APIs are excluded unless quoted.
                  </p>
                  <p>
                    <strong>Provider pricing</strong>
                    <br />
                    Underlying provider rates can change. We confirm live rates
                    before the final quotation.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>

        <section className="final-cta section-space">
          <div className="container final-cta-box">
            <div>
              <div className="eyebrow light">Start with the gaps</div>
              <h2>Find where your leads are getting lost.</h2>
            </div>
            <OpenConsultationButton className="btn btn-light">
              Start Your Free Consultation
            </OpenConsultationButton>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
