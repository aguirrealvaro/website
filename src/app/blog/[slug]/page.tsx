import { FunctionComponent } from "react";
import { PostWrapper } from "./common/post-wrapper";
import { PageContainer, Wrapper } from "@/components";
import { allPosts } from "contentlayer/generated";

type PostProps = {
  params: {
    slug: string;
  };
};

const Post: FunctionComponent<PostProps> = ({ params }) => {
  return (
    <PageContainer>
      <Wrapper>
        <PostWrapper slug={params.slug} />
      </Wrapper>
    </PageContainer>
  );
};

export default Post;

export const dynamicParams = false;

export async function generateStaticParams() {
  return allPosts.map((post) => {
    if (process.env.NODE_ENV === "production" && !post.enabled) return;

    return {
      slug: post.slug,
    };
  });
}
