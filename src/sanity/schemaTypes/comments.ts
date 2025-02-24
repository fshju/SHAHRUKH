const commentsSchema = {
  name: "userReview", 
  title: "User Review",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "comments",
      title: "Comments",
      type: "text",
    },
    {
      name: "profilePic",
      title: "Profile Picture",
      type: "image",
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
    },
  ],
};
export default commentsSchema;