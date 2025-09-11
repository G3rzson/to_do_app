import { getTodos } from "@/actions/getTodos";
import EmptyList from "./EmptyList";
import TodoItem from "./TodoItem";
import { Todo } from "@/types/types";

export default async function TodoList() {
  const result = await getTodos();

  if (result.error) {
    return (
      <div className="bg-red-300 text-zinc-800 text-center">{result.error}</div>
    );
  }

  if (result.todos.length === 0) {
    // Nincs elem az adatbázisban
    return <EmptyList />;
  }

  const todos: Todo[] = result.todos;

  return (
    <ul className="flex flex-col gap-3 w-full my-8 overflow-y-auto pr-3 max-h-80 custom-scrollbar">
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </ul>
  );
}
