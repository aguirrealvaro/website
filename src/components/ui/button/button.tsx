import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const buttonVariants = cva(
  [
    "flex items-center justify-center gap-2 bg-red-500",
    "border border-transparent",
    "disabled:cursor-not-allowed disabled:bg-disabled-primary disabled:text-disabled-secondary",
    // TO DO: add transitions
  ],
  {
    variants: {
      block: {
        true: "w-full",
      },
      size: {
        xs: "h-6 px-2 text-xs",
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-base",
        lg: "h-12 px-5 text-lg",
      },
      shape: {
        default: "rounded",
        pill: "rounded-xl",
        rectangle: "rounded-none",
      },
    },
    defaultVariants: {
      size: "md",
      shape: "default",
    },
  }
);

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, block, size, shape, ...restProps }, ref) => {
    return (
      <button ref={ref} className={cn(buttonVariants({ block, size, shape }))} {...restProps}>
        <span className="hidden text-sm"></span>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants, type ButtonProps };
