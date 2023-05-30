import { FunctionComponent } from "react";
import { Github, Linkedin } from "lucide-react";
import { Icon, iconButtonVariants } from "@/components/ui";

const mediaLinks = [
  {
    href: "https://github.com/aguirrealvaro",
    icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/aguirrealvaro",
    icon: Linkedin,
  },
];

const MediaLinks: FunctionComponent = () => {
  return (
    <>
      {mediaLinks.map(({ href, icon }, index) => {
        return (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={iconButtonVariants()}
          >
            <Icon icon={icon} />
          </a>
        );
      })}
    </>
  );
};

export { MediaLinks };
