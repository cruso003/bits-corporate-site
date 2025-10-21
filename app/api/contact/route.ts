import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, projectType, message, timeline, budget, referral } = body;

    // Validate required fields
    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Send email notification (using Resend, SendGrid, etc.)
    // 2. Store in database
    // 3. Send to CRM (HubSpot, Salesforce, etc.)
    // 4. Notify team via Slack

    // For now, we'll just log it (in production, replace with actual implementation)
    console.log("Contact form submission:", {
      name,
      email,
      phone,
      company,
      projectType,
      message,
      timeline,
      budget,
      referral,
      timestamp: new Date().toISOString(),
    });

    // TODO: Implement email sending
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'BITS <hello@bits-innovate.com>',
    //   to: ['hello@bits-innovate.com'],
    //   subject: `New Project Inquiry from ${name}`,
    //   html: `
    //     <h2>New Project Inquiry</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
    //     <p><strong>Company:</strong> ${company || 'Not provided'}</p>
    //     <p><strong>Project Type:</strong> ${projectType}</p>
    //     <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
    //     <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
    //     <p><strong>Referral:</strong> ${referral || 'Not specified'}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `,
    // });

    return NextResponse.json(
      { message: "Contact form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
