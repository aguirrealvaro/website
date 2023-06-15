import { FunctionComponent } from "react";
import { useMDXComponent } from "next-contentlayer/hooks";

type PostContentProps = {
  content: string;
};

const PostContent: FunctionComponent<PostContentProps> = ({ content }) => {
  const MDXContent = useMDXComponent(content);

  return <MDXContent />;
};

export { PostContent };
