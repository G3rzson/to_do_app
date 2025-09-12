"use client";

import { useGlobalContext } from "@/hooks/useGlobalContext";
import { FaPlus } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

export default function SubmitBtn({ isSubmitting }: { isSubmitting: boolean }) {
  const { editTodo } = useGlobalContext();
  return (
    <button type="submit" disabled={isSubmitting} className="btn btn-success">
      {editTodo ? <FaCheck /> : <FaPlus />}
    </button>
  );
}
