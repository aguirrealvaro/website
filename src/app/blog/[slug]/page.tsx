import { FunctionComponent } from "react";
import { PostContent, PostHeader } from "./common";
import { PageContainer, Wrapper } from "@/components";
import prisma from "@/utils/prisma";
import { allPosts } from "contentlayer/generated";

type PostProps = {
  params: {
    slug: string;
  };
};

const Post: FunctionComponent<PostProps> = async ({ params }) => {
  const pagePost = allPosts.find((post) => post.slug === params.slug);

  const post = await getSinglePost(params.slug);
  if (!pagePost || !post) return null;

  const { title, publishedAt, description, body } = pagePost;
  const { views, likes } = post;

  return (
    <PageContainer>
      <Wrapper>
        <PostHeader
          title={title}
          publishedAt={publishedAt}
          description={description}
          views={views}
          likes={likes.length}
          userHasLiked={false}
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
    if (process.env.NODE_ENV === "production" && !post.enabled) return;

    return {
      slug: post.slug,
    };
  });
}

const getSinglePost = async (slug: string) => {
  // increment view and get post
  const post = await prisma.post.update({
    where: {
      slug,
    },
    data: {
      views: { increment: 1 },
    },
    include: {
      likes: true,
    },
  });

  return post;
};
