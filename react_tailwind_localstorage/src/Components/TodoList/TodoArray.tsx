import { useGlobalContext } from "../../Hooks/useGlobalContext";
import TodoItem from "./TodoItem";
import Loading from "../Loader/Loading";

export default function TodoArray() {
  const { todos, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (todos.length === 0) {
    localStorage.removeItem("todos");
    return <div className="title">Nincs teendő 😊</div>;
  }

  return (
    <ul className="flex flex-col gap-3 sm:pr-3 pr-4 sm:w-4/5 w-full overflow-y-auto max-h-96 custom-scrollbar">
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
}
