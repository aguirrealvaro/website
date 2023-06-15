import { type Post, type Views, type Likes } from "@prisma/client";
import { fetcher } from "./fetcher";

type PostType = Post & {
  views: Views[];
  likes: Likes[];
};

export const getPosts = (): Promise<PostType[]> => {
  return fetcher("post");
};

export const postSession = () => {
  return fetcher("session", { method: "POST" });
};

export const postView = (slug: string) => {
  return fetcher(`views/${slug}`, { method: "POST" });
};
