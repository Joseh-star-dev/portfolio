import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // 1. Basic Validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        { status: 400 },
      );
    }

    // 2. Transporter Configuration
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Use an App Password here
      },
    });

    // 3. Enhanced Mail Options
    const mailOptions = {
      from: process.env.EMAIL_USER, // Always send from your verified email
      replyTo: email, // Allows you to hit 'Reply' to reach the user
      to: process.env.EMAIL_USER,
      subject: `🚀 Novastack Digital: New message from ${name}`,
      text: `Message from ${name} (${email}): ${message}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.5; color: #333;">
          <h2 style="color: #0070f3;">Novastack Digital Contact</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p style="background: #f4f4f4; padding: 15px; border-radius: 5px;">${message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Message send" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to send email." }),
      { status: 500 },
    );
  }
}
