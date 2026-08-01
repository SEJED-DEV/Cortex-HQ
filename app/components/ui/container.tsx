import { type HTMLAttributes } from "react";
import { cn } from "@/app/lib/utils";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

export function Container({ className, size = "lg", ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        size === "sm" && "max-w-3xl",
        size === "md" && "max-w-5xl",
        size === "lg" && "max-w-7xl",
        size === "xl" && "max-w-[90rem]",
        size === "full" && "max-w-full",
        className,
      )}
      {...props}
    />
  );
}
