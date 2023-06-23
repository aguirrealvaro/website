import { FunctionComponent } from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Link, Typography } from "@/components/ui";

type PostContentProps = {
  content: string;
};

const PostContent: FunctionComponent<PostContentProps> = ({ content }) => {
  const MDXContent = useMDXComponent(content);

  return <MDXContent components={components} />;
};

export { PostContent };

/* eslint-disable @typescript-eslint/no-explicit-any */
const components = {
  h3: (props: any) => <Typography.H3 className="mb-4" {...props} />,
  h4: (props: any) => <Typography.H4 className="mb-4 text-lg" {...props} />,
  p: (props: any) => <Typography.Paragraph {...props} />,
  hr: (props: any) => <br {...props} />,
  //code: (props: any) => <Typography.Code {...props} />,
  a: (props: any) => <Link disabled {...props} />,
};
