import { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { PostType } from "@/client/interfaces";
import { getSinglePost, getUserHasLiked, incrementView, likePost } from "@/client/query-fns";

type UseSinglePostReturnType = {
  post: PostType | undefined;
  isFetchingPost: boolean;
  likePostMutate: (slug: string) => void;
  isFetchingLike: boolean;
  userHasLiked: boolean;
};

const useSinglePost = (slug: string): UseSinglePostReturnType => {
  const queryClient = useQueryClient();

  // Get single post
  const getSinglePostQuery = useQuery({
    queryKey: ["single-post", slug],
    queryFn: getSinglePost,
    enabled: false,
  });

  // Increment View
  const { mutate: incrementViewMutation, isLoading: isFetchingView } = useMutation(
    incrementView,
    {
      onSuccess: () => {
        getSinglePostQuery.refetch();
        queryClient.invalidateQueries({ queryKey: "posts" });
      },
    }
  );

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
  const likePostMutation = useMutation(likePost, {
    onSuccess: () => {
      getSinglePostQuery.refetch();
      queryClient.invalidateQueries({ queryKey: ["user-has-liked", slug] });
    },
  });

  const isFetchingPost = isFetchingView || getSinglePostQuery.isFetching;
  const isFetchingLike = likePostMutation.isLoading || userHasLikedQuery.isFetching;

  return {
    post: getSinglePostQuery.data,
    isFetchingPost,
    likePostMutate: likePostMutation.mutate,
    isFetchingLike,
    userHasLiked,
  };
};

export { useSinglePost };
