import { Client, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("6819a98b00015f99cc03"); // Replace with your project ID

export const account = new Account(client);
