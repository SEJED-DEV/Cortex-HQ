import { type HTMLAttributes } from "react";
import { cn } from "@/app/lib/utils";
import { Container } from "@/app/components/ui";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  size?: "sm" | "md" | "lg";
}

export function Section({ className, size = "lg", children, ...props }: SectionProps) {
  return (
    <section className={cn("py-20 pt-28 md:py-28 md:pt-36", className)} {...props}>
      <Container size={size === "lg" ? "lg" : size === "md" ? "md" : "sm"}>
        {children}
      </Container>
    </section>
  );
}

export function SectionHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mb-14 max-w-2xl", className)} {...props} />;
}

export function SectionLabel({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "mb-4 block text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-muted)]",
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
        "text-3xl font-bold tracking-tight text-white sm:text-4xl",
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
        "mt-4 text-lg text-[var(--color-muted)]",
        className,
      )}
      {...props}
    />
  );
}
