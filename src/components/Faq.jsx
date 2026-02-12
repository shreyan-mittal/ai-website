import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { fadeInUp, staggerContainer } from "./animations"
import { Plus, Minus, HelpCircle, MessageCircle, Mail } from "lucide-react"

const faqs = [
  {
    q: "What types of AI solutions do you build?",
    a: "We deliver end-to-end AI systems including GenAI (RAG, agents, copilots), computer vision (OCR, detection), predictive ML, and workflow automation—designed to integrate with your existing stack.",
  },
  {
    q: "How do you start a project?",
    a: "We begin with discovery: use-case definition, data assessment, security constraints, and success metrics. Then we propose a plan—MVP → validation → scale—with clear milestones, timeline, and cost range.",
  },
  {
    q: "Can you deploy on-premise or inside our VPC?",
    a: "Yes. We support cloud, on-prem, and VPC deployments, including private model endpoints, network isolation, and role-based access controls.",
  },
  {
    q: "How do you prevent hallucinations in GenAI apps?",
    a: "We use RAG with grounded sources, strict prompting, tool/function constraints, output validation, and automated evals. For high-risk flows, we add human-in-the-loop review.",
  },
  {
    q: "What data do you need to get started?",
    a: "A small sample is enough: documents, logs, forms, images, or database extracts—plus the target workflow and definition of 'good output'. We can also start with synthetic or staged data if needed.",
  },
  {
    q: "How do you measure success?",
    a: "We define measurable KPIs early—accuracy, latency, cost per request, and adoption. For GenAI, we also track groundedness and safety metrics through evaluations and audits.",
  },
]

export function FAQs() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faqs" className="relative overflow-hidden bg-gradient-to-b from-[#07090f] via-[#0a0d14] to-[#07090f] py-32 text-white">
      {/* OPTIMIZED Background - CSS animations */}
      <div className="pointer-events-none absolute inset-0">
        {/* Soft gradient orbs */}
        <div
          className="absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full 
                     bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)] blur-3xl"
          style={{ animation: 'pulse-glow 8s ease-in-out infinite' }}
        />
        <div
          className="absolute -bottom-40 left-1/4 h-[450px] w-[450px] rounded-full 
                     bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.12),transparent_70%)] blur-3xl"
          style={{ animation: 'pulse-glow 10s ease-in-out infinite 1s' }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.15]
                     [background-image:linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),
                                          linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)]
                     [background-size:64px_64px]
                     [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <motion.div variants={fadeInUp} className="mb-4 flex items-center justify-center gap-2">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-500" />
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-700/50 bg-slate-900/40 px-4 py-1.5 text-sm font-medium text-slate-300 backdrop-blur-xl">
              <HelpCircle className="h-3.5 w-3.5 text-blue-400" />
              Frequently Asked Questions
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-500" />
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            Everything you need to know
          </motion.h2>

          <motion.p 
            variants={fadeInUp} 
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl"
          >
            Have questions about working with our AI solutions team? 
            Find answers to common questions below.
          </motion.p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mx-auto mt-16 max-w-4xl space-y-4"
        >
          {faqs.map((item, i) => {
            const open = openIndex === i
            return (
              <motion.div
                key={item.q}
                variants={fadeInUp}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="group overflow-hidden rounded-2xl border border-slate-800/50 
                         bg-slate-900/50 shadow-sm backdrop-blur-sm transition-all duration-300
                         hover:border-slate-700/50 hover:shadow-lg hover:shadow-blue-900/10"
              >
                <button
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left sm:px-8"
                >
                  <div className="flex items-start gap-4">
                    {/* Question number badge */}
                    <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg 
                                   text-xs font-semibold transition-all duration-300 ${
                      open 
                        ? 'bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30' 
                        : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700'
                    }`}>
                      {String(i + 1).padStart(2, '0')}
                    </div>

                    <span className={`text-base font-semibold leading-tight transition-colors sm:text-lg ${
                      open ? 'text-slate-100' : 'text-slate-300 group-hover:text-slate-200'
                    }`}>
                      {item.q}
                    </span>
                  </div>

                  {/* Toggle button */}
                  <motion.div
                    animate={{ rotate: open ? 90 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full 
                              transition-all duration-300 ${
                      open
                        ? 'bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30'
                        : 'border border-slate-700 bg-slate-800 text-slate-400 group-hover:border-slate-600 group-hover:bg-slate-700'
                    }`}
                  >
                    {open ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {/* Answer content */}
                      <div className="relative px-6 pb-6 sm:px-8 sm:pb-8">
                        {/* Connecting line */}
                        <div className="absolute left-10 top-0 h-full w-px bg-gradient-to-b from-blue-700 to-transparent sm:left-12" />
                        
                        <div className="ml-12 sm:ml-12">
                          <motion.div
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                            className="rounded-xl border border-blue-900/50 bg-gradient-to-br from-blue-950/50 to-cyan-950/30 p-6 backdrop-blur-sm"
                          >
                            <p className="text-base leading-relaxed text-slate-300">
                              {item.a}
                            </p>
                          </motion.div>
                        </div>
                      </div>

                      {/* Bottom accent */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="h-1 w-full origin-left bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="mx-auto max-w-2xl rounded-3xl border border-slate-800/50 bg-slate-900/50 p-8 shadow-lg shadow-black/40 backdrop-blur-sm sm:p-10">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/30">
              <MessageCircle className="h-8 w-8 text-white" />
            </div>

            <h3 className="mb-3 text-2xl font-semibold text-slate-100 sm:text-3xl">
              Still have questions?
            </h3>
            <p className="mb-6 text-lg text-slate-400">
              Can't find the answer you're looking for? Our team is here to help.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 
                         px-8 py-4 text-base font-semibold text-white shadow-xl shadow-blue-900/40 
                         transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/60"
              >
                <Mail className="h-5 w-5" />
                Contact Us
              </motion.a>

              {/* <motion.a
                href="#solutions"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 
                         bg-slate-800 px-8 py-4 text-base font-semibold text-slate-300 
                         transition-all duration-300 hover:border-slate-600 hover:bg-slate-700"
              >
                View Solutions
                <Plus className="h-5 w-5" />
              </motion.a> */}
            </div>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "24/7", label: "Support Available" },
            { value: "99.9%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-slate-800/50 bg-slate-900/50 p-6 text-center shadow-sm backdrop-blur-sm
                       transition-all duration-300 hover:border-slate-700/50 hover:shadow-lg hover:shadow-blue-900/10"
            >
              <div className="mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CSS keyframes */}
      <style>{`
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.15); }
        }
      `}</style>
    </section>
  )
}