import { useGlobalContext } from "../../Hooks/useGlobalContext";
import TodoItem from "./TodoItem";
import Loading from "../Loader/Loading";
import { fetchTodos } from "../../Functions/fetchTodos";
import { useEffect } from "react";
import EmptyList from "./EmptyList";

export default function TodoArray() {
  const { todos, loading, setTodos, setLoading, setErrorMsg } =
    useGlobalContext();

  useEffect(() => {
    fetchTodos(setTodos, setLoading, setErrorMsg);
  }, [setTodos, setLoading, setErrorMsg]);

  if (loading) {
    return <Loading />;
  }

  if (todos.length === 0) return <EmptyList />;

  return (
    <ul className="flex flex-col gap-3 sm:pr-3 w-full overflow-y-auto max-h-80 custom-scrollbar">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
