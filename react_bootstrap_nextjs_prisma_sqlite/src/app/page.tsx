"use client";

import Info from "@/components/Info/Info";
import EmptyList from "@/components/List/EmptyList";
import TodoItem from "@/components/List/TodoItem";
import Loader from "@/components/Loader/Loader";
import { fetchTodos } from "@/functions/axiosCall";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import { useEffect } from "react";

export default function Home() {
  const { todos, serverError, loading, setServerError, setTodos, setLoading } =
    useGlobalContext();

  useEffect(() => {
    fetchTodos(setServerError, setTodos, setLoading);
  }, [setServerError, setTodos, setLoading]);

  if (loading) return <Loader />;

  if (serverError) return <Info />;

  if (todos.length === 0) return <EmptyList />;

  return (
    <>
      <div className="container">
        <ul className="list-unstyled list-group list-group-flush gap-2 my-4 p-0">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
      <Info />
    </>
  );
}
