import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "5u9rff2q",
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-01-01",
});

export async function getProjects() {
  return client.fetch(`*[_type == "project"]{title, description, liveUrl, "image": image.asset->url}`);
}