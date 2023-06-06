import { FunctionComponent } from "react";
import { ContactButtons, IntroductionText, ProfilePicutre } from "./common";
import { PageContainer, Wrapper } from "@/components";

const Home: FunctionComponent = () => {
  return (
    <div>
      <Wrapper>
        <PageContainer>
          <div className="flex justify-between gap-10">
            <div>
              <IntroductionText />
              <ContactButtons />
            </div>
            {/* <ProfilePicutre /> */}
          </div>
        </PageContainer>
      </Wrapper>
    </div>
  );
};

export default Home;
