import { FunctionComponent } from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Separator, Typography } from "@/components/ui";

type PostContentProps = {
  content: string;
};

const PostContent: FunctionComponent<PostContentProps> = ({ content }) => {
  const MDXContent = useMDXComponent(content);

  return <MDXContent components={components} />;
};

export { PostContent };

const components = {
  h3: (props: any) => <Typography.H3 className="mb-4" {...props} />,
  p: (props: any) => <Typography.Paragraph {...props} />,
  hr: (props: any) => <Separator {...props} />,
  //code: (props: any) => <Typography.Code {...props} />,
};
