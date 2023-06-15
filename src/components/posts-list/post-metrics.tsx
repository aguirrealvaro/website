"use client";

import { FunctionComponent } from "react";
import { useQuery } from "react-query";
import { getPosts } from "@/client/query-fns";

type PostMetricsProps = {
  slug: string;
};

const PostMetrics: FunctionComponent<PostMetricsProps> = ({ slug }) => {
  const postsQuery = useQuery({ queryKey: "posts", queryFn: getPosts });

  const relatedPost = postsQuery.data?.find((post) => post.slug === slug);

  if (!relatedPost) return null;

  const { views, likes } = relatedPost;

  const renderMetric = (metric: number) => {
    if (postsQuery.isFetching) {
      return "...";
    } else {
      return metric;
    }
  };

  return (
    <>
      {renderMetric(views.length)} views · {renderMetric(likes.length)} likes
    </>
  );
};

export { PostMetrics };
