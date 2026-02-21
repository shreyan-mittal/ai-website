import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Quote,
  Star,
  ArrowLeft,
  ArrowRight,
  Play,
  Pause,
  User,
} from "lucide-react"

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
    rating: 5,
  },
  {
    id: 2,
    name: "Neha Sharma",
    designation: "Product Manager",
    company: "CloudScale SaaS",
    quote:
      "Very strong technical understanding and execution. The team delivers exactly what they promise, on time and with exceptional quality.",
    rating: 5,
  },
  {
    id: 3,
    name: "Rahul Mehta",
    designation: "Founder & CEO",
    company: "ShopFast E-commerce",
    quote:
      "From idea to deployment, the experience was smooth and professional. They transformed our vision into a production-ready AI system.",
    rating: 5,
  },
]

/* ---------------- Component ---------------- */

export function TestimonialsStacked() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = () => setIndex((i) => (i + 1) % testimonials.length)
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

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
      <motion.div
        variants={sectionFade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative mx-auto max-w-7xl px-6"
      >
        {/* Heading */}
        <motion.div variants={fadeUp} className="mb-20 text-center">
          <h2 className="text-4xl font-semibold sm:text-5xl lg:text-6xl">
            What our clients say about
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              working with us
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          {/* LEFT — Stacked Cards */}
          <motion.div
            variants={imageWrap}
            className="relative mx-auto h-[420px] w-[340px]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
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
                transition={{ duration: 0.5 }}
              >
                <div className="relative h-full w-full rounded-3xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-[2px]">
                  <div className="relative flex h-full w-full items-center justify-center rounded-3xl bg-slate-900/90 backdrop-blur-xl">
                    {/* USER ICON INSTEAD OF IMAGE */}
                    <User
                      className="h-24 w-24 text-white/20"
                      strokeWidth={1.5}
                    />

                    {i === 1 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="absolute bottom-6 left-6 right-6"
                      >
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                          <h4 className="font-semibold text-white">
                            {item.name}
                          </h4>
                          <p className="mt-1 text-sm text-white/60">
                            {item.company}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT — Text */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[index].id}
                variants={textSwap}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4 }}
              >
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-xl">
                  <Quote className="h-8 w-8 text-white" />
                </div>

                <div className="mb-4 flex gap-1">
                  {[...Array(testimonials[index].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="mb-8 max-w-xl text-xl text-white/90">
                  "{testimonials[index].quote}"
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {testimonials[index].name}
                  </h3>
                  <p className="text-sm text-white/60">
                    {testimonials[index].designation}
                  </p>
                  <p className="text-sm text-blue-400">
                    {testimonials[index].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="mt-12 flex items-center gap-4">
              <button
                onClick={prev}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>

              <button
                onClick={next}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5"
              >
                <ArrowRight className="h-5 w-5" />
              </button>

              <button
                onClick={() => setPaused(!paused)}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5"
              >
                {paused ? (
                  <Play className="h-5 w-5" />
                ) : (
                  <Pause className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}