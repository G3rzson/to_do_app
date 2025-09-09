import type { TodoType } from "../Types/types";
import { fetchTodos } from "./fetchTodos";

export async function deleteTodo(
  id: string,
  setModalInfo: React.Dispatch<React.SetStateAction<string | null>>,
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setTodos: React.Dispatch<React.SetStateAction<[] | TodoType[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
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
    //console.log(data);
    setModalInfo(data.message);
    setModalOpen(true);
  } catch (error) {
    if (error instanceof Error) {
      setModalInfo(error.message);
      setModalOpen(true);
    }
  } finally {
    await fetchTodos(setTodos, setLoading);
  }
}
