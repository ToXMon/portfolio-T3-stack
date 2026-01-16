import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import type { MailDataRequired } from "@sendgrid/mail";

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

if (SENDGRID_API_KEY) {
  sgMail.setApiKey(SENDGRID_API_KEY);
}

interface ContactFormData {
  name: string;
  email: string;
  reason?: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    if (!SENDGRID_API_KEY) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 503 },
      );
    }

    const body = (await request.json()) as ContactFormData;
    const { name, email, reason, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    const userMsg: MailDataRequired = {
      to: email,
      from: "tolushekoni@gmail.com",
      subject: "Thank you for contacting Tolu Shekoni",
      text: `Dear ${name},\n\nThank you for contacting me. I have received your message and will get back to you as soon as possible.\n\nBest regards,\nTolu Shekoni`,
    };

    const adminMsg: MailDataRequired = {
      to: "tolushekoni@gmail.com",
      from: "tolushekoni@gmail.com",
      subject: "New Contact Form Submission",
      text: `New contact form submission:\n\nName: ${name}\nEmail: ${email}\nReason: ${reason ?? "Not specified"}\nMessage: ${message}`,
    };

    await sgMail.send(userMsg);
    await sgMail.send(adminMsg);

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error processing form:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 },
    );
  }
}
