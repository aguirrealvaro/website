"use client";

import { FunctionComponent } from "react";
import { PostHeader, PostContent } from ".";
import { useSinglePost } from "@/hooks";
import { allPosts } from "contentlayer/generated";

type PostWrapperProps = {
  slug: string;
};

const PostWrapper: FunctionComponent<PostWrapperProps> = ({ slug }) => {
  const {
    post: relatedPost,
    isFetchingPost,
    likePostMutation,
    userHasLiked,
  } = useSinglePost(slug);

  const pagePost = allPosts.find((post) => post.slug === slug);

  if (!pagePost) return null;

  const { title, publishedAt, description, body } = pagePost;

  return (
    <>
      <PostHeader
        title={title}
        publishedAt={publishedAt}
        description={description}
        views={relatedPost?.views}
        likes={relatedPost?.likes.length}
        isFetchingPost={isFetchingPost}
        likePostMutation={() => likePostMutation(slug)}
        userHasLiked={userHasLiked}
      />
      <PostContent content={body.code} />
    </>
  );
};

export { PostWrapper };
