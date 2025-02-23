import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "5u9rff2q", // Replace with your project ID
  dataset: "production", // Replace with your dataset name
  useCdn: false, // Set to true for faster responses (but stale data)
  apiVersion: "2024-02-20", // Use latest date
});
