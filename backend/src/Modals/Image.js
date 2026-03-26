import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Image = mongoose.model("images", ImageSchema);

export default Image;
