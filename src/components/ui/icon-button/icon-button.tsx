import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const iconButtonVariants = cva(
  ["flex rounded", "transition hover:bg-hover-primary", "disabled:cursor-not-allowed"],
  {
    variants: {
      size: {
        xs: "p-0.5",
        sm: "p-1",
        md: "p-1.5",
        lg: "p-2",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

type IconButtonProps = {
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof iconButtonVariants>;

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, size, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn(iconButtonVariants({ size }), className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";

export { IconButton, iconButtonVariants, type IconButtonProps };
