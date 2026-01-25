import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { full_name, work_email, company, need, message } = req.body;

    if (!full_name || !work_email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Supabase
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    await supabase.from("contact_submissions").insert([
      {
        full_name,
        work_email,
        company,
        need,
        message,
      },
    ]);

    // 👉 SEND EMAIL (Reply-To is HERE)
    await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.NOTIFY_TO_EMAIL,
      subject: "New AI Website Lead 🚀",
      replyTo: work_email, // 👈 THIS LINE
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${full_name}</p>
        <p><strong>Email:</strong> ${work_email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Need:</strong> ${need}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
