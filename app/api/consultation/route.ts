import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  let body: Record<string, unknown> = {};
  try {
    body = await req.json();
  } catch {
    body = {};
  }

  const clean = (value: unknown, max = 1000) =>
    typeof value === "string"
      ? value.replace(/[\u0000-\u001F\u007F]/g, " ").trim().slice(0, max)
      : "";

  const name = clean(body.name, 120);
  const company = clean(body.company, 160);
  const email = clean(body.email, 200).toLowerCase();
  const phone = clean(body.phone, 40);

  if (name.length < 2) {
    return NextResponse.json({ error: "Name is required." }, { status: 422 });
  }
  if (company.length < 2) {
    return NextResponse.json({ error: "Company is required." }, { status: 422 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "A valid email is required." },
      { status: 422 }
    );
  }
  if (phone && !/^[+0-9() .-]{7,20}$/.test(phone)) {
    return NextResponse.json(
      { error: "Phone format is invalid." },
      { status: 422 }
    );
  }

  const payload = {
    created_at: new Date().toISOString(),
    name,
    company,
    email,
    phone,
    volume: clean(body.volume, 60),
    sources: clean(body.sources, 200),
    bottleneck: clean(body.bottleneck, 1000),
    source_page: clean(body.source_page, 200),
  };

  const webhook = process.env.CONSULTATION_WEBHOOK_URL;

  if (!webhook) {
    return NextResponse.json(
      { error: "Consultation webhook is not configured." },
      { status: 503 }
    );
  }

  try {
    const webhookResponse = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!webhookResponse.ok) {
      return NextResponse.json(
        { error: "Lead delivery failed." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Lead delivery failed." },
      { status: 502 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed." },
    { status: 405, headers: { Allow: "POST" } }
  );
}
