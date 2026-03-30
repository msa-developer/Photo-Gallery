import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema(
  {
    imagePath: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Image = mongoose.model("images", ImageSchema);

export default Image;
