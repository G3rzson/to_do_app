"use client";
import { handleDelete } from "@/functions/handleDelete";
import { useGlobalContext } from "@/Hooks/useGlobalContext";
import { GoTrash } from "react-icons/go";

export default function DeleteBtn({ id }: { id: string }) {
  const { loading, editTodo, setLoading, setErrorMsg, setInfo } =
    useGlobalContext();

  return (
    <abbr title="Törlés">
      <button
        className="cursor-pointer disabled:cursor-not-allowed"
        disabled={loading || editTodo ? true : false}
        onClick={() => handleDelete(id, setLoading, setErrorMsg, setInfo)}
      >
        <GoTrash color="orangered" size={24} />
      </button>
    </abbr>
  );
}
