import type { TodoFormData } from "../Validation/todoForm";

export default async function createTodo(data: TodoFormData) {
  const response = await fetch("http://localhost:8000/todo/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Szerverhiba történt!");
  }

  return response.json();
}
