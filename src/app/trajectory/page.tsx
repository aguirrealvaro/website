import { FunctionComponent } from "react";
import { Experience, Education } from "./common";
import { PageContainer, Wrapper } from "@/components";

const Trajectory: FunctionComponent = () => {
  return (
    <PageContainer>
      <Wrapper>
        <div className="flex flex-col gap-8">
          <Experience />
          <Education />
        </div>
      </Wrapper>
    </PageContainer>
  );
};

export default Trajectory;
