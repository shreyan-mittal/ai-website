import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { full_name, work_email, company, need, message } = req.body || {};

    // Basic validation
    if (!full_name || !work_email || !message) {
      return res.status(400).json({
        error: "Missing required fields",
      });
    }

    // Supabase client (server-side only)
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    // Insert into Supabase
    const { error: dbError } = await supabase
      .from("contact_submissions")
      .insert([
        {
          full_name,
          work_email,
          company: company || "",
          need: need || "General",
          message,
        },
      ]);

    if (dbError) {
      console.error("Supabase error:", dbError);
      return res.status(500).json({ error: "Database insert failed" });
    }

    // Multiple notification emails (comma-separated)
    const toEmails = (process.env.NOTIFY_TO_EMAIL || "")
      .split(",")
      .map((e) => e.trim())
      .filter(Boolean);

    if (!toEmails.length) {
      return res.status(500).json({
        error: "No notification emails configured",
      });
    }

    // Send email via Resend
    await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: toEmails,
      replyTo: work_email, // 👈 replies go to the user
      subject: "New AI Website Lead 🚀",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${full_name}</p>
          <p><strong>Email:</strong> ${work_email}</p>
          <p><strong>Company:</strong> ${company || "-"}</p>
          <p><strong>Need:</strong> ${need || "General"}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
