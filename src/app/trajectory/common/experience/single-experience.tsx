import { FunctionComponent } from "react";
import Image from "next/image";
import { SubExperience } from "./sub-experience";

type SingleExperienceProps = {
  image: string;
  company: string;
  time: string;
  subExperiences?: SingleExperienceProps[];
};

const SingleExperience: FunctionComponent<SingleExperienceProps> = ({
  image,
  company,
  time,
  subExperiences,
}) => {
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
      {subExperiences?.map(({ company }, index) => {
        return <SubExperience key={index} />;
      })}
    </div>
  );
};

export { SingleExperience };
