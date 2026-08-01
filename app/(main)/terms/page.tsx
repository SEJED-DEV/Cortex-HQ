"use client";

import { useState } from "react";
import { Container } from "@/app/components/ui";
import { cn } from "@/app/lib/utils";
import type { TabContent } from "@/app/types";

const tabs: TabContent[] = [
  {
    id: "website",
    label: "Website",
    content: [
      "**Terms of Service for cortexhq.net**",
      "",
      "By accessing this website, you agree to these terms.",
      "",
      "**Use License**",
      "- Permission is granted to temporarily access materials for personal, non-commercial use",
      "- This license does not allow modifying, copying, or commercial use of materials",
      "",
      "**Disclaimer**",
      "The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied.",
      "",
      "**Limitations**",
      "Cortex HQ shall not be liable for any damages arising from use of this website.",
      "",
      "**Changes**",
      "We may update these terms at any time without notice.",
    ],
  },
  {
    id: "cortex-bot",
    label: "Cortex Bot",
    content: [
      "**Terms of Service for Cortex Bot**",
      "",
      "By adding Cortex Bot to your Discord server, you agree to these terms.",
      "",
      "**Acceptable Use**",
      "- You may use Cortex Bot for lawful purposes only",
      "- You may not abuse, exploit, or spam bot features",
      "- You must comply with Discord's Terms of Service",
      "",
      "**Service Availability**",
      "We strive for 99.9% uptime but do not guarantee uninterrupted service.",
      "",
      "**Limitation of Liability**",
      "Cortex HQ is not responsible for any damages resulting from bot usage, including data loss or server disruption.",
      "",
      "**Termination**",
      "We reserve the right to block access to any server violating these terms.",
    ],
  },
  {
    id: "modmail-bot",
    label: "Modmail Bot",
    content: [
      "**Terms of Service for Modmail Bot**",
      "",
      "By adding Modmail Bot to your server, you agree to these terms.",
      "",
      "**Data Responsibility**",
      "Server administrators are responsible for managing transcript data and ensuring compliance with applicable laws.",
      "",
      "**Acceptable Use**",
      "- Modmail Bot is for legitimate community correspondence",
      "- Harassment or abuse through modmail is prohibited",
      "- Transcripts may be reviewed for abuse prevention",
      "",
      "**Service Limitations**",
      "We reserve the right to rate-limit or suspend access to maintain service stability.",
      "",
      "**Changes**",
      "These terms may be updated. Continued use constitutes acceptance of changes.",
    ],
  },
];

export default function TermsPage() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <Container size="md" className="py-16">
      <h1 className="mb-2 text-3xl font-bold tracking-tight text-[rgb(var(--color-fg))]">Terms of Service</h1>
      <p className="mb-8 text-[rgb(var(--color-muted))]">Last updated: January 1, 2026</p>

      <div className="mb-8 flex gap-1 border-b border-[rgb(var(--color-border))]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "px-4 py-2 text-sm font-medium transition-colors",
              activeTab === tab.id
                ? "border-b-2 border-cortex-400 text-cortex-400"
                : "text-[rgb(var(--color-muted))] hover:text-[rgb(var(--color-fg))]",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="prose prose-sm max-w-none dark:prose-invert">
        {tabs.find((t) => t.id === activeTab)?.content.map((line, i) => {
          if (line.startsWith("**") && line.endsWith("**")) {
            return <h2 key={i} className="mt-6 mb-3 text-lg font-semibold text-[rgb(var(--color-fg))]">{line.slice(2, -2)}</h2>;
          }
          if (line.startsWith("- ")) {
            return <li key={i} className="ml-4 text-[rgb(var(--color-muted))]">{line.slice(2)}</li>;
          }
          if (line.trim() === "") return <br key={i} />;
          return <p key={i} className="text-[rgb(var(--color-muted))]">{line}</p>;
        })}
      </div>
    </Container>
  );
}
