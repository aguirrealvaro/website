import { FunctionComponent } from "react";
import Link from "next/link";
import { formatDate } from "@/utils/format-date";
import { allPosts } from "contentlayer/generated";

type PostsListProps = {
  sliced?: boolean;
};

const PostsList: FunctionComponent<PostsListProps> = ({ sliced = false }) => {
  const sortedPosts = allPosts.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  const displayPosts = sliced ? sortedPosts.slice(0, 3) : allPosts;

  return (
    <ul>
      {displayPosts.map((post) => {
        const { title, slug, publishedAt, enabled } = post;
        const { dateString, formattedDate } = formatDate(publishedAt);

        const renderMetric = (metric: number | undefined) => {
          if (false) {
            return "...";
          } else {
            return metric;
          }
        };

        if (process.env.NODE_ENV === "production" && !enabled) return null;

        return (
          <li key={slug} className="border-b last:border-b-0 ">
            <Link href={`/blog/${slug}`} className="flex flex-col py-4 transition">
              <h2 className="font-medium text-text-heading">{title}</h2>
              <span className="text-text-secondary">
                <time dateTime={dateString}>{formattedDate}</time> · {renderMetric(5)} views ·{" "}
                {renderMetric(5)} likes
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export { PostsList };
