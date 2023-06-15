"use client";

import { FunctionComponent } from "react";
import { useQuery } from "react-query";
import { getPosts } from "@/client/query-fns";

type PostMetricsProps = {
  slug: string;
};

const PostMetrics: FunctionComponent<PostMetricsProps> = ({ slug }) => {
  // I am aware that i am querying /posts inside a map,
  // but the query wont exec more than once since since is cached
  const postsQuery = useQuery({ queryKey: "posts", queryFn: getPosts });

  const relatedPost = postsQuery.data?.find((post) => post.slug === slug);

  const { views, likes } = relatedPost || {};

  const renderMetric = (metric: number | undefined) => {
    if (postsQuery.isFetching) {
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
