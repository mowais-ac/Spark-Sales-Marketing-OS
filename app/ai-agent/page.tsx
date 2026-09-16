import Link from "next/link";
import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { OpenConsultationButton } from "@/components/OpenConsultationButton";

export const metadata: Metadata = {
  title: "Spark AI AI Agent | Instant Response, Qualification & Handoff",
  description:
    "Use AI for instant lead response, qualification, booking and follow-up, with configurable human handoff inside Spark AI Sales & Marketing OS.",
  openGraph: {
    title: "Spark AI AI Agent | Instant Response, Qualification & Handoff",
    description:
      "Use AI for instant lead response, qualification, booking and follow-up, with configurable human handoff inside Spark AI Sales & Marketing OS.",
  },
};

export default function AiAgentPage() {
  return (
    <PageShell
      bodyClass="ai-agent-page"
      headerCtaHref="/human-agents"
      headerCtaLabel="Human Agents"
      footerDescription="Sales & Marketing OS with AI Agent and human handoff."
      modal={{
        title: "Tell us how your team handles leads today.",
        description:
          "We’ll map where the AI Agent fits and where human handoffs should happen.",
        bottleneckLabel: "What should the AI Agent handle?",
        bottleneckPlaceholder:
          "Qualification, booking, WhatsApp, follow-up, human handoff...",
        footerNote: "We configure the handoff around your sales process.",
      }}
    >
      <main>
        <section className="agent-hero section-space">
          <div className="container agent-hero-grid">
            <div>
              <div className="eyebrow">AI Agent</div>
              <h1>One AI Agent. Every lead. Every handoff.</h1>
              <p className="hero-lead">
                Respond instantly, qualify enquiries, book appointments and follow
                up automatically — then hand the same conversation to a human when
                judgment, negotiation or relationship-building matters.
              </p>
              <div className="agent-actions">
                <OpenConsultationButton className="btn btn-dark">
                  Start Your Free Consultation
                </OpenConsultationButton>
                <Link className="btn" href="/#platform-features">
                  See Sales & Marketing OS
                </Link>
              </div>
            </div>
            <div className="agent-conversation">
              <div className="agent-top">
                <span>LIVE CONVERSATION</span>
                <b>AI + HUMAN</b>
              </div>
              <div className="agent-bubble customer">
                Hi, I’m interested. Can someone explain the pricing and process?
              </div>
              <div className="agent-bubble ai">
                Absolutely. I can help with the setup first. How many leads do you
                currently receive each month?
              </div>
              <div className="agent-bubble customer">
                Around 700. We also need multiple salespeople to use it.
              </div>
              <div className="handoff-note">
                High-value / complex enquiry detected → hand off to sales
              </div>
              <div className="agent-bubble human">
                Hi, I’ve joined the conversation. I can walk you through the team
                setup and commercial options.
              </div>
            </div>
          </div>
        </section>

        <section className="section-space dark-section">
          <div className="container">
            <div className="section-intro dark-intro">
              <div className="eyebrow light">One conversation layer</div>
              <h2>AI when speed matters. Human when judgment matters.</h2>
            </div>
            <div className="agent-cap-grid">
              <article>
                <span>01</span>
                <h3>Respond</h3>
                <p>
                  Respond quickly to incoming enquiries across connected channels.
                </p>
              </article>
              <article>
                <span>02</span>
                <h3>Qualify</h3>
                <p>
                  Ask the right questions and collect the information your sales
                  team needs.
                </p>
              </article>
              <article>
                <span>03</span>
                <h3>Book</h3>
                <p>
                  Move qualified conversations directly into appointment booking.
                </p>
              </article>
              <article>
                <span>04</span>
                <h3>Follow Up</h3>
                <p>
                  Continue approved follow-up sequences when prospects go quiet.
                </p>
              </article>
              <article>
                <span>05</span>
                <h3>Hand Off</h3>
                <p>
                  Hand the same conversation to a person when human judgment is
                  needed.
                </p>
              </article>
              <article>
                <span>06</span>
                <h3>Resume</h3>
                <p>
                  Return routine reminders and follow-up to automation after the
                  human handoff.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="container">
            <div className="section-intro">
              <div className="eyebrow">Human handoff</div>
              <h2>
                You decide when the AI Agent should stop and a person should take
                over.
              </h2>
            </div>
            <div className="trigger-list">
              <span>Customer requests a human</span>
              <span>High lead score</span>
              <span>Pricing negotiation</span>
              <span>Enterprise enquiry</span>
              <span>Negative sentiment</span>
              <span>Low AI confidence</span>
              <span>VIP / existing customer</span>
              <span>Deal value threshold</span>
            </div>
          </div>
        </section>

        <section className="agent-human-promo section-space">
          <div className="container">
            <div className="agent-human-shell interactive-surface motion-reveal">
              <div>
                <div className="eyebrow">Need people behind the AI?</div>
                <h2>Pair AI Agent with Human Agents.</h2>
                <p className="section-lead">
                  AI keeps responses and follow-up moving. Human specialists step
                  in for strategy, negotiation, campaigns and relationship work.
                </p>
              </div>
              <div className="agent-human-roles">
                <span>Growth Manager</span>
                <span>Performance</span>
                <span>CRM</span>
                <span>Appointments</span>
              </div>
              <Link className="btn btn-primary human-promo-cta" href="/human-agents">
                Meet Human Agents
              </Link>
            </div>
          </div>
        </section>

        <section className="final-cta section-space">
          <div className="container final-cta-box">
            <div>
              <div className="eyebrow light">Connect AI Agent</div>
              <h2>
                Add instant response and human handoff to your Sales & Marketing
                OS.
              </h2>
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
