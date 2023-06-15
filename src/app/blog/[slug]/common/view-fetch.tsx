"use client";

import { FunctionComponent, useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import { getPosts, postView } from "@/client/query-fns";

type ViewFetchProps = {
  slug: string;
};

const ViewFetch: FunctionComponent<ViewFetchProps> = ({ slug }) => {
  const postsQuery = useQuery({ queryKey: "posts", queryFn: getPosts, enabled: false });

  // first create the view, then fetch posts
  const { mutate: incrementView } = useMutation(postView, {
    onSuccess: () => {
      postsQuery.refetch();
    },
  });

  useEffect(() => {
    incrementView(slug);
  }, [incrementView, slug]);

  return <></>;
};

export { ViewFetch };
