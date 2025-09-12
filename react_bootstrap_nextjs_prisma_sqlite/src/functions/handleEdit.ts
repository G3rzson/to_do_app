import { TodoType } from "@/types/types";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Dispatch, SetStateAction } from "react";

export function handleEdit(
  todo: TodoType,
  setEditTodo: Dispatch<SetStateAction<TodoType | null>>,
  router: AppRouterInstance
) {
  setEditTodo(todo);
  router.push(`/todo/edit/`);
}
