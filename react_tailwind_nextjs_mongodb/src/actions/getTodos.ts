"use server";
import { connectDB } from "@/db/connectToDB";
import TodoModel from "@/db/createTodoModel";
import { Todo } from "@/types/types";

export async function getTodos() {
  try {
    await connectDB();

    // lean() → sima objektumok
    const todosFromDb = await TodoModel.find().lean();

    // _id stringgé alakítása + típus biztosítása
    const todos: Todo[] = todosFromDb.map(
      (todo): Todo => ({
        _id: todo._id ? todo._id.toString() : "",
        task: todo.task,
      })
    );

    return { todos };
  } catch (error) {
    console.error("Hiba a lekérés során:", error);
    // hibát is visszaadhatsz, de mindig visszaadunk egy tömböt
    return { todos: [], error: "Hiba a lekérés során" };
  }
}
