"use client";

import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui";
import { Section, SectionHeader, SectionLabel, SectionTitle, SectionDescription } from "@/app/components/shared/section";
import type { ProjectCategory } from "@/app/types";

const categories: ProjectCategory[] = [
  {
    title: "Free Bots",
    items: [
      { name: "Vanguard Moderation", description: "Advanced moderation toolkit for Discord.", href: "https://github.com/SEJED-DEV" },
      { name: "Nova ER:LC Manager", description: "ER:LC server management bot.", href: "https://github.com/SEJED-DEV" },
      { name: "ER:LC Utility Engine", description: "Utility tools for ER:LC communities.", href: "https://github.com/SEJED-DEV" },
    ],
  },
  {
    title: "Free Projects",
    items: [
      { name: "Cortex Core", description: "Core library powering Cortex ecosystem.", href: "https://github.com/SEJED-DEV" },
      { name: "Pickle Infrastructure", description: "Infrastructure as code for Discord bots.", href: "https://github.com/SEJED-DEV" },
      { name: "Nexus Transcripts", description: "Beautiful transcript generation for modmail.", href: "https://github.com/SEJED-DEV" },
    ],
  },
];

export function ServicesSection() {
  return (
    <Section id="services">
      <SectionHeader>
        <SectionLabel>Open Source</SectionLabel>
        <SectionTitle>Free Projects</SectionTitle>
        <SectionDescription>
          Free, open-source tools and projects built for the Discord community.
          All projects are available on GitHub.
        </SectionDescription>
      </SectionHeader>

      <div className="grid gap-8 md:grid-cols-2">
        {categories.map((category) => (
          <div key={category.title}>
            <h3 className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-[rgb(var(--color-muted))]">
              {category.title}
            </h3>
            <div className="space-y-3">
              {category.items.map((item) => (
                <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="group block">
                  <Card variant="hover">
                    <CardContent className="flex items-center justify-between gap-4">
                      <div>
                        <h4 className="font-medium text-[rgb(var(--color-fg))]">{item.name}</h4>
                        <p className="text-sm text-[rgb(var(--color-muted))]">{item.description}</p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-[rgb(var(--color-muted))] transition-colors group-hover:text-cortex-400" />
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://github.com/SEJED-DEV"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-[rgb(var(--color-muted))] transition-colors hover:text-cortex-400"
        >
          View all projects on GitHub
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </Section>
  );
}
