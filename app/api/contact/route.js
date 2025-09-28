import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Create a transporter (you can use your Gmail or any SMTP)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // set in .env
        pass: process.env.EMAIL_PASS  // set in .env
      }
    });

    // Email content
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, 
      subject: `New message from ${name}`,
      text: message,
      html: `
        <div>
          <h2>Portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error) {
    console.error("Error sending mail:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
