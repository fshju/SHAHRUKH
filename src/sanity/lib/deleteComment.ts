import { client } from "./client";

export const deleteComment = async (commentId: string) => {
  try {
    await client.delete(commentId);
    return true;
  } catch (error) {
    console.error("Error deleting comment:", error);
    return false;
  }
};
