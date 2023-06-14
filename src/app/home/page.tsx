import { Prisma } from "@prisma/client";
import { ContactButtons, IntroductionText } from "./common";
import { PageContainer, PostsList, Wrapper } from "@/components";
import { Typography } from "@/components/ui";
import prisma from "@/utils/prisma";

const getPosts = async () => {
  const posts = await prisma.post.findMany({
    include: { views: true, likes: true },
  });

  return posts;
};

export type UsersWithCars = Prisma.PromiseReturnType<typeof getPosts>;

const Home = async () => {
  const posts = await getPosts();

  console.log(posts);

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
