import { ButtonHTMLAttributes, FunctionComponent } from "react";
import { Heart } from "lucide-react";

type LikeButtonProps = {
  isActive: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const LikeButton: FunctionComponent<LikeButtonProps> = ({ isActive, ...restProps }) => {
  return (
    <button {...restProps}>
      <Heart fill={isActive ? "red" : "transparent"} color="red" />
    </button>
  );
};

export { LikeButton };
