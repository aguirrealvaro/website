import { FunctionComponent } from "react";
import { ItemProps } from "./item";
import { cn } from "@/utils/cn";

type SubItemProps = Omit<ItemProps, "subItems">;

const SubItem: FunctionComponent<SubItemProps> = () => {
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

export { SubItem };
