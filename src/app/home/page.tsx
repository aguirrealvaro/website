import { FunctionComponent } from "react";
import { IntroductionText, ProfilePicutre } from "./common";
import { PageContainer, Wrapper } from "@/components";

const Home: FunctionComponent = () => {
  return (
    <div>
      <Wrapper>
        <PageContainer>
          <div className="flex justify-between gap-10">
            <IntroductionText />
            {/* <ProfilePicutre /> */}
          </div>
        </PageContainer>
      </Wrapper>
    </div>
  );
};

export default Home;
