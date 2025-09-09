import { Request, Response } from "express";
import TodoModel from "../db/todoSchema";

export async function deleteTodo(req: Request, res: Response) {
  try {
    // control
    if (!req.params.id) throw new Error("Hiányzó adat!");

    const deletedTodo = await TodoModel.findByIdAndDelete(req.params.id);

    if (!deletedTodo) {
      throw new Error("A blog nem található!");
    }

    return res.status(200).json({ message: "Task sikeresen törölve!" });
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return res.status(500).json({
        error: error.message || "Valami hiba történt. Próbáld újra később.",
      });
    }
  }
}
