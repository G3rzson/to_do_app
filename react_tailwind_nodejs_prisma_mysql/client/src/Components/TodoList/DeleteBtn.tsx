import { GoTrash } from "react-icons/go";
import { useGlobalContext } from "../../Hooks/useGlobalContext";
import { deleteTodo } from "../../Functions/deleteTodo";

export default function DeleteBtn({ id }: { id: string }) {
  const { setLoading, setInfo, setErrorMsg, setTodos } = useGlobalContext();
  return (
    <abbr title="Törlés">
      <button
        className="cursor-pointer"
        onClick={() =>
          deleteTodo(id, setLoading, setInfo, setErrorMsg, setTodos)
        }
      >
        <GoTrash color="orangered" size={24} />
      </button>
    </abbr>
  );
}
