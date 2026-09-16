import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Spark AI Sales & Marketing OS | Capture, Follow Up & Convert Leads",
    template: "%s | Spark AI",
  },
  description:
    "Connect lead sources, WhatsApp, CRM, appointments, sales pipeline, automation and reporting inside one managed Sales & Marketing OS.",
  icons: {
    icon: "/spark-ai-mark.png",
  },
  openGraph: {
    type: "website",
    title: "Spark AI Sales & Marketing OS | Capture, Follow Up & Convert Leads",
    description:
      "Connect lead sources, WhatsApp, CRM, appointments, sales pipeline, automation and reporting inside one managed Sales & Marketing OS.",
  },
};

export const viewport: Viewport = {
  themeColor: "#111111",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
