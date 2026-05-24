import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: process.env.EMAIL_TO,
      subject: "New ${body.source} Inquiry/Build your journey request Form",
      html: `
        <h2>Contact Form</h2>
        <p><b>Name:</b> ${body.firstName} ${body.lastName}</p><p><b>Phone:</b> ${body.phone}</p>
        <p> <b>Journey :</b> ${body.journeyName}</p>
        <p><b>Email:</b> ${body.email}</p>
        <p><b>Message:</b> ${body.message}</p>
      `,
    });

    return Response.json({
      success: true,
    });

  } catch (error) {
    console.log(error);

    return Response.json(
      {
        success: false,
      },
      { status: 500 }
    );
  }
}