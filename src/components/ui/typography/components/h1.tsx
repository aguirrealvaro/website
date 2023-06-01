import { FunctionComponent, ReactNode } from "react";
import { cn } from "@/utils/cn";

type H1Props = {
  children: ReactNode;
  className?: string;
};

export const H1: FunctionComponent<H1Props> = ({ children, className }) => {
  return <h1 className={cn("text-3xl font-bold", className)}>{children}</h1>;
};
