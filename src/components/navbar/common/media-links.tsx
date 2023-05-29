import { FunctionComponent } from "react";
import { Github, Linkedin } from "lucide-react";
import { Icon, iconButtonVariants } from "@/components/ui";

export const MediaLinks: FunctionComponent = () => {
  return (
    <>
      <a
        href="https://github.com/aguirrealvaro"
        target="_blank"
        rel="noopener noreferrer"
        className={iconButtonVariants()}
      >
        <Icon icon={Github} />
      </a>
      <a
        href="https://www.linkedin.com/in/aguirrealvaro/"
        target="_blank"
        rel="noopener noreferrer"
        className={iconButtonVariants()}
      >
        <Icon icon={Linkedin} />
      </a>
    </>
  );
};
