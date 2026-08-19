"use client";

import Link from "next/link";
import { BarChart3, Bot, Settings, Users, Activity, Shield, Zap, MessageSquare, ArrowRight, ExternalLink, TrendingUp, Server, Eye } from "lucide-react";
import { Card, CardContent, Badge, Button } from "@/app/components/ui";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/app/components/shared/section";
import { motion } from "framer-motion";

const features = [
  { title: "Server Overview", description: "View server stats, member count, and activity at a glance.", icon: Server },
  { title: "Bot Management", description: "Configure all your bots from a single dashboard.", icon: Bot },
  { title: "Moderation Panel", description: "Review logs, manage bans, and handle appeals.", icon: Shield },
  { title: "Member Analytics", description: "Track member growth, engagement, and activity trends.", icon: Users },
  { title: "Support Inbox", description: "View and respond to support tickets in real-time.", icon: MessageSquare },
  { title: "Audit Log", description: "Complete history of all moderation actions.", icon: Activity },
  { title: "Config Editor", description: "Edit bot settings with a clean, intuitive interface.", icon: Settings },
  { title: "Quick Actions", description: "Common commands and tools in one click.", icon: Zap },
];

const activityFeed = [
  { action: "Member joined", detail: " discord.gg/server", time: "2m ago", color: "text-emerald-400" },
  { action: "Mod action", detail: "warn issued", time: "5m ago", color: "text-amber-400" },
  { action: "Ticket opened", detail: "#support-142", time: "8m ago", color: "text-aurora-violet" },
  { action: "Level up", detail: "Level 15 reached", time: "12m ago", color: "text-aurora-blue" },
  { action: "Bot configured", detail: "auto-mod enabled", time: "15m ago", color: "text-emerald-400" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function DashboardPage() {
  return (
    <div className="pt-24">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-[25%] left-[10%] h-[400px] w-[400px] rounded-full bg-aurora-purple/[0.06] blur-[100px] animate-drift-1" />
        <div className="absolute bottom-[15%] right-[15%] h-[350px] w-[350px] rounded-full bg-aurora-blue/[0.05] blur-[80px] animate-drift-3" />
      </div>

      <Section>
        <SectionHeader>
          <Badge variant="warning" className="mb-4">Live Preview</Badge>
          <SectionTitle>Dashboard</SectionTitle>
          <SectionDescription>
            A powerful web dashboard for managing Cortex Bot, QuranBot, and all your server settings.
          </SectionDescription>
        </SectionHeader>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          className="mb-16 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02]"
        >
          {/* Fake browser bar */}
          <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.03] px-4 py-3">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-400/60" />
              <div className="h-3 w-3 rounded-full bg-amber-400/60" />
              <div className="h-3 w-3 rounded-full bg-emerald-400/60" />
            </div>
            <div className="ml-4 flex-1 rounded-lg bg-white/[0.04] px-3 py-1.5 text-xs text-[var(--color-muted)]">
              dashboard.cortexhq.net
            </div>
          </div>

          {/* Dashboard content */}
          <div className="p-6 md:p-8">
            {/* Stats row */}
            <div className="mb-6 grid gap-4 md:grid-cols-4">
              {[
                { label: "Servers", value: "14.2K", change: "+12%", icon: Server, color: "text-aurora-violet" },
                { label: "Active Users", value: "12.6K", change: "+8%", icon: Users, color: "text-emerald-400" },
                { label: "Features", value: "50+", change: "v2.4.7", icon: Zap, color: "text-aurora-blue" },
                { label: "Uptime", value: "99.98%", change: "30d", icon: Activity, color: "text-emerald-400" },
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                    className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 transition-all duration-300 hover:border-white/[0.10] hover:bg-white/[0.05]"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-[var(--color-muted)]">{stat.label}</p>
                      <Icon className={`h-4 w-4 ${stat.color}`} />
                    </div>
                    <p className="mt-1 font-mono text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-emerald-400">{stat.change}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Two column layout */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Activity feed */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <h3 className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
                  <Eye className="h-4 w-4 text-aurora-violet" />
                  Live Activity
                </h3>
                <div className="space-y-2">
                  {activityFeed.map((entry, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.06, duration: 0.4 }}
                      className="flex items-center justify-between rounded-lg border border-white/[0.04] bg-white/[0.02] px-3 py-2.5 transition-colors hover:bg-white/[0.04]"
                    >
                      <div className="flex items-center gap-2">
                        <span className={`h-1.5 w-1.5 rounded-full ${entry.color.replace("text-", "bg-")}`} />
                        <span className="text-sm text-white">{entry.action}</span>
                        <span className="text-sm text-[var(--color-muted)]">{entry.detail}</span>
                      </div>
                      <span className="text-xs text-[var(--color-muted)]">{entry.time}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Mini chart mockup */}
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <h3 className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
                  <TrendingUp className="h-4 w-4 text-emerald-400" />
                  Member Growth
                </h3>
                <div className="rounded-xl border border-white/[0.04] bg-white/[0.02] p-4">
                  {/* Fake bar chart */}
                  <div className="flex items-end gap-2 h-32">
                    {[40, 55, 45, 70, 65, 80, 75, 90, 85, 95, 88, 100].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 + i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
                        className="flex-1 rounded-t bg-gradient-to-t from-aurora-violet/40 to-aurora-violet/80 transition-colors hover:from-aurora-violet/60 hover:to-aurora-violet"
                      />
                    ))}
                  </div>
                  <div className="mt-3 flex justify-between text-xs text-[var(--color-muted)]">
                    <span>Jan</span>
                    <span>Jun</span>
                    <span>Dec</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.title} variants={item}>
                <Card variant="hover" className="group h-full transition-all duration-300 hover:border-white/[0.12] hover:shadow-[0_0_20px_rgba(168,85,247,0.06)]">
                  <CardContent>
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] border border-white/[0.08] transition-all duration-300 group-hover:bg-aurora-violet/[0.12] group-hover:border-aurora-violet/[0.2]">
                      <Icon className="h-5 w-5 text-white/70 transition-colors group-hover:text-aurora-violet" />
                    </div>
                    <h3 className="mb-1 font-medium text-white">{feature.title}</h3>
                    <p className="text-sm text-[var(--color-muted)]">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <a href="https://dashboard.cortexhq.net" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="group">
              Open Dashboard
              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </a>
        </motion.div>
      </Section>
    </div>
  );
}
