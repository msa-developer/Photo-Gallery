import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import imgRouter from "./routes/img.route.js";
import cors from "cors";

dotenv.config({ quiet: true });

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use(express.json());

app.use("/api", imgRouter);

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("server started");
  });
});
