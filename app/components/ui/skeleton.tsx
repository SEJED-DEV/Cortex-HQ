import { cn } from "@/app/lib/utils";

export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-lg bg-surface-700",
        className,
      )}
    />
  );
}
