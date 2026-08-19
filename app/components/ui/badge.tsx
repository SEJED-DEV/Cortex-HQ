import { type HTMLAttributes } from "react";
import { cn } from "@/app/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "error" | "info";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider",
        variant === "default" && "bg-white/[0.06] text-white/70",
        variant === "success" && "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
        variant === "warning" && "bg-amber-500/10 text-amber-400 border border-amber-500/20",
        variant === "error" && "bg-red-500/10 text-red-400 border border-red-500/20",
        variant === "info" && "bg-blue-500/10 text-blue-400 border border-blue-500/20",
        className,
      )}
      {...props}
    />
  );
}
