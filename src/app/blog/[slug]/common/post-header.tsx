import { FunctionComponent } from "react";
import { Typography } from "@/components/ui";
import { formatDate } from "@/utils/format-date";

type PostHeaderProps = {
  title: string;
  publishedAt: string;
};

const PostHeader: FunctionComponent<PostHeaderProps> = ({ title, publishedAt }) => {
  const { dateString, formattedDate } = formatDate(publishedAt);

  return (
    <div className="mb-8">
      <Typography.H2>{title}</Typography.H2>
      <span className="text-text-secondary">
        <time dateTime={dateString}>{formattedDate}</time> ·
      </span>
    </div>
  );
};

export { PostHeader };
