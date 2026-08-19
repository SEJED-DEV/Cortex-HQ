"use client";

import { Shield, Music, Coins, BarChart3, Ticket, Gift, Settings, Rocket, Zap } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui";
import { Section, SectionHeader, SectionLabel, SectionTitle, SectionDescription } from "@/app/components/shared/section";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const features = [
  { icon: Shield, title: "Moderation", description: "30+ tools to keep your server safe and clean.", accent: "group-hover:text-red-400 group-hover:bg-red-400/[0.12] group-hover:border-red-400/[0.2]" },
  { icon: Music, title: "Music", description: "24/7 high-quality music streaming in voice channels.", accent: "group-hover:text-aurora-blue group-hover:bg-aurora-blue/[0.12] group-hover:border-aurora-blue/[0.2]" },
  { icon: Coins, title: "Economy", description: "20+ commands — shops, gambling, mining, and more.", accent: "group-hover:text-amber-400 group-hover:bg-amber-400/[0.12] group-hover:border-amber-400/[0.2]" },
  { icon: BarChart3, title: "Leveling", description: "Rank cards, leaderboards, and XP tracking.", accent: "group-hover:text-emerald-400 group-hover:bg-emerald-400/[0.12] group-hover:border-emerald-400/[0.2]" },
  { icon: Ticket, title: "Tickets", description: "Auto-close support tickets with web transcripts.", accent: "group-hover:text-aurora-violet group-hover:bg-aurora-violet/[0.12] group-hover:border-aurora-violet/[0.2]" },
  { icon: Gift, title: "Giveaways", description: "Run giveaways and welcome events automatically.", accent: "group-hover:text-pink-400 group-hover:bg-pink-400/[0.12] group-hover:border-pink-400/[0.2]" },
];

const stats = [
  { value: 14203, suffix: "", label: "Servers", icon: Shield },
  { value: 12692, suffix: "", label: "Members", icon: Coins },
  { value: 50, suffix: "+", label: "Features", icon: Zap },
  { value: 99.98, suffix: "%", label: "Uptime", icon: BarChart3 },
];

const steps = [
  { icon: Shield, title: "Invite the bot", description: "One click to add Cortex Bot or QuranBot to your server.", color: "text-aurora-violet", bg: "bg-aurora-violet/[0.15]" },
  { icon: Settings, title: "Configure dashboard", description: "Customize everything from the web dashboard.", color: "text-aurora-blue", bg: "bg-aurora-blue/[0.15]" },
  { icon: Rocket, title: "Grow your server", description: "Engage your community with powerful tools.", color: "text-emerald-400", bg: "bg-emerald-400/[0.15]" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

function CountUpNumber({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const isDecimal = target % 1 !== 0;
    const duration = 1.5;
    const start = performance.now();

    const step = (now: number) => {
      const elapsed = (now - start) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;

      if (isDecimal) {
        setDisplay(current.toFixed(2));
      } else {
        setDisplay(Math.floor(current).toLocaleString());
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, target]);

  return <span ref={ref}>{display}{suffix}</span>;
}

export function AboutSection() {
  return (
    <Section id="about">
      {/* Subtle aurora background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[20%] left-[5%] h-[400px] w-[400px] rounded-full bg-aurora-purple/[0.06] blur-[100px] animate-drift-1" />
        <div className="absolute bottom-[10%] right-[10%] h-[350px] w-[350px] rounded-full bg-aurora-violet/[0.05] blur-[80px] animate-drift-2" />
      </div>

      {/* Section A: What is Cortex HQ */}
      <SectionHeader>
        <SectionLabel>Ecosystem</SectionLabel>
        <SectionTitle className="text-gradient-aurora bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
          Building blocks for your Discord community
        </SectionTitle>
        <SectionDescription>
          Everything you need to run a modern Discord server — moderation, music, economy,
          and more — all free and open source.
        </SectionDescription>
      </SectionHeader>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <motion.div key={feature.title} variants={item}>
              <Card variant="hover" className={`group h-full transition-all duration-300 hover:border-white/[0.12] hover:shadow-[0_0_30px_rgba(168,85,247,0.08)] hover:-translate-y-1`}>
                <CardContent className="p-6">
                  <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] border border-white/[0.08] transition-all duration-300 ${feature.accent}`}>
                    <Icon className="h-5 w-5 text-white/70 transition-colors duration-300" />
                  </div>
                  <h3 className="mb-1.5 font-semibold text-white group-hover:text-white transition-colors">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--color-muted)]">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Section B: Animated stat counters */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        className="mt-20"
      >
        <Card variant="glass" className="overflow-hidden">
          <CardContent className="py-10">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="text-center group">
                    <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.06] transition-all duration-300 group-hover:scale-110 group-hover:bg-aurora-violet/[0.12]">
                      <Icon className="h-5 w-5 text-aurora-violet" />
                    </div>
                    <div className="text-3xl font-bold text-white sm:text-4xl font-mono">
                      <CountUpNumber target={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="mt-1 text-sm text-[var(--color-muted)]">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Section C: How it works */}
      <div className="mt-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <SectionLabel>How it works</SectionLabel>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">Up and running in 3 steps</h3>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="relative grid gap-6 md:grid-cols-3"
        >
          {/* Connecting dashed lines (desktop only) */}
          <div className="pointer-events-none absolute top-12 left-[20%] right-[20%] hidden h-px border-t border-dashed border-white/[0.1] md:block" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.title} variants={item}>
                <Card variant="hover" className="relative h-full text-center transition-all duration-300 hover:border-white/[0.12] hover:-translate-y-1 group">
                  <CardContent className="p-8">
                    {/* Step number */}
                    <div className={`mx-auto mb-5 flex h-10 w-10 items-center justify-center rounded-full ${step.bg} border border-white/[0.08] text-sm font-bold ${step.color}`}>
                      {i + 1}
                    </div>
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.06] border border-white/[0.08] transition-all duration-300 group-hover:scale-110 group-hover:bg-white/[0.10]">
                      <Icon className="h-6 w-6 text-white/70" />
                    </div>
                    <h4 className="mb-2 font-semibold text-white">{step.title}</h4>
                    <p className="text-sm leading-relaxed text-[var(--color-muted)]">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
