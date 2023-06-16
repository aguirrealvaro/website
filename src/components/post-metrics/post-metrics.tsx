"use client";

import { FunctionComponent } from "react";
import { usePosts } from "@/hooks";

type PostMetricsProps = {
  slug: string;
};

const PostMetrics: FunctionComponent<PostMetricsProps> = ({ slug }) => {
  const { posts, isLoadingPosts } = usePosts();

  const relatedPost = posts?.find((post) => post.slug === slug);

  const { views, likes } = relatedPost || {};

  const renderMetric = (metric: number | undefined) => {
    if (isLoadingPosts) {
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
