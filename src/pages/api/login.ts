// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import getDbClient from "../../utils/dbClient";
import { match } from "assert";

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
    const users = await db.table("user").select().where({ email });

    if (users.length < 1) {
      throw new Error("Credenciales invalidas");
    }

    const user = users[0];
    console.log(user.password);
    console.log(password);
    const matchPassword = await bcrypt.compare(password, user.password);

    if (!matchPassword) {
      throw new Error("Credenciales invalidas");
    }

    return res
      .status(200)
      .json({ message: "Usuario creado", status: "success" });
  } catch (_error) {
    return res.status(401).json({
      message: `Credenciales invalidas`,
      status: "danger",
    });
  }
}
