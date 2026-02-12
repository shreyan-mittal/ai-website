import { motion } from "framer-motion"
import { CheckCircle2, Sparkles, Target, Rocket, Shield, TrendingUp, Clock, Zap } from "lucide-react"

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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

/* ---------------- Component ---------------- */
export function WhyUs() {
  const bullets = [
    { text: "Use-case discovery + ROI roadmap", icon: Target },
    { text: "Production-ready GenAI (RAG, agents, guardrails)", icon: Sparkles },
    { text: "MLOps, monitoring, and drift detection", icon: TrendingUp },
    { text: "Security-first: access control + compliance-ready", icon: Shield },
  ]

  const stages = [
    {
      number: "01",
      title: "Discover",
      timeline: "Week 1-2",
      description: "Identify high-ROI use-cases, map data, define KPIs",
      icon: Target,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      number: "02",
      title: "Build",
      timeline: "Weeks 3-6",
      description: "Prototype, evaluate, iterate—RAG, agents, CV, automation",
      icon: Rocket,
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      number: "03",
      title: "Deploy",
      timeline: "Weeks 7-8",
      description: "Ship with MLOps, monitoring, drift alerts, and governance",
      icon: Zap,
      gradient: "from-blue-600 to-indigo-600",
    },
  ]

  return (
    <section
      id="how-it-works"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-[#07090f] via-[#0a0d14] to-[#07090f] py-32 text-white"
    >
      {/* OPTIMIZED Background - CSS animations only */}
      <div className="pointer-events-none absolute inset-0">
        {/* Primary blue glow */}
        <div
          className="absolute -top-40 right-1/4 h-[600px] w-[600px] rounded-full 
                     bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_65%)] blur-3xl"
          style={{ animation: 'pulse-glow 8s ease-in-out infinite' }}
        />
        
        {/* Secondary cyan glow */}
        <div
          className="absolute -bottom-48 left-1/4 h-[500px] w-[500px] rounded-full 
                     bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.12),transparent_65%)] blur-3xl"
          style={{ animation: 'pulse-glow 10s ease-in-out infinite 1s' }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.15]
                     [background-image:linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),
                                          linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)]
                     [background-size:64px_64px]
                     [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_90%)]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-20"
        >
          {/* LEFT CONTENT */}
          <motion.div variants={item} className="flex-1 space-y-6">
            {/* Badge */}
            <div className="flex items-center gap-2">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-500" />
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-700/50 bg-slate-900/40 px-4 py-1.5 text-sm font-medium text-slate-300 backdrop-blur-xl">
                <Sparkles className="h-3.5 w-3.5 text-blue-400" />
                Why Us
              </span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-500" />
            </div>

            <motion.h3
              variants={item}
              className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-5xl"
            >
              Enterprise grade AI delivery 
              <br />
              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                from strategy to production
              </span>
            </motion.h3>

            <motion.p variants={item} className="text-lg leading-relaxed text-slate-400 sm:text-xl">
              We design, build, and deploy secure AI systems that ship fast and scale reliably. From GenAI to Computer Vision and automation, we focus on measurable outcomes—accuracy, latency, cost, and adoption.
            </motion.p>

            {/* Bullet list - NO HOVER ARROWS */}
            <motion.div variants={item} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {bullets.map((bullet, i) => {
                const Icon = bullet.icon
                return (
                  <motion.div
                    key={bullet.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                    className="group flex items-start gap-3 rounded-xl border border-slate-800/50 bg-slate-900/50 p-4 
                             shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-slate-700/50 hover:bg-slate-900/70"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/20 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="flex-1 pt-1.5 text-sm leading-relaxed text-slate-300">{bullet.text}</span>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT - Delivery Playbook */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex-1 lg:sticky lg:top-24"
          >
            <div className="group relative overflow-hidden rounded-3xl border border-slate-800/50 bg-slate-900/50 p-8 shadow-xl shadow-black/40 backdrop-blur-sm transition-all duration-500 hover:border-slate-700/50">
              {/* Header */}
              <div className="relative mb-8 flex items-start justify-between">
                <div>
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-3 py-1 text-xs font-semibold text-white shadow-lg shadow-blue-500/30">
                    <Clock className="h-3 w-3" />
                    Delivery Playbook
                  </div>
                  <p className="mt-2 text-sm text-slate-400">A repeatable system for shipping AI</p>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-emerald-800/50 bg-emerald-950/50 px-3 py-1.5">
                  <div 
                    className="h-2 w-2 rounded-full bg-emerald-500"
                    style={{ animation: 'pulse-dot 2s ease-in-out infinite' }}
                  />
                  <span className="text-xs font-semibold text-emerald-400">Production-ready</span>
                </div>
              </div>

              {/* Stages */}
              <div className="relative space-y-6">
                {stages.map((stage, i) => (
                  <motion.div
                    key={stage.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                    className="group/stage relative"
                  >
                    <div className="flex gap-4">
                      {/* Number badge */}
                      <div className="relative flex-shrink-0">
                        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${stage.gradient} shadow-lg`}>
                          <span className="text-2xl font-bold text-white">
                            {stage.number}
                          </span>
                        </div>
                        
                        {/* Connecting line */}
                        {i < stages.length - 1 && (
                          <div className="absolute left-1/2 top-16 h-8 w-0.5 -translate-x-1/2 bg-gradient-to-b from-slate-700 to-transparent" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 pb-6">
                        <div className="mb-2 flex items-center gap-3">
                          <h5 className="text-xl font-semibold text-slate-200">{stage.title}</h5>
                          <span className="text-xs text-slate-500">{stage.timeline}</span>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-400">{stage.description}</p>
                      </div>
                    </div>

                    {/* Divider */}
                    {i < stages.length - 1 && (
                      <div className="mt-6 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
                    )}
                  </motion.div>
                ))}
              </div>

              {/* What to Expect section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="relative mt-8 overflow-hidden rounded-2xl border border-blue-900/50 bg-gradient-to-br from-blue-950/50 to-cyan-950/30 p-6 backdrop-blur-sm"
              >
                <div className="relative">
                  <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-blue-400">
                    <Target className="h-4 w-4" />
                    What to Expect
                  </p>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {[
                      "Time-to-first demo: 4-5 wks",
                      "Rapid discovery sprint",
                      "Deployment: Cloud / On-prem",
                      "Fits your infra + policy",
                      "Quality gates: Eval + Safety",
                      "Accuracy, cost, latency budgets",
                    ].map((point, i) => (
                      <motion.div
                        key={point}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 + i * 0.05, duration: 0.3 }}
                        className="flex items-center gap-2 text-xs text-slate-300"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 text-blue-400" />
                        <span>{point}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Our Guarantee section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="relative mt-6 overflow-hidden rounded-2xl border border-indigo-900/50 bg-gradient-to-br from-indigo-950/50 to-blue-950/30 p-6 backdrop-blur-sm"
              >
                <div className="relative">
                  <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-indigo-400">
                    <Shield className="h-4 w-4" />
                    Our Guarantee
                  </p>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {[
                      "Measurable performance, not just demos",
                      "Evaluation harness + baseline comparisons",
                      "Safety filters + hallucination controls",
                      "Monitoring, alerts, and drift detection",
                      "Security-first architecture",
                      "Audit-ready documentation",
                      "Cost-optimized deployment",
                    ].map((point, i) => (
                      <motion.div
                        key={point}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.9 + i * 0.05, duration: 0.3 }}
                        className="flex items-center gap-2 text-xs text-slate-300"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 text-indigo-400" />
                        <span>{point}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* CSS keyframes for lightweight animations */}
      <style>{`
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.15); }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
      `}</style>
    </section>
  )
}