import { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { PostType } from "@/client/interfaces";
import { getUserHasLiked, incrementView, likePost } from "@/client/query-fns";

type UseSinglePostReturnType = {
  post: PostType | undefined;
  isLoading: boolean;
  likePostMutation: (slug: string) => void;
  userHasLiked: boolean;
};

const useSinglePost = (slug: string): UseSinglePostReturnType => {
  const queryClient = useQueryClient();

  // Increment View
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

  // Get userHasLiked

  const userHasLikedQuery = useQuery({
    queryKey: ["user-has-liked", slug],
    queryFn: getUserHasLiked,
  });

  const userHasLiked = userHasLikedQuery.data || false;

  // Like Post
  const { mutate: likePostMutation } = useMutation(likePost, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: "posts" }); // no funciona, llamar a get single post
      queryClient.invalidateQueries({ queryKey: ["user-has-liked", slug] });
    },
  });

  return { post, isLoading, likePostMutation, userHasLiked };
};

export { useSinglePost };
