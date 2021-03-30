import mongoose from "mongoose";

/** To be changed  */
const postSchema = mongoose.Schema({
  content: String,
  day: Number,
  createdAt: { type: Date, default: new Date() },
  creator: String,
  canvas: String,
  selectedFile: String,
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
