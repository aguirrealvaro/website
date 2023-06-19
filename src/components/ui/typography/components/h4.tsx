import { FunctionComponent, ReactNode } from "react";
import { cn } from "@/utils/cn";

type H4Props = {
  children: ReactNode;
  className?: string;
};

const H4: FunctionComponent<H4Props> = ({ children, className }) => {
  return <h4 className={cn("font-semibold text-text-heading", className)}>{children}</h4>;
};

export { H4 };
