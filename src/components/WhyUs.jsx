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
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-32 text-slate-900"
    >
      {/* Enhanced ambient background */}
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
          className="absolute -top-40 right-1/4 h-[600px] w-[600px] rounded-full 
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

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.3]
                     [background-image:linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),
                                          linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)]
                     [background-size:64px_64px]
                     [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]"
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
          {/* LEFT CONTENT - Enhanced */}
          <motion.div variants={item} className="flex-1 space-y-6">
            {/* Enhanced badge */}
            <motion.div className="flex items-center gap-2">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-500" />
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-600 ring-1 ring-blue-100">
                <Sparkles className="h-3.5 w-3.5" />
                Why Us
              </span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-500" />
            </motion.div>

            <motion.h3
              variants={item}
              className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-5xl"
            >
              Enterprise grade AI delivery 
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                from strategy to production
              </span>
            </motion.h3>

            <motion.p variants={item} className="text-lg leading-relaxed text-slate-600 sm:text-xl">
              We design, build, and deploy secure AI systems that ship fast and scale reliably. From GenAI to Computer Vision and automation, we focus on measurable outcomes—accuracy, latency, cost, and adoption.
            </motion.p>

            {/* Enhanced bullet list - FIXED ICONS */}
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
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                    className="group flex items-start gap-3 rounded-xl border border-slate-200/80 bg-white p-4 
                             shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-md hover:shadow-blue-100/50"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/20 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="flex-1 pt-1.5 text-sm leading-relaxed text-slate-700">{bullet.text}</span>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT - Enhanced Delivery Playbook */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex-1 lg:sticky lg:top-24"
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xl shadow-slate-900/5 transition-all duration-500 hover:border-slate-300/80 hover:shadow-2xl hover:shadow-slate-900/10"
            >
              {/* Animated gradient background on hover */}
              <motion.div
                initial={{ opacity: 0, scale: 1 }}
                whileHover={{ opacity: 1, scale: 1.5 }}
                transition={{ duration: 0.5 }}
                className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full blur-3xl"
                style={{
                  background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.15), transparent 70%)',
                }}
              />

              {/* Header */}
              <div className="relative mb-8 flex items-start justify-between">
                <div>
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-3 py-1 text-xs font-semibold text-white shadow-lg shadow-blue-500/30">
                    <Clock className="h-3 w-3" />
                    Delivery Playbook
                  </div>
                  <p className="mt-2 text-sm text-slate-600">A repeatable system for shipping AI</p>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-3 py-1.5">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-semibold text-green-700">Production-ready</span>
                </div>
              </div>

              {/* Stages */}
              <div className="relative space-y-6">
                {stages.map((stage, i) => {
                  const Icon = stage.icon
                  return (
                    <motion.div
                      key={stage.number}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                      className="group/stage relative"
                    >
                      <div className="flex gap-4">
                        {/* Number badge with gradient */}
                        <div className="relative flex-shrink-0">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${stage.gradient} p-0.5 shadow-lg`}
                          >
                            <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white">
                              <span className={`text-2xl font-bold bg-gradient-to-br ${stage.gradient} bg-clip-text text-transparent`}>
                                {stage.number}
                              </span>
                            </div>
                          </motion.div>
                          
                          {/* Connecting line */}
                          {i < stages.length - 1 && (
                            <div className="absolute left-1/2 top-16 h-8 w-0.5 -translate-x-1/2 bg-gradient-to-b from-slate-300 to-transparent" />
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 pb-6">
                          <div className="mb-2 flex items-center gap-3">
                            <h5 className="text-xl font-semibold text-slate-900">{stage.title}</h5>
                            <span className="text-xs text-slate-500">{stage.timeline}</span>
                          </div>
                          <p className="text-sm leading-relaxed text-slate-600">{stage.description}</p>
                        </div>
                      </div>

                      {/* Divider */}
                      {i < stages.length - 1 && (
                        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                      )}
                    </motion.div>
                  )
                })}
              </div>

              {/* What to Expect section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="relative mt-8 overflow-hidden rounded-2xl border border-blue-200/60 bg-gradient-to-br from-blue-50 to-cyan-50/30 p-6"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-400/20 blur-2xl" />
                
                <div className="relative">
                  <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-blue-700">
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
                        className="flex items-center gap-2 text-xs text-slate-700"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 text-blue-600" />
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
                className="relative mt-6 overflow-hidden rounded-2xl border border-indigo-200/60 bg-gradient-to-br from-indigo-50 to-blue-50/30 p-6"
              >
                <div className="pointer-events-none absolute -left-12 -bottom-12 h-32 w-32 rounded-full bg-indigo-400/20 blur-2xl" />
                
                <div className="relative">
                  <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-indigo-700">
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
                        className="flex items-center gap-2 text-xs text-slate-700"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 text-indigo-600" />
                        <span>{point}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Border glow effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-blue-500/20"
              />

              {/* Shimmer effect on hover */}
              <motion.div
                initial={{ x: '-100%' }}
                whileHover={{ x: ['0%', '200%'] }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                style={{
                  maskImage: 'linear-gradient(90deg, transparent, black, transparent)',
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="pointer-events-none absolute left-0 bottom-1/4 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-64 w-64 rounded-full bg-cyan-500/5 blur-3xl" />
    </section>
  )
}