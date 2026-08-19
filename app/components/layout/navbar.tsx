"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Github } from "lucide-react";
import { cn } from "@/app/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Bots", href: "/#bots" },
  { label: "Services", href: "/#services" },
  { label: "Team", href: "/team" },
  { label: "Support", href: "/support" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "border-b border-white/[0.04] bg-[#070708]/80 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5 group">
          <motion.img
            src="/assets/logo.png"
            alt="Cortex HQ"
            className="h-7 w-auto"
            whileHover={{ rotate: 10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
          <span className="text-base font-bold tracking-tight text-white">
            cortex<span className="text-aurora-violet">hq</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative rounded-lg px-3 py-2 text-[13px] font-medium text-[var(--color-muted)] transition-colors hover:text-white group"
            >
              <span className="relative z-10">{link.label}</span>
              <div className="absolute inset-0 rounded-lg bg-white/[0.04] opacity-0 scale-95 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/SEJED-DEV"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center justify-center h-9 w-9 rounded-lg text-[var(--color-muted)] transition-all duration-200 hover:text-white hover:bg-white/[0.06] hover:scale-110"
          >
            <Github className="h-4 w-4" />
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-[var(--color-muted)] hover:text-white hover:bg-white/[0.06] md:hidden transition-all duration-200"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-white/[0.04] bg-[#070708]/95 backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-col gap-1 p-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-white hover:bg-white/[0.04] block"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
              >
                <a
                  href="https://github.com/SEJED-DEV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-white hover:bg-white/[0.04] block"
                >
                  GitHub
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
