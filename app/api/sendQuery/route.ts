import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(request: Request) {
  let data: unknown;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }
  if (!data || typeof data !== "object")
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  const { name, email, message } = data as Record<string, unknown>;
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    name.length > 100 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    email.length > 254 ||
    !message.trim() ||
    message.length > 5000 ||
    /[\r\n]/.test(name + email)
  ) {
    return NextResponse.json(
      { message: "Please provide a valid name, email, and message." },
      { status: 400 },
    );
  }
  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS)
    return NextResponse.json(
      { message: "Email delivery is unavailable. Please email directly." },
      { status: 503 },
    );
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_PASS },
      connectionTimeout: 10000,
      socketTimeout: 10000,
    });
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      replyTo: email.trim(),
      to: process.env.GMAIL_USER,
      subject: `Portfolio inquiry from ${name.trim()}`,
      text: `From: ${name.trim()} <${email.trim()}>\n\n${message.trim()}`,
    });
    return NextResponse.json({ message: "Message sent successfully!" });
  } catch {
    return NextResponse.json(
      { message: "Failed to send the message." },
      { status: 500 },
    );
  }
}
