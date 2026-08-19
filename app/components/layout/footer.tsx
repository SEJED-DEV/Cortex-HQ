"use client";

import Link from "next/link";
import { Container } from "@/app/components/ui";
import { motion } from "framer-motion";

const columns = [
  {
    title: "Navigation",
    links: [
      { label: "Home", href: "/" },
      { label: "Status", href: "/status" },
      { label: "Team", href: "/team" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Support", href: "/support" },
      { label: "Privacy", href: "https://dashboard.cortexhq.net/privacy" },
      { label: "Terms", href: "https://dashboard.cortexhq.net/terms" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Discord", href: "https://discord.gg/JSYjs6kfjk" },
      { label: "GitHub", href: "https://github.com/SEJED-DEV" },
      { label: "Dashboard", href: "https://dashboard.cortexhq.net" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative">
      <div className="aurora-line" />

      <Container className="py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
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
            <p className="max-w-xs text-sm text-[var(--color-muted)] leading-relaxed">
              Infrastructure for modern Discord communities.
            </p>
          </div>

          {columns.map((column, colIdx) => (
            <div key={column.title} className="space-y-3">
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-muted)]">
                {column.title}
              </h3>
              <ul className="space-y-2.5">
                {column.links.map((link, linkIdx) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-muted)] transition-all duration-200 hover:text-white hover:pl-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/[0.04] pt-8 text-xs text-[var(--color-muted)] sm:flex-row">
          <span>&copy; {new Date().getFullYear()} Cortex HQ. All rights reserved.</span>
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-aurora-violet animate-pulse" />
            Powered by Cortex HQ
          </span>
        </div>
      </Container>
    </footer>
  );
}
