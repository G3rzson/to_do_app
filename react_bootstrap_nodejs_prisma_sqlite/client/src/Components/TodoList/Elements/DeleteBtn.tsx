import { deleteTodo } from "../../../Functions/deleteTodo";
import { useGlobalContext } from "../../../Hooks/useGlobalContext";

type Props = {
  id: string;
};

export default function DeleteBtn({ id }: Props) {
  const { setTodos, editTodo, setLoading, setInfo, setServerError } =
    useGlobalContext();

  return (
    <button
      disabled={editTodo ? true : false}
      className="btn btn-danger"
      onClick={() =>
        deleteTodo(id, setTodos, setLoading, setInfo, setServerError)
      }
    >
      <img
        src="/assets/trash.svg"
        style={{ width: "24px", height: "24px" }}
        alt="delete icon"
      />
    </button>
  );
}
