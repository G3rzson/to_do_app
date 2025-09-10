import type { NavigateFunction } from "react-router-dom";
import type { Todo } from "../Types/types";

export default function editTodo(
  navigate: NavigateFunction,
  setEditTodo: React.Dispatch<React.SetStateAction<Todo | null>>,
  todo: Todo
) {
  setEditTodo(todo);
  navigate("/todo/edit");
}
