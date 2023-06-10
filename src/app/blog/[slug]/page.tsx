import { FunctionComponent } from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import { PageContainer, Wrapper } from "@/components";
import { allPosts } from "contentlayer/generated";

type PostProps = {
  params: {
    slug: string | undefined;
  };
};

const Post: FunctionComponent<PostProps> = ({ params }) => {
  const post = allPosts.find((post) => post.slug === params?.slug);

  const MDXContent = useMDXComponent(post?.body.code || "");

  if (!post) {
    return null;
  }

  return (
    <PageContainer>
      <Wrapper>
        <h2>{post.title}</h2>
        <MDXContent />
      </Wrapper>
    </PageContainer>
  );
};

export default Post;

export const dynamicParams = false;

export async function generateStaticParams() {
  return allPosts.map((post) => {
    return {
      slug: post.slug,
    };
  });
}
