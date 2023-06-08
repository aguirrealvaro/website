import { FunctionComponent, ReactNode } from "react";
import { cn } from "@/utils/cn";

type BoldProps = {
  children: ReactNode;
  className?: string;
};

const Bold: FunctionComponent<BoldProps> = ({ children, className }) => {
  return <strong className={cn("font-semibold", className)}>{children}</strong>;
};

export { Bold };
