import { client } from "./client";

export const fetchComments = async () => {
  const query = '*[_type == "userReview"] | order(_createdAt desc)'; 
  const comments = await client.fetch(query);
  return comments;
};
