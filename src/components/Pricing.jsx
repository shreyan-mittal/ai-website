import { useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { fadeInUp, staggerContainer } from "./animations"

const misconceptionSets = [
  {
    title: "AI Myths, Simplified",
    subtitle: "Clear answers that help teams ship confidently.",
    cards: [
      {
        title: "AI is only for big tech.",
        reality:
          "Reality: Practical AI works in every sector—operations, finance, support, HR, manufacturing—wherever there’s repeatable decision-making.",
      },
      {
        title: "More tools = better AI.",
        reality:
          "Reality: Outcomes improve with the right data + evaluation + integration. Tooling is only useful when it fits your workflow and constraints.",
      },
      {
        title: "GenAI is plug-and-play.",
        reality:
          "Reality: Reliable systems need retrieval, guardrails, and monitoring—especially when accuracy and security matter.",
      },
    ],
  },
  {
    title: "Delivery & Trust",
    subtitle: "How we keep quality high in production.",
    cards: [
      {
        title: "Accuracy is the only metric.",
        reality:
          "Reality: Great AI balances accuracy, latency, and cost—plus adoption. We design for all four from day one.",
      },
      {
        title: "Deployment is the finish line.",
        reality:
          "Reality: Production AI needs drift checks, human feedback loops, and regular iteration—just like any mission-critical system.",
      },
      {
        title: "Security can be added later.",
        reality:
          "Reality: Security-first architecture (access control, data boundaries, audit trails) avoids expensive rework and compliance risk.",
      },
    ],
  },
]

const wrap = (min, max, v) => {
  const range = max - min
  return ((v - min) % range + range) % range + min
}

export function Engagement() {
  const [index, setIndex] = useState(0)
  const active = misconceptionSets[index]

  const go = (dir) => setIndex((prev) => wrap(0, misconceptionSets.length, prev + dir))

  const keyHandlers = useMemo(
    () => ({
      onKeyDown: (e) => {
        if (e.key === "ArrowLeft") go(-1)
        if (e.key === "ArrowRight") go(1)
      },
    }),
    []
  )

  return (
    <section
      id="insights"
      className="relative overflow-hidden bg-[#0b0d12] py-20 text-white"
      {...keyHandlers}
      tabIndex={0}
    >
      {/* Background gradients (match your hero palette) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.18),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_85%,rgba(6,182,212,0.14),transparent_45%)]" />
        <div className="absolute inset-0 opacity-[0.15] [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header (website-matching typography + spacing) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-3xl"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur"
          >
            What we help you understand
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="mt-6 text-balance text-4xl font-semibold leading-tight sm:text-5xl"
          >
            Clarity before code—so your AI actually works in production.
          </motion.h2>

          <motion.p variants={fadeInUp} className="mt-4 text-lg text-white/70">
            Teams get stuck on myths, tooling, and hype. We cut through it with practical guidance,
            then build systems that are measurable, secure, and scalable.
          </motion.p>
        </motion.div>

        {/* Carousel control bar (matches your “pill + buttons” style) */}
        <div className="relative mt-10 flex justify-center">
          <div className="w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
            <div className="flex items-center justify-between gap-4">
              <button
                onClick={() => go(-1)}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white/90 transition hover:bg-white/15"
                aria-label="Previous"
              >
                ←
              </button>

              <div className="flex-1 text-center">
                <p className="text-lg font-semibold text-white">{active.title}</p>
                <p className="mt-1 text-sm text-white/70">{active.subtitle}</p>
              </div>

              <button
                onClick={() => go(1)}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white/90 transition hover:bg-white/15"
                aria-label="Next"
              >
                →
              </button>
            </div>

            {/* Progress dots */}
            <div className="mt-4 flex items-center justify-center gap-2">
              {misconceptionSets.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    i === index ? "bg-white/80" : "bg-white/20 hover:bg-white/35"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Cards (your site card style + hover lift) */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 18 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-1 gap-6 md:grid-cols-3"
            >
              {active.cards.map((c, idx) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 + idx * 0.06, duration: 0.35, ease: "easeOut" }}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur"
                >
                  {/* soft hover glow */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.18),transparent_60%)] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="pointer-events-none absolute -left-16 -bottom-16 h-44 w-44 rounded-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.14),transparent_60%)] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

                  <h3 className="text-xl font-semibold leading-snug text-white">
                    {c.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-white/70">
                    {c.reality}
                  </p>

                  {/* bottom accent (subtle, matches palette) */}
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-indigo-400/60 via-blue-400/60 to-cyan-400/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
