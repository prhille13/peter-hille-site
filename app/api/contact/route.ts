import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: 'contact@peterhille.net',
      to: 'peter@peterhille.net',
      replyTo: email,
      subject: `New message from ${name} — peterhille.net`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #1C1A17;">
          <h2 style="font-size: 1.5rem; font-weight: 300; border-bottom: 1px solid #D4CDBE; padding-bottom: 16px; margin-bottom: 24px;">
            New message from peterhille.net
          </h2>
          <p style="margin-bottom: 8px;"><strong>Name:</strong> ${name}</p>
          <p style="margin-bottom: 8px;"><strong>Email:</strong> ${email}</p>
          <p style="margin-bottom: 24px;"><strong>Message:</strong></p>
          <p style="color: #6B6560; line-height: 1.8; white-space: pre-wrap;">${message}</p>
          <p style="margin-top: 32px; font-size: 0.75rem; color: #6B6560; border-top: 1px solid #D4CDBE; padding-top: 16px;">
            Reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
