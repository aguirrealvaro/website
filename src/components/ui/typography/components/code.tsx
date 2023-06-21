import { FunctionComponent, ReactNode } from "react";
import { cn } from "@/utils/cn";

type CodeProps = {
  children: ReactNode;
  className?: string;
};

const Code: FunctionComponent<CodeProps> = ({ children, className }) => {
  return (
    <code
      className={cn(
        "rounded border px-0.5 py-1 font-mono text-xs font-normal",
        "border-neutral-300 bg-neutral-200",
        "dark:border-neutral-600 dark:bg-neutral-700",
        className
      )}
    >
      {children}
    </code>
  );
};

export { Code };
