import { useEffect, useState } from "react";
import { useGlobalContext } from "../../Hooks/useGlobalContext";
import Loader from "../Loader/Loader";
import EmptyList from "./EmptyList";
import TodoItem from "./TodoItem";
import Pagination from "./Pagination/Pagination";

export default function TodoList() {
  const { todos, loading } = useGlobalContext();
  const [page, setPage] = useState(0);
  const itemsPerPage = 5; // todos/page

  const totalPages = Math.ceil(todos.length / itemsPerPage);

  useEffect(() => {
    if (page >= totalPages && totalPages > 0) {
      setPage(totalPages - 1);
    }
  }, [todos, page, totalPages]);

  if (loading) return <Loader />;

  if (todos.length === 0) return <EmptyList />;

  // actually todos
  const currentItems = todos.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  return (
    <>
      <ul className="mt-5 d-flex gap-2 flex-column list-unstyled">
        {currentItems.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <Pagination setPage={setPage} totalPages={totalPages} page={page} />
    </>
  );
}
