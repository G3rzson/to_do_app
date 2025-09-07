import type { Todo } from "../Types/types";
import saveTodo from "./saveTodo";

export default function deleteTodo(
  id: string,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
  setErrorMsg: React.Dispatch<React.SetStateAction<string | null>>,
  setInfo: React.Dispatch<React.SetStateAction<string | null>>
) {
  const filteredTodos = todos.filter((todo) => todo.id !== id);
  try {
    setTodos(filteredTodos);
    saveTodo(filteredTodos);
    setInfo("Sikeres törlés!");
  } catch {
    setErrorMsg("Nem sikerült törölni a teendőt!");
  }
}
