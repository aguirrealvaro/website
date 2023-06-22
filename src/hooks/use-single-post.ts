import { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { PostType } from "@/client/interfaces";
import { getSinglePost, incrementView, likePost } from "@/client/query-fns";

type UseSinglePostReturnType = {
  post: PostType | undefined;
  isLoading: boolean;
  likePostMutation: (slug: string) => void;
};

const useSinglePost = (slug: string): UseSinglePostReturnType => {
  const {
    data: post,
    isFetching: isFetchingPost,
    refetch: fetchSinglePost,
  } = useQuery({
    queryKey: ["single-post", slug],
    queryFn: getSinglePost,
    enabled: false,
  });

  const queryClient = useQueryClient();

  const { mutate: incrementViewMutation, isLoading: isMutatingView } = useMutation(
    incrementView,
    {
      onSuccess: () => {
        fetchSinglePost();
        queryClient.invalidateQueries({ queryKey: ["posts"] });
      },
    }
  );

  useEffect(() => {
    incrementViewMutation(slug);
  }, [incrementViewMutation, slug]);

  const { mutate: likePostMutation } = useMutation(likePost, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: "posts" });
    },
  });

  const isLoading = isFetchingPost || isMutatingView;

  return { post, isLoading, likePostMutation };
};

export { useSinglePost };
