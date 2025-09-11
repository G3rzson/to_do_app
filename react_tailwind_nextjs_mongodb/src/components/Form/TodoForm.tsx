"use client";

import { TodoFormData, todoFormSchema } from "@/validation/todoForm";
import InputField from "./Elements/InputField";
import SubmitBtn from "./Elements/SubmitBtn";
import ZodError from "./Elements/ZodError";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useGlobalContext } from "@/Hooks/useGlobalContext";
import { useEffect } from "react";
import LoadingModal from "../Modal/LoadingModal";
import { handleTodoSubmit } from "@/functions/handleTodoSubmit";

export default function TodoForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TodoFormData>({
    resolver: zodResolver(todoFormSchema),
  });
  const { editTodo, setInfo, setEditTodo, loading, setLoading, setErrorMsg } =
    useGlobalContext();

  useEffect(() => {
    reset(editTodo ? { task: editTodo.task ?? "" } : { task: "" });
  }, [editTodo, reset]);

  async function onSubmit(data: TodoFormData) {
    //console.log(data);

    setLoading(true);
    await handleTodoSubmit({
      data,
      editTodo,
      setInfo,
      setErrorMsg,
      setEditTodo,
    });
    setLoading(false);
    reset();
  }

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-row items-center mr-3 justify-center rounded overflow-hidden">
        <InputField register={register} autoFocus={!!editTodo} />
        <SubmitBtn isSubmitting={isSubmitting} />
      </div>
      <ZodError errors={errors} />
      <LoadingModal isOpen={loading} />
    </form>
  );
}
