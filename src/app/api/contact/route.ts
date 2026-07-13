import { NextResponse } from 'next/server';

interface ContactPayload {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as ContactPayload;

    const firstName = (data.firstName || '').trim();
    const lastName = (data.lastName || '').trim();
    const email = (data.email || '').trim();
    const phone = (data.phone || '').trim();
    const message = (data.message || '').trim();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields.' },
        { status: 400 }
      );
    }

    // Optional: basic email validation
    const emailRegex = /.+@.+\..+/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // If SMTP env vars are provided, attempt to send an email via Nodemailer
    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : undefined;
    const user = process.env.SMTP_USER;
    // Support both SMTP_PASS and SMTP_PASSWORD
    const pass = process.env.SMTP_PASS || process.env.SMTP_PASSWORD;
    // Support both CONTACT_TO_EMAIL and TO_EMAIL
    const to = process.env.CONTACT_TO_EMAIL || process.env.TO_EMAIL || process.env.SMTP_USER;
    // Support both CONTACT_FROM_EMAIL and FROM_EMAIL
    const fromEmail = process.env.CONTACT_FROM_EMAIL || process.env.FROM_EMAIL || process.env.SMTP_USER;
    const fromName = process.env.FROM_NAME;

    if (host && port && user && pass && to && fromEmail) {
      console.log('SMTP vars found, attempting to send email...');
      try {
        const { default: nodemailer } = await import('nodemailer');
        const transporter = nodemailer.createTransport({
          host,
          port,
          secure: port === 465,
          auth: { user, pass },
        });

        const subject = `New contact form submission from ${firstName} ${lastName}`;
        const text = `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;

        const fromHeader = fromName ? `${fromName} <${fromEmail}>` : fromEmail;
        console.log('Sending email:', { from: fromHeader, to, subject });
        await transporter.sendMail({ from: fromHeader, to, subject, text });
        console.log('Email sent successfully');
      } catch (mailErr) {
        console.error('Email sending failed:', mailErr);
        console.warn('Email sending failed, returning success anyway:', mailErr);
      }
    } else {
      console.log('SMTP vars not fully configured:', { host, port, user, pass: pass ? '***' : undefined, to, fromEmail });
      // No SMTP configured; log the submission and return success
      console.log('Contact submission (no SMTP configured):', {
        firstName,
        lastName,
        email,
        phone,
        message,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json(
      { success: false, error: 'Failed to process request.' },
      { status: 500 }
    );
  }
}
