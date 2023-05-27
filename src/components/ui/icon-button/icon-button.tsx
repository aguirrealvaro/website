import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";
import { cn } from "@/utils/cn";

type IconButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          "flex rounded p-1.5",
          "transition enabled:hover:bg-hover-primary",
          "disabled:cursor-not-allowed"
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";
