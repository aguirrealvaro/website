import { PostContent, PostHeader, ViewFetch } from "./common";
import { PageContainer, Wrapper } from "@/components";
import { getPost } from "@/utils/get-post";
import { allPosts } from "contentlayer/generated";

type PostProps = {
  params: {
    slug: string;
  };
};

const Post = async ({ params }: PostProps) => {
  const post = await getPost(params.slug);

  if (!post) return null;

  return (
    <PageContainer>
      <Wrapper>
        <ViewFetch slug={params.slug} />
        <PostHeader title={post.title} />
        <PostContent content={post.body.code} />
      </Wrapper>
    </PageContainer>
  );
};

export default Post;

export const dynamicParams = false;

export async function generateStaticParams() {
  return allPosts.map((post) => {
    return {
      slug: post.slug,
    };
  });
}
