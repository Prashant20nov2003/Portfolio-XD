import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "tw:inline-flex tw:items-center tw:justify-center tw:whitespace-nowrap tw:rounded-md tw:text-sm tw:font-medium tw:transition-colors tw:focus-visible:outline-hidden tw:focus-visible:ring-1 tw:focus-visible:ring-ring tw:disabled:pointer-events-none tw:disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "tw:bg-[#191919] tw:text-[#ffffff] tw:shadow tw:hover:bg-[#191919]/90",
        destructive:
          "tw:bg-destructive tw:text-destructive-foreground tw:shadow-sm tw:hover:bg-destructive/90",
        outline:
          "tw:border tw:border-[#e2e8f0] tw:bg-[#f6f7f9] tw:text-[#47546b] tw:shadow-sm tw:hover:bg-[#f6f7f9]/90",
        secondary:
          "tw:bg-[#191919]/70 tw:text-[#ffffff] tw:shadow-sm tw:hover:bg-[#191919]",
        ghost: "tw:hover:bg-[#f6f7f9] tw:hover:text-[#47546b]",
        link: "tw:text-[#191919] tw:underline-offset-4 tw:hover:underline",
      },
      size: {
        default: "tw:h-9 tw:px-4 tw:py-2",
        sm: "tw:h-8 tw:rounded-md tw:px-3 tw:text-xs",
        lg: "tw:h-10 tw:rounded-md tw:px-8",
        icon: "tw:h-9 tw:w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
