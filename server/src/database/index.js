import { MongoClient } from "mongodb";

export const connectDatabase = () => {
  // Replace the uri string with your connection string.
  const uri = process.env.DATABASE_URL;
  const client = new MongoClient(uri, { useNewUrlParser: true });
  const db = client.db("safariwall");

  return {
    listings: db.collection("listings"),
  };
};
