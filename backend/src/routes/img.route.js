import express from "express";
import {
  AddImages,
  DeleteImg,
  getAllImages,
} from "../controller/img.controller.js";
import multer from "multer";

const imgRouter = express.Router();

const upload = multer({ dest: "uploads/" });

imgRouter.get("/", getAllImages);
imgRouter.post("/add", upload, AddImages);
imgRouter.delete("/:id", DeleteImg);

export default imgRouter;
