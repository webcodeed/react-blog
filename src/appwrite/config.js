import { Client, Account, Databases } from "appwrite";

const client = new Client()
client.setEndpoint("https://fra.cloud.appwrite.io/v1")
    .setProject("6831aa110000f0107a37")

export const account = new Account(client);
export const databases = new Databases(client);

export const DATABASE_ID = "6831f69a000e8e271174"
export const COLLECTION_ID = "6831f6ad001bc13ee8fe"