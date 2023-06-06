import { FunctionComponent } from "react";
import { Item } from "./common";
import { PageContainer, Wrapper } from "@/components";
import { Typography, Separator } from "@/components/ui";

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
              description="Software factory where I work for different clients, primarily BlockFi."
              subItems={[
                {
                  company: "Team Lead at Blockfi",
                  time: "Feb 2021 - Dec 2022",
                  image: "/blockfi2.png",
                  description:
                    "I led a small team in the development of Trading, performing frontend tasks and launching high-impact features on the web app. I contributed to the success of the product, resulting in a significant improvement in the user experience and an increase in user engagement.",
                },
                {
                  company: "Frontend Developer at Blockfi",
                  time: "Jan 2020 - Feb 2021",
                  image: "/blockfi2.png",
                  description:
                    "As a junior front-end developer, I was involved in the reconstruction of the Trading product.",
                },
              ]}
            />
            <Separator />
            <Item
              image="/agora.png"
              company="Frontend Developer at Ágora"
              time="Jan 2021 - Oct 2021"
              description="I was involved in the early stages of the project. I was responsible for designing and implementing the user interface. I worked closely with the design team and end-users to create user-friendly interface designs."
            />
            <Separator />
            <Item
              image="/company.png"
              company="Fullstack Developer at Coihue Software"
              time="Sept 2019 - Dec 2019"
              description="I have built different custom websites for various clients using React and Node for frontend and backend, respectively. I have also worked with relational databases to store and access important site data."
            />
          </section>
          <section>
            <Typography.H3 className="mb-4">Education</Typography.H3>
            <Item
              image="/up.png"
              company="Universidad de Palermo"
              time="Sept 2019 - Dec 2019"
              description="Degree in Computer Science"
            />
          </section>
        </div>
      </Wrapper>
    </PageContainer>
  );
};

export default Trajectory;
