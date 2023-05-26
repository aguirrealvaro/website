import { FunctionComponent } from "react";
import Link from "next/link";
import { navigationLinks } from "@/constants";

export const MainMenu: FunctionComponent = () => {
  return (
    <nav className="sm:hidden">
      <ul className="flex gap-8">
        {navigationLinks.map(({ name, href }, index) => {
          return (
            <li key={index}>
              <Link href={href}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
