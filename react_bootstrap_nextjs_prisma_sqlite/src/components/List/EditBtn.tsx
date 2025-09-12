"use client";
import { handleEdit } from "@/functions/handleEdit";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import { TodoType } from "@/types/types";
import { useRouter } from "next/navigation";
import { FaRegEdit } from "react-icons/fa";

export default function EditBtn({ todo }: { todo: TodoType }) {
  const { setEditTodo } = useGlobalContext();
  const router = useRouter();
  return (
    <abbr title="Szerkesztés">
      <button
        className="btn btn-warning"
        onClick={() => handleEdit(todo, setEditTodo, router)}
      >
        <FaRegEdit size={24} />
      </button>
    </abbr>
  );
}
