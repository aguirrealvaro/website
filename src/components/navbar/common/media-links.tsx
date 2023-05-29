import { FunctionComponent } from "react";
import { Github, Linkedin } from "lucide-react";
import { Icon } from "@/components/ui";
import { iconButtonClassNames } from "@/components/ui/icon-button";
import { cn } from "@/utils/cn";

export const MediaLinks: FunctionComponent = () => {
  return (
    <>
      <a
        href="https://github.com/aguirrealvaro"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(iconButtonClassNames)}
      >
        <Icon icon={Github} />
      </a>
      <a
        href="https://www.linkedin.com/in/aguirrealvaro/"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(iconButtonClassNames)}
      >
        <Icon icon={Linkedin} />
      </a>
    </>
  );
};
