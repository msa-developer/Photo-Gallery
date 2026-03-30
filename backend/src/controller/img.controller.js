import Image from "../Modals/Image.js";

export const getAllImages = async (_, res) => {
  try {
    const img = await Image.find().sort({ createdAt: -1 });
    res.status(200).json(img);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error in getAllImages function" });
  }
};

export const AddImages = async (req, res) => {
  try {
    console.log(req.file);
    const image = new Image({
      imagePath: req.file.buffer.toString("base64"),
    });
    await image.save();
    res.status(201).json({ message: "Image Added Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error in AddImages function" });
  }
};

export const DeleteImg = async (req, res) => {
  try {
    await Image.findByIdAndDelete(req.params.id);
    res.status({ message: "Image Deleted Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error in DeleteImg function" });
  }
};
