import { FunctionComponent, HTMLAttributes } from "react";
import Link from "next/link";
import { navigationLinks } from "@/constants";
import { useKeyPress } from "@/hooks";
import { cn } from "@/utils/cn";

type MobileMenuProps = {
  isMobileMenuOpen: boolean;
  navbarHeight: number | undefined;
  closeMobileMenu: () => void;
  isUnmounting: boolean;
} & HTMLAttributes<HTMLDivElement>;

const MobileMenu: FunctionComponent<MobileMenuProps> = ({
  isMobileMenuOpen,
  navbarHeight,
  closeMobileMenu,
  isUnmounting,
}) => {
  useKeyPress({
    targetKey: "Escape",
    handler: closeMobileMenu,
    enabled: isMobileMenuOpen,
  });

  return (
    <div
      style={{ top: `${navbarHeight}px` }}
      className={cn(
        "flex items-center justify-center",
        "fixed inset-x-0 bottom-0 bg-bg-secondary",
        isMobileMenuOpen && !isUnmounting && "animate-navbar-open",
        isUnmounting && "animate-navbar-close"
      )}
    >
      <nav className="mb-4">
        <ul className="flex flex-col gap-4">
          {navigationLinks.map(({ name, href }, index) => {
            return (
              <li key={index} className="text-center">
                <Link href={href} className="rounded p-1.5 transition hover:bg-hover-primary">
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export { MobileMenu };
