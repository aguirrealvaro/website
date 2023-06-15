"use client";

import { FunctionComponent, useEffect } from "react";
import { useMutation } from "react-query";
import { postView } from "@/client/query-fns";

type ViewFetchProps = {
  slug: string;
};

const ViewFetch: FunctionComponent<ViewFetchProps> = ({ slug }) => {
  const { mutate: incrementView } = useMutation(postView);

  useEffect(() => {
    incrementView(slug);
  }, [incrementView, slug]);

  return <></>;
};

export { ViewFetch };
