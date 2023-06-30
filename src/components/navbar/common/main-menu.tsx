import { FunctionComponent, useRef, useState } from "react";
import Link from "next/link";
import { NAVIGATION_LINKS } from "@/constants";

const MainMenu: FunctionComponent = () => {
  const listRef = useRef<HTMLUListElement>(null);
  const linksRef = useRef<HTMLAnchorElement[]>([]);

  const [activeElement, setActiveElement] = useState<number | undefined>(undefined);

  const siblingSizes = (() => {
    if (activeElement === undefined) return undefined;
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
      <ul
        className="relative flex gap-4"
        ref={listRef}
        onMouseLeave={() => setActiveElement(undefined)}
      >
        {activeElement !== undefined && (
          <span
            className="pointer-events-none absolute rounded bg-hover-primary transition-all"
            style={{
              width: `${siblingSizes?.width}px`,
              height: `${siblingSizes?.height}px`,
              left: `${siblingSizes?.left}px`,
            }}
          />
        )}
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
