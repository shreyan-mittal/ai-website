import { Resend } from "resend"
import { createClient } from "@supabase/supabase-js"

// Vercel Serverless Function
export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST")
    return res.status(405).json({ error: "Method not allowed" })
  }

  try {
    const { full_name, work_email, company, need, message } = req.body ?? {}

    // Basic validation
    if (!full_name || !work_email || !need || !message) {
      return res.status(400).json({ error: "Missing required fields" })
    }

    const supabaseUrl = process.env.SUPABASE_URL
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
    const resendKey = process.env.RESEND_API_KEY
    const notifyTo = (process.env.NOTIFY_TO_EMAIL || "").split(",").map((s) => s.trim()).filter(Boolean)
    const fromEmail = process.env.FROM_EMAIL

    if (!supabaseUrl || !supabaseServiceKey) {
      return res.status(500).json({ error: "Server misconfigured: Supabase env vars missing" })
    }
    if (!resendKey) {
      return res.status(500).json({ error: "Server misconfigured: Resend API key missing" })
    }
    if (!fromEmail) {
      return res.status(500).json({ error: "Server misconfigured: FROM_EMAIL missing" })
    }
    if (notifyTo.length === 0) {
      return res.status(500).json({ error: "Server misconfigured: NOTIFY_TO_EMAIL missing" })
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey)
    const resend = new Resend(resendKey)

    // 1) Save to Supabase
    const { error: dbError } = await supabase.from("contact_submissions").insert([
      {
        full_name: String(full_name).trim(),
        work_email: String(work_email).trim(),
        company: String(company || "").trim(),
        need: String(need).trim(),
        message: String(message).trim(),
      },
    ])

    if (dbError) {
      return res.status(500).json({ error: dbError.message })
    }

    // 2) Email notification via Resend
    const safeCompany = String(company || "").trim() || "(not provided)"

    await resend.emails.send({
      from: fromEmail,
      to: notifyTo,
      replyTo: String(work_email).trim(),
      subject: `New website enquiry: ${String(need).trim()}`,
      text:
        `New enquiry received\n\n` +
        `Full name: ${String(full_name).trim()}\n` +
        `Work email: ${String(work_email).trim()}\n` +
        `Company: ${safeCompany}\n` +
        `Need: ${String(need).trim()}\n\n` +
        `Message:\n${String(message).trim()}\n`,
    })

    return res.status(200).json({ ok: true })
  } catch (err) {
    return res.status(500).json({ error: err?.message || "Unexpected server error" })
  }
}
