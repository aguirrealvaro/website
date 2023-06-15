import { FunctionComponent } from "react";
import { PostContent, PostHeader, ViewFetch } from "./common";
import { PageContainer, Wrapper } from "@/components";
import { allPosts } from "contentlayer/generated";

type PostProps = {
  params: {
    slug: string;
  };
};

const Post: FunctionComponent<PostProps> = ({ params }) => {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) return null;

  return (
    <PageContainer>
      <Wrapper>
        <ViewFetch slug={params.slug} />
        <PostHeader slug={post.slug} title={post.title} publishedAt={post.publishedAt} />
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
