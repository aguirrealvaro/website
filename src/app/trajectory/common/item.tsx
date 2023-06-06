import { FunctionComponent } from "react";
import Image from "next/image";
import { SubItem } from "./sub-item";

type ItemProps = {
  image: string;
  company: string;
  time: string;
  subItems?: ItemProps[];
};

const Item: FunctionComponent<ItemProps> = ({ image, company, time, subItems }) => {
  return (
    <div>
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
      {subItems?.map(({ company, image, time }, index) => {
        return <SubItem key={index} company={company} image={image} time={time} />;
      })}
    </div>
  );
};

export { Item, type ItemProps };
