import { FunctionComponent, ReactNode } from "react";
import { cn } from "@/utils/cn";

type H3Props = {
  children: ReactNode;
  className?: string;
};

const H3: FunctionComponent<H3Props> = ({ children, className }) => {
  return (
    <h3 className={cn("text-2xl font-semibold text-text-heading", className)}>{children}</h3>
  );
};

export { H3 };
