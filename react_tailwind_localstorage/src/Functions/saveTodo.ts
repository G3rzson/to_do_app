import type { Todo } from "../Types/types";

export default function saveTodo(data: Todo[]) {
  try {
    localStorage.setItem("todos", JSON.stringify(data));
  } catch {
    throw new Error("Nem sikerült menteni a teendőket!");
  }
}
