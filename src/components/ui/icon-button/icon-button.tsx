import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";
import { cn } from "@/utils/cn";

type IconButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const iconButtonClassNames = [
  "flex rounded p-1.5",
  "transition hover:bg-hover-primary",
  "disabled:cursor-not-allowed",
];

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <button ref={ref} type="button" className={cn(iconButtonClassNames)} {...props}>
        {children}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";
