import type { TodoFormData } from "../Validation/todoForm";
import { v4 as uuidv4 } from "uuid";

export default function createTodo(data: TodoFormData) {
  return {
    id: uuidv4(),
    task: data.task,
  };
}
