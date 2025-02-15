import { client } from "./client";

export async function saveContact(data: { email: string; message: string }) {
    return client.create({ _type: "contact", ...data });
  }