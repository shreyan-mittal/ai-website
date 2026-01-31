import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Brain, Sparkles, Eye, Shield, Zap, Target, ArrowUpRight, Workflow, LineChart } from "lucide-react"
import { useState } from "react"

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

const services = [
  {
    id: "strategy",
    icon: Target,
    title: "AI Strategy & Roadmapping",
    description: "Identify high-impact AI opportunities, evaluate data readiness, and define a clear execution roadmap aligned with ROI.",
    gradient: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59, 130, 246, 0.3)",
    span: "md:col-span-3",
    featured: true,
  },
  {
    id: "genai",
    icon: Sparkles,
    title: "GenAI Apps & Agents",
    description: "Production-ready copilots, RAG systems, and autonomous workflows with safety guardrails.",
    gradient: "from-cyan-500 to-blue-500",
    glowColor: "rgba(34, 211, 238, 0.3)",
    span: "md:col-span-1",
  },
  {
    id: "models",
    icon: Brain,
    title: "Custom Model Development",
    description: "Domain-specific ML & LLM solutions optimized for accuracy, latency, and cost.",
    gradient: "from-blue-600 to-indigo-600",
    glowColor: "rgba(59, 130, 246, 0.3)",
    span: "md:col-span-1",
  },
  {
    id: "vision",
    icon: Eye,
    title: "Computer Vision Systems",
    description: "OCR, detection, and quality inspection pipelines for real-time visual intelligence.",
    gradient: "from-cyan-500 to-teal-500",
    glowColor: "rgba(34, 211, 238, 0.3)",
    span: "md:col-span-1",
  },
  {
    id: "automation",
    icon: Workflow,
    title: "Intelligent Automation",
    description: "Transform manual processes with AI-powered workflow automation, document processing, and decision engines.",
    gradient: "from-blue-500 to-indigo-500",
    glowColor: "rgba(59, 130, 246, 0.3)",
    span: "md:col-span-1",
  },
  {
    id: "analytics",
    icon: LineChart,
    title: "Predictive Analytics",
    description: "Forecast trends, detect anomalies, and optimize operations with advanced machine learning models.",
    gradient: "from-indigo-500 to-purple-500",
    glowColor: "rgba(99, 102, 241, 0.3)",
    span: "md:col-span-1",
  },
  {
    id: "governance",
    icon: Shield,
    title: "AI Governance & Safety",
    description: "Model evaluation, guardrails, compliance, and human-in-the-loop systems for enterprise AI.",
    gradient: "from-indigo-600 to-blue-600",
    glowColor: "rgba(79, 70, 229, 0.3)",
    span: "md:col-span-1",
  },
]

/* ---------------- Component ---------------- */
export function ServicesBento() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-32 text-slate-900">
      {/* Enhanced ambient background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Primary blue gradient */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full 
                     bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2),transparent_65%)] blur-3xl"
        />
        
        {/* Secondary cyan gradient */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-48 right-1/4 h-[500px] w-[500px] rounded-full 
                     bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.18),transparent_65%)] blur-3xl"
        />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.4]
                     [background-image:linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),
                                          linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)]
                     [background-size:64px_64px]
                     [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Enhanced Heading */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-24 text-center"
        >
          <motion.div variants={item} className="mb-4 flex items-center justify-center gap-2">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-500" />
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-600 ring-1 ring-blue-100">
              <Zap className="h-3.5 w-3.5" />
              Services
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-500" />
          </motion.div>

          <motion.h2
            variants={item}
            className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            AI services engineered for
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              scale and impact
            </span>
          </motion.h2>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl"
          >
            From strategy to production — we design, build, and deploy
            AI systems that deliver measurable outcomes.
          </motion.p>
        </motion.div>

        {/* ENHANCED BENTO GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid auto-rows-[280px] grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6"
        >
          {services.map((service) => (
            <BentoCard key={service.id} service={service} variants={item} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 
                       px-8 py-4 text-base font-semibold text-white shadow-xl shadow-blue-600/25 
                       transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/40 hover:scale-105"
          >
            Let's Build Together
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

/* ---------------- Enhanced Bento Card with 3D tilt effect ---------------- */
function BentoCard({ service, variants }) {
  const [isHovered, setIsHovered] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 150,
    damping: 20,
  })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 150,
    damping: 20,
  })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    mouseX.set(0)
    mouseY.set(0)
  }

  const Icon = service.icon

  return (
    <motion.div
      variants={variants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: service.featured ? 0 : rotateX,
        rotateY: service.featured ? 0 : rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`group relative overflow-hidden rounded-3xl
                  ${service.span}
                  perspective-1000`}
    >
      <motion.div
        whileHover={{ y: service.featured ? -4 : -8 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative h-full overflow-hidden rounded-3xl border border-slate-200/80
                   bg-white p-8 shadow-lg shadow-slate-900/5
                   transition-all duration-500
                   hover:border-slate-300/80 hover:shadow-2xl hover:shadow-slate-900/10"
      >
        {/* Animated gradient background on hover */}
        <motion.div
          animate={isHovered ? { opacity: 1, scale: 1.5 } : { opacity: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle at center, ${service.glowColor}, transparent 70%)`,
          }}
        />

        {/* Subtle mesh gradient overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            backgroundImage: `linear-gradient(135deg, ${service.glowColor} 0%, transparent 50%)`,
          }}
        />

        {/* Icon with gradient background */}
        <motion.div
          animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
          transition={{ duration: 0.3 }}
          className={`relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl
                     bg-gradient-to-br ${service.gradient} shadow-lg`}
        >
          <Icon className="h-7 w-7 text-white" />
          
          {/* Icon glow effect */}
          <motion.div
            animate={isHovered ? { opacity: 0.6, scale: 1.5 } : { opacity: 0, scale: 1 }}
            transition={{ duration: 0.3 }}
            className={`absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br ${service.gradient} blur-xl`}
          />
        </motion.div>

        {/* Content */}
        <div className="relative">
          <h3 className={`font-semibold leading-tight text-slate-900 ${
            service.featured ? 'text-2xl sm:text-3xl' : 'text-xl'
          }`}>
            {service.title}
          </h3>
          
          <p className={`mt-3 leading-relaxed text-slate-600 ${
            service.featured ? 'text-base sm:text-lg max-w-2xl' : 'text-sm'
          }`}>
            {service.description}
          </p>

          {service.featured && (
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className={`mt-6 h-1 w-32 origin-left rounded-full bg-gradient-to-r ${service.gradient}`}
            />
          )}
        </div>

        {/* Hover arrow indicator for non-featured cards */}
        {!service.featured && (
          <motion.div
            animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-8 right-8"
          >
            <div className={`flex h-10 w-10 items-center justify-center rounded-full 
                           bg-gradient-to-br ${service.gradient} shadow-lg`}>
              <ArrowUpRight className="h-5 w-5 text-white" />
            </div>
          </motion.div>
        )}

        {/* Border glow effect */}
        <motion.div
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset"
          style={{
            background: `linear-gradient(135deg, ${service.glowColor}, transparent)`,
          }}
        />

        {/* Shimmer effect on hover */}
        <motion.div
          animate={isHovered ? { x: ['0%', '200%'] } : { x: '-100%' }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: isHovered ? Infinity : 0,
            repeatDelay: 1,
          }}
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r 
                     from-transparent via-white/10 to-transparent"
          style={{
            maskImage: 'linear-gradient(90deg, transparent, black, transparent)',
          }}
        />
      </motion.div>
    </motion.div>
  )
}