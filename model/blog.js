import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;
