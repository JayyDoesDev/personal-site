import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";

const badgeVariants = cva(
  "inline-flex items-center font-bold border-2 border-black transition-all",
  {
    variants: {
      variant: {
        default: "bg-[#c3a0ff] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
        outline: "bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
        solid: "bg-black text-white shadow-none",
        surface:
          "bg-primary text-primary-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-2.5 py-1 text-sm",
        lg: "px-3 py-1.5 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

export function Badge({
  children,
  size,
  variant,
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </span>
  );
}
