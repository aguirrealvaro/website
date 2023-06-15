import { FunctionComponent } from "react";
import { Item } from "./common";
import { PageContainer, Wrapper } from "@/components";
import { Typography, Separator } from "@/components/ui";

const Trajectory: FunctionComponent = () => {
  return (
    <PageContainer>
      <Wrapper>
        <div className="flex flex-col gap-12">
          <section>
            <Typography.H3 className="mb-4">Experience</Typography.H3>
            <Item
              image="/phinxlab.jpg"
              company="Phinx Lab"
              fromDate="2020-01-01"
              toDate="2022-12-01"
              description="Software factory where I worked for different clients, primarily BlockFi."
              subItems={[
                {
                  company: "Team Lead at Blockfi",
                  fromDate: "2021-02-01",
                  toDate: "2022-12-01",
                  image: "/blockfi2.png",
                  description:
                    "I led a small team in the development of Trading, performing frontend tasks and launching high-impact features on the web app. I contributed to the success of the product, resulting in a significant improvement in the user experience and an increase in user engagement.",
                },
                {
                  company: "Frontend Developer at Blockfi",
                  fromDate: "2020-01-01",
                  toDate: "2021-02-01",
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
              fromDate="2021-01-01"
              toDate="2021-10-01"
              description="I worked in the early stages of the project. I was responsible for designing and implementing the user interface. I worked closely with the design team and end-users to create user-friendly interface designs."
            />
            <Separator />
            <Item
              image="/company.png"
              company="Fullstack Developer at Coihue Software"
              fromDate="2019-09-01"
              toDate="2019-12-01"
              description="I have built different custom websites for various clients using React and Node for frontend and backend, respectively. I have also worked with relational databases to store and access important site data."
            />
          </section>
          <section>
            <Typography.H3 className="mb-4">Education</Typography.H3>
            <Item
              image="/up.png"
              company="Universidad de Palermo"
              fromDate="2016-01-01"
              toDate="2022-12-01"
              description="Degree in Computer Science"
            />
          </section>
        </div>
      </Wrapper>
    </PageContainer>
  );
};

export default Trajectory;
