import { FunctionComponent } from "react";
import Image from "next/image";

type SingleExperienceProps = {
  image: string;
  company: string;
  time: string;
};

const SingleExperience: FunctionComponent<SingleExperienceProps> = ({
  image,
  company,
  time,
}) => {
  return (
    <div className="flex gap-4">
      <Image src={image} alt={`${company} Logo`} width={50} height={50} className="rounded" />
      <div className="flex flex-col">
        <span>{company}</span>
        <span className="text-text-secondary">{time}</span>
      </div>
    </div>
  );
};

export { SingleExperience };
