import { FunctionComponent } from "react";
import { SingleProject } from "./common";
import { PageContainer, Wrapper } from "@/components";
import { Typography } from "@/components/ui";

const Projects: FunctionComponent = () => {
  return (
    <PageContainer>
      <Wrapper>
        <Typography.H3 className="mb-4">Projects</Typography.H3>
        <div className="flex gap-4">
          <SingleProject
            title="UI Kit"
            description="React custom hooks and isolated components with accesibility"
          />
        </div>
      </Wrapper>
    </PageContainer>
  );
};

export default Projects;
