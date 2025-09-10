import axios from "axios";
import type { TodoFormData } from "../Validation/todoForm";
import type { Todo } from "../Types/types";

export default async function updateTodo(
  id: string,
  data: TodoFormData,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setInfo: React.Dispatch<React.SetStateAction<string | null>>,
  setErrorMsg: React.Dispatch<React.SetStateAction<string | null>>,
  setEditTodo: React.Dispatch<React.SetStateAction<Todo | null>>
) {
  try {
    setLoading(true);
    const response = await axios.put(
      `http://localhost:8000/todo/update/${id}`,
      data
    );

    //console.log(response.data.message);
    setInfo(response.data.message);
  } catch (error) {
    //console.log(error);
    if (axios.isAxiosError(error)) {
      setErrorMsg(error?.response?.data?.error);
    }
  } finally {
    setEditTodo(null);
    setLoading(false);
  }
}
