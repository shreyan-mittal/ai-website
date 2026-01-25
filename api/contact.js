import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { full_name, work_email, company, need, message } = req.body || {};

    if (!full_name || !work_email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    const { error: dbError } = await supabase.from("contact_submissions").insert([
      {
        full_name,
        work_email,
        company: company || "",
        need: need || "GenAI / Agents",
        message,
      },
    ]);

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      return res.status(500).json({ error: "Database insert failed" });
    }

    // ✅ parse multi-emails from env var
    const toEmails = (process.env.NOTIFY_TO_EMAIL || "")
      .split(",")
      .map((e) => e.trim())
      .filter(Boolean);

    if (!toEmails.length) {
      return res.status(500).json({ error: "NOTIFY_TO_EMAIL is not set" });
    }

    const { data: emailData, error: emailError } = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: toEmails, // ✅ array
      replyTo: work_email,
      subject: "New AI Website Lead 🚀",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${full_name}</p>
          <p><strong>Email:</strong> ${work_email}</p>
          <p><strong>Company:</strong> ${company || "-"}</p>
          <p><strong>Need:</strong> ${need || "GenAI / Agents"}</p>
          <p><strong>Message:</strong></p>
          <p>${String(message).replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    if (emailError) {
      console.error("Resend email error:", emailError);
      return res.status(500).json({ error: emailError.message || "Email failed" });
    }

    console.log("Email sent:", emailData);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
