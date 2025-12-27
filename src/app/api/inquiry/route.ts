import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type InquiryPayload = {
  name: string;
  age: string;
  dob?: string;
  gender: "Male" | "Female" | "Other";
  genderOther?: string;

  whatsapp: string;
  email: string;

  level: "Beginner" | "Intermediate" | "Advance";
  batch: "Mon-Tue" | "Wed-Thu" | "Sat-Sun";

  country: "USA" | "UK" | "CANADA" | "INDIA";

  goals?: string;
  danceBackground?: string;
  heardFrom: string[]; // Instagram/Facebook/Friends-Family/Other
  heardFromOther?: string;
};

function required(value: any) {
  return value !== undefined && value !== null && String(value).trim().length > 0;
}

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as InquiryPayload;

    // Basic required validation
    const must = ["name", "age", "gender", "whatsapp", "email", "level", "batch", "country"] as const;
    for (const key of must) {
      if (!required((data as any)[key])) {
        return NextResponse.json({ ok: false, message: `Missing: ${key}` }, { status: 400 });
      }
    }

    // Optional normalization
    const genderLine =
      data.gender === "Other" ? `Other (${data.genderOther || "Not specified"})` : data.gender;

    const heardFromLine =
      data.heardFrom?.length
        ? data.heardFrom.includes("Other")
          ? `${data.heardFrom.filter((x) => x !== "Other").join(", ")}${data.heardFromOther ? `, Other: ${data.heardFromOther}` : ", Other"}`
          : data.heardFrom.join(", ")
        : "Not provided";

    // Nodemailer transport (Gmail App Password OR SMTP provider)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    const subject = `New Class Inquiry — ${data.name} (${data.level})`;
    const text = `
New Inquiry Received

Name: ${data.name}
Age: ${data.age}
DOB: ${data.dob || "—"}
Gender: ${genderLine}

WhatsApp: ${data.whatsapp}
Email: ${data.email}

Level: ${data.level}
Batch: ${data.batch}
Country: ${data.country}

Goals: ${data.goals || "—"}
Previous dance background: ${data.danceBackground || "—"}
Heard from: ${heardFromLine}

(Submitted from website Register/Enquire page)
`.trim();

    await transporter.sendMail({
      from: `"Bijalsangnaach Website" <${process.env.EMAIL_USER}>`,
      to: process.env.INQUIRY_RECEIVER_EMAIL, // sister email
      replyTo: data.email,
      subject,
      text,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, message: err?.message || "Server error" },
      { status: 500 }
    );
  }
}
