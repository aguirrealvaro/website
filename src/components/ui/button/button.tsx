import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const buttonVariants = cva(
  [
    "flex items-center justify-center gap-2",
    "border border-transparent",
    "disabled:cursor-not-allowed disabled:bg-disabled-primary disabled:text-disabled-secondary",
    "transition",
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
      variant: {
        primary: "",
        secondary: "",
        outlined: "",
        ghost: "",
        link: "",
        // TO DO: Add plain?
      },
      colorScheme: {
        neutral: "",
        blue: "",
        green: "",
        red: "",
        yellow: "",
      },
    },
    compoundVariants: [
      // Primary
      {
        variant: "primary",
        colorScheme: "neutral",
        className: [
          "border-black bg-black text-white",
          "hover:border-neutral-800 hover:bg-neutral-800",
          "dark:border-white dark:bg-white dark:text-black",
          "dark:hover:border-neutral-200 dark:hover:bg-neutral-200",
        ],
      },
      {
        variant: "primary",
        colorScheme: "blue",
        className: [
          "border-sky-600 bg-sky-600 text-white",
          "hover:border-sky-700 hover:bg-sky-700",
          "dark:border-sky-500 dark:bg-sky-500 dark:text-black",
          "dark:hover:border-sky-400 dark:hover:bg-sky-400",
        ],
      },
      {
        variant: "primary",
        colorScheme: "green",
        className: [
          "border-emerald-600 bg-emerald-600 text-white",
          "hover:border-emerald-700 hover:bg-emerald-700",
          "dark:border-emerald-500 dark:bg-emerald-500 dark:text-black",
          "dark:hover:border-emerald-400 dark:hover:bg-emerald-400",
        ],
      },
      {
        variant: "primary",
        colorScheme: "yellow",
        className: [
          "border-yellow-500 bg-yellow-500 text-black",
          "hover:border-yellow-600 hover:bg-yellow-600",
          "dark:border-yellow-400 dark:bg-yellow-400 dark:text-black",
          "dark:hover:border-yellow-300 dark:hover:bg-yellow-300",
        ],
      },
      {
        variant: "primary",
        colorScheme: "red",
        className: [
          "border-red-600 bg-red-600 text-white",
          "hover:border-red-700 hover:bg-red-700",
          "dark:border-red-500 dark:bg-red-500 dark:text-black",
          "dark:hover:border-red-400 dark:hover:bg-red-400",
        ],
      },
    ],
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
  ({ children, block, size, shape, variant, colorScheme, ...restProps }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ block, size, shape, variant, colorScheme }))}
        {...restProps}
      >
        <span className="hidden text-sm"></span>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants, type ButtonProps };
