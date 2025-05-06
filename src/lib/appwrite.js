import { Client, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("67fd53360023b0686368"); // Replace with your project ID

export const account = new Account(client);
