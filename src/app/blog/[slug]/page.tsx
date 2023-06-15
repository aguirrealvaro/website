import { PostContent } from "@/app/blog/[slug]/common";
import { PageContainer, Wrapper } from "@/components";
import { getPost } from "@/utils/get-post";
import { allPosts } from "contentlayer/generated";

type PostProps = {
  params: {
    slug: string;
  };
};

const Post = async ({ params }: PostProps) => {
  const post = await getPost(params.slug);

  /* const incrementView = async () => {
    "use server";

    const currentSessionId = getSession();

    const post = await prisma.post.findUnique({ where: { slug: params.slug } });

    if (!post) return;

    await prisma.views.create({
      data: {
        sessionId: currentSessionId,
        postId: post.id,
      },
    });
  };

  incrementView(); */

  if (!post) {
    return null;
  }

  return (
    <PageContainer>
      <Wrapper>
        <h2>{post.title}</h2>
        <PostContent content={post.body.code} />
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
