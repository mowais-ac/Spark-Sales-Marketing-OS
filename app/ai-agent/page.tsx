import type { Metadata } from "next";
import { AiAgentPageContent } from "@/components/pages/AiAgentPageContent";

export const metadata: Metadata = {
  title: "Spark AI AI Agent | Instant Response, Qualification & Handoff",
  description:
    "Use AI for instant lead response, qualification, booking and follow-up, with configurable human handoff inside Spark AI Sales & Marketing OS.",
};

export default function AiAgentPage() {
  return <AiAgentPageContent />;
}
