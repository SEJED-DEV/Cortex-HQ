import type { Metadata } from "next";
import { BarChart3, Bot, Settings, Users, MessageSquare, Activity, Shield, Zap } from "lucide-react";
import { Card, CardContent, Badge } from "@/app/components/ui";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/app/components/shared/section";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Preview of the Cortex Bot dashboard — manage your server settings, moderation, and analytics.",
};

const features = [
  { title: "Server Overview", description: "View server stats, member count, and activity at a glance.", icon: BarChart3 },
  { title: "Bot Management", description: "Configure all your bots from a single dashboard.", icon: Bot },
  { title: "Moderation Panel", description: "Review logs, manage bans, and handle appeals.", icon: Shield },
  { title: "Member Analytics", description: "Track member growth, engagement, and activity trends.", icon: Users },
  { title: "Modmail Inbox", description: "View and respond to modmail threads in real-time.", icon: MessageSquare },
  { title: "Audit Log", description: "Complete history of all moderation actions and changes.", icon: Activity },
  { title: "Config Editor", description: "Edit bot settings with a clean, intuitive interface.", icon: Settings },
  { title: "Quick Actions", description: "Common commands and tools accessible in one click.", icon: Zap },
];

export default function DashboardPage() {
  return (
    <Section>
      <SectionHeader>
        <div className="flex items-center gap-3">
          <Badge variant="warning">Coming Soon</Badge>
        </div>
        <SectionTitle>Dashboard Preview</SectionTitle>
        <SectionDescription>
          A web dashboard for managing Cortex Bot, Modmail Bot, and all your server settings.
          Currently in development.
        </SectionDescription>
      </SectionHeader>

      <div className="rounded-xl border border-[rgb(var(--color-border))] bg-[rgb(var(--color-bg))] p-6">
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          {[
            { label: "Servers", value: "247", change: "+12" },
            { label: "Active Users", value: "12.4K", change: "+8%" },
            { label: "Commands Today", value: "8.2K", change: "+15%" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-lg border border-[rgb(var(--color-border))] p-4">
              <p className="text-sm text-[rgb(var(--color-muted))]">{stat.label}</p>
              <p className="mt-1 text-2xl font-bold text-[rgb(var(--color-fg))]">{stat.value}</p>
              <p className="text-sm text-cortex-400">{stat.change}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title}>
                <CardContent>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-cortex-500/10 text-cortex-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-1 font-medium text-[rgb(var(--color-fg))]">{feature.title}</h3>
                  <p className="text-sm text-[rgb(var(--color-muted))]">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
