import { deleteTodo } from "../../../Functions/deleteTodo";
import { useGlobalContext } from "../../../Hooks/useGlobalContext";

type Props = {
  id: string;
};

export default function DeleteBtn({ id }: Props) {
  const { setModalInfo, setModalOpen, setTodos, editTodo, setLoading } =
    useGlobalContext();

  return (
    <button
      disabled={editTodo ? true : false}
      className="btn btn-danger"
      onClick={() =>
        deleteTodo(id, setModalInfo, setModalOpen, setTodos, setLoading)
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
