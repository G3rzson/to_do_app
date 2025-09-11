"use client";
import { Todo } from "@/types/types";
import { useState, type ReactNode } from "react";
import { GlobalContext } from "./GlobalContext";

export function GlobalProvider({ children }: { children: ReactNode }) {
  const [editTodo, setEditTodo] = useState<Todo | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
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
