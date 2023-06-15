import { fetcher } from "./fetcher";

export const postSession = () => {
  return fetcher("session", { method: "POST" });
};

export const postView = (slug: string) => {
  return fetcher(`views/${slug}`, { method: "POST" });
};
