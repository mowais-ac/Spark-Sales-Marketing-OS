import type { Metadata } from "next";
import { HumanAgentsPageContent } from "@/components/pages/HumanAgentsPageContent";

export const metadata: Metadata = {
  title: "Spark AI Human Agents | AI + Human Growth Team",
  description:
    "Add a coordinated AI + human growth team for performance marketing, SEO, design, video, social media, CRM, appointment setting and data support.",
};

export default function HumanAgentsPage() {
  return <HumanAgentsPageContent />;
}
