import { FunctionComponent, ReactNode } from "react";
import { cn } from "@/utils/cn";

type H2Props = {
  children: ReactNode;
  className?: string;
};

export const H2: FunctionComponent<H2Props> = ({ children, className }) => {
  return <h1 className={cn("text-3xl font-bold", className)}>{children}</h1>;
};
