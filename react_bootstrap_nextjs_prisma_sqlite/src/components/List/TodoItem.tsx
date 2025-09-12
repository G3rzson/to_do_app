import { TodoType } from "@/types/types";
import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";

export default function TodoItem({ todo }: { todo: TodoType }) {
  return (
    <>
      <li className="list-group-item list-group-item-action list-group-item-dark d-flex align-items-center justify-content-between p-3 rounded">
        <p className="m-0 p-0">{todo.task}</p>
        <div className="d-flex gap-3 align-items-center justify-content-center">
          <EditBtn todo={todo} />
          <DeleteBtn id={todo.id} />
        </div>
      </li>
    </>
  );
}
