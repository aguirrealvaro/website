import { FunctionComponent } from "react";
import { Item } from "./common";
import { PageContainer, Wrapper } from "@/components";
import { Typography } from "@/components/ui";

const Trajectory: FunctionComponent = () => {
  return (
    <PageContainer>
      <Wrapper>
        <div className="flex flex-col gap-8">
          <section>
            <Typography.H3 className="mb-4">Experience</Typography.H3>
            <Item
              image="/phinxlab.jpg"
              company="Phinx Lab"
              time="Jan 2020 - Dec 2022"
              subItems={[{ company: "Blockfi", time: "time", image: "/blockfi.png" }]}
            />
          </section>
          <section>
            <Typography.H3 className="mb-4">Education</Typography.H3>
          </section>
        </div>
      </Wrapper>
    </PageContainer>
  );
};

export default Trajectory;
