import { useEffect, useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowRight, Sparkles } from "lucide-react"
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
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && open) setOpen(false)
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [open])

  const containerClass = useMemo(() => {
    return [
      "fixed inset-x-0 top-0 z-50",
      "transition-all duration-500",
      scrolled ? "py-3" : "py-6",
    ].join(" ")
  }, [scrolled])

  const barClass = useMemo(() => {
    return [
      "relative mx-auto flex max-w-7xl items-center justify-between px-6",
      "rounded-2xl border transition-all duration-500",
      scrolled
        ? "border-white/20 bg-[#0a0d14]/95 backdrop-blur-xl shadow-2xl shadow-black/20"
        : "border-white/10 bg-white/5 backdrop-blur-md",
    ].join(" ")
  }, [scrolled])

  return (
    <header className={containerClass}>
      <div className={barClass}>
        {/* Animated gradient border on scroll */}
        {scrolled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-blue-600/20 blur-xl"
          />
        )}

        {/* Brand */}
        <motion.a
          href="#"
          className="relative flex items-center gap-3 py-2"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: "smooth" })
            setOpen(false)
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="relative flex items-center">
          <Logo className="h-12 w-auto -translate-y-[7px]" />
          </div>
        </motion.a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative px-3 py-2 text-sm font-semibold text-white/70 transition-colors duration-300 hover:text-white"
            >
              <span className="relative">
                {link.label}
                {/* Animated underline */}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </span>
            </a>
          ))}

          {/* Enhanced CTA button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 
                     px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30
                     transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/50"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="h-3.5 w-3.5" />
              </motion.span>
            </span>
            
            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
            
            {/* Button shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
              animate={{ translateX: ['-100%', '200%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
            />
          </motion.a>
        </nav>

        {/* Enhanced mobile button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex h-11 w-11 items-center justify-center rounded-full 
                   border border-white/20 bg-white/5 backdrop-blur-xl transition-all duration-300 
                   hover:border-blue-400/50 hover:bg-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 md:hidden"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-5 w-5 text-white/80 transition-colors duration-300 group-hover:text-white" />
          
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-blue-500/0 transition-all duration-300 group-hover:bg-blue-500/20 blur-xl"
          />
        </motion.button>
      </div>

      {/* Enhanced Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            {/* Enhanced backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Enhanced panel */}
            <motion.div
              initial={{ y: -30, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -30, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-4 mt-4 overflow-hidden rounded-3xl border border-white/20 
                       bg-gradient-to-b from-[#0a0d14] to-[#07090f] p-6 shadow-2xl"
            >
              {/* Background effects */}
              <div className="pointer-events-none absolute inset-0">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.15, 0.25, 0.15],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-20 -top-20 h-60 w-60 rounded-full 
                           bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.3),transparent_70%)] blur-3xl"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.12, 0.22, 0.12],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full 
                           bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.25),transparent_70%)] blur-3xl"
                />
              </div>

              {/* Header */}
              <div className="relative flex items-center justify-between">
                <motion.div 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="relative h-7 w-[130px]">
                    <Logo className="h-7 w-auto" />
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full border border-blue-400/30 bg-blue-500/20 px-2 py-1 backdrop-blur-xl">
                    <Sparkles className="h-3 w-3 text-blue-300" />
                    <span className="text-xs font-medium text-blue-200">Menu</span>
                  </div>
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.05, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative flex h-11 w-11 items-center justify-center rounded-full 
                           border border-white/20 bg-white/5 backdrop-blur-xl transition-all duration-300 
                           hover:border-red-400/50 hover:bg-red-500/20"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <X className="h-5 w-5 text-white/80 transition-colors duration-300 group-hover:text-white" />
                </motion.button>
              </div>

              {/* Enhanced navigation links */}
              <motion.div 
                className="relative mt-8 space-y-2"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.05, delayChildren: 0.15 },
                  },
                }}
              >
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      show: { opacity: 1, x: 0 },
                    }}
                    whileHover={{ x: 4, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative flex items-center justify-between overflow-hidden rounded-2xl 
                             border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl 
                             transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/10 
                             hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    {/* Hover gradient effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-cyan-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                    
                    <span className="relative flex items-center gap-3 text-base font-semibold text-white/80 transition-colors duration-300 group-hover:text-white">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      {link.label}
                    </span>
                    
                    <motion.span
                      className="relative text-white/40 transition-all duration-300 group-hover:text-blue-300"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </motion.a>
                ))}
              </motion.div>

              {/* Enhanced CTA button */}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative mt-6 flex w-full items-center justify-center gap-2 overflow-hidden 
                         rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-4 
                         text-base font-semibold text-white shadow-xl shadow-blue-600/40
                         transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/60"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                
                {/* Animated gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ translateX: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                />
              </motion.a>

              {/* Enhanced footer info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="relative mt-6 flex items-center justify-center gap-4 text-xs text-white/50"
              >
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span>Available for projects</span>
                </div>
                <span className="text-white/30">•</span>
                <span>
                  Press <span className="font-semibold text-white/70">Esc</span> to close
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}