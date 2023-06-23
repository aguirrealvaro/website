import { FunctionComponent } from "react";
import { LikeButton } from "@/components";
import { Typography } from "@/components/ui";
import { formatDate } from "@/utils/format-date";

type PostHeaderProps = {
  title: string;
  publishedAt: string;
  description: string;
  views: number | undefined;
  likes: number | undefined;
  userHasLiked: boolean;
};

const PostHeader: FunctionComponent<PostHeaderProps> = ({
  title,
  publishedAt,
  description,
  views,
  likes,
  userHasLiked,
}) => {
  const { dateString, formattedDate } = formatDate(publishedAt);

  return (
    <div className="mb-8">
      <span className="text-text-secondary">
        <time dateTime={dateString}>{formattedDate}</time> · {views} views · {likes} likes
      </span>
      <Typography.H2>{title}</Typography.H2>
      <p className="text-text-secondary">{description}</p>
      <LikeButton isActive={userHasLiked} isFetching={false} />
    </div>
  );
};

export { PostHeader };
