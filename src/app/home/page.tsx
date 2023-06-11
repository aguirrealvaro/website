import { FunctionComponent } from "react";
import { ContactButtons, IntroductionText, ProfilePicture } from "./common";
import { PageContainer, PostsList, Wrapper } from "@/components";
import { Typography } from "@/components/ui";

const Home: FunctionComponent = () => {
  return (
    <div>
      <Wrapper>
        <PageContainer>
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
            <Typography.H2 className="mb-4">Latest Posts</Typography.H2>
            <PostsList sliced />
          </div>
        </PageContainer>
      </Wrapper>
    </div>
  );
};

export default Home;
