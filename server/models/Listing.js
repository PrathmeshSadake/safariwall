import mongoose from "mongoose";
const { Schema } = mongoose;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  numOfGuests: {
    type: Number,
    required: true,
  },
  numOfBeds: {
    type: Number,
    required: true,
  },
  numOfBaths: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: [true, "Rating cannot be greater than 5"],
  },
});

const Listing = mongoose.model("Listing", listingSchema);
export default Listing;
