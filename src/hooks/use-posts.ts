import { useQuery } from "@tanstack/react-query";
import { PostType } from "@/client/interfaces";
import { getPosts } from "@/client/query-fns";

type UsePostsReturnType = {
  posts: PostType[] | undefined;
  isFetching: boolean;
};

const usePosts = (): UsePostsReturnType => {
  const { data: posts, isFetching } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  return { posts, isFetching };
};

export { usePosts };
