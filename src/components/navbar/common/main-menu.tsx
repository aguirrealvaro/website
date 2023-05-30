import { FunctionComponent } from "react";
import Link from "next/link";
import { navigationLinks } from "@/constants";

const MainMenu: FunctionComponent = () => {
  return (
    <nav className="sm:hidden">
      <ul className="flex gap-4">
        {navigationLinks.map(({ name, href }, index) => {
          return (
            <li key={index}>
              <Link href={href} className="rounded p-1.5 transition hover:bg-hover-primary">
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
