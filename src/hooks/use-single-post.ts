import { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { PostType } from "@/client/interfaces";
import { getSinglePost, getUserHasLiked, incrementView, likePost } from "@/client/query-fns";

type UseSinglePostReturnType = {
  post: PostType | undefined;
  isFetchingPost: boolean;
  likePostMutation: (slug: string) => void;
  isLiking: boolean;
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
  const { mutate: likePostMutation, isLoading: isLiking } = useMutation(likePost, {
    onSuccess: () => {
      getSinglePostQuery.refetch();
      queryClient.invalidateQueries({ queryKey: ["user-has-liked", slug] });
    },
  });

  const isFetchingPost = isFetchingView || getSinglePostQuery.isFetching;

  return {
    post: getSinglePostQuery.data,
    isFetchingPost,
    likePostMutation,
    isLiking,
    userHasLiked,
  };
};

export { useSinglePost };
