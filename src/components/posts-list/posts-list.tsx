import { FunctionComponent } from "react";
import Link from "next/link";
import { getParsedDate } from "@/utils/get-parsed-date";
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
        const { title, slug, publishedAt, views, likes } = post;

        const { dateObject, formattedDate } = getParsedDate(publishedAt);

        return (
          <li key={slug} className="border-b last:border-b-0 ">
            <Link
              href={`/blog/${slug}`}
              className="flex flex-col p-4 transition hover:bg-hover-primary"
            >
              <h2 className="font-medium">{title}</h2>
              <time dateTime={dateObject.toISOString()} className="text-text-secondary">
                {formattedDate} · {views.length} views · {likes.length} likes
              </time>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export { PostsList };
