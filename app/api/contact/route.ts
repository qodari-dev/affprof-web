import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  CONTACT_SUBJECT_LABELS,
  ContactSchema,
} from "../../lib/contact-schema";

const resend = new Resend(process.env.RESEND_API_KEY);

const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 60 * 60 * 1000;
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  if (record.count >= RATE_LIMIT) return true;

  record.count++;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      req.headers.get("x-real-ip") ??
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "rate_limit" }, { status: 429 });
    }

    const json = await req.json().catch(() => null);
    if (!json || typeof json !== "object") {
      return NextResponse.json({ error: "invalid" }, { status: 400 });
    }

    if (typeof (json as { honeypot?: unknown }).honeypot === "string" &&
        (json as { honeypot: string }).honeypot.length > 0) {
      return NextResponse.json({ success: true });
    }

    const parsed = ContactSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json({ error: "invalid" }, { status: 400 });
    }

    const { name, email, subject, message, lang } = parsed.data;

    const subjectLabel = CONTACT_SUBJECT_LABELS[subject];

    await resend.emails.send({
      from: "AffProf Contact <hello@affprof.com>",
      to: "hello@affprof.com",
      replyTo: email,
      subject: `[Contact] ${subjectLabel} — from ${name}`,
      text: [
        `From: ${name} <${email}>`,
        `Subject: ${subjectLabel}`,
        `Language: ${lang ?? "unknown"}`,
        `IP: ${ip}`,
        "",
        "---",
        "",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "server" }, { status: 500 });
  }
}
