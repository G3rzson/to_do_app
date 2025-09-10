import type { Todo } from "../../Types/types";
import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";

export default function TodoItem({ todo }: { todo: Todo }) {
  return (
    <li className="flex justify-between items-center border p-3 rounded bg-zinc-800">
      <p>{todo.task}</p>
      <div className="flex gap-3 items-center justify-center">
        <EditBtn todo={todo} />
        <DeleteBtn id={todo.id} />
      </div>
    </li>
  );
}
