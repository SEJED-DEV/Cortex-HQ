const bots = [
  {
    name: "Cortex Bot",
    tagline: "All-in-One Discord Infrastructure",
    description:
      "A versatile, feature-rich Discord bot offering leveling, economy, logging, welcoming, ticketing, giveaways, advanced moderation, and AutoMod. Always evolving with your community's needs.",
    features: [
      "Leveling System",
      "Economy & Shop",
      "Ticketing",
      "Modmail",
      "Giveaways",
      "Advanced Moderation",
      "AutoMod",
      "And More",
    ],
    cta: "Add to Discord",
    href: "https://discord.com/oauth2/authorize?client_id=1481721720099569848",
    featured: true,
  },
  {
    name: "QuranBot",
    tagline: "Islamic Radio & Prayer Times",
    description:
      "A production-grade Discord bot delivering seamless Quran listening experiences with live Islamic radio streams, automated Azkar reminders, precise localized prayer times, and role-based controls.",
    features: [
      "Live Radio Streams",
      "Azkar Reminders",
      "Prayer Times",
      "Role-Based Controls",
    ],
    cta: "Try QuranBot",
    href: "https://quranbot.cortexhq.net/",
  },
  {
    name: "Modmail Bot",
    tagline: "Discord Modmail Infrastructure",
    description:
      "High-performance modmail solution featuring session persistence, automated transcript generation, and inline attachment rendering for professional support workflows.",
    features: [
      "Session Persistence",
      "Auto Transcripts",
      "Inline Attachments",
      "High Performance",
    ],
    cta: "Try Modmail",
    href: "https://cortex-modmail.vercel.app/",
  },
];

export default function Bots() {
  return (
    <section id="bots" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-cortex-muted mb-4">
            Ecosystem
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-cortex-text">
            Our Bots
          </h2>
          <div className="w-12 h-0.5 bg-cortex-text/20 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {bots.map((bot) => (
            <div
              key={bot.name}
              className={`group relative bg-white border border-cortex-border rounded-2xl p-8 flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 ${
                bot.featured
                  ? "md:col-span-3 md:grid md:grid-cols-2 md:gap-12 md:p-12"
                  : ""
              }`}
            >
              {bot.featured && (
                <span className="absolute -top-3 left-8 px-4 py-1 text-xs font-semibold tracking-wide text-white bg-cortex-text rounded-full">
                  Featured
                </span>
              )}
              {bot.name === "Modmail Bot" && (
                <span className="absolute -top-3 left-8 px-4 py-1 text-xs font-semibold tracking-wide text-white bg-red-500/80 rounded-full">
                  Closing Soon
                </span>
              )}

              <div>
                <h3 className="text-2xl font-bold tracking-tight mb-2">
                  {bot.name}
                </h3>
                <p className="text-sm text-cortex-muted mb-5">
                  {bot.tagline}
                </p>
                <p className="text-sm text-cortex-muted/80 leading-relaxed mb-6">
                  {bot.description}
                </p>
                {bot.name === "Modmail Bot" && (
                  <p className="text-xs text-red-400 mb-4">
                    This service will be shutting down in the coming months.
                  </p>
                )}

                <a
                  href={bot.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold rounded-full transition-all ${
                    bot.featured
                      ? "text-white bg-cortex-text hover:bg-cortex-text/90"
                      : "text-cortex-text bg-cortex-border/50 hover:bg-cortex-border"
                  }`}
                >
                  {bot.cta}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </a>
              </div>

              <div className={bot.featured ? "mt-10 md:mt-0" : "mt-8"}>
                <span className="text-xs font-semibold tracking-widest uppercase text-cortex-muted/60 mb-4 block">
                  Features
                </span>
                <ul className="space-y-3">
                  {bot.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 text-sm"
                    >
                      <span className="w-5 h-5 rounded-full bg-cortex-text/5 flex items-center justify-center shrink-0">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#1a1a2e"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
