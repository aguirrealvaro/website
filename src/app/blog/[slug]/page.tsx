import { FunctionComponent } from "react";
import { PostContent, PostHeader } from "./common";
import { getSession } from "@/app/api/likes/[slug]/route";
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
  const hasLiked = await getUserHasLiked(params.slug);

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
          userHasLiked={hasLiked}
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

const getUserHasLiked = async (slug: string) => {
  const post = await prisma.post.findUnique({ where: { slug } });

  if (!post) return false;

  const currentSessionId = getSession();

  const likes = await prisma.likes.findMany({
    where: { postId: post.id, sessionId: currentSessionId },
  });

  const userHasLiked = likes.length > 0;

  return userHasLiked;
};
