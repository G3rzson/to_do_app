import type { NavigateFunction } from "react-router-dom";
import type { Todo } from "../Types/types";

export default function editTodo(
  id: string,
  navigate: NavigateFunction,
  setEditTodo: React.Dispatch<React.SetStateAction<Todo | null>>,
  todos: Todo[] | []
) {
  const todoToEdit = todos.find((todo) => todo.id === id) || null;
  setEditTodo(todoToEdit);

  navigate(`/todo/edit/${id}`);
}
