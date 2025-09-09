import { Request, Response } from "express";
import TodoModel from "../db/todoSchema";
import { todoFormSchema } from "../validation/todoForm";

export async function updateTodo(req: Request, res: Response) {
  try {
    // control
    if (!req.params.id) throw new Error("Hiányzó adat!");
    if (!req.body.task) throw new Error("Hiányzó tennivaló!");

    // validate
    const validateTodo = todoFormSchema.safeParse(req.body);
    if (!validateTodo.success) throw new Error("Érvénytelen adat!");

    // data
    const { task } = validateTodo.data;

    // update
    await TodoModel.findByIdAndUpdate(req.params.id, { task }, { new: true });

    return res.status(200).json({ message: "Sikeres módosítás!" });
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return res.status(500).json({
        error: error.message || "Valami hiba történt. Próbáld újra később.",
      });
    }
  }
}
