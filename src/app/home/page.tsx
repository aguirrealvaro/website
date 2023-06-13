import { ContactButtons, IntroductionText } from "./common";
import { PageContainer, PostsList, Wrapper } from "@/components";
import { Typography } from "@/components/ui";
//import prisma from "@/utils/prisma";

/* const getPosts = async () => {
  const response = await fetch("/api/post", {
    headers: { "Content-Type": "application/json" },
  });

  // This will activate the closest `error.js` Error Boundary
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const posts = await response.json();

  const posts = await prisma.post.findMany({
    include: { views: true, likes: true },
  });

  return posts;
}; */

// TO DO: type Home
const Home = async () => {
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
