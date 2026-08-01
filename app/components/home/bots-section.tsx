"use client";

import { ExternalLink, Bot, BookOpen, MessageSquare } from "lucide-react";
import { Button, Card, CardContent, Badge } from "@/app/components/ui";
import { Section, SectionHeader, SectionLabel, SectionTitle, SectionDescription } from "@/app/components/shared/section";
import type { Bot as BotType } from "@/app/types";

const bots: BotType[] = [
  {
    name: "Cortex Bot",
    tagline: "The all-in-one Discord bot",
    description: "Leveling, economy, ticketing, modmail, giveaways, and advanced moderation — all in one powerful package.",
    features: ["Leveling & Economy", "Ticket System", "Modmail", "Giveaways", "Advanced Moderation", "AutoMod"],
    cta: "Add to Discord",
    href: "https://discord.com/oauth2/authorize?client_id=1481721720099569848",
    website: "https://dashboard.cortexhq.net",
    featured: true,
  },
  {
    name: "QuranBot",
    tagline: "Islamic content for your server",
    description: "Live Quran radio, azkar reminders, prayer times, and role-based controls.",
    features: ["Live Radio", "Azkar Reminders", "Prayer Times", "Role Controls"],
    cta: "Invite QuranBot",
    href: "https://quranbot.cortexhq.net",
    website: "https://quranbot.cortexhq.net",
  },
  {
    name: "Modmail Bot",
    tagline: "Seamless community correspondence",
    description: "Session persistence, auto transcripts, inline attachments, and high-performance messaging.",
    features: ["Session Persistence", "Auto Transcripts", "Inline Attachments", "High Performance"],
    cta: "Get Modmail",
    href: "https://cortex-modmail.vercel.app",
    website: "https://cortex-modmail.vercel.app",
  },
];

const iconMap: Record<string, React.ReactNode> = {
  "Cortex Bot": <Bot className="h-5 w-5" />,
  "QuranBot": <BookOpen className="h-5 w-5" />,
  "Modmail Bot": <MessageSquare className="h-5 w-5" />,
};

function terminalName(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

function TerminalHeader({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-1.5 border-b border-[rgb(var(--color-border))] px-5 py-3">
      <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
      <span className="h-2.5 w-2.5 rounded-full bg-amber-500/60" />
      <span className="h-2.5 w-2.5 rounded-full bg-cortex-400/70" />
      <span className="ml-2 text-[11px] text-[rgb(var(--color-muted))]">
        $ {terminalName(name)}
      </span>
    </div>
  );
}

const featuredStats = [
  { label: "Uptime", value: "99.98%" },
  { label: "Servers", value: "14,203" },
  { label: "Commands", value: "82" },
  { label: "Avg. Latency", value: "42ms" },
];

export function BotsSection() {
  const [featured, ...rest] = bots;

  return (
    <Section id="bots">
      <SectionHeader>
        <SectionLabel>Ecosystem</SectionLabel>
        <SectionTitle>Our Bots</SectionTitle>
        <SectionDescription>
          Production-ready Discord bots designed to handle everything from moderation to community engagement.
        </SectionDescription>
      </SectionHeader>

      <div className="space-y-6">
        <Card className="relative overflow-hidden border-cortex-400/40">
          <Badge variant="info" className="absolute -top-3 right-4 z-10">
            Featured
          </Badge>
          <TerminalHeader name={featured.name} />
          <div className="grid lg:grid-cols-[1.4fr_1fr]">
            <CardContent className="p-6 lg:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded border border-cortex-400/20 bg-cortex-400/10 text-cortex-400">
                  {iconMap[featured.name]}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[rgb(var(--color-fg))]">{featured.name}</h3>
                  <p className="text-sm text-[rgb(var(--color-muted))]">{featured.tagline}</p>
                </div>
              </div>

              <p className="max-w-md text-sm text-[rgb(var(--color-muted))]">{featured.description}</p>

              <ul className="mt-5 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                {featured.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-[rgb(var(--color-fg))]">
                    <span className="text-cortex-400">+</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a href={featured.href} target="_blank" rel="noopener noreferrer">
                  <Button>
                    {featured.cta}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                {featured.website && (
                  <a href={featured.website} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">Website</Button>
                  </a>
                )}
              </div>
            </CardContent>

            <div className="hidden border-t border-[rgb(var(--color-border))] bg-surface-200/50 p-6 lg:block lg:border-l lg:border-t-0 lg:p-8">
              <div className="grid h-full grid-cols-2 content-center gap-4">
                {featuredStats.map((stat) => (
                  <div key={stat.label} className="rounded-lg border border-[rgb(var(--color-border))] bg-surface-100 p-4">
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[rgb(var(--color-muted))]">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-2xl font-bold text-cortex-400">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((bot) => (
            <Card key={bot.name} variant="hover" className="flex h-full flex-col">
              <TerminalHeader name={bot.name} />
              <CardContent className="flex flex-1 flex-col">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded border border-cortex-400/20 bg-cortex-400/10 text-cortex-400">
                    {iconMap[bot.name]}
                  </div>
                  <div>
                    <h3 className="font-bold text-[rgb(var(--color-fg))]">{bot.name}</h3>
                    <p className="text-xs text-[rgb(var(--color-muted))]">{bot.tagline}</p>
                  </div>
                </div>

                <p className="text-sm text-[rgb(var(--color-muted))]">{bot.description}</p>

                <ul className="mt-4 flex-1 space-y-1.5">
                  {bot.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-[rgb(var(--color-fg))]">
                      <span className="text-cortex-400">+</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a href={bot.href} target="_blank" rel="noopener noreferrer">
                    <Button size="sm">
                      {bot.cta}
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </a>
                  {bot.website && (
                    <a href={bot.website} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">Website</Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
