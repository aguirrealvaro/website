import { FunctionComponent } from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import { PageContainer, Wrapper } from "@/components";
import { allPosts } from "contentlayer/generated";

type SinglePostPageProps = {
  params: {
    slug: string | undefined;
  };
};

const SinglePostPage: FunctionComponent<SinglePostPageProps> = ({ params }) => {
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

export default SinglePostPage;

export const getStaticPaths = () => {
  return {
    paths: allPosts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};
