import type { Todo } from "../Types/types";

export default function todoFromLocalStorage(): Todo[] {
  try {
    return JSON.parse(localStorage.getItem("todos") || "[]");
  } catch {
    throw new Error("Nem sikerült lekérni a teendőket!");
  }
}
