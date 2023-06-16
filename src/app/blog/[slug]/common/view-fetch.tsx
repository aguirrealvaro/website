"use client";

import { FunctionComponent, useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";
import { postView } from "@/client/query-fns";

type ViewFetchProps = {
  slug: string;
};

const ViewFetch: FunctionComponent<ViewFetchProps> = ({ slug }) => {
  const queryClient = useQueryClient();

  // first create the view, then fetch posts
  const { mutate: incrementView } = useMutation(postView, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
    },
  });

  useEffect(() => {
    incrementView(slug);
  }, [incrementView, slug]);

  return <></>;
};

export { ViewFetch };
