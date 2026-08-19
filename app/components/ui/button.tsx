import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/app/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97]",
          variant === "primary" && "bg-white text-[#070708] font-semibold hover:bg-white/90 hover:shadow-[0_0_30px_rgba(255,255,255,0.12)]",
          variant === "secondary" && "bg-white/[0.06] text-white border border-white/[0.06] hover:bg-white/[0.1] hover:border-white/[0.12]",
          variant === "ghost" && "text-[var(--color-muted)] hover:bg-white/[0.06] hover:text-white",
          variant === "outline" && "border border-white/[0.06] text-white hover:border-white/[0.12] hover:bg-white/[0.03]",
          size === "sm" && "h-8 px-3 text-xs rounded-lg",
          size === "md" && "h-10 px-5 text-sm",
          size === "lg" && "h-12 px-6 text-sm",
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
