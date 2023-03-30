import express from "express";
import { deleteListing, getListings } from "../controllers/listing.js";

const router = express.Router();

router.get("/", getListings);
// router.get("/:id");
// router.post("/");
// router.patch("/");
router.delete("/:id", deleteListing);

export default router;
