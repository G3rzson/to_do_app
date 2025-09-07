import { FaRegEdit } from "react-icons/fa";
import editTodo from "../../Functions/editTodo";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../Hooks/useGlobalContext";

export default function EditBtn({ id }: { id: string }) {
  const navigate = useNavigate();
  const { setEditTodo, todos } = useGlobalContext();
  return (
    <abbr title="Szerkesztés">
      <button
        className="cursor-pointer"
        onClick={() => editTodo(id, navigate, setEditTodo, todos)}
      >
        <FaRegEdit color="orange" size={24} />
      </button>
    </abbr>
  );
}
