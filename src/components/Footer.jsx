import { motion } from "framer-motion"
import {
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  Linkedin,
  Shield,
  Activity,
} from "lucide-react"
import { Logo } from "./Logo"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#07090f] text-white">

      {/* Subtle static background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2
                     rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)]
                     blur-3xl"
        />

        <div
          className="absolute inset-0 opacity-[0.08]
                     [background-image:linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),
                                          linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)]
                     [background-size:72px_72px]
                     [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">

          {/* Brand */}
          <div className="md:col-span-5">
            <div className="mb-6">
              <Logo className="h-12 w-auto" />
            </div>

            <p className="mb-8 max-w-md text-sm leading-relaxed text-white/70">
              We build secure, production-ready AI systems from strategy to
              deployment — engineered for accuracy, performance, and scale.
            </p>

            <div className="space-y-4 text-sm text-white/60">

              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-cyan-400" />
                <span>Vadodara, India • Delivering globally</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-blue-400" />
                <span>Response within 24 hours</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-indigo-400" />
                <span>Cloud / VPC / On-premise deployment</span>
              </div>

            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full
                           bg-blue-600 px-6 py-3 text-sm font-semibold
                           text-white shadow-lg shadow-blue-900/40
                           transition hover:bg-blue-500"
              >
                Get in Touch
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-2">
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-white/50">
              Company
            </p>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#case-studies" className="hover:text-white">Case Studies</a></li>
              <li><a href="#careers" className="hover:text-white">Careers</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-white/50">
              Solutions
            </p>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href="#services" className="hover:text-white">GenAI & Agents</a></li>
              <li><a href="#services" className="hover:text-white">Computer Vision</a></li>
              <li><a href="#services" className="hover:text-white">Automation & ML</a></li>
              <li><a href="#services" className="hover:text-white">MLOps</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-white/50">
              Reliability
            </p>

            <div className="space-y-4 text-sm text-white/70">

              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-blue-400" />
                <span>99.9% Uptime SLA</span>
              </div>

              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-blue-400" />
                <span>Enterprise Security</span>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between text-sm text-white/50">
          <p>© {year} Intelidge. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white">Privacy Policy</a>
            <a href="#terms" className="hover:text-white">Terms</a>
            <a href="#security" className="hover:text-white">Security</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full
                         border border-white/20 bg-white/5
                         transition hover:border-blue-400/50 hover:bg-blue-500/20"
            >
              <Linkedin className="h-4 w-4 text-white/70" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}