import Listing from "../models/Listing.js";

export const getListings = async (req, res) => {
  try {
    const listings = await Listing.find();
    res.status(200).json(listings);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const deleteListing = async (req, res) => {
  try {
    const listing = await Listing.findByIdAndDelete(req.params.id);
    if (!listing) {
      return res.status(404).send("Listing not found");
    }
    res.json(listing);
  } catch (error) {
    res.status(500).json(error);
  }
};
