import { FunctionComponent } from "react";

type PostHeaderProps = {
  title: string;
};

const PostHeader: FunctionComponent<PostHeaderProps> = ({ title }) => {
  return <h2>{title}</h2>;
};

export { PostHeader };
