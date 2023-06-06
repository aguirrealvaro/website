import { FunctionComponent } from "react";
import Image from "next/image";
import { ItemProps } from "./item";
import { cn } from "@/utils/cn";

type SubItemProps = Omit<ItemProps, "subItems">;

const SubItem: FunctionComponent<SubItemProps> = ({ company, image, time }) => {
  return (
    <div
      className={cn(
        "ml-8 mt-4 flex items-center",
        "before:mr-8 before:inline-block before:h-2 before:w-2 before:rounded-full before:bg-text-primary before:content-['']"
      )}
    >
      <div className="flex gap-4">
        <Image
          src={image}
          alt={`${company} Logo`}
          width={50}
          height={50}
          className="rounded"
        />
        <div className="flex flex-col">
          <h4 className="font-medium">{company}</h4>
          <span className="text-text-secondary">{time}</span>
        </div>
      </div>
    </div>
  );
};

export { SubItem };
