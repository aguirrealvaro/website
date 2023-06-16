import { type Post, type Likes } from "@prisma/client";
import { QueryFunctionContext } from "react-query";
import { fetcher } from "./fetcher";

export type PostType = Post & {
  likes: Likes[];
};

export const getSinglePost = (
  context: QueryFunctionContext<[string, string]>
): Promise<PostType> => {
  const [, slug] = context.queryKey;
  return fetcher(`post/${slug}`);
};

export const getPosts = (): Promise<PostType[]> => {
  return fetcher("post");
};

export const postSession = () => {
  return fetcher("session", { method: "POST" });
};

export const putView = (slug: string) => {
  return fetcher(`post/${slug}`, { method: "PUT" });
};
