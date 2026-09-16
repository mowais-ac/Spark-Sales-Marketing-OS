import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      { source: "/ai-agents", destination: "/ai-agent", permanent: true },
      { source: "/ai-agents.html", destination: "/ai-agent", permanent: true },
      { source: "/human-bot", destination: "/ai-agent", permanent: true },
      { source: "/human-bot.html", destination: "/ai-agent", permanent: true },
      { source: "/ai-agent.html", destination: "/ai-agent", permanent: true },
      { source: "/ai-growth-os", destination: "/", permanent: true },
      { source: "/ai-growth-os.html", destination: "/", permanent: true },
      { source: "/ai-sales-os", destination: "/", permanent: true },
      { source: "/ai-sales-os.html", destination: "/", permanent: true },
      { source: "/revenue-os", destination: "/", permanent: true },
      { source: "/revenue-os.html", destination: "/", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/growth-pod", destination: "/human-agents", permanent: true },
      { source: "/growth-pod.html", destination: "/human-agents", permanent: true },
      {
        source: "/human-agents.html",
        destination: "/human-agents",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
