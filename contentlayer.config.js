import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: "posts/*.mdx",
  fields: {},
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
});
