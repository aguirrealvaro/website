import { PageContainer, Wrapper, PostsList } from "@/components";
import { Typography } from "@/components/ui";
import { getPosts } from "@/utils/get-posts";

const Blog = async () => {
  const posts = await getPosts();

  return (
    <PageContainer>
      <Wrapper>
        <Typography.H3 className="mb-4">Blog</Typography.H3>
        <PostsList posts={posts} />
      </Wrapper>
    </PageContainer>
  );
};

export default Blog;
