import { FunctionComponent } from "react";
import { PostContent, PostHeader } from "./common";
import { PageContainer, Wrapper } from "@/components";
import { allPosts } from "contentlayer/generated";

type PostProps = {
  params: {
    slug: string;
  };
};

const Post: FunctionComponent<PostProps> = ({ params }) => {
  const pagePost = allPosts.find((post) => post.slug === params.slug);

  if (!pagePost) return null;

  const { title, publishedAt, description, body } = pagePost;

  return (
    <PageContainer>
      <Wrapper>
        <PostHeader
          title={title}
          publishedAt={publishedAt}
          description={description}
          views={5}
          likes={5}
          isFetchingPost={false}
          userHasLiked={false}
          isFetchingLike={false}
        />
        <PostContent content={body.code} />
      </Wrapper>
    </PageContainer>
  );
};

export default Post;

export const dynamicParams = false;

export async function generateStaticParams() {
  return allPosts.map((post) => {
    if (process.env.NODE_ENV === "production" && !post.enabled) return;

    return {
      slug: post.slug,
    };
  });
}
