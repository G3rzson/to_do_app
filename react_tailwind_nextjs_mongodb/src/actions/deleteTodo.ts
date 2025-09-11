"use server";

import { revalidatePath } from "next/cache";
import TodoModel from "@/db/createTodoModel";

export async function deleteTodo(id: string) {
  try {
    const result = await TodoModel.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      return { error: "Nincs ilyen Todo" };
    }

    revalidatePath("/");
    return { message: "Törlés sikeres" };
  } catch (error) {
    console.error("Szerver oldali hiba:", error);
    return { error: "Hiba történt a törlés közben!" };
  }
}
