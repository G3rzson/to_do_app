"use client";

import { Todo } from "@/types/types";
import { Dispatch, SetStateAction } from "react";

export function handleEdit(
  setEditTodo: Dispatch<SetStateAction<Todo | null>>,
  todo: Todo
) {
  setEditTodo(todo);
}
