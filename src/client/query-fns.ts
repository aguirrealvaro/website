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

export const postSession = () => {
  return fetcher("session", { method: "POST" });
};

export const putView = (slug: string): Promise<PostType> => {
  return fetcher(`post/${slug}`, { method: "PUT" });
};
