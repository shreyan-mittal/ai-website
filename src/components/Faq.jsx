import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { fadeInUp, staggerContainer } from "./animations"

const faqs = [
  {
    q: "What types of AI solutions do you build?",
    a: "We deliver end-to-end AI systems including GenAI (RAG, agents, copilots), computer vision, predictive ML, and workflow automation—designed to integrate with your existing stack.",
  },
  {
    q: "How do you start a project?",
    a: "Most engagements begin with a short discovery sprint where we clarify the use-case, data readiness, success metrics, and architecture—then move into an MVP build and production rollout.",
  },
  {
    q: "Can you deploy on-premise or inside our VPC?",
    a: "Yes. We support cloud, VPC, and on-prem deployments depending on your security, compliance, and data residency requirements.",
  },
  {
    q: "How do you prevent hallucinations in GenAI apps?",
    a: "We use grounded retrieval (RAG), strong system prompts, safety filters, tool permissions, and evaluation harnesses. We also add monitoring and feedback loops to improve reliability over time.",
  },
  {
    q: "What data do you need to get started?",
    a: "It depends on the problem. We can start with existing documents/knowledge bases for RAG, images/video for vision, or historical records for predictive ML. If data is limited, we recommend a pilot to validate feasibility first.",
  },
  {
    q: "How do you measure success?",
    a: "We define measurable KPIs early—accuracy, latency, cost per request, and adoption. For GenAI, we also track groundedness and safety metrics through evaluations and audits.",
  },
]

export function FAQs() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faqs" className="bg-slate-50 py-20 text-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <motion.span variants={fadeInUp} className="text-sm font-semibold text-blue-700">
            FAQ’s
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-3 text-balance text-3xl font-semibold leading-tight sm:text-4xl"
          >
            Answers to common questions
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-lg text-slate-600">
            Everything you need to know about working with our AI solutions team.
          </motion.p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mt-12 max-w-3xl space-y-4"
        >
          {faqs.map((item, i) => {
            const open = openIndex === i
            return (
              <motion.div
                key={item.q}
                variants={fadeInUp}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold text-slate-900 sm:text-base">{item.q}</span>

                  <motion.span
                    animate={{ rotate: open ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                      <div className="px-6 pb-6 text-sm leading-relaxed text-slate-600">
                        {item.a}
                      </div>
                      <div className="h-1 w-full bg-gradient-to-r from-blue-500/60 via-indigo-500/60 to-cyan-500/60" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
