import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "./animations"
import { Logo } from "./Logo"

const links = {
  company: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Careers", href: "#careers" },
  ],
  solutions: [
    { label: "GenAI & Agents", href: "#services" },
    { label: "Computer Vision", href: "#services" },
    { label: "Automation & ML", href: "#services" },
    { label: "MLOps & Deployment", href: "#services" },
  ],
  resources: [
    { label: "Insights", href: "#insights" },
    { label: "FAQs", href: "#faqs" },
    { label: "Security", href: "#security" },
    { label: "Contact", href: "#contact" },
  ],
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-[#05070e] text-white">
      {/* background accents (subtle bluish) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(79,70,229,0.14),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(6,182,212,0.12),transparent_45%)]" />
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Top */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-10 border-b border-white/10 py-14 md:grid-cols-12"
        >
          {/* Brand */}
          <motion.div variants={fadeInUp} className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="relative h-6 w-[120px]">
                <Logo className="h-6 w-auto" />
              </div>
              <div>
                <p className="text-xs text-white/60 font-sans font-medium tracking-wide">AI solutions • GenAI • CV • MLOps</p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              We build secure, production-ready AI systems—strategy to deployment—designed for measurable
              outcomes across accuracy, latency, cost, and adoption.
            </p>

            {/* Newsletter / quick CTA */}
            <div className="mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Get in touch
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10"
              >
                Explore services
              </a>
            </div>
          </motion.div>

          {/* Link columns */}
          <motion.div variants={fadeInUp} className="md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Company</p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {links.company.map((l) => (
                <li key={l.label}>
                  <a className="transition hover:text-white" href={l.href}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} className="md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Solutions</p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {links.solutions.map((l) => (
                <li key={l.label}>
                  <a className="transition hover:text-white" href={l.href}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Resources</p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {links.resources.map((l) => (
                <li key={l.label}>
                  <a className="transition hover:text-white" href={l.href}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact chips */}
            <div className="mt-6 space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                Response in 24 hours
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70">
                <span className="h-2 w-2 rounded-full bg-indigo-400" />
                Cloud / VPC / On-prem
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 py-8 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2">
            <p>© {year} Intelidge. All rights reserved.</p>
            <p>Based in Vadodara, India — delivering AI solutions globally.</p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#privacy" className="transition hover:text-white">
              Privacy
            </a>
            <a href="#terms" className="transition hover:text-white">
              Terms
            </a>
            <a href="#security" className="transition hover:text-white">
              Security
            </a>

            {/* Social placeholders (swap with your real links) */}
            <div className="ml-0 flex items-center gap-3 md:ml-2">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10"
              >
                in
              </a>
              <a
                href="#"
                aria-label="X"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10"
              >
                𝕏
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10"
              >
                ⌁
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* bottom accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-indigo-400/60 via-blue-400/60 to-cyan-400/60" />
    </footer>
  )
}
