import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema(
  {
    imageUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    Date: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    greetings: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;
