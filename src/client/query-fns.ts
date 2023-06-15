import { fetcher } from "./fetcher";

export const postSession = () => {
  return fetcher("api/session", { method: "POST" });
};

export const postView = (slug: string) => {
  return fetcher(`api/views/${slug}`, { method: "POST" });
};
