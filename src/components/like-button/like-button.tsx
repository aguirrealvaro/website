import { ButtonHTMLAttributes, FunctionComponent } from "react";
import { Heart } from "lucide-react";

type LikeButtonProps = {
  isActive: boolean;
  isFetching: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const LikeButton: FunctionComponent<LikeButtonProps> = ({
  isActive,
  isFetching,
  ...restProps
}) => {
  return (
    <div className="relative inline-flex">
      <button type="button" {...restProps}>
        <Heart fill={isActive ? "red" : "transparent"} color="red" />
      </button>
      {isFetching && <span className="absolute right-[calc(100%+2px)]">...</span>}
    </div>
  );
};

export { LikeButton };
