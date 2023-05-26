import { FunctionComponent, HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

type MobileMenuProps = {
  isMobileMenuOpen: boolean;
  navbarHeight: number | undefined;
  closeMobileMenu: () => void;
} & HTMLAttributes<HTMLDivElement>;

export const MobileMenu: FunctionComponent<MobileMenuProps> = ({
  isMobileMenuOpen,
  navbarHeight,
}) => {
  return (
    <div
      style={{ top: `${navbarHeight}px` }}
      className={cn(
        "fixed inset-x-0 bottom-0 bg-red-500",
        isMobileMenuOpen ? "opacity-100" : "opacity-0",
        "transition-opacity"
      )}
    >
      Mobile Menu Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus natus nam
      animi quisquam vel, asperiores et magnam! Ipsum reiciendis incidunt cumque quos fuga,
      nulla nemo quia explicabo eveniet exercitationem voluptatum!
    </div>
  );
};
