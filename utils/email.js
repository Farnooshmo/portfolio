const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

export async function sendEmail(data, recipientEmail) {
  if (!recipientEmail) {
    throw new Error("Recipient email is required");
  }

  const message = {
    from: process.env.EMAIL,
    to: recipientEmail,
    subject: "New message",
    text: JSON.stringify(data),
  };

  try {
    const result = await transporter.sendMail(message);
    console.log("Email sent successfully:", result.response);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}
