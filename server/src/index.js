// npm install @apollo/server express graphql cors body-parser
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import dotenv from "dotenv";
import http from "http";
import cors from "cors";

import { typeDefs, resolvers } from "./graphql/index.js";
import { connectDatabase } from "./database/index.js";

dotenv.config();
const mount = async () => {
  const app = express();
  const db = connectDatabase();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    context: () => ({ db }),
  });
  await server.start();
  app.use("/api", cors(), express.json(), expressMiddleware(server));
  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000/`);

  const listings = await db.listings.find({}).toArray();
  console.log(listings);
};

mount();
