import { useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";
import { PostType } from "@/client/interfaces";
import { incrementView, likePost } from "@/client/query-fns";

type UseSinglePostReturnType = {
  post: PostType | undefined;
  isLoading: boolean;
  likePostMutation: (slug: string) => void;
};

const useSinglePost = (slug: string): UseSinglePostReturnType => {
  const queryClient = useQueryClient();

  const {
    mutate: incrementViewMutation,
    isLoading,
    data: post,
  } = useMutation(incrementView, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: "posts" });
    },
  });

  useEffect(() => {
    incrementViewMutation(slug);
  }, [incrementViewMutation, slug]);

  const { mutate: likePostMutation } = useMutation(likePost, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: "posts" });
    },
  });

  return { post, isLoading, likePostMutation };
};

export { useSinglePost };
