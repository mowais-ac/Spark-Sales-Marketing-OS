import Link from "next/link";
import { OpenConsultationButton } from "./OpenConsultationButton";

type Props = {
  description: string;
};

export function SiteFooter({ description }: Props) {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/spark-ai-mark.png" alt="" aria-hidden="true" />
            <strong>SPARK AI</strong>
            <span>|</span>
            <b>SALES &amp; MARKETING OS</b>
          </div>
          <p>{description}</p>
        </div>
        <div>
          <strong>Platform</strong>
          <Link href="/#platform-features">Features</Link>
          <Link href="/#pricing">Pricing</Link>
        </div>
        <div>
          <strong>Solutions</strong>
          <Link href="/">Sales &amp; Marketing OS</Link>
          <Link href="/ai-agent">AI Agent</Link>
          <Link href="/human-agents">Human Agents</Link>
        </div>
        <div>
          <strong>Contact</strong>
          <OpenConsultationButton>
            Start Your Free Consultation
          </OpenConsultationButton>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Spark AI</span>
        <span>Dubai, UAE</span>
      </div>
    </footer>
  );
}
