import type { Metadata } from "next";
import { CheckCircle2, AlertTriangle, XCircle, Wrench } from "lucide-react";
import { Card, CardContent, Badge } from "@/app/components/ui";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/app/components/shared/section";
import type { StatusService } from "@/app/types";

export const metadata: Metadata = {
  title: "Status",
  description: "Real-time status of all Cortex HQ services.",
};

const services: StatusService[] = [
  { name: "Cortex Bot", status: "operational", uptime: 99.98 },
  { name: "Modmail Bot", status: "operational", uptime: 99.97 },
  { name: "QuranBot", status: "operational", uptime: 99.99 },
  { name: "API", status: "operational", uptime: 99.95 },
  { name: "Website", status: "operational", uptime: 100 },
  { name: "Dashboard", status: "operational", uptime: 99.98 },
];

const statusConfig = {
  operational: { label: "Operational", icon: CheckCircle2, color: "text-cortex-400", badge: "success" as const },
  degraded: { label: "Degraded", icon: AlertTriangle, color: "text-amber-500", badge: "warning" as const },
  downtime: { label: "Downtime", icon: XCircle, color: "text-red-500", badge: "error" as const },
  maintenance: { label: "Maintenance", icon: Wrench, color: "text-[rgb(var(--color-muted))]", badge: "info" as const },
};

export default function StatusPage() {
  const allOperational = services.every((s) => s.status === "operational");

  return (
    <Section size="md">
      <div className="mb-8 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cortex-400/20 bg-cortex-400/10 px-4 py-1.5 text-sm text-cortex-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cortex-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cortex-400" />
          </span>
          {allOperational ? "All Systems Operational" : "Some Systems Affected"}
        </div>
        <SectionTitle className="text-center">Service Status</SectionTitle>
        <SectionDescription className="text-center">
          Current operational status of all Cortex HQ services.
        </SectionDescription>
      </div>

      <div className="space-y-3">
        {services.map((service) => {
          const config = statusConfig[service.status];
          const Icon = config.icon;
          return (
            <Card key={service.name}>
              <CardContent className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Icon className={`h-5 w-5 ${config.color}`} />
                  <span className="font-medium text-[rgb(var(--color-fg))]">{service.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-[rgb(var(--color-muted))]">{service.uptime}% uptime</span>
                  <Badge variant={config.badge}>{config.label}</Badge>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
