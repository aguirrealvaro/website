import { FunctionComponent } from "react";
import Link from "next/link";
import { navigationLinks } from "@/constants";

export const MainMenu: FunctionComponent = () => {
  return (
    <nav className="md:hidden">
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
