import { useMemo } from "react"
import { motion } from "framer-motion"
import { cardVariant, fadeInUp, staggerContainer } from "./animations"

const services = [
  {
    title: "AI Strategy & Roadmapping",
    description: "Define high-impact use-cases, data readiness, and an execution plan aligned to ROI.",
    icon: "🧭",
  },
  {
    title: "Custom Model Development",
    description: "Build and fine-tune ML/LLM solutions for your domain—accuracy, latency, and cost optimized.",
    icon: "🧠",
  },
  {
    title: "GenAI Apps & Agents",
    description: "Production-grade copilots, RAG systems, and autonomous workflows with guardrails.",
    icon: "🤖",
  },
  {
    title: "Computer Vision Systems",
    description: "Detection, OCR, and quality inspection pipelines for real-time visual intelligence.",
    icon: "👁️",
  },
  {
    title: "MLOps & Deployment",
    description: "CI/CD for models, monitoring, drift detection, and scalable serving across environments.",
    icon: "🚀",
  },
  {
    title: "Data Engineering",
    description: "Pipelines, warehouses, and feature stores to power reliable, secure AI at scale.",
    icon: "🗄️",
  },
]

// Extra animation variants (JSX-safe)
const headingWrap = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

const floaty = (i) => ({
  y: [0, -6, 0],
  rotate: [0, i % 2 === 0 ? 1 : -1, 0],
  transition: {
    duration: 3.2 + i * 0.15,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
  },
})

const shimmerSweep = {
  hidden: { opacity: 0, x: "-140%" },
  show: {
    opacity: [0, 1, 0],
    x: ["-140%", "140%", "140%"],
    transition: { duration: 1.4, ease: "easeInOut" },
  },
}

export function Services() {
  const delays = useMemo(() => services.map((_, i) => 0.05 + i * 0.06), [])

  return (
    <section id="services" className="relative overflow-hidden bg-slate-50 py-20 text-slate-900">
      {/* Ambient background blobs + grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.16),transparent_60%)] blur-2xl" />
        <div className="absolute -bottom-40 left-16 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.14),transparent_60%)] blur-2xl" />
        <div className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] [background-size:56px_56px]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6">
        {/* Heading */}
        <motion.div
          variants={headingWrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center"
        >
          <motion.span variants={fadeInUp} className="text-sm font-medium text-blue-600">
            Services
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="mt-3 text-balance text-3xl font-semibold leading-tight sm:text-4xl"
          >
            End-to-end AI services built for real-world delivery
          </motion.h2>

          <motion.p variants={fadeInUp} className="mt-4 text-lg text-slate-600">
            From discovery to deployment—secure, scalable, and engineered for measurable outcomes.
          </motion.p>

          {/* Animated underline */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 220, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto mt-6 h-[2px] rounded-full bg-gradient-to-r from-blue-500/60 via-indigo-500/60 to-cyan-500/60"
          />
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={cardVariant}
              transition={{ delay: delays[i] }}
              whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm [transform-style:preserve-3d]"
            >
              {/* Shimmer sweep on hover */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100"
                variants={shimmerSweep}
                initial="hidden"
                whileHover="show"
              />

              {/* soft gradient wash */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-24 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_60%)] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
              />

              {/* Icon row */}
              <div className="mb-4 flex items-center gap-3">
                <motion.div
                  animate={floaty(i)}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-lg"
                >
                  {service.icon}
                </motion.div>

                {/* pulse dot */}
                <motion.span
                  aria-hidden
                  className="relative inline-flex h-2.5 w-2.5"
                  initial={{ opacity: 0.6 }}
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.12 }}
                >
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400/40" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-500/70" />
                </motion.span>
              </div>

              <h3 className="text-lg font-semibold text-slate-900 transition-colors duration-200 group-hover:text-slate-950">
                {service.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>

              {/* Bottom gradient bar */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500/70 via-indigo-500/70 to-cyan-500/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Border glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition duration-300 group-hover:ring-blue-500/20"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
