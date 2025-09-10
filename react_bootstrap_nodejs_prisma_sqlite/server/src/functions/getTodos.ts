import { Response, Request } from "express";
import { prisma } from "../db/prisma";

export async function getTodos(req: Request, res: Response) {
  try {
    const todos = await prisma.todo.findMany();

    if (!todos) throw new Error("Nincsenek tennivalók!");

    return res.status(201).json({ todos });
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return res.status(500).json({
        error: error.message || "Valami hiba történt. Próbáld újra később.",
      });
    }
  }
}
