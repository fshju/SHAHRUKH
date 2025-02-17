import { client } from "@/sanity/lib/getProjects";
export const addComment = async (name: string, message: string, imageUrl?: string) => {
  try {
    await client.create({
      _type: "comment",
      name,
      message,
      image: imageUrl ? { asset: { _ref: imageUrl } } : undefined,
      published: false, // By default, comment unpublished hoga
    });
  } catch (error) {
    console.error("Error adding comment:", error);
  }
};
