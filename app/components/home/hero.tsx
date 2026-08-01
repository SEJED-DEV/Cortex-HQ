"use client";

import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { Button, Container } from "@/app/components/ui";

const statusLines = [
  { ok: true, name: "cortex-bot", detail: "uptime 99.98% · 14,203 servers" },
  { ok: true, name: "modmail", detail: "uptime 99.97% · 8,410 threads" },
  { ok: true, name: "quranbot", detail: "uptime 99.99% · 3,871 servers" },
  { ok: true, name: "api", detail: "uptime 99.95% · 1.2m req/day" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="pointer-events-none absolute inset-0 scanlines opacity-40" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cortex-400/40 to-transparent" />

      <Container className="relative grid items-center gap-14 py-20 md:py-24 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cortex-400/20 bg-cortex-400/10 px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cortex-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cortex-400" />
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-cortex-400">
              All systems operational
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-[rgb(var(--color-fg))] sm:text-5xl lg:text-6xl">
            Infrastructure for modern Discord communities
          </h1>

          <p className="mt-6 max-w-md text-lg text-[rgb(var(--color-muted))]">
            Powerful bots, open-source tools, and reliable infrastructure
            to build and grow your Discord community.
          </p>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
            <Link href="/#bots">
              <Button size="lg">
                Get Started
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/support">
              <Button variant="outline" size="lg">
                Get Support
              </Button>
            </Link>
          </div>
        </div>

        <div className="w-full">
          <div className="overflow-hidden rounded-lg border border-[rgb(var(--color-border))] bg-surface-100 shadow-2xl">
            <div className="flex items-center gap-2 border-b border-[rgb(var(--color-border))] px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500/70" />
              <span className="h-3 w-3 rounded-full bg-amber-500/70" />
              <span className="h-3 w-3 rounded-full bg-cortex-400/70" />
              <span className="ml-3 text-xs text-[rgb(var(--color-muted))]">
                cortex@cortexhq:~
              </span>
            </div>
            <div className="space-y-3 p-5 text-sm leading-relaxed">
              <p className="text-[rgb(var(--color-muted))]">
                <span className="text-cortex-400">$</span> cortex status
              </p>
              <div className="space-y-1.5">
                {statusLines.map((line) => (
                  <p key={line.name} className="text-[rgb(var(--color-fg))]">
                    <span className="text-cortex-400">[ok]</span>{" "}
                    <span className="w-24 inline-block">{line.name}</span>
                    <span className="text-[rgb(var(--color-muted))]">{line.detail}</span>
                  </p>
                ))}
              </div>
              <p className="text-[rgb(var(--color-muted))]">
                <span className="text-cortex-400">$</span>{" "}
                <span className="inline-block h-4 w-2 translate-y-0.5 animate-cursor-blink bg-cortex-400" />
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3 text-xs text-[rgb(var(--color-muted))]">
            <span className="uppercase tracking-[0.2em]">Powered by Cortex HQ</span>
            <span className="flex gap-1">
              <span className="h-1 w-1 rounded-full bg-[rgb(var(--color-fg))/20]" />
              <span className="h-1 w-1 rounded-full bg-[rgb(var(--color-fg))/20]" />
              <span className="h-1 w-1 rounded-full bg-cortex-400" />
            </span>
            <span className="uppercase tracking-[0.2em]">v2.0.0</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
