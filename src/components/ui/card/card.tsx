import { FunctionComponent, ReactNode } from "react";
import { cn } from "@/utils/cn";

type CardProps = {
  children: ReactNode;
  className: string;
};

const Card: FunctionComponent<CardProps> = ({ children, className }) => {
  return <div className={cn("rounded bg-bg-secondary p-4", className)}>{children}</div>;
};

export { Card, type CardProps };
