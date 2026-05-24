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
    from: `"Travel O Style" <${process.env.SMTP_EMAIL}>`,
    to: process.env.EMAIL_TO,
    replyTo: body.email,
    subject: `New Travel Inquiry - ${body.journeyName || "Custom Journey"}`,
    html: `
    <!DOCTYPE html>
    <html>
        <head>
        <meta charset="UTF-8" />
        <title>Travel Inquiry</title>
        </head>
        <body style="margin:0;padding:0;background-color:#f4f4f4;font-family:Arial,sans-serif;">
        
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4;padding:40px 0;">
            <tr>
            <td align="center">

                <table width="650" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;">
                
                <!-- Header -->
                <tr>
                    <td style="background:#111827;padding:30px;text-align:center;">
                    <h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:700;">
                        New Travel Inquiry
                    </h1>
                    <p style="margin:10px 0 0;color:#d1d5db;font-size:14px;">
                        A new customer inquiry has been submitted
                    </p>
                    </td>
                </tr>

                <!-- Body -->
                <tr>
                    <td style="padding:35px;">

                    <table width="100%" cellpadding="0" cellspacing="0">

                        <tr>
                        <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;">
                            <span style="font-weight:bold;color:#111827;">Full Name:</span>
                            <span style="color:#374151;">
                            ${body.firstName} ${body.lastName}
                            </span>
                        </td>
                        </tr>

                        <tr>
                        <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;">
                            <span style="font-weight:bold;color:#111827;">Title:</span>
                            <span style="color:#374151;">
                            ${body.title || "-"}
                            </span>
                        </td>
                        </tr>

                        <tr>
                        <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;">
                            <span style="font-weight:bold;color:#111827;">Email:</span>
                            <span style="color:#2563eb;">
                            ${body.email}
                            </span>
                        </td>
                        </tr>

                        <tr>
                        <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;">
                            <span style="font-weight:bold;color:#111827;">Phone:</span>
                            <span style="color:#374151;">
                            ${body.phone || "-"}
                            </span>
                        </td>
                        </tr>

                        ${
                        body.journeyName
                            ? `
                        <tr>
                        <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;">
                            <span style="font-weight:bold;color:#111827;">Journey:</span>
                            <span style="color:#374151;">
                            ${body.journeyName}
                            </span>
                        </td>
                        </tr>
                        `
                            : ""
                        }

                        ${
                        body.journeyDuration
                            ? `
                        <tr>
                        <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;">
                            <span style="font-weight:bold;color:#111827;">Duration:</span>
                            <span style="color:#374151;">
                            ${body.journeyDuration}
                            </span>
                        </td>
                        </tr>
                        `
                            : ""
                        }

                        ${
                        body.journeyLocation
                            ? `
                        <tr>
                        <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;">
                            <span style="font-weight:bold;color:#111827;">Location:</span>
                            <span style="color:#374151;">
                            ${body.journeyLocation}
                            </span>
                        </td>
                        </tr>
                        `
                            : ""
                        }

                        ${
                        body.guests
                            ? `
                        <tr>
                        <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;">
                            <span style="font-weight:bold;color:#111827;">Guests:</span>
                            <span style="color:#374151;">
                            ${body.guests}
                            </span>
                        </td>
                        </tr>
                        `
                            : ""
                        }

                        ${
                        body.destination
                            ? `
                        <tr>
                        <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;">
                            <span style="font-weight:bold;color:#111827;">Destination:</span>
                            <span style="color:#374151;">
                            ${body.destination}
                            </span>
                        </td>
                        </tr>
                        `
                            : ""
                        }

                        ${
                        body.month
                            ? `
                        <tr>
                        <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;">
                            <span style="font-weight:bold;color:#111827;">Preferred Month:</span>
                            <span style="color:#374151;">
                            ${body.month}
                            </span>
                        </td>
                        </tr>
                        `
                            : ""
                        }

                        <tr>
                        <td style="padding:20px 0 10px;">
                            <div style="font-weight:bold;color:#111827;margin-bottom:10px;">
                            Customer Message
                            </div>

                            <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:18px;color:#374151;line-height:1.7;">
                            ${body.message || "-"}
                            </div>
                        </td>
                        </tr>

                    </table>

                    </td>
                </tr>

                <!-- Footer -->
                <tr>
                    <td style="background:#f9fafb;padding:20px;text-align:center;border-top:1px solid #e5e7eb;">
                    <p style="margin:0;font-size:13px;color:#6b7280;">
                        Inquiry Source:
                        <strong style="color:#111827;">
                        ${body.source || "website"}
                        </strong>
                    </p>
                    </td>
                </tr>

                </table>

            </td>
            </tr>
        </table>

        </body>
    </html>
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