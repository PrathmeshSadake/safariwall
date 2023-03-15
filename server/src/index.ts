const express = require("express");

const app = express();
const PORT = process.env.PORT || 5001;

const one: Number = 1;
const two: Number = 2;

// app.get("/", (req, res) => res.send("Hello World!"));

app.listen(PORT, () => console.log(`server running at PORT: ${PORT}`));
