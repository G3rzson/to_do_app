"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import SubmitBtn from "./Elements/SubmitBtn";
import InputField from "./Elements/InputField";
import ErrorMsg from "./Elements/ErrorMsg";
import { useEffect } from "react";
import { TodoFormData, todoFormSchema } from "@/validation/todoForm";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import { createTodo, updateTodo } from "@/functions/axiosCall";
import { useRouter } from "next/navigation";

export default function TodoForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TodoFormData>({
    resolver: zodResolver(todoFormSchema),
  });

  const { setLoading, editTodo, setEditTodo, setInfo, setServerError } =
    useGlobalContext();

  const router = useRouter();

  useEffect(() => {
    reset(editTodo ? { task: editTodo.task ?? "" } : { task: "" });
  }, [editTodo, reset]);

  async function onSubmit(data: TodoFormData) {
    //console.log(data);
    if (editTodo) {
      // update
      await updateTodo(editTodo.id, data, setServerError, setInfo, setLoading);
      setEditTodo(null);
      router.push("/");
    } else {
      // create
      await createTodo(data, setServerError, setInfo, setLoading);
      router.push("/");
    }
  }

  return (
    <form className="container" onSubmit={handleSubmit(onSubmit)}>
      <div className="input-group">
        <InputField register={register} autoFocus={!!editTodo} />
        <SubmitBtn isSubmitting={isSubmitting} />
      </div>
      <ErrorMsg errors={errors} />
    </form>
  );
}
