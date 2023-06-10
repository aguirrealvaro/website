import { FunctionComponent } from "react";
import Link from "next/link";
import { PageContainer, Wrapper } from "@/components";
import { allPosts } from "contentlayer/generated";

const Blog: FunctionComponent = () => {
  return (
    <PageContainer>
      <Wrapper>
        <h2>Blog</h2>
        <div>
          <ul>
            {allPosts.map((post) => {
              return (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Wrapper>
    </PageContainer>
  );
};

export default Blog;
