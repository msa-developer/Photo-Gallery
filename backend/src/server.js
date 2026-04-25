import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import imgRouter from "./routes/img.route.js";
import cors from "cors";
import path from "path";

dotenv.config({ quiet: true });

const app = express();

app.use(express.json());
const __dirname = path.resolve();

if (process.env.NODE_ENV === "development") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    }),
  );
}

app.use("/api", imgRouter);

if (process.env.NODE_ENV === "production") {
  app.use(
    "/.well-known",
    express.static(path.join(__dirname, "../frontend/dist/.well-known"), {
      dotfiles: "allow",
    }),
  );

  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get(/.*/, (_, res) =>
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html")),
  );
}

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("server started");
  });
});
