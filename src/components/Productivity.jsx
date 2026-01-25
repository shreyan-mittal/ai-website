import { motion } from "framer-motion"
import { fadeInUp, fadeScale, staggerContainer } from "./animations"

export function WhyUs() {
  const bullets = [
    "Use-case discovery + ROI roadmap",
    "Production-ready GenAI (RAG, agents, guardrails)",
    "MLOps, monitoring, and drift detection",
    "Security-first: access control + compliance-ready",
  ]

  const stats = [
    { label: "Time-to-first value", value: "2–4 weeks" },
    { label: "Typical ROI window", value: "30–90 days" },
    { label: "Delivery model", value: "MVP → Scale" },
  ]

  return (
    <section
      id="why-us"
      className="scroll-mt-24 bg-white py-20 text-slate-900"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:flex-row md:items-center md:gap-16">
        {/* Left content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex-1 space-y-4"
        >
          <motion.span variants={fadeInUp} className="text-sm font-semibold text-blue-600">
            Why Us
          </motion.span>

          <motion.h3
            variants={fadeInUp}
            className="text-balance text-3xl font-semibold leading-tight sm:text-4xl"
          >
            Move fast without breaking security.
          </motion.h3>

          <motion.p variants={fadeInUp} className="text-lg text-slate-600">
            We help teams ship AI systems that are reliable, measurable, and safe—so you can deploy
            with confidence.
          </motion.p>

          <motion.ul variants={fadeInUp} className="mt-6 space-y-3 text-sm text-slate-700">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                  ✓
                </span>
                <span className="leading-relaxed">{b}</span>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right content: stats */}
        <motion.div
          variants={fadeScale}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex-1"
        >
          <div className="grid gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{s.label}</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">{s.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
