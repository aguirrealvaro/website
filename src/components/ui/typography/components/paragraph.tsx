import { FunctionComponent, ReactNode } from "react";
import { cn } from "@/utils/cn";

type ParagraphProps = {
  children: ReactNode;
  className: string;
};

export const Paragraph: FunctionComponent<ParagraphProps> = ({ children, className }) => {
  return <p className={cn("", className)}>{children}</p>;
};
