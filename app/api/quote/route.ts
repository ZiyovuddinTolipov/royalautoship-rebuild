import { NextResponse } from "next/server";

type QuotePayload = {
  from: string;
  to: string;
  transport: string;
  vehicleType: string;
  year: string;
  make: string;
  model: string;
  running: string;
  date: string;
  name: string;
  phone: string;
  email: string;
};

const REQUIRED: (keyof QuotePayload)[] = [
  "from",
  "to",
  "transport",
  "year",
  "make",
  "model",
  "running",
  "date",
  "name",
  "phone",
  "email",
];

export async function POST(request: Request) {
  let body: Partial<QuotePayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const missing = REQUIRED.filter((k) => !body[k]?.toString().trim());
  if (missing.length) {
    return NextResponse.json(
      { error: `Missing fields: ${missing.join(", ")}` },
      { status: 400 },
    );
  }

  // TODO Phase 2: forward to CRM / email (Resend) instead of logging
  console.log("📨 Quote request:", JSON.stringify(body));

  return NextResponse.json({ ok: true });
}
