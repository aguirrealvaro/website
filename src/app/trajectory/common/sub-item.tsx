import { FunctionComponent } from "react";
import { Item, ItemProps } from "./item";
import { cn } from "@/utils/cn";

type SubItemProps = Omit<ItemProps, "subItems">;

const SubItem: FunctionComponent<SubItemProps> = ({
  company,
  image,
  fromDate,
  toDate,
  description,
}) => {
  return (
    <div
      className={cn(
        "ml-8 mt-4 flex items-center",
        "before:mr-8 before:h-2 before:w-2 before:rounded-full before:bg-text-primary before:content-[''] sm:before:hidden"
      )}
    >
      <Item
        image={image}
        company={company}
        fromDate={fromDate}
        toDate={toDate}
        description={description}
      />
    </div>
  );
};

export { SubItem };
