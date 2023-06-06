import { FunctionComponent } from "react";
import { Item } from "./common";
import { PageContainer, Wrapper } from "@/components";
import { Typography } from "@/components/ui";

const Trajectory: FunctionComponent = () => {
  return (
    <PageContainer>
      <Wrapper>
        <div className="flex flex-col gap-8">
          <div>
            <Typography.H3 className="mb-4">Experience</Typography.H3>
            <Item
              image="/phinxlab.jpg"
              company="Phinx Lab"
              time="Jan 2020 - Dec 2022"
              subItems={[{ company: "asd", time: "time", image: "asd" }]}
            />
          </div>
          <div>
            <Typography.H3 className="mb-4">Education</Typography.H3>
          </div>
        </div>
      </Wrapper>
    </PageContainer>
  );
};

export default Trajectory;
