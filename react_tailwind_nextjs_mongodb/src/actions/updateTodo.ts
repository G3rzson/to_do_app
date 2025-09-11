"use server";

import TodoModel from "@/db/createTodoModel";
import { connectDB } from "@/db/connectToDB";
import { todoFormSchema } from "@/validation/todoForm";
import { TodoFormData } from "@/validation/todoForm";
import { revalidatePath } from "next/cache";

export async function updateTodo(data: TodoFormData & { id: string }) {
  try {
    await connectDB();

    const result = todoFormSchema.safeParse({ task: data.task });
    if (!result.success) {
      return {
        error:
          result.error.flatten().fieldErrors.task?.[0] ?? "Érvénytelen adat",
      };
    }

    const updatedTodo = await TodoModel.findByIdAndUpdate(
      data.id,
      { task: result.data.task },
      { new: true }
    );

    if (!updatedTodo) {
      throw new Error("A megadott ID-hez nem található feladat.");
    }
    revalidatePath("/");
    return {
      message: "Feladat sikeresen frissítve!",
    };
  } catch (error) {
    console.error(error);
    return { error: "Hiba történt a feladat frissítése során!" };
  }
}
