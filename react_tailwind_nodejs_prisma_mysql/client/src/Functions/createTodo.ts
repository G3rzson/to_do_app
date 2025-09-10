import axios from "axios";
import type { TodoFormData } from "../Validation/todoForm";

export default async function createTodo(
  data: TodoFormData,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setInfo: React.Dispatch<React.SetStateAction<string | null>>,
  setErrorMsg: React.Dispatch<React.SetStateAction<string | null>>
) {
  try {
    setLoading(true);
    const response = await axios.post(
      "http://localhost:8000/todo/create",
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
    setLoading(false);
  }
}
