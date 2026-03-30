import express from "express";
import {
  AddImages,
  DeleteImg,
  getAllImages,
} from "../controller/img.controller.js";
import multer from "multer";

const imgRouter = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

imgRouter.get("/", getAllImages);
imgRouter.post("/add", upload.single("image"), AddImages);
imgRouter.delete("/:id", DeleteImg);

export default imgRouter;
