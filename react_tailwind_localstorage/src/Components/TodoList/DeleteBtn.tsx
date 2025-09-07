import { GoTrash } from "react-icons/go";
import deleteTodo from "../../Functions/deleteTodo";
import { useGlobalContext } from "../../Hooks/useGlobalContext";

export default function DeleteBtn({ id }: { id: string }) {
  const { todos, setTodos, setErrorMsg, setInfo } = useGlobalContext();
  return (
    <abbr title="Törlés">
      <button
        className="cursor-pointer"
        onClick={() => deleteTodo(id, todos, setTodos, setErrorMsg, setInfo)}
      >
        <GoTrash color="orangered" size={24} />
      </button>
    </abbr>
  );
}
