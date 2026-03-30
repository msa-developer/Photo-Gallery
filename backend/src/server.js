import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import imgRouter from "./routes/img.route.js";

dotenv.config({ quiet: true });

const app = express();
app.use(express.json());

app.use("/api", imgRouter);

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("server started");
  });
});
