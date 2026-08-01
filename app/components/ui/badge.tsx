import { type HTMLAttributes } from "react";
import { cn } from "@/app/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "error" | "info";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider",
        variant === "default" && "bg-surface-200 text-surface-900",
        variant === "success" && "border border-cortex-400/30 bg-cortex-400/10 text-cortex-400",
        variant === "warning" && "border border-amber-500/20 bg-amber-500/10 text-amber-400",
        variant === "error" && "border border-red-500/20 bg-red-500/10 text-red-400",
        variant === "info" && "border border-[rgb(var(--color-border))] bg-surface-200 text-[rgb(var(--color-muted))]",
        className,
      )}
      {...props}
    />
  );
}
