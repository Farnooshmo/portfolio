
export default async function handler(req, res) {
  await sendEmail(req.body);

  res.status(200).json({ success: true });
}
