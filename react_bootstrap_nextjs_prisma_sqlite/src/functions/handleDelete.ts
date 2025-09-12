import { Dispatch, SetStateAction } from "react";
import { deleteTodo, fetchTodos } from "./axiosCall";
import { TodoType } from "@/types/types";

export async function handleDelete(
  id: string,
  setInfo: React.Dispatch<React.SetStateAction<string | null>>,
  setServerError: React.Dispatch<React.SetStateAction<string | null>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setTodos: Dispatch<SetStateAction<TodoType[] | []>>
) {
  // delete
  await deleteTodo(id, setServerError, setInfo, setLoading);
  // update list
  await fetchTodos(setServerError, setTodos, setLoading);
}
