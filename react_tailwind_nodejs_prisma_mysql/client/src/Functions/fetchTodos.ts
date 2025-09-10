import type { Todo } from "../Types/types";
import axios from "axios";

export async function fetchTodos(
  setTodos: React.Dispatch<React.SetStateAction<[] | Todo[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setErrorMsg: React.Dispatch<React.SetStateAction<string | null>>
) {
  try {
    const response = await axios.get("http://localhost:8000/todo/get-todos");

    //console.log(response.data.todos);
    setTodos(response.data.todos);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      setErrorMsg(error?.response?.data?.error);
    }
  } finally {
    setLoading(false);
  }
}
