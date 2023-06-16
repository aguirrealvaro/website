import { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { PostType, getSinglePost, postView } from "@/client/query-fns";

type UseSinglePostReturnType = {
  post: PostType | undefined;
  isFetchingPost: boolean;
  isIncrementingView: boolean;
};

const useSinglePost = (slug: string): UseSinglePostReturnType => {
  const queryClient = useQueryClient();

  const { data: post, isFetching: isFetchingPost } = useQuery({
    queryKey: ["single-post", slug],
    queryFn: getSinglePost,
  });

  const { mutate: incrementView, isLoading: isIncrementingView } = useMutation(postView, {
    onSuccess: () => {
      queryClient.invalidateQueries("single-post");
    },
  });

  useEffect(() => {
    incrementView(slug);
  }, [incrementView, slug]);

  return { post, isFetchingPost, isIncrementingView };
};

export { useSinglePost };
