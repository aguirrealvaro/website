import { useQuery } from "react-query";
import { PostType, getPosts } from "@/client/query-fns";

type UsePostsReturnType = {
  posts: PostType[] | undefined;
  isFetchingPosts: boolean;
};

const usePosts = (): UsePostsReturnType => {
  const { data: posts, isFetching: isFetchingPosts } = useQuery({
    queryKey: "posts",
    queryFn: getPosts,
  });

  return { posts, isFetchingPosts };
};

export { usePosts };
