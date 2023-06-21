import { AnchorHTMLAttributes, ReactNode, forwardRef } from "react";
import { cn } from "@/utils/cn";

type LinkUnderlineType = boolean | "hover";

type LinkProps = {
  children: ReactNode;
  underline?: LinkUnderlineType;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, underline = "hover", ...restProps }, ref) => {
    return (
      <a
        className={cn(
          "text-sky-600 dark:text-sky-500",
          underline === "hover" ? "hover:underline" : "",
          underline === true ? "underline" : "no-underline",
          "disabled:text-red-500"
        )}
        ref={ref}
        target="_blank"
        rel="noopener noreferrer"
        {...restProps}
      >
        {children}
      </a>
    );
  }
);

Link.displayName = "Link";

export { Link, type LinkProps };
