import { FunctionComponent } from "react";
import { PostHeader, PostContent } from ".";
import { allPosts } from "contentlayer/generated";

type PostWrapperProps = {
  slug: string;
};

const PostWrapper: FunctionComponent<PostWrapperProps> = ({ slug }) => {
  const pagePost = allPosts.find((post) => post.slug === slug);

  if (!pagePost) return null;

  const { title, publishedAt, description, body } = pagePost;

  return (
    <>
      <PostHeader
        title={title}
        publishedAt={publishedAt}
        description={description}
        views={5}
        likes={5}
        isFetchingPost={false}
        //likePostMutate={() => console.log(slug)}
        userHasLiked={false}
        isFetchingLike={false}
      />
      <PostContent content={body.code} />
    </>
  );
};

export { PostWrapper };
