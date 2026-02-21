import { motion } from "framer-motion"
import { ArrowRight, Shield, Zap, Activity, BrainCircuit } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#07090f] pt-48 pb-44 text-white">

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-0 h-[800px] w-[800px] 
                     -translate-x-1/2 rounded-full 
                     bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.16),transparent_70%)] 
                     blur-3xl"
        />

        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.06]
                     [background-image:linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),
                                          linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)]
                     [background-size:64px_64px]
                     [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full 
                     border border-white/20 bg-white/5 
                     px-4 py-2 text-sm text-slate-300 backdrop-blur-xl"
        >
          <BrainCircuit className="h-4 w-4 text-blue-400" />
          Enterprise AI/ML Solutions
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl"
        >
          We Design & Deploy
          <br />
          <span className="bg-gradient-to-r from-slate-200 via-blue-200 to-slate-200 bg-clip-text text-transparent">
            AI Systems That Ship.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-8 max-w-2xl text-lg text-slate-400"
        >
          Enterprise-grade AI and machine learning solutions engineered for
          automation, intelligence, and real-world performance.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 flex justify-center gap-4"
        >
          <a
            href="#contact"
            className="group relative overflow-hidden rounded-full 
                       bg-gradient-to-r from-blue-600 to-cyan-600
                       px-8 py-4 text-sm font-semibold text-white
                       shadow-lg shadow-blue-900/40
                       transition-all duration-300
                       hover:shadow-xl hover:shadow-blue-600/30"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>

          <a
            href="#how-it-works"
            className="rounded-full border border-slate-700 
                       bg-slate-900/40 px-8 py-4 text-sm 
                       font-semibold text-slate-300 backdrop-blur-xl
                       transition hover:border-slate-600"
          >
            How It Works
          </a>
        </motion.div>

        {/* Trust Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-14 flex justify-center gap-10 text-sm text-slate-500"
        >
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-blue-400" />
            <span>AI at Scale</span>
          </div>

          <div className="h-4 w-px bg-slate-700" />

          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-blue-400" />
            <span>99.9% Uptime</span>
          </div>

          <div className="h-4 w-px bg-slate-700" />

          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-blue-400" />
            <span>Enterprise Security</span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}