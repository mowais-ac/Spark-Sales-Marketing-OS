import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { OpenConsultationButton } from "@/components/OpenConsultationButton";
import { HiringCalculator } from "@/components/human-agents/HiringCalculator";
import { HumanRoleSpotlight } from "@/components/human-agents/HumanRoleSpotlight";

export const metadata: Metadata = {
  title: "Spark AI Human Agents | AI + Human Growth Team",
  description:
    "Add a coordinated AI + human growth team for performance marketing, SEO, design, video, social media, CRM, appointment setting and data support.",
  openGraph: {
    title: "Spark AI Human Agents | AI + Human Growth Team",
    description:
      "Add a coordinated AI + human growth team for performance marketing, SEO, design, video, social media, CRM, appointment setting and data support.",
  },
};

export default function HumanAgentsPage() {
  return (
    <PageShell
      bodyClass="human-agents-page"
      headerCtaHref="/"
      headerCtaLabel="Sales & Marketing OS"
      footerDescription="Sales & Marketing OS with a coordinated AI + Human Growth Team."
      modal={{
        title: "What support does your growth team need?",
        description:
          "Tell us what you manage today and where you need additional support.",
        bottleneckLabel: "What support do you need?",
        bottleneckPlaceholder:
          "Performance marketing, SEO, creative, CRM, appointment setting...",
        footerNote:
          "We’ll recommend the right Sales & Marketing OS + Human Agents plan.",
      }}
    >
      <main>
        <section className="subhero human-hero">
          <div className="container">
            <div className="eyebrow">AI + HUMAN GROWTH TEAM</div>
            <h1 className="h1">
              Meet the team
              <br />
              you don’t have to hire.
            </h1>
            <p className="lead">
              One coordinated growth team for marketing, automation, content, lead
              follow-up and customer conversion.
            </p>
            <div className="actions">
              <a className="btn btn-dark" href="#plans">
                See Plans
              </a>
              <OpenConsultationButton className="btn">
                Start Your Free Consultation
              </OpenConsultationButton>
            </div>
          </div>
        </section>

        <section
          className="human-spotlight section-space"
          aria-labelledby="humanSpotlightTitle"
        >
          <div className="container">
            <HumanRoleSpotlight />
          </div>
        </section>

        <HiringCalculator />

        <section className="section dark">
          <div className="container">
            <div className="eyebrow">ONE COORDINATED INFRASTRUCTURE</div>
            <h2 className="h2">
              Put one growth team at the center of your business.
            </h2>
            <div className="growth-stack">
              <div className="growth-core-card">
                <span>SPARK AI</span>
                <strong>
                  AI + HUMAN
                  <br />
                  GROWTH TEAM
                </strong>
                <small>One coordinated growth infrastructure</small>
              </div>
              <div className="growth-role-grid">
                <div>
                  <b>01</b>
                  <span>Sales &amp; Marketing OS</span>
                </div>
                <div>
                  <b>02</b>
                  <span>AI Agents</span>
                </div>
                <div>
                  <b>03</b>
                  <span>Growth Manager</span>
                </div>
                <div>
                  <b>04</b>
                  <span>Performance Marketer</span>
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
                  <span>Appointment Setter</span>
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
            <div className="eyebrow">AI + HUMAN</div>
            <div className="ai-human-head">
              <h2 className="h2">
                AI does the volume.
                <br />
                Humans do the thinking.
              </h2>
              <p>
                Automation where machines are better. Human judgment where it
                matters.
              </p>
            </div>
            <div className="ai-human-grid">
              <article>
                <h3>AI</h3>
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
                <h3>Human</h3>
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
          aria-label="AI and Human Agents working together"
        >
          <div className="container">
            <a
              className="handoff-promo-shell interactive-surface motion-reveal"
              href="#team"
            >
              <div className="handoff-promo-copy">
                <span className="eyebrow">System + Human Agents</span>
                <h3>AI handles volume. Human Agents handle judgment.</h3>
                <p>One CRM. One customer history. No disconnected handoffs.</p>
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
              <b>Meet the Team →</b>
            </a>
          </div>
        </section>

        <section className="growth-team section-space dark-section" id="growth-team">
          <div className="container growth-grid">
            <div>
              <div className="eyebrow light">Growth Team</div>
              <h2>
                Support your platform with people who understand the entire
                funnel.
              </h2>
              <p className="section-lead light-copy">
                Add a managed execution layer around the Sales & Marketing OS when
                you need strategy, campaigns, creative, CRM oversight or sales
                support — without splitting ownership across disconnected vendors.
              </p>
              <a className="text-link light-link" href="#team">
                Meet the Team →
              </a>
            </div>
            <div className="team-list">
              <div>
                <strong>Strategy &amp; funnel ownership</strong>
                <span>Customer journey, offers, campaigns and priorities.</span>
              </div>
              <div>
                <strong>Performance marketing</strong>
                <span>
                  Campaign setup, optimization and acquisition support.
                </span>
              </div>
              <div>
                <strong>Creative &amp; content</strong>
                <span>
                  Ad creative, landing page content and campaign assets.
                </span>
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
            <div className="eyebrow">MEET THE TEAM</div>
            <h2 className="h2">The specialists behind your growth.</h2>
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
                <h3>CRM &amp; Automation Expert</h3>
                <p>
                  Builds funnels, pipelines, automations, routing and
                  integrations.
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
                <h3>Appointment Setter</h3>
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

        <section className="section">
          <div className="container">
            <div className="eyebrow">BEFORE / AFTER</div>
            <h2 className="h2">
              From fragmented
              <br />
              to connected.
            </h2>
            <div className="before-after-grid">
              <div className="before-card">
                <h3>Before</h3>
                <ol>
                  <li>Freelancers</li>
                  <li>Random posts</li>
                  <li>Disconnected tools</li>
                  <li>Slow responses</li>
                  <li>Manual follow-up</li>
                  <li>No CRM discipline</li>
                  <li>No attribution</li>
                  <li>Founder coordinating everyone</li>
                </ol>
              </div>
              <div className="after-card">
                <h3>After</h3>
                <ol>
                  <li>Integrated growth pod</li>
                  <li>Content system</li>
                  <li>Sales &amp; Marketing OS</li>
                  <li>Instant response</li>
                  <li>Automated follow-up</li>
                  <li>Managed pipeline</li>
                  <li>Conversion tracking</li>
                  <li>Growth Manager coordinates execution</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="section pricing-human" id="plans">
          <div className="container">
            <div className="eyebrow">PLANS</div>
            <p className="lead">
              Sales & Marketing OS + Human Agents. No need to build an in-house
              marketing department.
            </p>
            <div className="plan-grid human-plan-grid">
              <article className="plan-card">
                <div className="plan-top">
                  <h3 className="plan-tier">STARTER + HUMAN AGENTS</h3>
                  <span className="plan-level">Essential Team</span>
                </div>
                <div className="plan-price">
                  <span>AED</span>
                  <strong>5,000</strong>
                  <small>/ month</small>
                </div>
                <ul className="plan-list">
                  <li>Sales & Marketing OS</li>
                  <li>Growth Manager</li>
                  <li>Performance Marketing</li>
                  <li>Design Support</li>
                  <li>CRM &amp; Automation</li>
                  <li>Monthly Optimization</li>
                </ul>
                <OpenConsultationButton className="btn plan-cta">
                  Start Your Free Consultation
                </OpenConsultationButton>
              </article>
              <article className="plan-card featured-plan">
                <div className="popular-badge">MOST POPULAR</div>
                <div className="plan-top">
                  <h3 className="plan-tier">PRO + HUMAN AGENTS</h3>
                  <span className="plan-level">Full Growth Team</span>
                </div>
                <div className="plan-price">
                  <span>AED</span>
                  <strong>7,500</strong>
                  <small>/ month</small>
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
                  Start Your Free Consultation
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
                  <small>/ month</small>
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
                  Start Your Free Consultation
                </OpenConsultationButton>
              </article>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container">
            <div className="cta-box green-cta">
              <div>
                <div className="eyebrow">READY TO BUILD THE TEAM?</div>
                <h2 className="h2">
                  One team. One system. One growth direction.
                </h2>
              </div>
              <OpenConsultationButton className="btn btn-light">
                Start Your Free Consultation
              </OpenConsultationButton>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
