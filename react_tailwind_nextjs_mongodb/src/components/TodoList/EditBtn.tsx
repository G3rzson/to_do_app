"use client";

import { handleEdit } from "@/functions/handleEdit";
import { useGlobalContext } from "@/Hooks/useGlobalContext";
import { Todo } from "@/types/types";
import { FaRegEdit } from "react-icons/fa";

export default function EditBtn({ todo }: { todo: Todo }) {
  const { setEditTodo } = useGlobalContext();
  return (
    <abbr title="Szerkesztés">
      <button
        className="cursor-pointer"
        onClick={() => handleEdit(setEditTodo, todo)}
      >
        <FaRegEdit color="orange" size={24} />
      </button>
    </abbr>
  );
}
