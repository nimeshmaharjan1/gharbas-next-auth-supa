import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  switch (method) {
    case "POST":
      try {
        const { image, title, description, price, maxGuests, beds, bathrooms } =
          req.body;
        const home = await prisma.home.create({
          data: {
            image,
            title,
            description,
            price,
            maxGuests,
            beds,
            bathrooms,
          },
        });
        res.status(200).json(home);
      } catch (error) {
        res.status(405).json(error);
      }
  }
}
