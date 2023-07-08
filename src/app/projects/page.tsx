import { FunctionComponent } from "react";
import { SingleProject } from "./common";
import { PageContainer, Wrapper } from "@/components";
import { Typography } from "@/components/ui";

const Projects: FunctionComponent = () => {
  return (
    <PageContainer>
      <Wrapper>
        <Typography.H3 className="mb-2">Projects</Typography.H3>
        <span className="mb-8 inline-block text-text-secondary">
          Some of the side projects I&apos;m currently working on:
        </span>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-1">
          <SingleProject
            title="UI Kit"
            description="React component library and custom hooks. Personally, I'm not a big fan of any component library, so I've been creating my own components. Being the owner of my code makes it easier for me to customize and extend them based on my needs. It offers typical components of a design system out of the box such as Dialog, Alert, Accordion, Button, etc. I might consider publishing it on npm."
            image="/components.webp"
            projectLink="https://ui-kit7.vercel.app"
            codeLink="https://github.com/aguirrealvaro/ui-kit"
          />
          <SingleProject
            title="Estudio AGR"
            description="Web page of a real estate company"
            image="/agr.png"
            projectLink="https://www.estudioagr.com/"
          />
        </div>
      </Wrapper>
    </PageContainer>
  );
};

export default Projects;
