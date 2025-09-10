import type { TodoType } from "../Types/types";

export async function fetchTodos(
  setTodos: React.Dispatch<React.SetStateAction<[] | TodoType[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  try {
    const response = await fetch("http://localhost:8000/todo/get-todos");

    if (!response.ok) {
      throw new Error("Hiba a szerver oldalon");
    }

    const data = await response.json();
    //console.log(data);
    setTodos(data.todos);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
}
