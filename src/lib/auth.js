import dns from "node:dns";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";

dns.setServers(['8.8.8.8', '8.8.4.4']);

const client = new MongoClient(process.env.MONGO_URI);
const db = client.db("sun-cart");

export const auth = betterAuth({
    database: mongodbAdapter(db, { client }),

    emailAndPassword: { enabled: true },

    socialProviders: {
        google: {
            prompt: "select_account",
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
    },
});