import { FunctionComponent } from "react";
import { Github, Linkedin } from "lucide-react";
import { Icon } from "@/components/ui";

export const MediaLinks: FunctionComponent = () => {
  return (
    <>
      <a>
        <Icon icon={Github} />
      </a>
      <a>
        <Icon icon={Linkedin} />
      </a>
    </>
  );
};
