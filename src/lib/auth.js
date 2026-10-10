import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient();
const db = client.db("pixgen");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),
});