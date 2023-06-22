import { QueryFunctionContext } from "react-query";
import { fetcher } from "./fetcher";
import { PostType } from "@/client/interfaces";

export const getSinglePost = (
  context: QueryFunctionContext<[string, string]>
): Promise<PostType> => {
  const [, slug] = context.queryKey;
  return fetcher(`post/${slug}`);
};

export const getPosts = (): Promise<PostType[]> => {
  return fetcher("post");
};

export const incrementView = (slug: string): Promise<PostType> => {
  return fetcher(`post/${slug}`, { method: "PUT" });
};

export const getUserHasLiked = (
  context: QueryFunctionContext<[string, string]>
): Promise<boolean> => {
  const [, slug] = context.queryKey;
  return fetcher(`likes/${slug}`);
};

export const likePost = (slug: string): Promise<PostType> => {
  return fetcher(`likes/${slug}`, { method: "POST" });
};
