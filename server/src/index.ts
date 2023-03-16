import express from "express";
import { listings } from "./listings";

const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/listings", (req, res) => res.json(listings));
app.delete("/listings/:id", (req, res) => {});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`server running at PORT: ${PORT}`));
