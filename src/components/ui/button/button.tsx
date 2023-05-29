import { ButtonHTMLAttributes, FunctionComponent, ReactNode } from "react";
import { cn } from "@/utils/cn";

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FunctionComponent<ButtonProps> = ({ children, ...restProps }) => {
  return (
    <button
      className={cn(
        "flex items-center justify-center gap-2 bg-red-500",
        "border border-transparent",
        "disabled:cursor-not-allowed disabled:bg-disabled-primary disabled:text-disabled-secondary"
      )}
      {...restProps}
    >
      <span className="hidden disabled:text-disabled-secondary"></span>
      {children}
    </button>
  );
};
