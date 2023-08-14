import Thread from "../models/thread.model";
import { connectToDB } from "../mongoose";

interface Params {
  text: string;
  author: string;
  communityId: string;
  path: string;
};

export async function createThread({ text, author, communityId, path }: Params) {
  connectToDB();

  const createThread = await Thread.create({
    text,
    author,
    community: null,
  });
};