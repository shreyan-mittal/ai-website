import { motion } from "framer-motion"
import { Home, ArrowLeft, Search, MessageCircle, AlertTriangle } from "lucide-react"

const container = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export function NotFound() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#07090f] via-[#0a0d14] to-[#07090f] text-white">

      {/* Static Background (No animation, lighter glows) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full 
                        bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_70%)] blur-3xl" />

        <div className="absolute inset-0 opacity-[0.08]
                        [background-image:linear-gradient(to_right,rgba(148,163,184,0.1)_1px,transparent_1px),
                                             linear-gradient(to_bottom,rgba(148,163,184,0.1)_1px,transparent_1px)]
                        [background-size:72px_72px]
                        [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-4xl text-center"
        >

          {/* Error Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/15 px-4 py-2 text-sm font-medium text-red-300 backdrop-blur-xl">
            <AlertTriangle className="h-4 w-4" />
            Error 404
          </div>

          {/* Large 404 (cleaner gradient, no heavy filter) */}
          <h1 className="mb-6 text-[8rem] font-semibold leading-none tracking-tight sm:text-[12rem] lg:text-[14rem] bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            404
          </h1>

          {/* Heading */}
          <h2 className="mb-4 text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Page not found
          </h2>

          {/* Description */}
          <p className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            The page may have been moved, deleted, or the URL might be incorrect.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">

            {/*  Gradient Primary Button (UNCHANGED STYLE) */}
            <motion.a
              href="/"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 
                         px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-blue-600/40
                         transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Home className="h-5 w-5" />
                Go to Homepage
              </span>

              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.a>

            {/* Secondary Button */}
            <motion.button
              onClick={() => window.history.back()}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white/80 backdrop-blur-xl transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:text-white"
            >
              <span className="flex items-center gap-2">
                <ArrowLeft className="h-5 w-5" />
                Go Back
              </span>
            </motion.button>

            {/* Tertiary */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white/80 backdrop-blur-xl transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-500/20 hover:text-white"
            >
              <span className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Contact Support
              </span>
            </motion.a>

          </div>

        </motion.div>
      </div>
    </div>
  )
}