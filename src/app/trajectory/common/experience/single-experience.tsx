import { FunctionComponent, ReactNode } from "react";

type SingleExperienceProps = {
  children: ReactNode;
  company: string;
  time: string;
};

const SingleExperience: FunctionComponent<SingleExperienceProps> = ({
  children,
  company,
  time,
}) => {
  return (
    <div className="flex gap-4">
      <div>{children}</div>
      <div className="flex flex-col">
        <span>{company}</span>
        <span className="text-text-secondary">{time}</span>
      </div>
    </div>
  );
};

export { SingleExperience };
