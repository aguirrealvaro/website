import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";

export const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: "posts/*.mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    publishedAt: {
      type: "date",
      required: true,
    },
    enabled: {
      type: "boolean",
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) =>
        post._raw.sourceFileName
          // hello-world.mdx => hello-world
          .replace(/\.mdx$/, ""),
    },
  },
}));

const rehypePrettyCodeOptions = {
  theme: "one-dark-pro",
  //keepBackground: true,
};

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [rehypePrettyCode, rehypePrettyCodeOptions],
  },
});
