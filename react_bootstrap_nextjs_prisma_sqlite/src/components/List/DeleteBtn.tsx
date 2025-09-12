"use client";

import { handleDelete } from "@/functions/handleDelete";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import { GoTrash } from "react-icons/go";

export default function DeleteBtn({ id }: { id: string }) {
  const { setInfo, setServerError, setTodos, setLoading } = useGlobalContext();

  return (
    <abbr title="Törlés">
      <button
        className="btn btn-danger"
        onClick={() =>
          handleDelete(id, setInfo, setServerError, setLoading, setTodos)
        }
      >
        <GoTrash size={24} />
      </button>
    </abbr>
  );
}
