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
          "inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cortex-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--color-bg))] disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
          variant === "primary" && "bg-[#ededed] text-[#070708] hover:bg-cortex-400",
          variant === "secondary" && "bg-surface-200 text-[rgb(var(--color-fg))] hover:bg-surface-300",
          variant === "ghost" && "text-[rgb(var(--color-muted))] hover:bg-surface-200 hover:text-[rgb(var(--color-fg))]",
          variant === "outline" && "border border-[rgb(var(--color-border))] text-[rgb(var(--color-fg))] hover:border-cortex-400 hover:text-cortex-400",
          size === "sm" && "h-8 px-3 text-xs",
          size === "md" && "h-9 px-4 text-sm",
          size === "lg" && "h-11 px-5 text-sm",
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
