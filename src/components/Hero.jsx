import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "./animations"
import { Brain, Sparkles, Zap, Network, Database, Cpu } from "lucide-react"

const floatingIcons = [
  { Icon: Brain, x: "10%", y: "18%", delay: 0.0, size: 56 },
  { Icon: Zap, x: "18%", y: "40%", delay: 0.2, size: 52 },

  { Icon: Sparkles, x: "90%", y: "22%", delay: 0.1, size: 54 },
  { Icon: Cpu, x: "82%", y: "44%", delay: 0.35, size: 52 },

  { Icon: Database, x: "14%", y: "78%", delay: 0.45, size: 54 },
  { Icon: Network, x: "90%", y: "76%", delay: 0.6, size: 56 },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0b0d12] pt-40 text-white">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.18),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.10),transparent_45%)]" />
      </div>

      {/* Floating Icons */}
      <div className="pointer-events-none absolute inset-0 z-10 hidden md:block">
        {floatingIcons.map(({ Icon, x, y, delay, size }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay }}
            className="absolute"
            style={{
              left: x,
              top: y,
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* float only (no opacity loop) */}
            <motion.div
              animate={{ y: -12 }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                delay,
              }}
              className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/10 backdrop-blur"
              style={{ width: size, height: size }}
            >
              <Icon className="h-6 w-6 text-white/85" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-20 mx-auto max-w-5xl px-6 text-center">
        {/* Text Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-6"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur"
          >
            Discover our AI Platform
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="max-w-4xl text-balance text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl"
          >
            One Platform for
            <br />
            <span className="text-white/90">End-to-End AI Solutions</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="max-w-2xl text-lg text-white/70"
          >
            We build, deploy, and scale secure AI systems including machine learning,
            automation, computer vision, and real-time intelligence.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-2 flex flex-wrap justify-center gap-3"
          >
            <a
              href="#contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-100"
            >
              Get Started
            </a>
            <a
              href="#solutions"
              className="rounded-full border border-white/20 px-6 py-3 text-sm text-white/80 transition hover:border-white hover:text-white"
            >
              How it Works
            </a>
          </motion.div>
        </motion.div>

        {/* Dashboard Preview (scroll-in animation, NO refs) */}
        <div className="relative mt-20">
          {/* glow */}
          <div className="pointer-events-none absolute inset-0 -z-10 mx-auto max-w-5xl rounded-2xl bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.18),transparent_65%)] blur-2xl" />

          <motion.div
            initial={{ opacity: 0, y: 70, scale: 0.96, rotate: 2 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl will-change-transform"
          >
            <div className="aspect-[16/9] w-full">
              <img
                src="/screen.png"
                alt="AI Platform Dashboard"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
