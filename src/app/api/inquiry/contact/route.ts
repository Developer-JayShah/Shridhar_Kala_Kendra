import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name: string;
  email: string;
  whatsapp?: string;
  message: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<ContactPayload>;

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_APP_PASSWORD = process.env.EMAIL_APP_PASSWORD;
    const RECEIVER = process.env.INQUIRY_RECEIVER_EMAIL;

    if (!EMAIL_USER || !EMAIL_APP_PASSWORD || !RECEIVER) {
      return NextResponse.json(
        { error: "Email environment variables are missing." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_APP_PASSWORD,
      },
    });

    const subject = `New Contact Enquiry — ${body.name}`;

    const text = `
New enquiry received:

Name: ${body.name}
Email: ${body.email}
WhatsApp: ${body.whatsapp || "Not provided"}

Message:
${body.message}
`.trim();

    await transporter.sendMail({
      from: `"Bijalsangnaach Website" <${EMAIL_USER}>`,
      to: RECEIVER,
      replyTo: body.email,
      subject,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Failed to send email." },
      { status: 500 }
    );
  }
}
