"use client";

import { FunctionComponent } from "react";
import Link from "next/link";
import { usePosts } from "@/hooks";
import { formatDate } from "@/utils/format-date";
import { allPosts } from "contentlayer/generated";

type PostsListProps = {
  sliced?: boolean;
};

const PostsList: FunctionComponent<PostsListProps> = ({ sliced = false }) => {
  const displayPosts = sliced ? allPosts.slice(0, 3) : allPosts;

  const { posts, isLoadingPosts } = usePosts();

  return (
    <ul>
      {displayPosts.map((post) => {
        const { title, slug, publishedAt } = post;
        const { dateString, formattedDate } = formatDate(publishedAt);

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
          <li key={slug} className="border-b last:border-b-0 ">
            <Link
              href={`/blog/${slug}`}
              className="flex flex-col p-4 transition hover:bg-hover-primary"
            >
              <h2 className="font-medium">{title}</h2>
              <span className="text-text-secondary">
                <time dateTime={dateString}>{formattedDate}</time> ·{" "}
                {renderMetric(views?.length)} views · {renderMetric(likes?.length)} likes
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export { PostsList };
