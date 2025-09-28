import { NextApiRequest, NextApiResponse } from "next";
import { CartItem } from "@/interfaces";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    console.log("Application failed.", req.body);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const data: CartItem = req.body;
    console.log("Received user application data: ", data);
    return res.status(200).json({ message: "Application successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
}
