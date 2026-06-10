import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

interface Vehicle {
  vehicleYear: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleCondition: boolean;
  transportType: string;
}

interface LeadPayload {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  pickupZip?: string;
  pickupCity?: string;
  pickupState?: string;
  deliveryZip?: string;
  deliveryCity?: string;
  deliveryState?: string;
  pickupDate?: string;
  specialInstructions?: string;
  vehicles?: Vehicle[];
  pagePath?: string;
}

interface RateLimitRecord { count: number; resetTime: number }
const rateLimitStore = new Map<string, RateLimitRecord>();

function checkRate(ip: string): boolean {
  const now = Date.now();
  const max = 20;
  const window = 60 * 60 * 1000;
  const rec = rateLimitStore.get(ip);
  if (!rec || now > rec.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + window });
    return true;
  }
  if (rec.count >= max) return false;
  rec.count++;
  return true;
}

async function sendTelegram(token: string, chatId: string, text: string, threadId?: string) {
  if (!token || !chatId) return;
  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        message_thread_id: threadId ? Number(threadId) : undefined,
        text,
        parse_mode: "HTML",
      }),
    });
  } catch (e) {
    console.error("Telegram error:", e);
  }
}

async function sendToCarLink(lead: LeadPayload): Promise<{ ok: boolean; status?: number }> {
  const lpKey = process.env.CARLINK_LP_KEY;
  if (!lpKey) {
    console.warn("CARLINK_LP_KEY not set — skipping provider submit");
    return { ok: false };
  }

  let shipVia = 0;
  if (lead.vehicles?.[0]?.transportType === "enclosed") shipVia = 1;
  else if (lead.vehicles?.[0]?.transportType === "driveaway") shipVia = 2;

  const vehicles = (lead.vehicles ?? []).map((v) => {
    let type = "CAR";
    const model = (v.vehicleModel ?? "").toLowerCase();
    const make = (v.vehicleMake ?? "").toLowerCase();
    if (model.includes("suv") || model.includes("x3") || model.includes("x5") || model.includes("crv") || model.includes("rav4")) type = "SUV";
    else if (model.includes("truck") || model.includes("f150") || model.includes("f-150") || model.includes("pickup")) type = "PICKUP";
    else if (model.includes("van") || model.includes("express") || model.includes("transit")) type = "VAN";
    else if (make.includes("harley") || make.includes("yamaha") || make.includes("kawasaki") || make.includes("ducati") || make.includes("honda") && model.includes("cbr")) type = "MOTORCYCLE";
    return {
      year: parseInt(v.vehicleYear) || 0,
      make: v.vehicleMake ?? "",
      model: v.vehicleModel ?? "",
      type,
      isInoperable: v.vehicleCondition === true,
    };
  });

  const payload = {
    lpKey,
    firstName: lead.firstName ?? "",
    lastName: lead.lastName ?? "",
    email: lead.email ?? "",
    phone: lead.phone ?? "",
    phoneOther: "",
    billingAddress: "",
    fax: "",
    originCity: lead.pickupCity ?? "",
    originState: lead.pickupState ?? "",
    originZip: lead.pickupZip ?? "",
    originCountry: "USA",
    destinationCity: lead.deliveryCity ?? "",
    destinationState: lead.deliveryState ?? "",
    destinationZip: lead.deliveryZip ?? "",
    destinationCountry: "USA",
    estShipDate: lead.pickupDate ? new Date(lead.pickupDate).toISOString().split("T")[0] : "",
    shipVia,
    noteFromShipper: lead.specialInstructions ?? "",
    vehicles,
  };

  try {
    const res = await fetch("https://api.carlink.pro/api/v1/Leads/ProvideLead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10_000),
    });
    return { ok: res.ok, status: res.status };
  } catch (e) {
    console.error("CarLink error:", e);
    return { ok: false };
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const ts = new Date().toISOString();

  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headersList.get("x-real-ip") ??
    "unknown";

  if (!checkRate(ip)) {
    return NextResponse.json({ error: "Too many requests. Try again later." }, { status: 429 });
  }

  let lead: LeadPayload;
  try {
    lead = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!lead.email?.trim() || !lead.firstName?.trim()) {
    return NextResponse.json({ error: "Name and email required" }, { status: 400 });
  }
  if (!lead.pickupZip || !lead.deliveryZip) {
    return NextResponse.json({ error: "Pickup and delivery ZIP required" }, { status: 400 });
  }
  if (!/^\S+@\S+\.\S+$/.test(lead.email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const providerResult = await sendToCarLink(lead);

  // Telegram notification
  const v = lead.vehicles?.[0];
  const vehicleStr = v ? `${v.vehicleYear} ${v.vehicleMake} ${v.vehicleModel}` : "N/A";
  const statusStr = providerResult.ok
    ? `✅ Sent (${providerResult.status})`
    : `❌ Failed (${providerResult.status ?? "no response"})`;

  const msg =
    `🚗 <b>#newlead — Royal Auto Ship</b>\n\n` +
    `<b>Name:</b> ${lead.firstName} ${lead.lastName ?? ""}\n` +
    `<b>Email:</b> ${lead.email}\n` +
    `<b>Phone:</b> ${lead.phone ?? "N/A"}\n\n` +
    `<b>From:</b> ${lead.pickupCity}, ${lead.pickupState} ${lead.pickupZip}\n` +
    `<b>To:</b> ${lead.deliveryCity}, ${lead.deliveryState} ${lead.deliveryZip}\n` +
    `<b>Date:</b> ${lead.pickupDate ?? "N/A"}\n` +
    `<b>Transport:</b> ${v?.transportType ?? "N/A"}\n\n` +
    `<b>Vehicle:</b> ${vehicleStr}\n` +
    `<b>Condition:</b> ${v?.vehicleCondition ? "Inoperable" : "Running"}\n` +
    (lead.specialInstructions ? `<b>Notes:</b> ${lead.specialInstructions}\n\n` : "\n") +
    `<b>Provider:</b> ${statusStr}\n` +
    `<b>Time:</b> ${ts}\n` +
    `<b>Page:</b> ${lead.pagePath ?? "/quote"}`;

  await sendTelegram(
    process.env.TELEGRAM_BOT_TOKEN ?? "",
    process.env.TELEGRAM_CHAT_ID ?? "",
    msg,
    process.env.TELEGRAM_THREAD_ID_LEAD,
  );

  return NextResponse.json({ success: true, timestamp: ts });
}
