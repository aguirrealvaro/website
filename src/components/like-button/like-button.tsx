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
    <div className="mt-4 flex items-center justify-center">
      <div className="relative inline-flex">
        <button {...restProps}>
          <Heart fill={isActive ? "red" : "transparent"} color="red" />
        </button>
        {isFetching && <span className="absolute left-full">...</span>}
      </div>
    </div>
  );
};

export { LikeButton };
