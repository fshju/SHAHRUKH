import { client } from "./client";

export const uploadImage = async (file: File) => {
  try {
    const imageData = await client.assets.upload("image", file);
    return imageData._id; 
  } catch (error) {
    console.error("Image upload failed:", error);
    return null;
  }
};
