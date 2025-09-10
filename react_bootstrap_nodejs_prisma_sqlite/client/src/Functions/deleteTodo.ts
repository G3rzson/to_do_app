import type { TodoType } from "../Types/types";
import { fetchTodos } from "./fetchTodos";

export async function deleteTodo(
  id: string,
  setTodos: React.Dispatch<React.SetStateAction<[] | TodoType[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setInfo: React.Dispatch<React.SetStateAction<string | null>>,
  setServerError: React.Dispatch<React.SetStateAction<string | null>>
) {
  try {
    setLoading(true);
    const response = await fetch(`http://localhost:8000/todo/delete/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Hiba a szerver oldalon!");
    }

    const data = await response.json();
    //console.log(data.message);
    setInfo(data.message);
  } catch (error) {
    if (error instanceof Error) {
      //console.log(error.message);
      setServerError(error.message);
    }
  } finally {
    await fetchTodos(setTodos, setLoading);
  }
}
