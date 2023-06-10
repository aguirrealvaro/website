import { FunctionComponent } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { PageContainer, Wrapper } from "@/components";
import { Post, allPosts } from "contentlayer/generated";

export const getStaticPaths = () => {
  return {
    paths: allPosts.map((post) => {
      return {
        params: {
          slug: post._raw.sourceFileName
            // hello-world.mdx => hello-world
            .replace(/\.mdx$/, ""),
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ post: Post }> = ({ params }) => {
  const post = allPosts.find(
    (post) => post._raw.sourceFileName.replace(/\.mdx$/, "") === params?.slug
  );

  if (!post) {
    return { notFound: true };
  }

  return {
    props: { post },
  };
};

const SinglePostPage: FunctionComponent<InferGetStaticPropsType<typeof getStaticProps>> = ({
  post,
}) => {
  console.log(post);
  return (
    <PageContainer>
      <Wrapper>SinglePostPage</Wrapper>
    </PageContainer>
  );
};

export default SinglePostPage;
