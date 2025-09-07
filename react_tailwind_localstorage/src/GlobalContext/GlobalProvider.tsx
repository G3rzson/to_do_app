import { useEffect, useState, type ReactNode } from "react";
import type { Todo } from "../Types/types";
import { GlobalContext } from "./GlobalContext";
import todoFromLocalStorage from "../Functions/todoFromLocalStorage";

export function GlobalProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[] | []>([]);
  const [editTodo, setEditTodo] = useState<Todo | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      setLoading(true);
      setTodos(todoFromLocalStorage());
    } catch (error) {
      // TS-ben az error unknown típusú
      if (error instanceof Error) {
        setErrorMsg(error.message);
      }
    } finally {
      setLoading(false);
    }
  }, [setTodos]);

  return (
    <GlobalContext.Provider
      value={{
        todos,
        setTodos,
        errorMsg,
        setErrorMsg,
        info,
        setInfo,
        loading,
        setLoading,
        editTodo,
        setEditTodo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
