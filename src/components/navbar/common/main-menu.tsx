import { FunctionComponent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVIGATION_LINKS } from "@/constants";

const MainMenu: FunctionComponent = () => {
  const pathname = usePathname();
  const listRef = useRef<HTMLUListElement>(null);
  const linksRef = useRef<HTMLAnchorElement[]>([]);

  const [activeElement, setActiveElement] = useState<number>(0);

  useEffect(() => {
    setActiveElement(NAVIGATION_LINKS.findIndex((link) => pathname === link.href));
  }, [pathname]);

  const siblingSizes = (() => {
    const listLeft = listRef.current?.getBoundingClientRect().left || 0;
    const activeLinkLeft = linksRef.current[activeElement]?.getBoundingClientRect().left || 0;

    return {
      left: activeLinkLeft - listLeft,
      width: linksRef.current[activeElement]?.offsetWidth,
      height: linksRef.current[activeElement]?.offsetHeight,
    };
  })();

  return (
    <nav className="sm:hidden">
      <ul className="relative flex gap-4" ref={listRef}>
        <span
          className="pointer-events-none absolute rounded bg-hover-primary transition-all"
          style={{
            width: `${siblingSizes.width}px`,
            height: `${siblingSizes.height}px`,
            left: `${siblingSizes.left}px`,
          }}
        />
        {NAVIGATION_LINKS.map(({ name, href }, index) => {
          return (
            <li key={index}>
              <Link
                href={href}
                ref={(el) => {
                  if (el) {
                    linksRef.current[index] = el;
                  }
                }}
                onMouseEnter={() => setActiveElement(index)}
                className="rounded p-1.5 transition"
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export { MainMenu };
