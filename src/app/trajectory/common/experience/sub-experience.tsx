import { FunctionComponent } from "react";
import { cn } from "@/utils/cn";

const SubExperience: FunctionComponent = () => {
  return (
    <div
      className={cn(
        "ml-8 mt-4 flex items-center",
        "before:mr-8 before:inline-block before:h-2 before:w-2 before:rounded-full before:bg-text-primary before:content-['']"
      )}
    >
      SubExp
    </div>
  );
};

export { SubExperience };
