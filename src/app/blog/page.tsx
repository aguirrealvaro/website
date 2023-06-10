import { FunctionComponent } from "react";
import Link from "next/link";
import { PageContainer, Wrapper } from "@/components";
import { Typography } from "@/components/ui";
import { allPosts } from "contentlayer/generated";

const Blog: FunctionComponent = () => {
  return (
    <PageContainer>
      <Wrapper>
        <Typography.H3 className="mb-4">Blog</Typography.H3>
        <div>
          <ul>
            {allPosts.map((post) => {
              const { title, slug, publishedAt } = post;

              const dateObject = new Date(publishedAt);

              const formattedDate = dateObject.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              });

              return (
                <li key={slug} className="border-b last:border-b-0 ">
                  <Link
                    href={`/blog/${slug}`}
                    className="flex flex-col p-4 transition hover:bg-hover-primary"
                  >
                    <h2>{title}</h2>
                    <time dateTime={dateObject.toString()} className="text-text-secondary">
                      {formattedDate}
                    </time>
                  </Link>
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
