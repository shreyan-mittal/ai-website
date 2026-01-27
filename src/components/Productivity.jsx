import { motion } from "framer-motion"
import { fadeInUp, fadeScale, staggerContainer } from "./animations"

export function WhyUs() {
  const bullets = [
    "Use-case discovery + ROI roadmap",
    "Production-ready GenAI (RAG, agents, guardrails)",
    "MLOps, monitoring, and drift detection",
    "Security-first: access control + compliance-ready",
  ]

  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 bg-white py-20 text-slate-900"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:flex-row md:items-start md:gap-16">
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
            className="text-balance text-3xl font-display font-semibold leading-tight sm:text-4xl"
          >
            Enterprise-grade AI delivery —from strategy to production
          </motion.h3>

          <motion.p variants={fadeInUp} className="text-lg text-slate-600">
            We design, build, and deploy secure AI systems that ship fast and scale reliably. From GenAI to computer Vision and automation, we focus on measurable outcomes—accuracy, latency, cost, and adoption.
          </motion.p>

          <motion.ul variants={fadeInUp} className="mt-6 grid grid-cols-1 gap-3 text-sm text-slate-700 sm:grid-cols-2">
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

        {/* Right content: Delivery Playbook */}
        <motion.div
          variants={fadeScale}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex-1"
        >
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h4 className="text-lg font-semibold text-blue-600">Delivery Playbook</h4>
                <p className="mt-1 text-sm text-slate-600">A repeatable system for shipping AI</p>
              </div>
              <span className="text-sm font-semibold text-blue-600">Production-ready</span>
            </div>

            {/* Stage 01: Discover */}
            <div className="mb-6 border-b border-slate-200 pb-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="text-2xl font-bold text-blue-600">01</span>
                <div>
                  <h5 className="font-semibold text-slate-900">Discover</h5>
                  <p className="text-xs text-slate-500">Week 1-2</p>
                </div>
              </div>
              <p className="mb-4 text-sm text-slate-700">
                Identify high-ROI use-cases, map data, define KPIs,
              </p>
              <div className="rounded-lg bg-blue-50 p-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-blue-700">
                  What to Expect
                </p>
                <ul className="space-y-1 text-xs text-slate-600">
                  <li>• Time-to-first demo: 4-5 wks</li>
                  <li>• Rapid discovery sprint</li>
                  <li>• Deployment model: Cloud / On-prem</li>
                  <li>• Fits your infra + policy</li>
                  <li>• Quality gates: Eval + Safety</li>
                  <li>• Accuracy, cost, latency budgets</li>
                </ul>
              </div>
            </div>

            {/* Stage 02: Build */}
            <div className="mb-6 border-b border-slate-200 pb-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="text-2xl font-bold text-blue-600">02</span>
                <div>
                  <h5 className="font-semibold text-slate-900">Build</h5>
                  <p className="text-xs text-slate-500">Weeks 3-6</p>
                </div>
              </div>
              <p className="mb-4 text-sm text-slate-700">
                Prototype, evaluate, iterate—RAG, agents, CV, automation
              </p>
            </div>

            {/* Stage 03: Deploy */}
            <div className="mb-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="text-2xl font-bold text-blue-600">03</span>
                <div>
                  <h5 className="font-semibold text-slate-900">Deploy</h5>
                  <p className="text-xs text-slate-500">Ongoing</p>
                </div>
              </div>
              <p className="mb-4 text-sm text-slate-700">
                Ship with MLOps, monitoring, drift alerts, and governance
              </p>
            </div>

            {/* Our Guarantee */}
            <div className="rounded-lg bg-blue-50 p-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-blue-700">
                Our Guarantee
              </p>
              <ul className="space-y-1 text-xs text-slate-600">
                <li>• Measurable performance, not just demos</li>
                <li>• Evaluation harness + baseline comparisons</li>
                <li>• Safety filters + hallucination controls</li>
                <li>• Monitoring, alerts, and drift detection</li>
                <li>• Security-first</li>
                <li>• Audit-ready</li>
                <li>• Cost-optimized</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
