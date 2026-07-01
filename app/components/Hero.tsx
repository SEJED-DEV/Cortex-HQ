import dynamic from "next/dynamic";

const LiveMetrics = dynamic(() => import("./LiveMetrics"), { ssr: false });

export default function Hero() {
  return (
    <section
      className="scanline full-bleed flex min-h-[calc(100dvh-3rem)] sm:min-h-[calc(100dvh-3.5rem)] flex-col"
      style={{
        borderBottom: "1px solid var(--color-border)",
        background:
          "linear-gradient(90deg, #070708 0%, #0a0a0a 45%, color-mix(in oklab, #6366f1 20%, #0a0a0a) 72%, color-mix(in oklab, #6366f1 40%, #070708) 100%)",
      }}
    >
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1.55fr_0.95fr]">
        {/* Left Column */}
        <div
          className="flex flex-col justify-center px-5 sm:px-8 lg:px-16 py-8 sm:py-0"
          style={{ borderRight: "1px solid var(--color-border)" }}
        >
          <div>
            <div
              className="animate-fade-up"
              style={{ animationDelay: "0s" }}
            >
              <div className="inline-flex items-center gap-2 mb-5 sm:mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-[#18d2a6] animate-pulse-dot" />
                <span
                  className="text-[10px] sm:text-[11px] uppercase tracking-[0.15em]"
                  style={{
                    color: "#18d2a6",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  All systems operational
                </span>
              </div>
            </div>

            <div
              className="animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              <h1
                className="text-4xl sm:text-6xl lg:text-7xl leading-[1.0] mb-5 sm:mb-6 font-semibold tracking-tight"
                style={{
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "-0.03em",
                }}
              >
                Cortex
                <br />
                <span style={{ color: "var(--color-cortex-400)" }}>HQ</span>
              </h1>
            </div>

            <div
              className="animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              <p className="mb-7 sm:mb-8 text-[14px] sm:text-[17px] leading-relaxed max-w-md text-[#a0a0a0]">
                Infrastructure for modern Discord communities.
              </p>
            </div>

            <div
              className="animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="/api/auth/login"
                  className="inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-[13px] font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  style={{ background: "#fff", color: "#000" }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 127 96"
                    fill="currentColor"
                  >
                    <path d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83 97.68 97.68 0 0 0-29.39 0A72.37 72.37 0 0 0 45.52.01a105.89 105.89 0 0 0-26.33 8.09C2.79 32.65-1.71 56.6.54 80.21a105.73 105.73 0 0 0 32.17 16.15 77.7 77.7 0 0 0 6.89-11.11 68.42 68.42 0 0 1-10.85-5.18c.91-.66 1.8-1.34 2.66-2.01a75.02 75.02 0 0 0 64.14 0c.87.71 1.76 1.39 2.66 2.01a68.03 68.03 0 0 1-10.87 5.19 77.29 77.29 0 0 0 6.89 11.11 105.34 105.34 0 0 0 32.19-16.15c2.64-27.38-4.51-51.11-18.9-72.15Z" />
                  </svg>
                  Sign in with Discord
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column — Quick Stats */}
        <div className="hidden lg:flex flex-col justify-center px-8">
          <div
            className="animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            <div
              className="relative rounded-md border overflow-hidden"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor: "rgba(255,255,255,0.02)",
              }}
            >
              <div
                className="absolute left-0 top-0 bottom-0 w-[3px]"
                style={{ backgroundColor: "var(--color-cortex-400)" }}
              />
              <div className="pl-5 pr-5 py-4">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="text-[10px]"
                    style={{ color: "var(--color-cortex-400)" }}
                  >
                    &#9670;
                  </span>
                  <h3
                    className="text-[10px] uppercase tracking-[0.12em] font-semibold"
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    Quick Stats
                  </h3>
                </div>
                <LiveMetrics />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="hidden sm:flex animate-fade-in items-center justify-center gap-6 py-3 px-6"
        style={{
          borderTop: "1px solid var(--color-border)",
          animationDelay: "0.5s",
        }}
      >
        <span
          className="text-[10px] uppercase tracking-[0.15em]"
          style={{
            color: "rgba(255,255,255,0.2)",
            fontFamily: "var(--font-mono)",
          }}
        >
          Powered by Cortex Bot
        </span>
        <div className="flex items-center gap-1.5">
          <span className="h-1 w-1 rounded-full bg-white/[0.08]" />
          <span className="h-1 w-1 rounded-full bg-white/[0.08]" />
          <span className="h-1 w-1 rounded-full bg-white/[0.12]" />
        </div>
        <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.15)" }}>
          v2.0
        </span>
      </div>
    </section>
  );
}


