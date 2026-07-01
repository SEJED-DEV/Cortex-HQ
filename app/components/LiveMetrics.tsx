"use client";

import { useEffect, useState } from "react";

export default function LiveMetrics() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/servers")
      .then((r) => r.json())
      .then((data) => setCount(data.count))
      .catch(() => setCount(0));
  }, []);

  return (
    <div className="grid grid-cols-2 gap-3">
      <MetricItem label="Active Servers" value={count ?? "..."} delay="0.2s" />
      <MetricItem label="Total Messages" value="2,005" delay="0.24s" />
      <MetricItem label="Total Commands" value="64" delay="0.28s" />
      <MetricItem label="Total Activity" value="2,069" delay="0.32s" />
    </div>
  );
}

function MetricItem({
  label,
  value,
  delay,
}: {
  label: string;
  value: string | number;
  delay: string;
}) {
  return (
    <div
      className="animate-fade-up rounded-md border p-3"
      style={{
        animationDelay: delay,
        borderColor: "var(--color-border)",
        backgroundColor: "rgba(255,255,255,0.02)",
      }}
    >
      <div className="text-[10px] mb-0.5" style={{ color: "#a0a0a0" }}>
        {label}
      </div>
      <div
        className="text-base sm:text-lg font-semibold tracking-tight"
        style={{ color: "#18d2a6", fontFamily: "var(--font-mono)" }}
      >
        {value}
      </div>
    </div>
  );
}
