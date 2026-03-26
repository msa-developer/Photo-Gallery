import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db";

dotenv.config();

const app = express();

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("server started");
  });
});
