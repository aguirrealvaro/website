import { FunctionComponent } from "react";
import { SingleExperience } from "./single-experience";
import { Typography } from "@/components/ui";

const Experience: FunctionComponent = () => {
  return (
    <div>
      <Typography.H3 className="mb-4">Experience</Typography.H3>
      <SingleExperience
        image="/phinxlab.jpg"
        company="Phinx Lab"
        time="Jan 2020 - Dec 2022"
        subExperiences={[{ company: "asd", time: "time", image: "asd" }]}
      />
    </div>
  );
};

export { Experience };
