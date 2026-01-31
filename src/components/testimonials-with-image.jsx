import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote, Star, ArrowLeft, ArrowRight, Play, Pause } from "lucide-react"

/* ---------------- Variants ---------------- */

const sectionFade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

const imageWrap = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

const textSwap = {
  initial: { opacity: 0, y: 20, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -20, filter: "blur(10px)" },
}

/* ---------------- Data ---------------- */

const offsets = [
  { rotate: -8, x: -24, y: 20, scale: 0.94, opacity: 0.4, blur: 2 },
  { rotate: 0, x: 0, y: 0, scale: 1, opacity: 1, blur: 0 },
  { rotate: 8, x: 24, y: 20, scale: 0.94, opacity: 0.4, blur: 2 },
]

const testimonials = [
  {
    id: 1,
    name: "Amit Verma",
    designation: "CTO, Fintech Startup",
    company: "PayTech Solutions",
    quote:
      "Their AI solutions helped us automate critical workflows and reduce manual effort by over 40%. The ROI was visible within the first quarter.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Neha Sharma",
    designation: "Product Manager",
    company: "CloudScale SaaS",
    quote:
      "Very strong technical understanding and execution. The team delivers exactly what they promise, on time and with exceptional quality.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Rahul Mehta",
    designation: "Founder & CEO",
    company: "ShopFast E-commerce",
    quote:
      "From idea to deployment, the experience was smooth and professional. They transformed our vision into a production-ready AI system.",
    img: "https://randomuser.me/api/portraits/men/76.jpg",
    rating: 5,
  },
]

/* ---------------- Component ---------------- */

export function TestimonialsStacked() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = () => setIndex((i) => (i + 1) % testimonials.length)
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  // Autoplay (4s)
  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 4000)
    return () => clearInterval(id)
  }, [paused, index])

  const visible = [
    testimonials[(index - 1 + testimonials.length) % testimonials.length],
    testimonials[index],
    testimonials[(index + 1) % testimonials.length],
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#07090f] via-[#0a0d14] to-[#07090f] py-32 text-white">
      {/* ENHANCED BACKGROUND - matching hero section */}
      <div className="pointer-events-none absolute inset-0">
        {/* Animated primary blue glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.18, 0.28, 0.18],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-48 right-1/4 h-[700px] w-[700px]
                     rounded-full
                     bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),rgba(59,130,246,0.12)_40%,transparent_70%)]
                     blur-3xl"
        />

        {/* Animated cyan glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-56 left-1/3 h-[600px] w-[600px]
                     rounded-full
                     bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.2),rgba(34,211,238,0.1)_40%,transparent_70%)]
                     blur-3xl"
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.15]
                     [background-image:linear-gradient(to_right,rgba(148,163,184,0.1)_1px,transparent_1px),
                                          linear-gradient(to_bottom,rgba(148,163,184,0.1)_1px,transparent_1px)]
                     [background-size:64px_64px]
                     [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_90%)]"
        />

        {/* Light beams */}
        <motion.div
          animate={{
            opacity: [0.04, 0.12, 0.04],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_60%)]"
        />
      </div>

      <motion.div
        variants={sectionFade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative mx-auto max-w-7xl px-6"
      >
        {/* ENHANCED HEADING */}
        <motion.div variants={fadeUp} className="mb-20 text-center">
          <motion.div className="mb-4 flex items-center justify-center gap-2">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-400" />
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 
                           bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400 backdrop-blur-xl">
              <Quote className="h-3.5 w-3.5" />
              Testimonials
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-400" />
          </motion.div>

          <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            What our clients say about
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              working with us
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
            Trusted by founders, product leaders, and engineering teams building
            real-world AI systems that scale.
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:gap-20 items-center">
          {/* LEFT — ENHANCED STACKED CARDS */}
          <motion.div
            variants={imageWrap}
            className="relative mx-auto h-[420px] w-[340px] lg:h-[480px] lg:w-[380px]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Glow effect behind cards */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-3xl" />

            {visible.map((item, i) => (
              <motion.div
                key={item.id}
                className="absolute inset-0"
                animate={{
                  rotate: offsets[i].rotate,
                  x: offsets[i].x,
                  y: offsets[i].y,
                  scale: offsets[i].scale,
                  opacity: offsets[i].opacity,
                  zIndex: i === 1 ? 10 : 1,
                  filter: `blur(${offsets[i].blur}px)`,
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Card container with gradient border */}
                <div className="relative h-full w-full rounded-3xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-[2px]">
                  <div className="relative h-full w-full overflow-hidden rounded-3xl bg-slate-900/90 backdrop-blur-xl">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                    
                    {/* Overlay gradient on center card */}
                    {i === 1 && (
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                    )}
                    
                    {/* Name badge on center card */}
                    {i === 1 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="absolute bottom-6 left-6 right-6"
                      >
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                          <h4 className="font-semibold text-white">{item.name}</h4>
                          <p className="mt-1 text-sm text-white/60">{item.company}</p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Shadow for center card */}
                {i === 1 && (
                  <div className="absolute inset-0 -z-10 rounded-3xl bg-blue-500/20 blur-2xl" />
                )}
              </motion.div>
            ))}

            {/* Autoplay indicator */}
            <motion.div
              className="absolute -bottom-12 left-1/2 flex -translate-x-1/2 items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className="group relative h-2 w-2"
                >
                  <div
                    className={`h-full w-full rounded-full transition-all duration-300 ${
                      i === index
                        ? "bg-blue-400 w-8"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                </button>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — ENHANCED TEXT */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[index].id}
                variants={textSwap}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Quote icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl 
                           bg-gradient-to-br from-blue-500 to-cyan-500 shadow-xl shadow-blue-500/30"
                >
                  <Quote className="h-8 w-8 text-white" />
                </motion.div>

                {/* Rating stars */}
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonials[index].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                    >
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote text */}
                <p className="mb-8 max-w-xl text-xl leading-relaxed text-white/90 lg:text-2xl">
                  "{testimonials[index].quote}"
                </p>

                {/* Author info */}
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-blue-500/50 to-transparent" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {testimonials[index].name}
                    </h3>
                    <p className="mt-1 text-sm text-white/60">
                      {testimonials[index].designation}
                    </p>
                    <p className="mt-0.5 text-sm text-blue-400">
                      {testimonials[index].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Enhanced Controls */}
            <div className="mt-12 flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05, x: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={prev}
                className="flex h-12 w-12 items-center justify-center rounded-full
                         border border-white/20 bg-white/5 text-white/80 backdrop-blur-xl
                         transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white
                         hover:shadow-lg hover:shadow-blue-500/20"
              >
                <ArrowLeft className="h-5 w-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, x: 2 }}
                whileTap={{ scale: 0.95 }}
                onClick={next}
                className="flex h-12 w-12 items-center justify-center rounded-full
                         border border-white/20 bg-white/5 text-white/80 backdrop-blur-xl
                         transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white
                         hover:shadow-lg hover:shadow-blue-500/20"
              >
                <ArrowRight className="h-5 w-5" />
              </motion.button>

              <div className="h-8 w-px bg-white/20" />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setPaused(!paused)}
                className="flex h-12 w-12 items-center justify-center rounded-full
                         border border-white/20 bg-white/5 text-white/80 backdrop-blur-xl
                         transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white
                         hover:shadow-lg hover:shadow-blue-500/20"
              >
                {paused ? <Play className="h-5 w-5 ml-0.5" /> : <Pause className="h-5 w-5" />}
              </motion.button>

              <span className="ml-2 text-sm text-white/50">
                {paused ? "Paused" : "Auto-playing"}
              </span>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="pointer-events-none absolute left-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full 
                      bg-blue-500/5 blur-3xl" />
        <div className="pointer-events-none absolute right-0 bottom-1/4 h-64 w-64 rounded-full 
                      bg-cyan-500/5 blur-3xl" />
      </motion.div>
    </section>
  )
}