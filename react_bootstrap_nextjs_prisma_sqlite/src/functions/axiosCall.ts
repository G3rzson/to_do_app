import axios, { AxiosResponse } from "axios";
import { TodoFormData } from "@/validation/todoForm";
import { Dispatch, SetStateAction } from "react";
import { TodoType } from "@/types/types";

export async function fetchTodos(
  setServerError: Dispatch<SetStateAction<string | null>>,
  setTodos: Dispatch<SetStateAction<[] | TodoType[]>>,
  setLoading: Dispatch<SetStateAction<boolean>>
) {
  try {
    setLoading(true);
    const response = await axios.get("/api/todo/get-todos");
    //console.log(response.data);
    checkResponse(response, { setServerError, setTodos });
  } catch (error) {
    console.error(error);
    setServerError("Szerver hiba történt");
  } finally {
    setLoading(false);
  }
}

export async function createTodo(
  data: TodoFormData,
  setServerError: Dispatch<SetStateAction<string | null>>,
  setInfo: Dispatch<SetStateAction<string | null>>,
  setLoading: Dispatch<SetStateAction<boolean>>
) {
  try {
    setLoading(true);
    const response = await axios.post("/api/todo/new", data);
    //console.log(response.data);
    checkResponse(response, { setServerError, setInfo });
  } catch (error) {
    console.error(error);
    setServerError("Szerver hiba történt");
  } finally {
    setLoading(true);
  }
}

export async function deleteTodo(
  id: string,
  setServerError: Dispatch<SetStateAction<string | null>>,
  setInfo: Dispatch<SetStateAction<string | null>>,
  setLoading: Dispatch<SetStateAction<boolean>>
) {
  try {
    setLoading(true);
    const response = await axios.delete(`/api/todo/delete/${id}`);
    //console.log(response.data);
    checkResponse(response, { setServerError, setInfo });
  } catch (error) {
    console.error(error);
    setServerError("Szerver hiba történt");
  } finally {
    setLoading(false);
  }
}

export async function updateTodo(
  id: string,
  data: TodoFormData,
  setServerError: Dispatch<SetStateAction<string | null>>,
  setInfo: Dispatch<SetStateAction<string | null>>,
  setLoading: Dispatch<SetStateAction<boolean>>
) {
  try {
    setLoading(true);
    const response = await axios.put(`/api/todo/edit/${id}`, data);
    //console.log(response.data);
    checkResponse(response, { setServerError, setInfo });
  } catch (error) {
    console.error(error);
    setServerError("Szerver hiba történt");
  } finally {
    setLoading(true);
  }
}

function checkResponse(
  response: AxiosResponse<{
    todos?: TodoType[];
    error?: string;
    message?: string;
  }>,
  handlers: {
    setServerError: Dispatch<SetStateAction<string | null>>;
    setTodos?: Dispatch<SetStateAction<[] | TodoType[]>>;
    setInfo?: Dispatch<SetStateAction<string | null>>;
  }
) {
  const { setServerError, setTodos, setInfo } = handlers;

  if (response.data?.error) setServerError(response.data.error);
  if (response.data?.todos && setTodos) setTodos(response.data.todos);
  if (response.data?.message && setInfo) setInfo(response.data.message);
}
