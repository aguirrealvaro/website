import { FunctionComponent, ReactNode } from "react";
import { Metadata } from "next";
import { allPosts } from "contentlayer/generated";

type SlugLayoutProps = {
  children: ReactNode;
};

const SlugLayout: FunctionComponent<SlugLayoutProps> = ({ children }) => {
  return children;
};

export default SlugLayout;

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = allPosts.find((post) => post.slug === params.slug);

  return {
    title: `${slug?.title} | Alvaro Aguirre`,
    description: slug?.description,
  };
}
