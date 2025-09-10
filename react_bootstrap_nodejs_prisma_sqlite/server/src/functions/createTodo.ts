import { Request, Response } from "express";
import { todoFormSchema } from "../validation/todoForm";
import { prisma } from "../db/prisma";

export async function createTodo(req: Request, res: Response) {
  try {
    // control
    if (!req.body.task) throw new Error("Hiányzó tennivaló!");

    // validate
    const validateTodo = todoFormSchema.safeParse(req.body);
    if (!validateTodo.success) throw new Error("Érvénytelen adat!");

    // data
    const { task } = validateTodo.data;

    // insert to db
    await prisma.todo.create({
      data: { task },
    });
    return res.status(201).json({ message: "Sikeres létrehozás!" });
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return res.status(500).json({
        error: error.message || "Valami hiba történt. Próbáld újra később.",
      });
    }
  }
}
