import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Ensure you add RESEND_API_KEY to your .env.local file
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, message } = body;

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: 'Name, phone, and message are required' },
        { status: 400 }
      );
    }

    // "onboarding@resend.dev" can safely be used to test if you don't have a verified domain.
    // However, it often requires the target email to be the exact same email address you used to register on Resend.
    const { data, error } = await resend.emails.send({
      from: 'VSL PG Inquiries <onboarding@resend.dev>',
      to: ['Venkatanaidu561@gmail.com'],
      subject: `New Room Inquiry from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; width: 120px;"><strong>Name:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Phone NO:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;" colspan="2">
                <strong>Message:</strong><br/>
                <p style="margin-top: 10px; line-height: 1.5; color: #555;">${message}</p>
              </td>
            </tr>
          </table>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Internal API Error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
