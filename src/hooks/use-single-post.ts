import { useEffect } from "react";
import { useMutation } from "react-query";
import { PostType } from "@/client/interfaces";
import { putView } from "@/client/query-fns";

type UseSinglePostReturnType = {
  post: PostType | undefined;
  isFetching: boolean;
};

const useSinglePost = (slug: string): UseSinglePostReturnType => {
  // Instead of mutate and then fetch, I can just do the mutation and take the data
  const { mutate: incrementView, isLoading: isFetching, data: post } = useMutation(putView);

  useEffect(() => {
    incrementView(slug);
  }, [incrementView, slug]);

  return { post, isFetching };
};

export { useSinglePost };
