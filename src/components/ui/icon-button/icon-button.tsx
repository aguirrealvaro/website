import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";

type IconButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className="flex rounded p-1.5 transition hover:bg-hover-primary"
        {...props}
      >
        {children}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";
