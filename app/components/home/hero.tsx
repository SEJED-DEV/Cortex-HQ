"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown, Sparkles, Zap, Shield } from "lucide-react";
import { Button, Container } from "@/app/components/ui";
import { FloatingParticles } from "@/app/components/ui/floating-particles";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

const stats = [
  { value: "14,203", label: "servers", icon: Shield },
  { value: "12,692", label: "members", icon: Sparkles },
  { value: "50+", label: "features", icon: Zap },
];

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const blobY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const blobScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Floating particles */}
      <FloatingParticles count={25} />

      {/* Animated aurora blobs with parallax */}
      <motion.div style={{ y: blobY, scale: blobScale }} className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-20%] left-[-10%] h-[700px] w-[700px] rounded-full bg-aurora-purple/[0.2] blur-[140px] animate-drift-1" />
        <div className="absolute bottom-[-15%] right-[-8%] h-[600px] w-[600px] rounded-full bg-aurora-violet/[0.15] blur-[130px] animate-drift-2" />
        <div className="absolute top-[30%] right-[15%] h-[450px] w-[450px] rounded-full bg-aurora-blue/[0.12] blur-[120px] animate-drift-3 animate-aurora-pulse" />
      </motion.div>

      {/* Grid pattern overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      {/* Radial vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-bg)_70%)]" />

      <motion.div style={{ y: textY, opacity: textOpacity }} className="relative z-10 w-full">
        <Container className="py-32 md:py-44">
          <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-3xl">
            {/* Status pill */}
            <motion.div variants={scaleIn} className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-medium text-white/70">All systems operational</span>
            </motion.div>

            {/* Headline with animated gradient */}
            <motion.h1 variants={fadeUp} className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-[5.5rem] leading-[1.05]">
              Infrastructure for{" "}
              <span className="inline-block bg-gradient-to-r from-aurora-purple via-aurora-violet to-aurora-blue bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
                modern Discord
              </span>{" "}
              communities
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-7 max-w-lg text-lg text-[var(--color-muted)] leading-relaxed">
              Powerful bots, open-source tools, and reliable infrastructure
              to build and grow your Discord community.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-11 flex flex-col items-start gap-4 sm:flex-row">
              <Link href="/#bots">
                <Button size="lg" className="group relative overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-aurora-purple to-aurora-violet opacity-0 transition-opacity group-hover:opacity-100" />
                </Button>
              </Link>
              <Link href="/support">
                <Button variant="secondary" size="lg">
                  Get Support
                </Button>
              </Link>
            </motion.div>

            {/* Animated stat counters */}
            <motion.div variants={fadeUp} className="mt-20 flex items-center gap-8 text-sm text-[var(--color-muted)]">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.06]">
                    <stat.icon className="h-4 w-4 text-white/40" />
                  </div>
                  <div>
                    <span className="font-mono text-lg font-bold text-white">{stat.value}</span>{" "}
                    <span className="text-xs">{stat.label}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/20">Scroll</span>
              <ChevronDown className="h-4 w-4 text-white/20" />
            </motion.div>
          </motion.div>
        </Container>
      </motion.div>
    </section>
  );
}
