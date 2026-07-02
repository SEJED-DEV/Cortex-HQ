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
      <div className="flex-1 grid grid-cols-1">
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
                  href="/#bots"
                  className="inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-[13px] font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  style={{ background: "#fff", color: "#000" }}
                >
                  Explore Bots
                </a>
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


