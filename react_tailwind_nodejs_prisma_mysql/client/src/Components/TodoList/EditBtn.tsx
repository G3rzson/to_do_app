import { FaRegEdit } from "react-icons/fa";
import editTodo from "../../Functions/editTodo";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../Hooks/useGlobalContext";
import type { Todo } from "../../Types/types";

type Props = {
  todo: Todo;
};

export default function EditBtn({ todo }: Props) {
  const { setEditTodo } = useGlobalContext();
  const navigate = useNavigate();

  return (
    <abbr title="Szerkesztés">
      <button
        className="cursor-pointer"
        onClick={() => editTodo(navigate, setEditTodo, todo)}
      >
        <FaRegEdit color="orange" size={24} />
      </button>
    </abbr>
  );
}
