import { FunctionComponent } from "react";
import { buttonVariants } from "@/components/ui";
import { cn } from "@/utils/cn";

const ContactButtons: FunctionComponent = () => {
  return (
    <div className="flex gap-4">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/aguirrealvaro"
        className={cn(buttonVariants({ colorScheme: "blue" }))}
      >
        View Linkedin
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/aguirrealvaro"
        className={cn(buttonVariants({ variant: "outlined" }))}
      >
        View Github
      </a>
    </div>
  );
};

export { ContactButtons };
