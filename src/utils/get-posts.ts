import { Prisma } from "@prisma/client";
import prisma from "@/utils/prisma";
import { allPosts } from "contentlayer/generated";

export const getPosts = async () => {
  const dbPosts = await prisma.post.findMany({
    include: { views: true, likes: true },
  });

  const posts = dbPosts.map((dbPost) => {
    const relatedPost = allPosts.find((contentPost) => contentPost.slug === dbPost.slug);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { _id, _raw, body, slug, type, ...restProps } = relatedPost || {};

    return {
      ...dbPost,
      ...restProps,
    };
  });

  return posts;
};

export type PostsType = Prisma.PromiseReturnType<typeof getPosts>;
