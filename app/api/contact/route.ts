import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  // Placeholder: log to server console (Vercel/Node logs). Replace with email provider later.
  console.log("Contact form submission:", body);
  return NextResponse.json({ ok: true });
}
