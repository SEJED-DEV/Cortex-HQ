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
      "**Privacy Policy for cortexhq.net**",
      "",
      "We respect your privacy and are committed to protecting it.",
      "",
      "**Information We Collect**",
      "- Usage data (pages visited, time spent)",
      "- Device and browser information",
      "- cookies for analytics (if enabled)",
      "",
      "**How We Use Information**",
      "- To improve our website and services",
      "- To analyze traffic patterns",
      "- To provide technical support",
      "",
      "**Data Sharing**",
      "We do not sell your personal data. We may share anonymized analytics data with third-party services.",
      "",
      "**Contact**",
      "Join our Discord server for privacy-related inquiries.",
    ],
  },
  {
    id: "cortex-bot",
    label: "Cortex Bot",
    content: [
      "**Privacy Policy for Cortex Bot**",
      "",
      "Cortex Bot collects minimal data necessary for functionality.",
      "",
      "**Data Collected**",
      "- Server ID and channel IDs for configuration",
      "- User IDs for moderation actions and leveling",
      "- Message content only for AutoMod features",
      "",
      "**Data Storage**",
      "- Configuration data is stored securely",
      "- Message content for AutoMod is not retained",
      "- User data can be deleted upon request",
      "",
      "**Data Retention**",
      "Data is retained while the bot is in your server. Removing the bot deletes all associated data within 30 days.",
      "",
      "**Third-Party Services**",
      "Cortex Bot does not share data with third parties.",
    ],
  },
  {
    id: "modmail-bot",
    label: "Modmail Bot",
    content: [
      "**Privacy Policy for Modmail Bot**",
      "",
      "Modmail Bot handles community correspondence with privacy in mind.",
      "",
      "**Data Collected**",
      "- Message content from modmail threads",
      "- User IDs and server IDs",
      "- Transcripts of closed threads",
      "",
      "**Data Storage**",
      "- Thread transcripts are stored securely",
      "- Transcripts can be deleted by server admins",
      "- Message content is encrypted at rest",
      "",
      "**Data Retention**",
      "Transcripts are retained for 90 days unless manually deleted by server administrators.",
      "",
      "**User Rights**",
      "Users can request deletion of their data by contacting server administrators.",
    ],
  },
];

export default function PrivacyPage() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <Container size="md" className="py-16">
      <h1 className="mb-2 text-3xl font-bold tracking-tight text-[rgb(var(--color-fg))]">Privacy Policy</h1>
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
