import { sendEmail } from "@/utils/email";

export default async function handler(req, res) {
  const { email, ...formData } = req.body; 

  try {
    await sendEmail(formData, email); 

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, error: "Email sending failed" });
  }
}
