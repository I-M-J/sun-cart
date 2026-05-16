import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth/*";

const client = new MongoClient(process.env.MONGO_URI);
const db = client.db("sun-cart");

export const auth = betterAuth({
    database: mongodbAdapter(db, { client }),

    emailAndPassword: { enabled: true },

    // Google later
});