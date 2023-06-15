import { FunctionComponent } from "react";
import Image from "next/image";
import { SubItem } from "./sub-item";
import { Typography } from "@/components/ui";
import { getParsedDate } from "@/utils/get-parsed-date";

type ItemProps = {
  image: string;
  company: string;
  fromDate: string;
  toDate: string;
  description?: string;
  subItems?: ItemProps[];
};

const Item: FunctionComponent<ItemProps> = ({
  image,
  company,
  fromDate,
  toDate,
  description,
  subItems,
}) => {
  const parsedFromDate = getParsedDate(fromDate, false);
  const parsedToDate = getParsedDate(toDate, false);

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
          <Typography.H4>{company}</Typography.H4>
          <span className="text-text-secondary">
            <time dateTime={parsedFromDate.dateObject.toISOString()}>
              {parsedFromDate.formattedDate}
            </time>{" "}
            -{" "}
            <time dateTime={parsedToDate.dateObject.toISOString()}>
              {parsedToDate.formattedDate}
            </time>
          </span>
          {description && <Typography.Paragraph>{description}</Typography.Paragraph>}
        </div>
      </div>
      {subItems?.map(({ company, image, fromDate, toDate, description }, index) => {
        return (
          <SubItem
            key={index}
            company={company}
            image={image}
            fromDate={fromDate}
            toDate={toDate}
            description={description}
          />
        );
      })}
    </div>
  );
};

export { Item, type ItemProps };
