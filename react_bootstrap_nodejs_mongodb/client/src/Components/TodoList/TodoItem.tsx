import type { TodoType } from "../../Types/types";
import DeleteBtn from "./Elements/DeleteBtn";
import EditBtn from "./Elements/EditBtn";

type Props = {
  todo: TodoType;
};

export default function TodoItem({ todo }: Props) {
  return (
    <li className="bg-white rounded ps-2 d-flex align-items-center justify-content-between">
      <p className="m-0">{todo.task}</p>
      <div className="btn-group">
        <EditBtn todo={todo} />
        <DeleteBtn id={todo._id} />
      </div>
    </li>
  );
}
