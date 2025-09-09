import editTodo from "../../../Functions/editTodo";
import { useGlobalContext } from "../../../Hooks/useGlobalContext";
import type { TodoType } from "../../../Types/types";

type Props = {
  todo: TodoType;
};

export default function EditBtn({ todo }: Props) {
  const { setEditTodo } = useGlobalContext();
  return (
    <button
      className="btn btn-warning"
      onClick={() => editTodo(todo, setEditTodo)}
    >
      <img
        src="/assets/edit.svg"
        style={{ width: "24px", height: "24px" }}
        alt="edit icon"
      />
    </button>
  );
}
