import { FunctionComponent, HTMLAttributes } from "react";
import { useRouter } from "next/navigation";
import { NAVIGATION_LINKS } from "@/constants";
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
  const router = useRouter();

  useKeyPress({
    targetKey: "Escape",
    handler: closeMobileMenu,
    enabled: isMobileMenuOpen,
  });

  const handleClick = (href: string) => {
    router.push(href);
    closeMobileMenu();
  };

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
          {NAVIGATION_LINKS.map(({ name, href }, index) => {
            return (
              <li key={index} className="text-center">
                <button
                  onClick={() => handleClick(href)}
                  className="rounded p-1.5 transition hover:bg-hover-primary"
                >
                  {name}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export { MobileMenu };
