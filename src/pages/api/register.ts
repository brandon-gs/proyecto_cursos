// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import getDbClient from "../../utils/dbClient";

type Data = {
  message: string;
  status: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { email, password } = req.body;

    if (email === "" || password === "") {
      throw new Error("Los campos no deben estar vacíos");
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // Save user in db
    const db = getDbClient();
    await db.table("user").insert({
      email,
      password: hashPassword,
    });

    res.status(200).json({ message: "Usuario creado", status: "success" });
  } catch (_error) {
    const { message } = _error as Error;
    let error_message = message;
    if (message.includes("Duplicate entry")) {
      error_message = "El usuario ya existe";
    }
    res.status(400).json({
      message: `Error: ${error_message}`,
      status: "danger",
    });
  }
}
