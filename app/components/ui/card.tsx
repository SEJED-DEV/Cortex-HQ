import { type HTMLAttributes } from "react";
import { cn } from "@/app/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "hover" | "glass";
  glow?: boolean;
}

export function Card({ className, variant = "default", glow = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm transition-all duration-300",
        variant === "hover" && "hover:-translate-y-0.5 hover:border-white/[0.12] hover:bg-white/[0.06] hover:shadow-lg hover:shadow-black/20",
        variant === "glass" && "backdrop-blur-xl bg-white/[0.04] border-white/[0.08]",
        glow && "hover:shadow-[0_0_40px_-12px_rgba(109,40,217,0.15),0_0_40px_-12px_rgba(24,210,166,0.1),0_0_40px_-12px_rgba(37,99,235,0.1)]",
        className,
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pb-0", className)} {...props} />;
}

export function CardContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6", className)} {...props} />;
}

export function CardFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex items-center p-6 pt-0", className)} {...props} />;
}
