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
  isFetchingPost: boolean;
  likePostMutate: () => void;
  userHasLiked: boolean;
  isFetchingLike: boolean;
};

const PostHeader: FunctionComponent<PostHeaderProps> = ({
  title,
  publishedAt,
  description,
  views,
  likes,
  isFetchingPost,
  likePostMutate,
  userHasLiked,
  isFetchingLike,
}) => {
  const { dateString, formattedDate } = formatDate(publishedAt);

  const renderMetric = (metric: number | undefined) => {
    if (isFetchingPost || metric === undefined) {
      return "...";
    } else {
      return metric;
    }
  };

  return (
    <div className="mb-8 flex items-center justify-between">
      <div className="mr-4">
        <span className="text-text-secondary">
          <time dateTime={dateString}>{formattedDate}</time> · {renderMetric(views)} views ·{" "}
          {renderMetric(likes)} likes
        </span>
        <Typography.H2>{title}</Typography.H2>
        <p className="text-text-secondary">{description}</p>
      </div>
      <LikeButton
        onClick={likePostMutate}
        isActive={userHasLiked}
        isFetching={isFetchingLike}
      />
    </div>
  );
};

export { PostHeader };
