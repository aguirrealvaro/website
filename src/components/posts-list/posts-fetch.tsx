"use client";

import { FunctionComponent } from "react";
import { useQuery } from "react-query";
import { getPosts } from "@/client/query-fns";

const PostsFetch: FunctionComponent = () => {
  useQuery({ queryKey: "posts", queryFn: getPosts });

  return <></>;
};

export { PostsFetch };
