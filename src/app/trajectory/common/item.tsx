import { FunctionComponent } from "react";
import Image from "next/image";
import { Typography } from "@/components/ui";
import { cn } from "@/utils/cn";
import { formatDate } from "@/utils/format-date";

type ItemProps = {
  image: string;
  company: string;
  fromDate: string;
  toDate: string;
  description?: string;
  subItems?: ItemProps[];
  isSubItem?: boolean;
};

const Item: FunctionComponent<ItemProps> = ({
  image,
  company,
  fromDate,
  toDate,
  description,
  subItems,
  isSubItem = false,
}) => {
  const parsedFromDate = formatDate(fromDate, { showDay: false });
  const parsedToDate = formatDate(toDate, { showDay: false });

  return (
    <div className={cn("flex-1", isSubItem ? "ml-8 mt-4" : "")}>
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
            <time dateTime={parsedFromDate.dateString}>{parsedFromDate.formattedDate}</time> -{" "}
            <time dateTime={parsedToDate.dateString}>{parsedToDate.formattedDate}</time>
          </span>
          {description && <Typography.Paragraph>{description}</Typography.Paragraph>}
        </div>
      </div>
      {subItems?.map(({ company, image, fromDate, toDate, description }, index) => {
        return (
          <Item
            key={index}
            company={company}
            image={image}
            fromDate={fromDate}
            toDate={toDate}
            description={description}
            isSubItem
          />
        );
      })}
    </div>
  );
};

export { Item, type ItemProps };
