import { FunctionComponent } from "react";
import { Item, ItemProps } from "./item";
import { cn } from "@/utils/cn";

type SubItemProps = Omit<ItemProps, "subItems">;

const SubItem: FunctionComponent<SubItemProps> = ({ company, image, time, description }) => {
  return (
    <div
      className={cn(
        "ml-8 mt-4 flex items-center",
        "before:mr-8 before:h-2 before:w-2 before:rounded-full before:bg-text-primary before:content-['']"
      )}
    >
      <Item image={image} company={company} time={time} description={description} />
    </div>
  );
};

export { SubItem };
