"use client";

import { useEffect, useState, type ReactNode } from "react";
import { GlobalContext } from "./GlobalContext";
import { TodoType } from "@/types/types";
import { fetchTodos } from "@/functions/axiosCall";

export function GlobalProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<TodoType[] | []>([]);
  const [loading, setLoading] = useState(true);
  const [editTodo, setEditTodo] = useState<TodoType | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  useEffect(() => {
    fetchTodos(setServerError, setTodos, setLoading);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInfo(null);
      setServerError(null);
    }, 3000);
    return () => clearTimeout(timer);
  }, [info, serverError]);

  return (
    <GlobalContext.Provider
      value={{
        todos,
        setTodos,
        loading,
        setLoading,
        editTodo,
        setEditTodo,
        info,
        setInfo,
        serverError,
        setServerError,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
