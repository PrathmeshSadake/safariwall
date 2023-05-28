import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import path from "path";

import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 4001;

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/uploads", express.static(__dirname + "/uploads"));

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Welcome!");
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
