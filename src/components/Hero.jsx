import { motion, useScroll, useTransform } from "framer-motion"
import { fadeInUp, staggerContainer } from "./animations"
import { Brain, Sparkles, Zap, Network, Database, Cpu, ArrowRight, Play, Shield, TrendingUp } from "lucide-react"
import { useState } from "react"
import dashboardImg from "../assets/screen.png"


const floatingIcons = [
  { Icon: Brain, x: "10%", y: "18%", delay: 0.0, size: 56, rotation: 5 },
  { Icon: Zap, x: "18%", y: "40%", delay: 0.2, size: 52, rotation: -8 },
  { Icon: Sparkles, x: "90%", y: "22%", delay: 0.1, size: 54, rotation: 12 },
  { Icon: Cpu, x: "82%", y: "44%", delay: 0.35, size: 52, rotation: -5 },
  { Icon: Database, x: "14%", y: "78%", delay: 0.45, size: 54, rotation: 8 },
  { Icon: Network, x: "90%", y: "76%", delay: 0.6, size: 56, rotation: -10 },
]

export function Hero() {
  const [isHovering, setIsHovering] = useState(false)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3])

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#07090f] via-[#0a0d14] to-[#07090f] pt-40 pb-24 text-white">
      {/* ENHANCED BACKGROUND - Blue/Cyan only */}
      <div className="pointer-events-none absolute inset-0">
        {/* Animated primary blue glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-48 left-1/2 h-[800px] w-[800px]
                     -translate-x-1/2 rounded-full
                     bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.28),rgba(59,130,246,0.15)_40%,transparent_70%)]
                     blur-3xl"
        />

        {/* Animated secondary cyan glow */}
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.16, 0.28, 0.16],
            x: [0, 60, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-56 left-1/4 h-[700px] w-[700px]
                     rounded-full
                     bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.22),rgba(34,211,238,0.12)_40%,transparent_70%)]
                     blur-3xl"
        />

        {/* Additional teal accent */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [-30, 30, -30],
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/3 right-1/4 h-[500px] w-[500px]
                     rounded-full
                     bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.18),rgba(20,184,166,0.08)_40%,transparent_70%)]
                     blur-3xl"
        />

        {/* Enhanced grid with multiple layers */}
        <div
          className="absolute inset-0 opacity-[0.18]
                     [background-image:linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),
                                          linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)]
                     [background-size:64px_64px]
                     [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_90%)]"
        />

        {/* Secondary finer grid */}
        <div
          className="absolute inset-0 opacity-[0.08]
                     [background-image:linear-gradient(to_right,rgba(59,130,246,0.15)_1px,transparent_1px),
                                          linear-gradient(to_bottom,rgba(59,130,246,0.15)_1px,transparent_1px)]
                     [background-size:32px_32px]
                     [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"
        />

        {/* Animated light beams */}
        <motion.div
          animate={{
            opacity: [0.05, 0.15, 0.05],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_60%)]"
        />

        {/* Diagonal light rays */}
        <motion.div
          animate={{
            opacity: [0.02, 0.08, 0.02],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-[linear-gradient(135deg,transparent_40%,rgba(59,130,246,0.06)_50%,transparent_60%)]"
        />
      </div>

      {/* Floating Icons with dynamic animations */}
      <div className="pointer-events-none absolute inset-0 z-10 hidden md:block">
        {floatingIcons.map(({ Icon, x, y, delay, size, rotation }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5, rotate: rotation - 20 }}
            animate={{ opacity: 1, scale: 1, rotate: rotation }}
            transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
            className="absolute"
            style={{
              left: x,
              top: y,
              transform: "translate(-50%, -50%)",
            }}
          >
            <motion.div
              animate={{
                y: [-16, 16, -16],
                rotate: [rotation, rotation + 8, rotation],
              }}
              transition={{
                duration: 5 + i * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay,
              }}
              whileHover={{ scale: 1.2, rotate: rotation + 15 }}
              className="group relative flex items-center justify-center rounded-2xl 
                         border border-white/20 bg-gradient-to-br from-white/20 via-white/10 to-white/5 
                         backdrop-blur-xl shadow-2xl transition-all duration-500
                         hover:border-blue-400/50 hover:shadow-blue-500/30 hover:shadow-2xl"
              style={{ width: size, height: size }}
            >
              {/* Multi-layer glow effect - blue/cyan only */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-cyan-500/0 to-blue-500/0 
                            opacity-0 transition-opacity duration-500 group-hover:opacity-30 blur-2xl" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/0 to-cyan-400/0 
                            opacity-0 transition-opacity duration-500 group-hover:opacity-20 blur-xl" />
              
              <Icon className="relative h-7 w-7 text-white/90 transition-all duration-500 
                             group-hover:text-blue-200 group-hover:scale-110
                             group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,1)]" />
              
              {/* Pulse ring on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-blue-400/0 group-hover:border-blue-400/40"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Enhanced particle effects - blue/cyan only */}
      <div className="pointer-events-none absolute inset-0 z-5">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() > 0.5 ? '2px' : '3px',
              height: Math.random() > 0.5 ? '2px' : '3px',
              background: i % 2 === 0 ? 'rgba(59,130,246,0.4)' : 'rgba(34,211,238,0.4)',
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 2, 0],
              y: [0, -100],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes - blue/cyan only */}
      <div className="pointer-events-none absolute inset-0 z-5 hidden lg:block">
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-[15%] top-[60%] h-32 w-32 rounded-2xl border border-blue-400/20 bg-blue-500/5 backdrop-blur-sm"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            rotate: [0, -180, -360],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute right-[12%] top-[55%] h-24 w-24 rounded-full border border-cyan-400/20 bg-cyan-500/5 backdrop-blur-sm"
        />
      </div>

      {/* CONTENT */}
      <motion.div 
        className="relative z-20 mx-auto max-w-5xl px-6 text-center"
        style={{ y, opacity }}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-6"
        >
          {/* Professional badge - refined */}
          <motion.span
            variants={fadeInUp}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full 
                       border border-white/25 bg-gradient-to-r from-white/15 via-white/10 to-white/15 
                       px-4 py-2 text-sm text-white/90 backdrop-blur-xl
                       transition-all duration-500 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-500/20"
          >
            {/* Animated border glow */}
            <motion.div
              className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.5), transparent)',
              }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            <Sparkles className="relative z-10 h-4 w-4 text-blue-400" />
            <span className="relative z-10">Enterprise AI/ML Solutions</span>

            
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ translateX: ['100%', '-100%'] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
            />
          </motion.span>

          {/* PROFESSIONAL HEADING - refined gradients */}
          <motion.h1
            variants={fadeInUp}
            className="max-w-4xl text-balance text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl"
          >
            We Design & Deploy
            <br />
            <span className="relative inline-block mt-2">
              {/* Professional gradient text - subtle and refined */}
              <span className="bg-gradient-to-r from-slate-200 via-blue-100 to-slate-200 bg-clip-text text-transparent">
              AI Systems That Actually Ship.
              </span>
              
              {/* Refined underline - thin and elegant */}
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-blue-500/0 via-blue-500/60 to-blue-500/0"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              />
            </span>
          </motion.h1>

          {/* Professional description */}
          <motion.p
            variants={fadeInUp}
            className="max-w-2xl text-lg leading-relaxed text-slate-400"
          >
          Enterprise-grade AI and Machine learning solutions for automation, intelligence, and scale.
          </motion.p>

          {/* Professional CTA buttons - refined */}
          <motion.div
            variants={fadeInUp}
            className="mt-2 flex flex-wrap justify-center gap-3"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-full 
                         bg-gradient-to-r from-blue-600 to-blue-700
                         px-7 py-3.5 text-sm font-semibold text-white 
                         shadow-lg shadow-blue-900/50
                         transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/60"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
              
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.a>

            <motion.a
              href="#solutions"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-full 
                         border border-slate-700/50 bg-slate-900/40 
                         px-7 py-3.5 text-sm font-semibold text-slate-300 backdrop-blur-xl
                         transition-all duration-300 hover:border-slate-600/50 hover:bg-slate-900/60"
            >
              <span className="relative z-10 flex items-center gap-2">
                How it Works
                <Play className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110" />
              </span>
            </motion.a>
          </motion.div>

          {/* Professional trust indicators - refined */}
          <motion.div
            variants={fadeInUp}
            className="mt-6 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500"
          >
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="h-1.5 w-1.5 rounded-full bg-emerald-500"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span className="font-medium text-slate-400">99.9% Uptime</span>
            </motion.div>
            
            <div className="h-4 w-px bg-slate-700/50" />
            
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <Zap className="h-4 w-4 text-slate-500" />
              <span className="font-medium text-slate-400">AI Systems at Scale</span>
            </motion.div>
            
            <div className="h-4 w-px bg-slate-700/50" />
            
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <Shield className="h-4 w-4 text-slate-500" />
              <span className="font-medium text-slate-400">Enterprise Security</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* PROFESSIONAL Dashboard Preview */}
        <div className="relative mt-20">
          {/* Refined glows - more subtle */}
          <div
            className="pointer-events-none absolute inset-0 -z-10 mx-auto max-w-5xl
                       rounded-3xl
                       bg-[radial-gradient(ellipse_at_50%_50%,rgba(59,130,246,0.15),transparent_75%)]
                       blur-3xl"
            style={{ transform: 'scale(1.1)' }}
          />

          <motion.div
            initial={{ opacity: 0, y: 70, scale: 0.96, rotateX: 5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="group relative mx-auto max-w-5xl"
          >
            {/* Subtle decorative glow */}
            <motion.div
              className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              animate={isHovering ? { y: -8, scale: 1.01 } : { y: 0, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative overflow-hidden rounded-2xl 
                         border border-slate-800/50 
                         bg-gradient-to-br from-slate-900/50 via-slate-900/30 to-slate-900/50 
                         p-1 shadow-2xl shadow-black/40 backdrop-blur-sm
                         transition-all duration-500 
                         group-hover:border-slate-700/50 
                         group-hover:shadow-blue-900/20
                         will-change-transform"
            >
              <div className="relative overflow-hidden rounded-xl bg-white">
                <div className="aspect-[16/9] w-full">
                  <motion.img
                    src={dashboardImg}
                    alt="AI Platform Dashboard"
                    className="h-full w-full object-cover transition-transform duration-700 
                             group-hover:scale-[1.02]"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Refined corner accents - minimal and professional */}
              <motion.div
                className="absolute top-3 left-3 h-16 w-16 border-l border-t border-slate-600/40 rounded-tl-2xl
                          opacity-0 transition-all duration-500 group-hover:opacity-100"
              />
              <motion.div
                className="absolute bottom-3 right-3 h-16 w-16 border-r border-b border-slate-600/40 rounded-br-2xl
                          opacity-0 transition-all duration-500 group-hover:opacity-100"
              />
            </motion.div>

            {/* Professional floating labels - refined */}
            <motion.div
              initial={{ opacity: 0, x: -30, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ scale: 1.05, x: -5 }}
              className="absolute -left-12 top-1/4 hidden lg:block"
            >
              <div className="group relative overflow-hidden rounded-xl 
                            border border-slate-800/50 bg-slate-900/90 
                            px-4 py-3 backdrop-blur-xl shadow-lg shadow-black/20">
                <div className="relative flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-blue-400" />
                  <p className="text-xs font-medium text-slate-300">Real-time Analytics</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
              whileHover={{ scale: 1.05, x: 5 }}
              className="absolute -right-12 top-1/2 hidden lg:block"
            >
              <div className="group relative overflow-hidden rounded-xl 
                            border border-slate-800/50 bg-slate-900/90 
                            px-4 py-3 backdrop-blur-xl shadow-lg shadow-black/20">
                <div className="relative flex items-center gap-2">
                  <Brain className="h-4 w-4 text-cyan-400" />
                  <p className="text-xs font-medium text-slate-300">AI-Powered Insights</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: 5 }}
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 hidden lg:block"
            >
              <div className="group relative overflow-hidden rounded-xl 
                            border border-slate-800/50 bg-slate-900/90 
                            px-4 py-3 backdrop-blur-xl shadow-lg shadow-black/20">
                <div className="relative flex items-center gap-2">
                  <Database className="h-4 w-4 text-blue-400" />
                  <p className="text-xs font-medium text-slate-300">Secure Data Processing</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}