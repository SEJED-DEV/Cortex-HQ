import { type HTMLAttributes } from "react";
import { cn } from "@/app/lib/utils";
import { Container } from "@/app/components/ui";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  size?: "sm" | "md" | "lg";
}

export function Section({ className, size = "lg", children, ...props }: SectionProps) {
  return (
    <section className={cn("py-16 md:py-24", className)} {...props}>
      <Container size={size === "lg" ? "lg" : size === "md" ? "md" : "sm"}>
        {children}
      </Container>
    </section>
  );
}

export function SectionHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mb-12 max-w-2xl", className)} {...props} />;
}

export function SectionLabel({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "mb-4 block text-[11px] font-medium uppercase tracking-[0.2em] text-cortex-400",
        className,
      )}
      {...props}
    />
  );
}

export function SectionTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "text-3xl font-bold tracking-tight text-[rgb(var(--color-fg))] sm:text-4xl",
        className,
      )}
      {...props}
    />
  );
}

export function SectionDescription({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "mt-4 text-lg text-[rgb(var(--color-muted))]",
        className,
      )}
      {...props}
    />
  );
}
