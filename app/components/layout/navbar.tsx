"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Github } from "lucide-react";
import { cn } from "@/app/lib/utils";
import { Button } from "@/app/components/ui";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Bots", href: "/#bots" },
  { label: "Services", href: "/#services" },
  { label: "Team", href: "/team" },
  { label: "Support", href: "/support" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgb(var(--color-border))] bg-[rgb(var(--color-bg))/80] backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <img
            src="/assets/logo.png"
            alt="Cortex HQ"
            className="h-7 w-auto"
          />
          <span className="text-base font-bold tracking-tight text-[rgb(var(--color-fg))]">
            cortex<span className="text-cortex-400">hq</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded px-3 py-2 text-[13px] text-[rgb(var(--color-muted))] transition-colors hover:text-cortex-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 rounded-full border border-cortex-400/20 bg-cortex-400/10 px-3 py-1.5 md:flex">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cortex-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cortex-400" />
            </span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-cortex-400">
              Operational
            </span>
          </div>

          <a
            href="https://github.com/SEJED-DEV"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex"
          >
            <Button variant="ghost" size="sm">
              <Github className="h-4 w-4" />
            </Button>
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="ml-1 rounded p-2 text-[rgb(var(--color-muted))] hover:text-[rgb(var(--color-fg))] md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-[rgb(var(--color-border))] bg-[rgb(var(--color-bg))] transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-96" : "max-h-0",
        )}
      >
        <nav className="flex flex-col gap-1 p-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded px-3 py-2 text-sm text-[rgb(var(--color-muted))] transition-colors hover:text-[rgb(var(--color-fg))]"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://github.com/SEJED-DEV"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded px-3 py-2 text-sm text-[rgb(var(--color-muted))] transition-colors hover:text-[rgb(var(--color-fg))]"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
