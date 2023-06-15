import { FunctionComponent } from "react";
import Link from "next/link";
import { PostMetrics, PostsFetch } from ".";
import { getParsedDate } from "@/utils/get-parsed-date";
import { allPosts } from "contentlayer/generated";

type PostsListProps = {
  sliced?: boolean;
};

const PostsList: FunctionComponent<PostsListProps> = ({ sliced = false }) => {
  const displayPosts = sliced ? allPosts.slice(0, 3) : allPosts;

  return (
    <>
      <PostsFetch />
      <ul>
        {displayPosts.map((post) => {
          const { title, slug, publishedAt } = post;
          const { dateObject, formattedDate } = getParsedDate(publishedAt);

          return (
            <li key={slug} className="border-b last:border-b-0 ">
              <Link
                href={`/blog/${slug}`}
                className="flex flex-col p-4 transition hover:bg-hover-primary"
              >
                <h2 className="font-medium">{title}</h2>
                <time dateTime={dateObject.toISOString()} className="text-text-secondary">
                  {formattedDate} · <PostMetrics slug={post.slug} />
                </time>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export { PostsList };
