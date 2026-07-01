"use client";

import Image from "next/image";
import logo from "@/assets/logo.png";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        borderBottom: "1px solid var(--color-border)",
        background: "rgba(7,7,8,0.5)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="mx-auto flex h-12 sm:h-14 w-full items-center justify-between px-4 sm:px-6 lg:px-16">
        <a href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            alt=""
            className="h-6 w-6 rounded"
            width={24}
            height={24}
          />
          <span
            className="text-sm sm:text-base tracking-[0.12em] font-semibold leading-none"
            style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.12em" }}
          >
            cortex
            <span style={{ color: "var(--color-cortex-400)" }}>hq</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 sm:flex">
          <NavLink href="/" active>
            Home
          </NavLink>
          <NavLink href="/#bots">Bots</NavLink>
          <NavLink href="/#services">Services</NavLink>
          <NavLink href="/support">Support</NavLink>
          <a
            href="https://github.com/SEJED-DEV"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 text-[13px] font-medium transition-colors duration-100"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            GitHub
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/#bots"
            className="hidden rounded-md px-4 py-1.5 text-[13px] font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] sm:inline-flex"
            style={{
              background: "#fff",
              color: "#000",
            }}
          >
            Get Started
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex items-center justify-center sm:hidden"
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              color: "rgba(255,255,255,0.4)",
            }}
            aria-label="Open menu"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="sm:hidden border-t px-4 py-4 flex flex-col gap-2"
          style={{ borderColor: "var(--color-border)" }}
        >
          <MobileNavLink href="/" onClick={() => setMobileOpen(false)}>
            Home
          </MobileNavLink>
          <MobileNavLink href="/#bots" onClick={() => setMobileOpen(false)}>
            Bots
          </MobileNavLink>
          <MobileNavLink href="/#services" onClick={() => setMobileOpen(false)}>
            Services
          </MobileNavLink>
          <MobileNavLink href="/support" onClick={() => setMobileOpen(false)}>
            Support
          </MobileNavLink>
          <MobileNavLink
            href="https://github.com/SEJED-DEV"
            onClick={() => setMobileOpen(false)}
          >
            GitHub
          </MobileNavLink>
          <a
            href="/#bots"
            className="mt-2 rounded-md px-4 py-2.5 text-center text-sm font-semibold transition-all"
            style={{
              background: "#fff",
              color: "#000",
            }}
            onClick={() => setMobileOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}

function NavLink({
  href,
  children,
  active,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <a
      href={href}
      className="px-3 py-1.5 text-[13px] font-medium transition-colors duration-100"
      style={{
        color: active
          ? "var(--color-cortex-400)"
          : "rgba(255,255,255,0.4)",
      }}
    >
      {children}
    </a>
  );
}

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="px-3 py-2 text-sm font-medium rounded-md transition-colors"
      style={{ color: "rgba(255,255,255,0.6)" }}
    >
      {children}
    </a>
  );
}
