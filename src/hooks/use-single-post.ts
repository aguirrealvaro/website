import { useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";
import { PostType } from "@/client/interfaces";
import { createView } from "@/client/query-fns";

type UseSinglePostReturnType = {
  post: PostType | undefined;
  isLoading: boolean;
};

const useSinglePost = (slug: string): UseSinglePostReturnType => {
  const queryClient = useQueryClient();

  const {
    mutate: incrementView,
    isLoading,
    data: post,
  } = useMutation(createView, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: "posts" });
    },
  });

  useEffect(() => {
    incrementView(slug);
  }, [incrementView, slug]);

  return { post, isLoading };
};

export { useSinglePost };
