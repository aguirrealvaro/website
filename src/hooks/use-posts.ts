import { useQuery } from "react-query";
import { PostType } from "@/client/interfaces";
import { getPosts } from "@/client/query-fns";

type UsePostsReturnType = {
  posts: PostType[] | undefined;
  isFetching: boolean;
};

const usePosts = (): UsePostsReturnType => {
  const { data: posts, isLoading: isFetching } = useQuery({
    queryKey: "posts",
    queryFn: getPosts,
  });

  return { posts, isFetching };
};

export { usePosts };
