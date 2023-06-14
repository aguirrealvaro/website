import { type Post as DatabasePostType, type View, type Like } from "@prisma/client";
import prisma from "@/utils/prisma";
import { allPosts, type Post as ContentPostType } from "contentlayer/generated";

type PostIncludeType = {
  views: View[];
  likes: Like[];
};

type ContentPostTypeOmit = Omit<ContentPostType, "_id" | "_raw" | "body" | "slug" | "type">;

type PostType = DatabasePostType & PostIncludeType & ContentPostTypeOmit;

const getPosts = async (): Promise<PostType[]> => {
  const dbPosts = await prisma.post.findMany({
    include: { views: true, likes: true },
  });

  // Using map, it will return undefined if there is no relatedPost found getting a type of (PostType | undefined)[]
  // leading to issues because of the undefined type there
  // using flatMap, i return [], and then merge all inner arrays,
  // achieving the avoid of the undefined type if there is no relatedPost
  const posts = dbPosts.flatMap((dbPost) => {
    const relatedPost = allPosts.find((contentPost) => contentPost.slug === dbPost.slug);

    if (!relatedPost) return [];

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { _id, _raw, body, slug, type, ...restProps } = relatedPost;

    return {
      ...dbPost,
      ...restProps,
    };
  });

  const validPosts = posts.filter((post) => Boolean(post));

  const sortedPosts = validPosts.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  return sortedPosts;
};

export { getPosts, type PostType };
