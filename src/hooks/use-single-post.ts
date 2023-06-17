import { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { PostType } from "@/client/interfaces";
import { getSinglePost, putView } from "@/client/query-fns";

type UseSinglePostReturnType = {
  post: PostType | undefined;
  isFetching: boolean;
  isIncrementingView: boolean;
};

const useSinglePost = (slug: string): UseSinglePostReturnType => {
  const queryClient = useQueryClient();

  const { data: post, isFetching } = useQuery({
    queryKey: ["single-post", slug],
    queryFn: getSinglePost,
  });

  const { mutate: incrementView, isLoading: isIncrementingView } = useMutation(putView, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: "single-post" });
    },
  });

  useEffect(() => {
    incrementView(slug);
  }, [incrementView, slug]);

  return { post, isFetching, isIncrementingView };
};

export { useSinglePost };
