import { FunctionComponent } from "react";
import Image from "next/image";
import { SingleExperience } from "./single-experience";
import { Typography } from "@/components/ui";

const Experience: FunctionComponent = () => {
  return (
    <div>
      <Typography.H3 className="mb-4">Experience</Typography.H3>
      <SingleExperience company="Phinx Lab" time="Jan 2020 - Dec 2022">
        <Image
          src="/phinxlab.jpg"
          alt="phinxlab-logo"
          width={50}
          height={50}
          className="rounded"
        />
      </SingleExperience>
    </div>
  );
};

export { Experience };
