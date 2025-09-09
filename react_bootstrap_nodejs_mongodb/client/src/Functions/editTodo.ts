import type { TodoType } from "../Types/types";

export default function editTodo(
  todo: TodoType,
  setEditTodo: React.Dispatch<React.SetStateAction<TodoType | null>>
) {
  setEditTodo(todo);
}
