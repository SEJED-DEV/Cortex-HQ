"use client";

import Link from "next/link";
import { Container, Button } from "@/app/components/ui";
import { motion } from "framer-motion";
import { Home, Search, ArrowLeft } from "lucide-react";

const floatingShapes = [
  { size: 80, x: "15%", y: "20%", delay: 0, color: "aurora-purple" },
  { size: 60, x: "80%", y: "15%", delay: 0.5, color: "aurora-violet" },
  { size: 100, x: "70%", y: "70%", delay: 1, color: "aurora-blue" },
  { size: 50, x: "25%", y: "75%", delay: 1.5, color: "aurora-purple" },
  { size: 40, x: "60%", y: "40%", delay: 0.8, color: "aurora-violet" },
];

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Aurora blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-aurora-purple/[0.15] blur-[120px] animate-drift-1" />
        <div className="absolute bottom-[-10%] right-[-5%] h-[400px] w-[400px] rounded-full bg-aurora-violet/[0.12] blur-[120px] animate-drift-2" />
      </div>

      {/* Floating geometric shapes */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.15, 0.15, 0],
            scale: [0.5, 1, 1, 0.5],
            y: [0, -20, -20, 0],
          }}
          transition={{
            duration: 6,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute"
          style={{ left: shape.x, top: shape.y }}
        >
          <div
            className={`rounded-${i % 2 === 0 ? "full" : "xl"} border border-white/[0.06] bg-${shape.color}/[0.08]`}
            style={{ width: shape.size, height: shape.size }}
          />
        </motion.div>
      ))}

      {/* Grid pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }} />

      <Container className="relative z-10 text-center">
        {/* Big 404 with glitch-like effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="relative mb-6"
        >
          <span className="text-[140px] font-bold leading-none bg-gradient-to-b from-white/80 via-aurora-violet/60 to-transparent bg-clip-text text-transparent select-none">
            404
          </span>
          {/* Glitch copies */}
          <motion.span
            animate={{ x: [0, -2, 2, 0], opacity: [0.5, 0.3, 0.5, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 text-[140px] font-bold leading-none text-aurora-violet/20 select-none"
            aria-hidden
          >
            404
          </motion.span>
          <motion.span
            animate={{ x: [0, 2, -2, 0], opacity: [0.3, 0.5, 0.3, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute inset-0 text-[140px] font-bold leading-none text-aurora-blue/15 select-none"
            aria-hidden
          >
            404
          </motion.span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-3 text-2xl font-bold text-white"
        >
          Lost in the void
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mb-10 text-[var(--color-muted)] max-w-md mx-auto"
        >
          This page doesn&apos;t exist, has been moved, or is taking a nap.
          Let&apos;s get you back on track.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link href="/">
            <Button size="lg" className="group">
              <Home className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              Go Home
            </Button>
          </Link>
          <Link href="/support">
            <Button variant="secondary" size="lg" className="group">
              <Search className="h-4 w-4 transition-transform group-hover:scale-110" />
              Get Support
            </Button>
          </Link>
        </motion.div>

        {/* Fun terminal text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 font-mono text-xs text-[var(--color-muted)]/50"
        >
          <span className="text-aurora-violet">$</span> cortex status --page /this-page
          <br />
          <span className="text-red-400/60">[err]</span> page not found (exit code 404)
        </motion.div>
      </Container>
    </div>
  );
}
