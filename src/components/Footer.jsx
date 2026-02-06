import { motion } from "framer-motion"
import { Mail, MapPin, Clock, ArrowUpRight, Linkedin, Github, Twitter } from "lucide-react"
import { Logo } from "./Logo"

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
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#07090f] via-[#0a0d14] to-[#05070e] text-white">
      {/* Enhanced background - matching hero */}
      <div className="pointer-events-none absolute inset-0">
        {/* Animated blue gradient */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-48 left-1/4 h-[600px] w-[600px] rounded-full 
                     bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2),rgba(59,130,246,0.1)_40%,transparent_70%)] blur-3xl"
        />
        
        {/* Animated cyan gradient */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-48 right-1/4 h-[500px] w-[500px] rounded-full 
                     bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),rgba(34,211,238,0.08)_40%,transparent_70%)] blur-3xl"
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.12]
                     [background-image:linear-gradient(to_right,rgba(148,163,184,0.1)_1px,transparent_1px),
                                          linear-gradient(to_bottom,rgba(148,163,184,0.1)_1px,transparent_1px)]
                     [background-size:72px_72px]
                     [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]"
        />

        {/* Diagonal light beam */}
        <motion.div
          animate={{
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-[linear-gradient(135deg,transparent_40%,rgba(59,130,246,0.05)_50%,transparent_60%)]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Top section */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-12 border-b border-white/10 py-20 md:grid-cols-12 lg:gap-16"
        >
          {/* Brand column - enhanced */}
          <motion.div variants={item} className="md:col-span-5">
            <motion.div 
              className="mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Logo className="h-8 w-auto" />
            </motion.div>

            {/* Tagline with gradient */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 backdrop-blur-xl">
              <div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
              <p className="text-xs font-medium text-blue-300">
                AI solutions • GenAI • CV • MLOps
              </p>
            </div>

            <p className="mb-8 max-w-md text-base leading-relaxed text-white/70">
              We build secure, production ready AI systems from strategy to deployment. Designed for measurable
              outcomes across accuracy, latency, cost, and adoption.
            </p>

            {/* Enhanced info badges */}
            <div className="mb-8 space-y-3">
              <motion.div 
                className="flex items-center gap-3 text-sm text-white/60"
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl">
                  <MapPin className="h-4 w-4 text-cyan-400" />
                </div>
                <span>Based in Vadodara, India 🇮🇳. Delivering globally</span>
              </motion.div>

              <motion.div 
                className="flex items-center gap-3 text-sm text-white/60"
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl">
                  <Clock className="h-4 w-4 text-blue-400" />
                </div>
                <span>Response within 24 hours</span>
              </motion.div>

              <motion.div 
                className="flex items-center gap-3 text-sm text-white/60"
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl">
                  <Mail className="h-4 w-4 text-indigo-400" />
                </div>
                <span>Cloud / VPC / On-premise deployment</span>
              </motion.div>
            </div>

            {/* Enhanced CTAs */}
            <div className="flex flex-wrap gap-3">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 
                         px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-blue-600/30
                         transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/50"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get in Touch
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                
                {/* Animated gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </motion.a>

              <motion.a
                href="#services"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 
                         backdrop-blur-xl transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:text-white"
              >
                Explore Services
              </motion.a>
            </div>
          </motion.div>

          {/* Link columns - enhanced */}
          <motion.div variants={item} className="md:col-span-2">
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-white/50">
              Company
            </p>
            <ul className="space-y-3">
              {links.company.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.3 }}
                >
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-white/70 transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-1 w-1 rounded-full bg-blue-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={item} className="md:col-span-2">
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-white/50">
              Solutions
            </p>
            <ul className="space-y-3">
              {links.solutions.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.3 }}
                >
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-white/70 transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-1 w-1 rounded-full bg-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={item} className="md:col-span-3">
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-white/50">
              Resources
            </p>
            <ul className="space-y-3">
              {links.resources.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.3 }}
                >
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-white/70 transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-1 w-1 rounded-full bg-indigo-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Enhanced status badges */}
            <div className="mt-8 space-y-2">
              <motion.div
                whileHover={{ scale: 1.02, x: 4 }}
                className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-500/10 px-3 py-2 text-xs font-medium text-green-300 backdrop-blur-xl"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-2 w-2 rounded-full bg-green-400"
                />
                Available for new projects
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 4 }}
                className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-2 text-xs font-medium text-blue-300 backdrop-blur-xl"
              >
                <div className="h-2 w-2 rounded-full bg-blue-400" />
                99.9% Uptime SLA
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom bar - enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex flex-col gap-2 text-sm text-white/50">
            <p>© {year} Intelidge. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#privacy" className="transition-colors duration-300 hover:text-white">
                Privacy Policy
              </a>
              <span className="text-white/20">•</span>
              <a href="#terms" className="transition-colors duration-300 hover:text-white">
                Terms of Service
              </a>
              <span className="text-white/20">•</span>
              <a href="#security" className="transition-colors duration-300 hover:text-white">
                Security
              </a>
            </div>
          </div>

          {/* Enhanced social links */}
          <div className="flex items-center gap-3">
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full 
                       border border-white/20 bg-white/5 backdrop-blur-xl transition-all duration-300 
                       hover:border-blue-400/50 hover:bg-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30"
            >
              <Linkedin className="h-4 w-4 text-white/70 transition-colors duration-300 group-hover:text-white" />
              
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-blue-500/0 transition-all duration-300 group-hover:bg-blue-500/20 blur-xl"
              />
            </motion.a>

            {/* TWITTER ICON */}
            {/* <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter/X"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full 
                       border border-white/20 bg-white/5 backdrop-blur-xl transition-all duration-300 
                       hover:border-cyan-400/50 hover:bg-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/30"
            >
              <Twitter className="h-4 w-4 text-white/70 transition-colors duration-300 group-hover:text-white" />
              
              <motion.div
                className="absolute inset-0 rounded-full bg-cyan-500/0 transition-all duration-300 group-hover:bg-cyan-500/20 blur-xl"
              />
            </motion.a> */}

            {/* GITHUB ICON */}
            {/* <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full 
                       border border-white/20 bg-white/5 backdrop-blur-xl transition-all duration-300 
                       hover:border-indigo-400/50 hover:bg-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/30"
            >
              <Github className="h-4 w-4 text-white/70 transition-colors duration-300 group-hover:text-white" />
              
              <motion.div
                className="absolute inset-0 rounded-full bg-indigo-500/0 transition-all duration-300 group-hover:bg-indigo-500/20 blur-xl"
              />
            </motion.a> */}
          </div>
        </motion.div>
      </div>

      {/* Enhanced bottom accent gradient */}
      <div className="relative h-1 w-full overflow-hidden">
        <motion.div
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        />
        <div className="h-full w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600" />
      </div>

      {/* Decorative blur elements */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
    </footer>
  )
}