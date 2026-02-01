import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle2, Clock, Target, Sparkles, ArrowRight, Mail, Building2, User, MessageSquare } from "lucide-react"

/* ---------------- Animations ---------------- */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

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

      setStatus({ type: "success", msg: "Thanks! We'll reach out within 24 hours." })

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

  const infoItems = [
    "We review your use-case and constraints (data, security, timeline).",
    "We propose a plan: Discovery → MVP → Scale (with milestones).",
    "You get a clear scope, cost range, and delivery timeline.",
  ]

  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-32 text-slate-900">
      {/* Enhanced background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Primary blue gradient */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.12, 0.2, 0.12],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full 
                     bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_65%)] blur-3xl"
        />
        
        {/* Secondary cyan gradient */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.18, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-48 left-1/4 h-[500px] w-[500px] rounded-full 
                     bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.12),transparent_65%)] blur-3xl"
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.35]
                     [background-image:linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),
                                          linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)]
                     [background-size:64px_64px]
                     [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Enhanced Header */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <motion.div variants={item} className="mb-4 flex items-center justify-center gap-2">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-500" />
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-600 ring-1 ring-blue-100">
              <Mail className="h-3.5 w-3.5" />
              Contact
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-500" />
          </motion.div>

          <motion.h2
            variants={item}
            className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-5xl"
          >
            Let's build something intelligent
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              securely
            </span>
          </motion.h2>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl"
          >
            Tell us what you want to automate or improve. We'll recommend the fastest path to a
            production-ready solution.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Left: Enhanced Info panel */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xl shadow-slate-900/5 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-900/10"
          >
            {/* Animated gradient background on hover */}
            <motion.div
              initial={{ opacity: 0, scale: 1 }}
              whileHover={{ opacity: 1, scale: 1.5 }}
              transition={{ duration: 0.5 }}
              className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full blur-3xl"
              style={{
                background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.1), transparent 70%)',
              }}
            />

            <motion.div variants={item} className="relative">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-3 py-1 text-xs font-semibold text-white shadow-lg shadow-blue-500/30">
                <Sparkles className="h-3 w-3" />
                What happens next?
              </div>

              <h3 className="text-2xl font-semibold text-slate-900">Your journey with us</h3>
            </motion.div>

            <motion.ul variants={item} className="relative mt-6 space-y-4">
              {infoItems.map((text, i) => (
                <motion.li
                  key={text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/30">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                  <span className="flex-1 text-sm leading-relaxed text-slate-600">{text}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={item} className="relative mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group/card relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-md hover:shadow-blue-100/50"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/20">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Response time</p>
                <p className="mt-2 text-xl font-semibold text-slate-900">Within 24 hours</p>
                <p className="mt-1 text-xs text-slate-500">Mon–Sat</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group/card relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 shadow-sm transition-all duration-300 hover:border-cyan-200 hover:shadow-md hover:shadow-cyan-100/50"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/20">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Best for</p>
                <p className="mt-2 text-xl font-semibold text-slate-900">AI MVPs & Scale</p>
                <p className="mt-1 text-xs text-slate-500">GenAI • CV • Automation</p>
              </motion.div>
            </motion.div>

            {/* Corner glows */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_60%)] blur-3xl" />
            <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.06),transparent_60%)] blur-3xl" />
          </motion.div>

          {/* Right: Enhanced Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xl shadow-slate-900/5 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-900/10"
          >
            {/* Animated gradient background */}
            <motion.div
              initial={{ opacity: 0, scale: 1 }}
              whileHover={{ opacity: 1, scale: 1.5 }}
              transition={{ duration: 0.5 }}
              className="pointer-events-none absolute -left-32 -bottom-32 h-80 w-80 rounded-full blur-3xl"
              style={{
                background: 'radial-gradient(circle at center, rgba(6, 182, 212, 0.1), transparent 70%)',
              }}
            />

            <form onSubmit={onSubmit} className="relative space-y-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <User className="h-3.5 w-3.5 text-blue-600" />
                    Full name
                  </label>
                  <input
                    required
                    name="full_name"
                    placeholder="Your name"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-300 focus:border-blue-400 focus:bg-white focus:shadow-md focus:shadow-blue-100/50 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <Mail className="h-3.5 w-3.5 text-blue-600" />
                    Work email
                  </label>
                  <input
                    required
                    type="email"
                    name="work_email"
                    placeholder="you@company.com"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-300 focus:border-blue-400 focus:bg-white focus:shadow-md focus:shadow-blue-100/50 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <Building2 className="h-3.5 w-3.5 text-blue-600" />
                    Company
                  </label>
                  <input
                    name="company"
                    placeholder="Company name"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-300 focus:border-blue-400 focus:bg-white focus:shadow-md focus:shadow-blue-100/50 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <Target className="h-3.5 w-3.5 text-blue-600" />
                    What do you need?
                  </label>
                  <select
                    name="need"
                    defaultValue="GenAI / Agents"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-300 focus:border-blue-400 focus:bg-white focus:shadow-md focus:shadow-blue-100/50 focus:ring-2 focus:ring-blue-100"
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
                <label className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <MessageSquare className="h-3.5 w-3.5 text-blue-600" />
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Tell us about your use-case, data (if any), timeline, and success metrics."
                  className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-300 focus:border-blue-400 focus:bg-white focus:shadow-md focus:shadow-blue-100/50 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-slate-500">
                  By submitting, you agree we can contact you about your request.
                </p>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={status.type === "loading"}
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-600/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/50 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {status.type === "loading" ? "Sending…" : "Send message"}
                    {status.type !== "loading" && (
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    )}
                  </span>
                  
                  {/* Animated gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  
                  {/* Shimmer effect */}
                  {status.type !== "loading" && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ translateX: ['-100%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                    />
                  )}
                </motion.button>
              </div>

              {(status.type === "success" || status.type === "error") && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={`rounded-xl border px-5 py-4 text-sm ${
                    status.type === "success"
                      ? "border-green-200 bg-green-50 text-green-800"
                      : "border-red-200 bg-red-50 text-red-800"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {status.type === "success" ? (
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                    ) : (
                      <span className="flex h-4 w-4 items-center justify-center text-base">⚠</span>
                    )}
                    <span>{status.msg}</span>
                  </div>
                </motion.div>
              )}
            </form>

            {/* Bottom accent gradient */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600" />
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-1/4 h-64 w-64 rounded-full bg-cyan-500/5 blur-3xl" />
    </section>
  )
}