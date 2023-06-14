import { type Post as DatabasePostType, type Views, type Likes } from "@prisma/client";
import prisma from "@/utils/prisma";
import { allPosts, type Post as ContentPostType } from "contentlayer/generated";

type PostIncludeType = {
  views: Views[];
  likes: Likes[];
};

type ContentPostTypeOmit = Omit<ContentPostType, "_id" | "_raw" | "slug" | "type">;

type PostType = DatabasePostType & PostIncludeType & ContentPostTypeOmit;

const getPost = async (slug: string): Promise<PostType | undefined> => {
  const dbPost = await prisma.post.findUnique({
    where: {
      slug,
    },
    include: {
      views: true,
      likes: true,
    },
  });

  const relatedPost = allPosts.find((contentPost) => contentPost.slug === slug);

  if (!dbPost || !relatedPost) return;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { _id, _raw, slug: dummySlug, type, ...restProps } = relatedPost;

  return {
    ...dbPost,
    ...restProps,
  };
};

export { getPost, type PostType };
