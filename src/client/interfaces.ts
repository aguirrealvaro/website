import { type Post, type Likes } from "@prisma/client";

export type PostType = Post & {
  likes: Likes[];
};
