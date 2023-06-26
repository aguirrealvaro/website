import { FunctionComponent } from "react";
import { ContactButtons, IntroductionText } from "./common";
import { PageContainer, PostsList, Wrapper } from "@/components";
import { Typography } from "@/components/ui";

const Home: FunctionComponent = () => {
  return (
    <PageContainer>
      <Wrapper>
        <div className="mb-16">
          <Typography.H2 className="mb-4">Hello, there!</Typography.H2>
          <div className="flex justify-between gap-10">
            <div>
              <IntroductionText />
              <ContactButtons />
            </div>
            {/* <ProfilePicture /> */}
          </div>
        </div>
        <div>
          <Typography.H2 className="mb-4">Posts</Typography.H2>
          <PostsList />
        </div>
      </Wrapper>
    </PageContainer>
  );
};

export default Home;
