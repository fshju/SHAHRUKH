export const aboutQuery = `
  *[_type == "about"][0] {
    title,
    description,
    cvLink,
    "imageUrl": image.asset->url,
    stats
  }
`;

export const GET_PUBLISHED_COMMENTS = `*[_type == "comment" && published == true] | order(_createdAt desc) {
  _id,
  name,
  message,
  "profilePic": image.asset->url
}`;
