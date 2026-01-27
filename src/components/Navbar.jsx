import { useEffect, useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Logo } from "./Logo"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#how-it-works" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const containerClass = useMemo(() => {
    return [
      "fixed inset-x-0 top-0 z-50",
      "transition-all duration-300",
      scrolled ? "py-3" : "py-5",
    ].join(" ")
  }, [scrolled])

  const barClass = useMemo(() => {
    return [
      "mx-auto flex max-w-6xl items-center justify-between px-6",
      "rounded-2xl border",
      scrolled
        ? "border-white/10 bg-indigo-950/80 backdrop-blur"
        : "border-transparent bg-transparent",
      "shadow-none",
    ].join(" ")
  }, [scrolled])

  const linkClass =
    "group relative px-2 py-1 text-sm font-semibold text-white/70 transition-colors duration-300 hover:text-white"

  return (
    <header className={containerClass}>
      <div className={barClass}>
        {/* Brand */}
        <a
          href="#"
          className="flex items-center gap-3 py-2"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: "smooth" })
            setOpen(false)
          }}
        >
          <Logo className="h-12 w-12" />
          <div className="leading-tight">
            <p className="text-sm font-display font-semibold text-white tracking-wide">
              Agilo Labs
            </p>
            <p className="text-xs text-white/50 font-sans font-medium tracking-wide">AI Solutions Studio</p>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className={linkClass}>
              <span className="relative">
                {l.label}
                <span className="absolute inset-x-0 -bottom-1 h-[2px] origin-left scale-x-0 bg-white/80 transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </span>
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-slate-100"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile button */}
        <button
          className="md:hidden flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/90 transition hover:bg-white/10"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <span className="text-xl leading-none">≡</span>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ y: -18, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -18, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative mx-4 mt-4 rounded-3xl border border-white/10 bg-indigo-950 p-4 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Logo className="h-12 w-12" />
                  <p className="text-sm font-display font-semibold text-white tracking-wide">
                    Agilo Labs
                  </p>
                </div>

                <button
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/90 transition hover:bg-white/10"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                >
                  <span className="text-xl leading-none">×</span>
                </button>
              </div>

              <div className="mt-4 space-y-2">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 transition-all duration-300 hover:-translate-y-[1px] hover:bg-white/10"
                  >
                    <span className="relative">
                      {l.label}
                      <span className="absolute inset-x-0 -bottom-1 h-[2px] origin-left scale-x-0 bg-white/70 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                    </span>
                    <span className="text-white/40 transition-colors duration-300 group-hover:text-white/70">
                      →
                    </span>
                  </a>
                ))}
              </div>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-slate-100"
              >
                Get Started
              </a>

              <p className="mt-4 text-center text-xs text-white/50">
                Press <span className="font-semibold text-white/70">Esc</span> to close
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
