import { listings } from "../listings.js";

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const resolvers = {
  Query: {
    listings: () => listings,
  },
  Mutation: {
    deleteListing: (_root, { id }) => {
      for (let i = 0; i < listings.length; i++) {
        if (listings[i].id === id) {
          return listings.splice(i, 1)[0];
        }
      }
      throw new Error("failed to delete listing");
    },
  },
};
