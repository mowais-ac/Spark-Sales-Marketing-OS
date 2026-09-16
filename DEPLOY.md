# Deployment Guide

## Recommended: Vercel

1. Push this project to GitHub, or import the folder directly into Vercel.
2. In Vercel, use the **Next.js** framework preset (auto-detected).
3. Add environment variable:
   - `CONSULTATION_WEBHOOK_URL`
4. Deploy.

The website itself deploys without the environment variable. The consultation form will show its existing WhatsApp fallback until a webhook is configured.

Security headers and legacy URL redirects are configured in `next.config.ts`.

## What the webhook receives

```json
{
  "created_at": "ISO timestamp",
  "name": "Visitor name",
  "company": "Company",
  "email": "Email",
  "phone": "Phone / WhatsApp",
  "volume": "Lead volume",
  "sources": "Lead sources",
  "bottleneck": "Visitor notes",
  "source_page": "/"
}
```

You can point `CONSULTATION_WEBHOOK_URL` to Make, Zapier, n8n, your CRM, or your own backend endpoint.

## Local development

Node 18+:

```bash
npm install
npm run dev
```

Then open:

`http://localhost:3000`

## Production build check

```bash
npm run build
npm run start
```

## Main routes

- `/` — Sales & Marketing OS
- `/ai-agent` — AI Agent
- `/human-agents` — Human Agents
- `POST /api/consultation` — consultation lead endpoint

## Netlify

Vercel is the primary target because the consultation API uses a Next.js App Router route handler. If you deploy elsewhere, ensure Next.js server/runtime support is enabled for `/api/consultation`.

## Domain

After deployment, connect your production domain inside Vercel DNS settings.
