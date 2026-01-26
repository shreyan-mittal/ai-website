import { useState } from "react"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "./animations"

export function Contact() {
  const [status, setStatus] = useState({ type: "idle", msg: "" })

  const onSubmit = async (e) => {
    e.preventDefault()

    // ✅ capture form element immediately (prevents "reset of null")
    const formEl = e.currentTarget

    setStatus({ type: "loading", msg: "Sending…" })

    try {
      const form = new FormData(formEl)
      const payload = {
        full_name: String(form.get("full_name") || "").trim(),
        work_email: String(form.get("work_email") || "").trim(),
        company: String(form.get("company") || "").trim(),
        need: String(form.get("need") || "").trim(),
        message: String(form.get("message") || "").trim(),
      }

      // ✅ frontend validation (matches backend required fields)
      if (!payload.full_name || !payload.work_email || !payload.message) {
        setStatus({ type: "error", msg: "Please fill Full name, Work email, and Message." })
        return
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        // helpful error message
        throw new Error(data?.error || `Failed to send message (status ${res.status})`)
      }

      setStatus({ type: "success", msg: "Thanks! We’ll reach out within 24 hours." })

      // ✅ reset safely
      if (formEl && typeof formEl.reset === "function") {
        formEl.reset()
      }
    } catch (err) {
      setStatus({
        type: "error",
        msg: err?.message || "Something went wrong. Please try again.",
      })
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-slate-50 py-20 text-slate-900">
      {/* Light background accents (bluish, subtle) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_62%)] blur-3xl" />
        <div className="absolute -bottom-48 left-10 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.10),transparent_62%)] blur-3xl" />
        <div className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span variants={fadeInUp} className="text-sm font-semibold text-blue-700">
            Contact
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="mt-3 text-balance text-3xl font-display font-semibold leading-tight sm:text-4xl"
          >
            Let’s build something intelligent—securely.
          </motion.h2>

          <motion.p variants={fadeInUp} className="mt-4 text-lg text-slate-600">
            Tell us what you want to automate or improve. We'll recommend the fastest path to a
            production-ready solution.
          </motion.p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Left: Info panel */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <motion.h3 variants={fadeInUp} className="text-xl font-semibold text-slate-900">
              What happens next?
            </motion.h3>

            <motion.ul variants={fadeInUp} className="mt-5 space-y-3 text-sm text-slate-600">
              {[
                "We review your use-case and constraints (data, security, timeline).",
                "We propose a plan: Discovery → MVP → Scale (with milestones).",
                "You get a clear scope, cost range, and delivery timeline.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                    ✓
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div variants={fadeInUp} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Response time</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">Within 24 hours</p>
                <p className="mt-1 text-xs text-slate-500">Mon–Sat</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Best for</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">AI MVPs & Scale</p>
                <p className="mt-1 text-xs text-slate-500">GenAI • CV • Automation</p>
              </div>
            </motion.div>

            {/* subtle corner glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.10),transparent_60%)] blur-3xl" />
            <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08),transparent_60%)] blur-3xl" />
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold text-slate-700">Full name</label>
                  <input
                    required
                    name="full_name"
                    placeholder="Your name"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-300 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700">Work email</label>
                  <input
                    required
                    type="email"
                    name="work_email"
                    placeholder="you@company.com"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-300 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold text-slate-700">Company</label>
                  <input
                    name="company"
                    placeholder="Company name"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-300 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700">What do you need?</label>
                  <select
                    name="need"
                    defaultValue="GenAI / Agents"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-300 focus:bg-white"
                  >
                    <option>GenAI / Agents</option>
                    <option>Computer Vision</option>
                    <option>Automation / ML</option>
                    <option>MLOps / Deployment</option>
                    <option>Consulting / Strategy</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700">Message</label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Tell us about your use-case, data (if any), timeline, and success metrics."
                  className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-300 focus:bg-white"
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-slate-500">
                  By submitting, you agree we can contact you about your request.
                </p>

                <motion.button
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={status.type === "loading"}
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:opacity-60"
                >
                  {status.type === "loading" ? "Sending…" : "Send message"}
                </motion.button>
              </div>

              {(status.type === "success" || status.type === "error") && (
                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                  {status.msg}
                </div>
              )}
            </form>

            {/* bottom accent */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500/60 via-indigo-500/60 to-cyan-500/60" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
