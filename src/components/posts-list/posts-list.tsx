import { FunctionComponent } from "react";
import Link from "next/link";
import { PostsType } from "@/utils/get-posts";

type PostsListProps = {
  posts: PostsType;
  sliced?: boolean;
};

const PostsList: FunctionComponent<PostsListProps> = ({ posts, sliced = false }) => {
  const sortedPosts = posts.sort((a, b) =>
    (b.publishedAt || "").localeCompare(a.publishedAt || "")
  );

  const displayPosts = sliced ? sortedPosts.slice(0, 3) : sortedPosts;

  return (
    <ul>
      {displayPosts.map((post) => {
        const { title, slug, publishedAt } = post;
        const dateObject = new Date(publishedAt || "");

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
