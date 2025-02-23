import { client } from "./client";

export const addComment = async (name: string, message: string, imageId: string, rating: number) => {
  try {
    const comment = await client.create({
      _type: "userReview",
      name,
      comments: message, 
      profilePic: { _type: "image", asset: { _ref: imageId } },
      rating,
    });
    return comment;
  } catch (error) {
    console.error("❌ Error adding comment:", error);
    return null;
  }
};
