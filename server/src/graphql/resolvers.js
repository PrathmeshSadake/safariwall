import { ObjectId } from "mongodb";

export const resolvers = {
  Query: {
    listings: async (_root, _args, { db }) => {
      return await db.listings.find({}).toArray();
    },
  },
  Mutation: {
    deleteListing: async (_root, { id }, { db }) => {
      const deleteResponse = await db.listings.findOneAndDelete({
        _id: new ObjectId(id),
      });
      if (!deleteResponse.value) {
        throw new Error("Deletion wasn't successful.");
      }
      return deleteResponse.value;
    },
  },
};
