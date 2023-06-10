import { FunctionComponent } from "react";
import Link from "next/link";
import { allPosts } from "contentlayer/generated";

const PostsList: FunctionComponent = () => {
  const sortedPosts = allPosts.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  return (
    <ul>
      {sortedPosts.map((post) => {
        const { title, slug, publishedAt } = post;
        const dateObject = new Date(publishedAt);

        const formattedDate = dateObject.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC",
        });

        return (
          <li key={slug} className="border-b last:border-b-0 ">
            <Link
              href={`/blog/${slug}`}
              className="flex flex-col p-4 transition hover:bg-hover-primary"
            >
              <h2>{title}</h2>
              <time dateTime={dateObject.toISOString()} className="text-text-secondary">
                {formattedDate}
              </time>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export { PostsList };
