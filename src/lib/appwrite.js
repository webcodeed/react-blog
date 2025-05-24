import { Client, Account, Databases } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("6819a98b00015f99cc03"); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);

export const DATBASE_ID = "681cf1ce0005ca383f78";
export const DATABASE_COLLECTION = "681cf1e3000f8a29ab0b";
