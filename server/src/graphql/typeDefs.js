export const typeDefs = `#graphql
  # This "Listing" type defines the queryable fields for every book in our data source.
  type Listing {
    id: ID!
    title: String!
    image: String!
    address: String!
    price: Int!
    numOfGuests: Int!
    numOfBeds: Int!
    numOfBaths: Int!
    rating: Int!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    listings: [Listing!]!
  }
  type Mutation{
    deleteListing(id: ID!) : Listing!
  }
`;
