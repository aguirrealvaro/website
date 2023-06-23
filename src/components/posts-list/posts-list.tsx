import { FunctionComponent } from "react";
import Link from "next/link";
import { formatDate } from "@/utils/format-date";
import prisma from "@/utils/prisma";
import { allPosts } from "contentlayer/generated";

type PostsListProps = {
  sliced?: boolean;
};

const PostsList: FunctionComponent<PostsListProps> = async ({ sliced = false }) => {
  const sortedPosts = allPosts.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  const displayPosts = sliced ? sortedPosts.slice(0, 3) : allPosts;

  const posts = await prisma.post.findMany({
    include: { likes: true },
  });

  return (
    <ul>
      {displayPosts.map((post) => {
        const { title, slug, publishedAt, enabled } = post;
        const { dateString, formattedDate } = formatDate(publishedAt);

        const relatedPost = posts?.find((post) => post.slug === slug);

        if (!relatedPost) return null;

        const { views, likes } = relatedPost;

        if (process.env.NODE_ENV === "production" && !enabled) return null;

        return (
          <li key={slug} className="border-b last:border-b-0 ">
            <Link href={`/blog/${slug}`} className="flex flex-col py-4 transition">
              <h2 className="font-medium text-text-heading">{title}</h2>
              <span className="text-text-secondary">
                <time dateTime={dateString}>{formattedDate}</time> · {views} views ·{" "}
                {likes.length} likes
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export { PostsList };
