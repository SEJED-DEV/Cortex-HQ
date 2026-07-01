import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--color-border)" }}>
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt=""
            className="h-5 w-5 rounded"
            width={20}
            height={20}
          />
          <span
            className="text-xs tracking-[0.12em] font-semibold"
            style={{
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.12em",
            }}
          >
            cortex
            <span style={{ color: "var(--color-cortex-400)" }}>hq</span>
          </span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="/"
            className="text-xs transition-colors"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Home
          </a>
          <a
            href="/servers"
            className="text-xs transition-colors"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Servers
          </a>
          <a
            href="/premium"
            className="text-xs transition-colors"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Premium
          </a>
          <a
            href="https://www.cortexhq.net"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs transition-colors"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Website
          </a>
        </div>

        <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.15)" }}>
          &copy; {new Date().getFullYear()} Cortex HQ. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
