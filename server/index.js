import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Routes
import listingsRoute from "./routes/listing.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5001;
console.log(process.env.DATABASE_URL);

app.use("/listings", listingsRoute);

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Connected to database");
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  })
  .catch((err) => console.log("Error connecting to database", err));
