"use client";

import { ExternalLink, Bot, BookOpen, Sparkles } from "lucide-react";
import { Button, Card, CardContent } from "@/app/components/ui";
import { Section, SectionHeader, SectionLabel, SectionTitle, SectionDescription } from "@/app/components/shared/section";
import { motion, useMotionValue, useTransform } from "framer-motion";
import type { Bot as BotType } from "@/app/types";

const bots: BotType[] = [
  {
    name: "Cortex Bot",
    tagline: "The all-in-one Discord bot",
    description: "Moderation, music, economy, leveling, tickets, giveaways, and 50+ features — all in one powerful package.",
    features: ["Moderation (30+ tools)", "Music (24/7 play)", "Economy (20+ cmds)", "Leveling & Rank Cards", "Tickets & Auto-Close", "Giveaways & Welcome"],
    cta: "Add to Discord",
    href: "https://discord.com/oauth2/authorize?client_id=1481721720099569848",
    website: "https://dashboard.cortexhq.net",
  },
  {
    name: "QuranBot",
    tagline: "Islamic content for your server",
    description: "Live Quran radio, azkar reminders, prayer times, and role-based controls.",
    features: ["Live Radio", "Azkar Reminders", "Prayer Times", "Role Controls"],
    cta: "Invite QuranBot",
    href: "https://quranbot.cortexhq.net",
    website: "https://quranbot.cortexhq.net",
  },
];

const stats: Record<string, { label: string; value: string }[]> = {
  "Cortex Bot": [
    { label: "Servers", value: "14,203" },
    { label: "Members", value: "12,692" },
    { label: "Features", value: "50+" },
    { label: "Version", value: "v2.4.7" },
  ],
  "QuranBot": [
    { label: "Uptime", value: "99.99%" },
    { label: "Servers", value: "3,871" },
    { label: "Features", value: "12" },
    { label: "Latency", value: "38ms" },
  ],
};

const iconMap: Record<string, React.ReactNode> = {
  "Cortex Bot": <Bot className="h-5 w-5" />,
  "QuranBot": <BookOpen className="h-5 w-5" />,
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

function BotCard({ bot }: { bot: BotType }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-150, 150], [3, -3]);
  const rotateY = useTransform(mouseX, [-150, 150], [-3, 3]);
  const glareOpacity = useTransform(mouseX, [-150, 0, 150], [0.15, 0, 0.15]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      variants={item}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group"
    >
      <Card variant="hover" glow className="flex h-full flex-col overflow-hidden relative">
        {/* Glare effect */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent"
          style={{ opacity: glareOpacity }}
        />
        <CardContent className="flex flex-1 flex-col p-6 relative z-10">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.06] text-white/80 border border-white/[0.06] group-hover:border-aurora-violet/30 transition-colors duration-300">
              {iconMap[bot.name]}
            </div>
            <div>
              <h3 className="font-bold text-white text-lg">{bot.name}</h3>
              <p className="text-xs text-[var(--color-muted)]">{bot.tagline}</p>
            </div>
          </div>

          <p className="text-sm text-[var(--color-muted)] leading-relaxed">{bot.description}</p>

          <div className="mt-5 grid grid-cols-2 gap-2">
            {stats[bot.name]?.map((stat) => (
              <div key={stat.label} className="rounded-lg bg-white/[0.03] border border-white/[0.04] p-2.5 group-hover:border-white/[0.08] transition-colors duration-300">
                <p className="text-[10px] font-medium uppercase tracking-wider text-[var(--color-muted)]">
                  {stat.label}
                </p>
                <p className="mt-0.5 font-mono text-sm font-bold text-white">{stat.value}</p>
              </div>
            ))}
          </div>

          <ul className="mt-4 space-y-1.5">
            {bot.features.map((feature, i) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="flex items-center gap-2 text-sm text-white/70"
              >
                <Sparkles className="h-3 w-3 text-aurora-violet" />
                {feature}
              </motion.li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href={bot.href} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="group/btn relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  {bot.cta}
                  <ExternalLink className="h-3 w-3 transition-transform group-hover/btn:translate-x-0.5" />
                </span>
              </Button>
            </a>
            {bot.website && (
              <a href={bot.website} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="sm">Website</Button>
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function BotsSection() {
  return (
    <Section id="bots">
      <SectionHeader>
        <SectionLabel>Ecosystem</SectionLabel>
        <SectionTitle>Our Bots</SectionTitle>
        <SectionDescription>
          Production-ready Discord bots designed to handle everything from moderation to community engagement.
        </SectionDescription>
      </SectionHeader>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-6 md:grid-cols-2"
      >
        {bots.map((bot) => (
          <BotCard key={bot.name} bot={bot} />
        ))}
      </motion.div>
    </Section>
  );
}
