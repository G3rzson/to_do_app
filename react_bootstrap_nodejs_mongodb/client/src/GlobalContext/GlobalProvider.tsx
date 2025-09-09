import { useEffect, useState, type ReactNode } from "react";
import type { TodoType } from "../Types/types";
import { GlobalContext } from "./GlobalContext";
import { fetchTodos } from "../Functions/fetchTodos";

export function GlobalProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<TodoType[] | []>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState<string | null>(null);
  const [editTodo, setEditTodo] = useState<TodoType | null>(null);

  useEffect(() => {
    fetchTodos(setTodos, setLoading);
  }, []);

  useEffect(() => {
    if (!modalOpen) return;

    const timer = setTimeout(() => {
      setModalOpen(false);
      setModalInfo(null);
    }, 2000);

    return () => clearTimeout(timer);
  }, [modalOpen]);

  return (
    <GlobalContext.Provider
      value={{
        todos,
        setTodos,
        loading,
        setLoading,
        modalOpen,
        setModalOpen,
        modalInfo,
        setModalInfo,
        editTodo,
        setEditTodo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
