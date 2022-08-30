import { PrismaClient } from "@prisma/client";
import { createClient } from "@supabase/supabase-js";
import { decode } from "base64-arraybuffer";
import { nanoid } from "nanoid";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();
const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_KEY as string
);
export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        let { image } = req.body;
        if (!image) {
          return res.status(500).json({ message: "No image provided!" });
        }
        const contentType = image.match(/data:(.*);base64/)?.[1];
        const base64FileData = image.split("base64,")?.[1];
        const filename = nanoid();
        const ext = contentType.split("/")[1];
        const path = `${filename}.${ext}`;
        const { data, error: uploadError } = await supabase.storage
          .from(process.env.SUPABASE_BUCKET as string)
          .upload(path, decode(base64FileData), {
            contentType,
            upsert: true,
          });
        if (uploadError) {
          throw new Error("Unable to upload image to storage!");
        }
        const url = `${process.env.SUPABASE_URL?.replace(
          ".co",
          ".in"
        )}/storage/v1/object/public${data?.Key}`;
        return res.status(200).json({ url });
      } catch (error) {
        res.status(405).json(error);
      }
  }
}
