import type { Metadata } from "next";
import { Container, Button, Card, CardContent } from "@/app/components/ui";
import { MessageCircle, ExternalLink, Bug, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with Cortex HQ bots and services. Join our Discord server for support.",
};

export default function SupportPage() {
  return (
    <Container size="md" className="py-16">
      <div className="mx-auto max-w-lg text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cortex-500/10">
          <MessageCircle className="h-8 w-8 text-cortex-400" />
        </div>
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-[rgb(var(--color-fg))]">Get Support</h1>
        <p className="mb-8 text-[rgb(var(--color-muted))]">
          Join our Discord server for help with Cortex Bot, Modmail Bot, QuranBot, and all Cortex HQ projects.
          Our team and community are ready to assist you.
        </p>

        <Card>
          <CardContent className="py-8">
            <h2 className="mb-2 text-xl font-semibold text-[rgb(var(--color-fg))]">Discord Server</h2>
            <p className="mb-6 text-sm text-[rgb(var(--color-muted))]">
              Fastest way to get help. Join thousands of other server owners.
            </p>
            <a
              href="https://discord.gg/JSYjs6kfjk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg">
                Join Discord Server
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </CardContent>
        </Card>

        <div className="mt-8 space-y-4 text-left">
          <div className="rounded-xl border border-[rgb(var(--color-border))] p-4">
            <h3 className="flex items-center gap-2 font-medium text-[rgb(var(--color-fg))]">
              <Bug className="h-4 w-4 text-cortex-400" />
              Bug Reports
            </h3>
            <p className="mt-1 text-sm text-[rgb(var(--color-muted))]">
              Report bugs in the #bug-reports channel on Discord with reproduction steps.
            </p>
          </div>
          <div className="rounded-xl border border-[rgb(var(--color-border))] p-4">
            <h3 className="flex items-center gap-2 font-medium text-[rgb(var(--color-fg))]">
              <Lightbulb className="h-4 w-4 text-cortex-400" />
              Feature Requests
            </h3>
            <p className="mt-1 text-sm text-[rgb(var(--color-muted))]">
              Suggest features in the #suggestions channel. We read every suggestion.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
