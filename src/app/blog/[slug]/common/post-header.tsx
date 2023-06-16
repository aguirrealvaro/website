import { FunctionComponent } from "react";
import { Typography } from "@/components/ui";
import { formatDate } from "@/utils/format-date";

type PostHeaderProps = {
  title: string;
  publishedAt: string;
  views: number | undefined;
  likes: number | undefined;
  isFetching: boolean;
};

const PostHeader: FunctionComponent<PostHeaderProps> = ({
  title,
  publishedAt,
  views,
  likes,
  isFetching,
}) => {
  const { dateString, formattedDate } = formatDate(publishedAt);

  const renderMetric = (metric: number | undefined) => {
    if (isFetching) {
      return "...";
    } else {
      return metric;
    }
  };

  return (
    <div className="mb-8">
      <Typography.H2>{title}</Typography.H2>
      <span className="text-text-secondary">
        <time dateTime={dateString}>{formattedDate}</time> · {renderMetric(views)} views ·{" "}
        {renderMetric(likes)} likes
      </span>
    </div>
  );
};

export { PostHeader };
