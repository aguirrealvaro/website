import { FunctionComponent } from "react";
import { PostMetrics } from "@/components/posts-list";
import { Typography } from "@/components/ui";
import { formatDate } from "@/utils/format-date";

type PostHeaderProps = {
  slug: string;
  title: string;
  publishedAt: string;
};

const PostHeader: FunctionComponent<PostHeaderProps> = ({ slug, title, publishedAt }) => {
  const { dateString, formattedDate } = formatDate(publishedAt);

  return (
    <div className="mb-8">
      <Typography.H3>{title}</Typography.H3>
      <span>
        <time dateTime={dateString}>{formattedDate}</time> · <PostMetrics slug={slug} />
      </span>
    </div>
  );
};

export { PostHeader };
