import { Response, Request } from "express";
import TodoModel from "../db/todoSchema";

export async function getTodos(req: Request, res: Response) {
  try {
    const todos = await TodoModel.find();

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
