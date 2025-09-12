"use client";
import TodoForm from "@/components/Form/TodoForm";
import Loader from "@/components/Loader/Loader";
import { useGlobalContext } from "@/hooks/useGlobalContext";

export default function Page() {
  const { loading } = useGlobalContext();
  if (loading) return <Loader />;

  return <TodoForm />;
}
