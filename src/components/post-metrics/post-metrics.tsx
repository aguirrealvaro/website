"use client";

import { FunctionComponent } from "react";
import { useQuery } from "react-query";
import { getPosts } from "@/client/query-fns";

type PostMetricsProps = {
  slug: string;
  shouldFetch: boolean;
};

const PostMetrics: FunctionComponent<PostMetricsProps> = ({ slug, shouldFetch }) => {
  const postsQuery = useQuery({ queryKey: "posts", queryFn: getPosts, enabled: shouldFetch });

  const relatedPost = postsQuery.data?.find((post) => post.slug === slug);

  const { views, likes } = relatedPost || {};

  const renderMetric = (metric: number | undefined) => {
    if (postsQuery.isFetching || metric === undefined) {
      return "...";
    } else {
      return metric;
    }
  };

  return (
    <>
      {renderMetric(views?.length)} views · {renderMetric(likes?.length)} likes
    </>
  );
};

export { PostMetrics };
