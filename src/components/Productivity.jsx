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
    { label: "Time-to-first demo", value: "4–5 wks", sub: "Rapid discovery sprint" },
    { label: "Deployment model", value: "Cloud / On-prem", sub: "Fits your infra + policy" },
    { label: "Quality gates", value: "Eval + Safety", sub: "Accuracy, cost, latency budgets" },
  ]

  const pipeline = [
    {
      step: "01",
      title: "Discover",
      desc: "Identify high-ROI use-cases, map data, define KPIs.",
      tag: "Week 1–2",
      dot: "bg-blue-500",
      tagBg: "bg-blue-50 text-blue-700",
      iconBg: "bg-blue-100",
    },
    {
      step: "02",
      title: "Build",
      desc: "Prototype, evaluate, iterate—RAG, agents, CV, automation.",
      tag: "Weeks 3–6",
      dot: "bg-indigo-500",
      tagBg: "bg-indigo-50 text-indigo-700",
      iconBg: "bg-indigo-100",
    },
    {
      step: "03",
      title: "Deploy",
      desc: "Ship with MLOps, monitoring, drift alerts, and governance.",
      tag: "Ongoing",
      dot: "bg-cyan-500",
      tagBg: "bg-cyan-50 text-cyan-700",
      iconBg: "bg-cyan-100",
    },
  ]

  return (
    <section className="bg-white py-20 text-slate-900">
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
            Enterprise-grade AI delivery—from strategy to production
          </motion.h3>

          <motion.p variants={fadeInUp} className="text-lg text-slate-600">
            We design, build, and deploy secure AI systems that ship fast and scale reliably.
            From GenAI to computer vision and automation, we focus on measurable outcomes—accuracy,
            latency, cost, and adoption.
          </motion.p>

          <motion.div variants={fadeInUp} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {bullets.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  ✓
                </span>
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right column (improved) */}
        <motion.div
          variants={fadeScale}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative flex-1"
        >
          {/* Ambient glows */}
          <div className="absolute -left-10 -top-10 h-28 w-28 rounded-full bg-blue-200/50 blur-3xl" />
          <div className="absolute -right-10 -bottom-14 h-32 w-32 rounded-full bg-cyan-200/60 blur-3xl" />

          {/* Card */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_30px_90px_rgba(15,23,42,0.12)]">
            {/* Top header */}
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">Delivery Playbook</p>
                  <p className="text-xs text-slate-500">A repeatable system for shipping AI</p>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                Production-ready
              </div>
            </div>

            <div className="grid gap-5 bg-gradient-to-br from-slate-50 to-white px-6 py-6 lg:grid-cols-2">
              {/* Pipeline */}
              <div className="relative">
                {/* vertical line */}
                <div className="absolute left-[13px] top-2 h-[calc(100%-8px)] w-px bg-gradient-to-b from-blue-200 via-slate-200 to-cyan-200" />

                <div className="space-y-4">
                  {pipeline.map((p, idx) => (
                    <motion.div
                      key={p.step}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ delay: 0.05 + idx * 0.08, duration: 0.5, ease: "easeOut" }}
                      className="relative pl-10"
                    >
                      <div className="absolute left-0 top-1.5 flex items-center gap-2">
                        <span className={`h-3 w-3 rounded-full ${p.dot}`} />
                      </div>

                      <div className="rounded-2xl border border-slate-100 bg-white/80 p-4 shadow-sm">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-xs font-semibold text-slate-400">{p.step}</p>
                            <p className="text-sm font-semibold text-slate-900">{p.title}</p>
                            <p className="mt-1 text-xs leading-relaxed text-slate-600">{p.desc}</p>
                          </div>
                          <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${p.tagBg}`}>
                            {p.tag}
                          </span>
                        </div>

                        {/* micro progress bars */}
                        <div className="mt-3 grid grid-cols-3 gap-2">
                          <div className="h-1.5 rounded-full bg-slate-100">
                            <div className="h-1.5 w-[78%] rounded-full bg-blue-400/70" />
                          </div>
                          <div className="h-1.5 rounded-full bg-slate-100">
                            <div className="h-1.5 w-[62%] rounded-full bg-indigo-400/70" />
                          </div>
                          <div className="h-1.5 rounded-full bg-slate-100">
                            <div className="h-1.5 w-[70%] rounded-full bg-cyan-400/70" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Metrics + guarantees */}
              <div className="flex flex-col gap-4">
                {/* Stats */}
                <div className="rounded-2xl border border-slate-100 bg-white/80 p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">What to expect</p>

                  <div className="mt-4 space-y-3">
                    {stats.map((s) => (
                      <div key={s.label} className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-xs text-slate-500">{s.label}</p>
                          <p className="text-xs text-slate-400">{s.sub}</p>
                        </div>
                        <p className="text-sm font-semibold text-slate-900">{s.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quality + security */}
                <div className="rounded-2xl border border-slate-100 bg-gradient-to-br from-blue-50/60 via-white to-cyan-50/60 p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-blue-700">Our guarantee</p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">
                    Measurable performance, not just demos
                  </p>

                  <div className="mt-3 space-y-2 text-sm text-slate-700">
                    <p className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      Evaluation harness + baseline comparisons
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                      Safety filters + hallucination controls
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                      Monitoring, alerts, and drift detection
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-blue-200 bg-white/70 px-3 py-1 text-xs font-medium text-blue-700">
                      Security-first
                    </span>
                    <span className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700">
                      Audit-ready
                    </span>
                    <span className="rounded-full border border-cyan-200 bg-white/70 px-3 py-1 text-xs font-medium text-cyan-700">
                      Cost-optimized
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* bottom accent */}
            <div className="h-1 bg-gradient-to-r from-blue-500/70 via-indigo-500/70 to-cyan-500/70" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
