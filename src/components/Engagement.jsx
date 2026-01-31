import { useMemo, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { fadeInUp, staggerContainer } from "./animations"
import { Lightbulb, ChevronLeft, ChevronRight, Zap, CheckCircle2, XCircle } from "lucide-react"

const misconceptionSets = [
  {
    title: "AI Myths, Simplified",
    subtitle: "Clear answers that help teams ship confidently.",
    icon: Lightbulb,
    cards: [
      {
        title: "AI is only for big tech.",
        reality:
          "Practical AI works in every sector—operations, finance, support, HR, healthcare, and manufacturing—wherever decisions repeat and data exists.",
        gradient: "from-blue-500 to-cyan-500",
      },
      {
        title: "More tools = better AI.",
        reality:
          "Outcomes improve with the right data, evaluation, and integration. Tooling matters only when it fits your workflow and constraints.",
        gradient: "from-cyan-500 to-blue-600",
      },
      {
        title: "GenAI is plug-and-play.",
        reality:
          "Reliable systems need retrieval, guardrails, evals, and monitoring—especially when accuracy, privacy, and security matter.",
        gradient: "from-blue-600 to-indigo-600",
      },
    ],
  },
  {
    title: "Delivery & Trust",
    subtitle: "How we keep quality high in production.",
    icon: CheckCircle2,
    cards: [
      {
        title: "Accuracy is the only metric.",
        reality:
          "Great AI balances accuracy, latency, and cost—plus adoption. We design for all four from day one.",
        gradient: "from-indigo-500 to-blue-500",
      },
      {
        title: "Deployment is the finish line.",
        reality:
          "Production AI needs drift checks, human feedback loops, and regular iteration—just like any mission-critical system.",
        gradient: "from-blue-500 to-cyan-600",
      },
      {
        title: "Security can be added later.",
        reality:
          "Security-first architecture (access control, data boundaries, audit trails) avoids expensive rework and compliance risk.",
        gradient: "from-cyan-600 to-blue-600",
      },
    ],
  },
]

const wrap = (min, max, v) => {
  const range = max - min
  return ((((v - min) % range) + range) % range) + min
}

export function Engagement() {
  const [index, setIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const active = misconceptionSets[index]
  const Icon = active.icon

  const go = (dir) => {
    setIndex((prev) => wrap(0, misconceptionSets.length, prev + dir))
    setAutoplay(false) // Pause autoplay when user interacts
  }

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return
    const timer = setInterval(() => {
      setIndex((prev) => wrap(0, misconceptionSets.length, prev + 1))
    }, 6000)
    return () => clearInterval(timer)
  }, [autoplay, index])

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
      className="relative overflow-hidden bg-gradient-to-b from-[#07090f] via-[#0a0d14] to-[#07090f] py-32 text-white"
      {...keyHandlers}
      tabIndex={0}
    >
      {/* ENHANCED BACKGROUND - matching hero/testimonials */}
      <div className="pointer-events-none absolute inset-0">
        {/* Animated primary blue glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.32, 0.2],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 h-[700px] w-[700px]
                     rounded-full
                     bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.28),rgba(59,130,246,0.14)_40%,transparent_70%)]
                     blur-3xl"
        />

        {/* Animated cyan glow */}
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.16, 0.26, 0.16],
            x: [0, 40, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-1/4 h-[650px] w-[650px]
                     rounded-full
                     bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.22),rgba(34,211,238,0.11)_40%,transparent_70%)]
                     blur-3xl"
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.16]
                     [background-image:linear-gradient(to_right,rgba(148,163,184,0.1)_1px,transparent_1px),
                                          linear-gradient(to_bottom,rgba(148,163,184,0.1)_1px,transparent_1px)]
                     [background-size:64px_64px]
                     [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_85%)]"
        />

        {/* Light beams */}
        <motion.div
          animate={{
            opacity: [0.05, 0.14, 0.05],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(59,130,246,0.12),transparent_65%)]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* ENHANCED HEADER */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={fadeInUp} className="mb-4 flex items-center justify-center gap-2">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-400" />
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 
                           bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400 backdrop-blur-xl">
              <Lightbulb className="h-3.5 w-3.5" />
              What we help you understand
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-400" />
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="mt-4 text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
          >
            Clarity before code—so your AI{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              actually works in production
            </span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
            Teams get stuck on hype, tooling, and fragmented pilots. We bring practical guidance, 
            then build systems that are measurable, secure, and scalable.
          </motion.p>
        </motion.div>

        {/* ENHANCED CAROUSEL CONTROL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative mt-16 flex justify-center"
        >
          <div className="w-full max-w-4xl overflow-hidden rounded-3xl border border-white/15 
                        bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl
                        shadow-2xl shadow-black/20">
            <div className="relative p-6 sm:p-8">
              {/* Animated icon background */}
              <motion.div
                key={index}
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 opacity-10"
              >
                <Icon className="h-full w-full text-blue-400" />
              </motion.div>

              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                {/* Navigation buttons */}
                <motion.button
                  whileHover={{ scale: 1.05, x: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => go(-1)}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full
                           border border-white/20 bg-white/5 text-white/80 backdrop-blur-sm
                           transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/10 
                           hover:text-white hover:shadow-lg hover:shadow-blue-500/20"
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-5 w-5" />
                </motion.button>

                {/* Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 text-center"
                  >
                    <div className="mb-3 flex items-center justify-center gap-2">
                      <Icon className="h-5 w-5 text-blue-400" />
                      <p className="text-xl font-semibold text-white sm:text-2xl">{active.title}</p>
                    </div>
                    <p className="text-sm text-white/60 sm:text-base">{active.subtitle}</p>
                  </motion.div>
                </AnimatePresence>

                <motion.button
                  whileHover={{ scale: 1.05, x: 2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => go(1)}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full
                           border border-white/20 bg-white/5 text-white/80 backdrop-blur-sm
                           transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/10 
                           hover:text-white hover:shadow-lg hover:shadow-blue-500/20"
                  aria-label="Next"
                >
                  <ChevronRight className="h-5 w-5" />
                </motion.button>
              </div>

              {/* Enhanced Progress dots */}
              <div className="mt-6 flex items-center justify-center gap-2">
                {misconceptionSets.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setIndex(i)
                      setAutoplay(false)
                    }}
                    aria-label={`Go to slide ${i + 1}`}
                    className="group relative h-2 overflow-hidden rounded-full transition-all duration-300"
                  >
                    <div
                      className={`h-full transition-all duration-300 ${
                        i === index
                          ? "w-12 bg-gradient-to-r from-blue-400 to-cyan-400"
                          : "w-8 bg-white/20 group-hover:bg-white/40"
                      }`}
                    />
                    {i === index && autoplay && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 6, ease: "linear" }}
                        style={{ transformOrigin: "left" }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ENHANCED CARDS - Bento Style */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8"
            >
              {active.cards.map((card, idx) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    delay: 0.1 + idx * 0.08, 
                    duration: 0.5, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-3xl"
                >
                  <div className="relative h-full overflow-hidden rounded-3xl border border-white/15
                                bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8
                                shadow-2xl shadow-black/20 backdrop-blur-sm
                                transition-all duration-500
                                hover:border-white/25 hover:shadow-blue-500/10">
                    
                    {/* Animated gradient background on hover */}
                    <motion.div
                      initial={{ opacity: 0, scale: 1.5 }}
                      whileHover={{ opacity: 1, scale: 2 }}
                      transition={{ duration: 0.5 }}
                      className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl"
                      style={{
                        background: `radial-gradient(circle at center, rgba(59,130,246,0.2), transparent 70%)`,
                      }}
                    />

                    {/* Icon indicator */}
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl 
                               bg-gradient-to-br from-blue-500 to-cyan-500 p-0.5 shadow-lg shadow-blue-500/30"
                    >
                      <div className="flex h-full w-full items-center justify-center rounded-2xl bg-slate-900/90">
                        <XCircle className="h-5 w-5 text-blue-400" />
                      </div>
                    </motion.div>

                    {/* Myth title */}
                    <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-white/50">
                      Myth
                    </h3>
                    <h4 className="mb-6 text-xl font-semibold leading-tight text-white">
                      {card.title}
                    </h4>

                    {/* Reality */}
                    <div className="mb-4">
                      <div className="mb-3 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-400" />
                        <p className="text-sm font-medium uppercase tracking-wide text-green-400">
                          Reality
                        </p>
                      </div>
                      <p className="text-sm leading-relaxed text-white/70">
                        {card.reality}
                      </p>
                    </div>

                    {/* Bottom gradient accent */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`absolute inset-x-0 bottom-0 h-1 origin-left bg-gradient-to-r ${card.gradient}`}
                    />

                    {/* Border glow on hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-blue-400/20"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center text-sm text-white/40"
        >
          <p>Use arrow keys or click to navigate • {autoplay ? 'Auto-playing' : 'Paused'}</p>
        </motion.div>
      </div>

      {/* Decorative blur elements */}
      <div className="pointer-events-none absolute left-0 bottom-1/4 h-64 w-64 rounded-full 
                    bg-blue-500/5 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-64 w-64 rounded-full 
                    bg-cyan-500/5 blur-3xl" />
    </section>
  )
}