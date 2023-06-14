import { FunctionComponent } from "react";
import Link from "next/link";
import { type PostType } from "@/utils/get-posts";

type PostsListProps = {
  posts: PostType[];
  sliced?: boolean;
};

const PostsList: FunctionComponent<PostsListProps> = ({ posts, sliced = false }) => {
  const displayPosts = sliced ? posts.slice(0, 3) : posts;

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
