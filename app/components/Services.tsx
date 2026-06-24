const services = [
  {
    name: "Free Bots",
    description:
      "Ready-to-deploy Discord bots with zero cost. Production-grade moderation, utility, and engagement tools available for every community.",
    items: [
      {
        label: "Vanguard Moderation",
        desc: "Industrial-grade moderation engine with custom SQLite caching. Fast, secure, privacy-first.",
        href: "https://github.com/SEJED-DEV/Vanguard-discord-bot",
      },
      {
        label: "Nova ER:LC Manager",
        desc: "Premium management bot for ER:LC Private Servers with live PRC API dashboards.",
        href: "https://github.com/SEJED-DEV/Nova-ERLC-Manager",
      },
      {
        label: "ER:LC Utility Engine",
        desc: "Enterprise utility bot optimized for ER:LC API V2 with modular architecture.",
        href: "https://github.com/SEJED-DEV/ERLC-UTILITY-BOT",
      },
    ],
  },
  {
    name: "Free Projects",
    description:
      "Open-source infrastructure for the Discord ecosystem. Libraries, frameworks, and tools built for developers.",
    items: [
      {
        label: "Cortex Core",
        desc: "High-performance modular core framework for scalable server automation.",
        href: "https://github.com/SEJED-DEV/cortex-core",
      },
      {
        label: "Pickle Infrastructure",
        desc: "Specialized Roblox automation with professional ticketing and secure sales tracking.",
        href: "https://github.com/SEJED-DEV/pickle-infra",
      },
      {
        label: "Nexus Transcripts",
        desc: "Next-gen HTML transcript library — premium, interactive, fully offline dashboards.",
        href: "https://github.com/SEJED-DEV/nexus-transcripts",
      },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-cortex-border/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-cortex-muted mb-4">
            Open Source
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-cortex-text">
            Services
          </h2>
          <div className="w-12 h-0.5 bg-cortex-text/20 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service) => (
            <div key={service.name}>
              <div className="mb-8">
                <h3 className="text-xl font-bold tracking-tight mb-2">
                  {service.name}
                </h3>
                <p className="text-sm text-cortex-muted/80 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="space-y-4">
                {service.items.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-white border border-cortex-border rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-black/5 hover:-translate-y-0.5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <span className="w-2 h-2 rounded-full bg-cortex-text/20 group-hover:bg-cortex-text transition-colors" />
                          <h4 className="font-semibold text-sm tracking-wide">
                            {item.label}
                          </h4>
                        </div>
                        <p className="text-sm text-cortex-muted/70 leading-relaxed pl-5">
                          {item.desc}
                        </p>
                      </div>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#1a1a2e"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="shrink-0 mt-0.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                      >
                        <path d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
