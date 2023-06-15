import { FunctionComponent } from "react";
import Link from "next/link";
import { PostMetrics } from ".";
import { formatDate } from "@/utils/format-date";
import { allPosts } from "contentlayer/generated";

type PostsListProps = {
  sliced?: boolean;
};

const PostsList: FunctionComponent<PostsListProps> = ({ sliced = false }) => {
  const displayPosts = sliced ? allPosts.slice(0, 3) : allPosts;

  return (
    <ul>
      {displayPosts.map((post) => {
        const { title, slug, publishedAt } = post;
        const { dateString, formattedDate } = formatDate(publishedAt);

        return (
          <li key={slug} className="border-b last:border-b-0 ">
            <Link
              href={`/blog/${slug}`}
              className="flex flex-col p-4 transition hover:bg-hover-primary"
            >
              <h2 className="font-medium">{title}</h2>
              <span className="text-text-secondary">
                <time dateTime={dateString}>{formattedDate}</time> ·{" "}
                <PostMetrics slug={post.slug} />
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export { PostsList };
