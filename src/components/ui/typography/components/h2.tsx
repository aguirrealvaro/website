import { FunctionComponent, ReactNode } from "react";
import { cn } from "@/utils/cn";

type H2Props = {
  children: ReactNode;
  className?: string;
};

const H2: FunctionComponent<H2Props> = ({ children, className }) => {
  return <h2 className={cn("text-3xl font-bold text-text-heading", className)}>{children}</h2>;
};

export { H2 };
