import type { Metadata } from "next";
import { HomePageContent } from "@/components/pages/HomePageContent";

export const metadata: Metadata = {
  title: "Spark AI Sales & Marketing OS | Capture, Follow Up & Convert Leads",
  description:
    "Connect lead sources, WhatsApp, CRM, appointments, sales pipeline, automation and reporting inside one managed Sales & Marketing OS.",
};

export default function HomePage() {
  return <HomePageContent />;
}
