import { FunctionComponent } from "react";
import Image from "next/image";
import { SubItem } from "./sub-item";
import { Typography } from "@/components/ui";

type ItemProps = {
  image: string;
  company: string;
  time: string;
  description?: string;
  subItems?: ItemProps[];
};

const Item: FunctionComponent<ItemProps> = ({
  image,
  company,
  time,
  description,
  subItems,
}) => {
  return (
    <div className="flex-1">
      <div className="flex items-center gap-4">
        <Image
          src={image}
          alt={`${company} Logo`}
          width={50}
          height={50}
          className="rounded"
        />
        <div className="flex flex-col">
          <h4 className="font-semibold">{company}</h4>
          <span className="text-text-secondary">{time}</span>
          {description && <Typography.Paragraph>{description}</Typography.Paragraph>}
        </div>
      </div>
      {subItems?.map(({ company, image, time, description }, index) => {
        return (
          <SubItem
            key={index}
            company={company}
            image={image}
            time={time}
            description={description}
          />
        );
      })}
    </div>
  );
};

export { Item, type ItemProps };
