"use client";
import { useGlobalContext } from "@/Hooks/useGlobalContext";
import { FaPlus } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

export default function SubmitBtn({ isSubmitting }: { isSubmitting: boolean }) {
  const { editTodo } = useGlobalContext();
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="cursor-pointer bg-green-800 hover:bg-green-600 duration-300 disabled:bg-zinc-500 disabled:cursor-not-allowed flex items-center justify-center h-10 w-10"
    >
      {editTodo ? <FaCheck /> : <FaPlus />}
    </button>
  );
}
