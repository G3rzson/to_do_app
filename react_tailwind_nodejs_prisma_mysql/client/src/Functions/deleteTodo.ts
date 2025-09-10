import axios from "axios";
import { fetchTodos } from "./fetchTodos";
import type { Todo } from "../Types/types";

export async function deleteTodo(
  id: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setInfo: React.Dispatch<React.SetStateAction<string | null>>,
  setErrorMsg: React.Dispatch<React.SetStateAction<string | null>>,
  setTodos: React.Dispatch<React.SetStateAction<[] | Todo[]>>
) {
  try {
    setLoading(true);
    const response = await axios.delete(
      `http://localhost:8000/todo/delete/${id}`
    );

    //console.log(response.data.message);
    setInfo(response.data.message);
  } catch (error) {
    //console.log(error);
    if (axios.isAxiosError(error)) {
      setErrorMsg(error?.response?.data?.error);
    }
  } finally {
    fetchTodos(setTodos, setLoading, setErrorMsg);
    setLoading(false);
  }
}
