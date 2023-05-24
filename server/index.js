import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import path from "path";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 4001;

const app = express();

app.use(cors());
app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(
  cors({
    credentials: true,
    origin: "http://127.0.0.1:5173",
  })
);

app.get("/api/test", (req, res) => {
  res.json("test ok");
});

const runApp = () =>
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() =>
      app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`);
      })
    )
    .catch((err) => console.error(err));

runApp();
