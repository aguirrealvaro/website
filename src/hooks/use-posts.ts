import { useQuery } from "react-query";
import { PostType, getPosts } from "@/client/query-fns";

type UsePostsReturnType = {
  posts: PostType[] | undefined;
  isLoadingPosts: boolean;
};

const usePosts = (): UsePostsReturnType => {
  const { data: posts, isLoading: isLoadingPosts } = useQuery({
    queryKey: "posts",
    queryFn: getPosts,
  });

  return { posts, isLoadingPosts };
};

export { usePosts };
