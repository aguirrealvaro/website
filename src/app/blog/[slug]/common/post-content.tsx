import { FunctionComponent } from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Typography } from "@/components/ui";

type PostContentProps = {
  content: string;
};

const PostContent: FunctionComponent<PostContentProps> = ({ content }) => {
  const MDXContent = useMDXComponent(content);

  return <MDXContent components={components} />;
};

export { PostContent };

const components = {
  p: (props: any) => <Typography.Paragraph {...props} />,
};
