"use client";

import { FunctionComponent } from "react";
import { PostContent, PostHeader } from "./common";
import { PageContainer, Wrapper } from "@/components";
import { useSinglePost } from "@/hooks";
import { allPosts } from "contentlayer/generated";

type PostProps = {
  params: {
    slug: string;
  };
};

const Post: FunctionComponent<PostProps> = ({ params }) => {
  const { post, isLoading } = useSinglePost(params.slug);

  const relatedPost = allPosts.find((post) => post.slug === params.slug);

  if (!relatedPost) return null;

  const { title, publishedAt, body } = relatedPost;

  return (
    <PageContainer>
      <Wrapper>
        <PostHeader
          title={title}
          publishedAt={publishedAt}
          views={post?.views}
          likes={post?.likes.length}
          isLoading={isLoading}
        />
        <PostContent content={body.code} />
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
