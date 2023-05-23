import { FunctionComponent } from "react";

export const MainMenu: FunctionComponent = () => {
  return (
    <nav>
      <ul className="flex gap-4">
        <li>Home</li>
        <li>Blog</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
