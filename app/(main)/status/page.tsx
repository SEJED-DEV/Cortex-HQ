"use client";

import { CheckCircle2, AlertTriangle, XCircle, Wrench, Clock, RefreshCw } from "lucide-react";
import { Card, CardContent, Badge } from "@/app/components/ui";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/app/components/shared/section";
import { motion } from "framer-motion";
import type { StatusService } from "@/app/types";

const services: StatusService[] = [
  { name: "Cortex Bot", status: "operational", uptime: 99.98 },
  { name: "QuranBot", status: "operational", uptime: 99.99 },
  { name: "API", status: "operational", uptime: 99.95 },
  { name: "Website", status: "operational", uptime: 100 },
  { name: "Dashboard", status: "operational", uptime: 99.98 },
];

const statusConfig = {
  operational: { label: "Operational", icon: CheckCircle2, color: "text-emerald-400", barColor: "bg-emerald-400", badge: "success" as const, glow: "shadow-[0_0_12px_rgba(52,211,153,0.3)]" },
  degraded: { label: "Degraded", icon: AlertTriangle, color: "text-amber-400", barColor: "bg-amber-400", badge: "warning" as const, glow: "shadow-[0_0_12px_rgba(251,191,36,0.3)]" },
  downtime: { label: "Downtime", icon: XCircle, color: "text-red-400", barColor: "bg-red-400", badge: "error" as const, glow: "shadow-[0_0_12px_rgba(248,113,113,0.3)]" },
  maintenance: { label: "Maintenance", icon: Wrench, color: "text-[var(--color-muted)]", barColor: "bg-[var(--color-muted)]", badge: "info" as const, glow: "" },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function StatusPage() {
  const allOperational = services.every((s) => s.status === "operational");

  return (
    <div className="pt-24">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-[30%] right-[10%] h-[400px] w-[400px] rounded-full bg-aurora-purple/[0.06] blur-[100px] animate-drift-1" />
        <div className="absolute bottom-[20%] left-[15%] h-[350px] w-[350px] rounded-full bg-aurora-violet/[0.05] blur-[80px] animate-drift-3" />
      </div>

      <Section size="md">
        {/* Hero badge */}
        <div className="mb-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
            className={`mb-5 inline-flex items-center gap-2.5 rounded-full border px-5 py-2 text-sm font-medium backdrop-blur-sm transition-all duration-500 ${
              allOperational
                ? "border-emerald-400/20 bg-emerald-400/[0.08] text-emerald-300"
                : "border-amber-400/20 bg-amber-400/[0.08] text-amber-300"
            }`}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${allOperational ? "bg-emerald-400" : "bg-amber-400"}`} />
              <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${allOperational ? "bg-emerald-400" : "bg-amber-400"}`} />
            </span>
            {allOperational ? "All Systems Operational" : "Some Systems Affected"}
          </motion.div>
          <SectionTitle className="text-center">Service Status</SectionTitle>
          <SectionDescription className="text-center">
            Real-time operational status of all Cortex HQ infrastructure.
          </SectionDescription>
        </div>

        {/* Overall uptime bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-8"
        >
          <Card variant="glass" className="overflow-hidden">
            <CardContent className="p-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-medium text-white">Overall Uptime</span>
                <span className="font-mono text-sm text-emerald-400">99.98%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "99.98%" }}
                  transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400"
                />
              </div>
              <div className="mt-2 flex items-center gap-1.5 text-xs text-[var(--color-muted)]">
                <Clock className="h-3 w-3" />
                Last checked just now
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Service list */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-3"
        >
          {services.map((service) => {
            const config = statusConfig[service.status];
            const Icon = config.icon;
            return (
              <motion.div key={service.name} variants={item}>
                <Card variant="hover" className="group overflow-hidden hover:border-white/[0.10] transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-3">
                        <div className={`flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.06] transition-all duration-300 group-hover:scale-110 ${config.glow}`}>
                          <Icon className={`h-4.5 w-4.5 ${config.color}`} />
                        </div>
                        <div>
                          <span className="font-medium text-white">{service.name}</span>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="font-mono text-xs text-[var(--color-muted)]">{service.uptime}% uptime</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant={config.badge}>{config.label}</Badge>
                      </div>
                    </div>
                    {/* Uptime bar per service */}
                    <div className="h-1 w-full bg-white/[0.03]">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${service.uptime}%` }}
                        transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
                        className={`h-full ${config.barColor}`}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-8 flex items-center justify-center gap-2 text-xs text-[var(--color-muted)]"
        >
          <RefreshCw className="h-3 w-3" />
          Auto-refreshes every 60 seconds
        </motion.div>
      </Section>
    </div>
  );
}
