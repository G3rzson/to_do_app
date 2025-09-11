"use server";

import { connectDB } from "@/db/connectToDB";
import TodoModel from "@/db/createTodoModel";
import { TodoFormData, todoFormSchema } from "@/validation/todoForm";
import { revalidatePath } from "next/cache";

export async function createTodo(data: TodoFormData) {
  //console.log(data);
  try {
    await connectDB();

    const result = todoFormSchema.safeParse({ task: data.task });
    if (!result.success) {
      return {
        error:
          result.error.flatten().fieldErrors.task?.[0] ?? "Érvénytelen adat",
      };
    }

    await TodoModel.create({ task: result.data.task });

    revalidatePath("/");
    return {
      message: "Feladat sikeresen létrehozva!",
    };
  } catch (error) {
    console.log(error);
    return {
      error: "Hiba történt a feladat létrehozása közben!",
    };
  }
}
