import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { todoFormSchema, type TodoFormData } from "../../Validation/todoForm";
import SubmitBtn from "./Elements/SubmitBtn";
import InputField from "./Elements/InputField";
import ErrorMsg from "./Elements/ErrorMsg";
import { useEffect, useState } from "react";
import ServerInfo from "./Elements/ServerInfo";
import { fetchTodos } from "../../Functions/fetchTodos";
import { useGlobalContext } from "../../Hooks/useGlobalContext";
import createTodo from "../../Functions/createTodo";
import updateTodo from "../../Functions/updateTodo";

export default function TodoForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TodoFormData>({
    resolver: zodResolver(todoFormSchema),
  });
  const [info, setInfo] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const { setTodos, setLoading, editTodo, setEditTodo } = useGlobalContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      setInfo(null);
      setServerError(null);
    }, 2000);
    return () => clearTimeout(timer);
  }, [info, serverError]);

  useEffect(() => {
    reset(editTodo ? { task: editTodo.task ?? "" } : { task: "" });
  }, [editTodo, reset]);

  async function onSubmit(data: TodoFormData) {
    setLoading(true);
    try {
      // update
      if (editTodo) {
        const result = await updateTodo(editTodo._id, data);
        //console.log(result);
        setInfo(result.message);
      } else {
        // create
        const result = await createTodo(data);
        //console.log(result)
        setInfo(result.message);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        setServerError(error.message);
      }
    } finally {
      setEditTodo(null);
      reset();
      await fetchTodos(setTodos, setLoading);
    }
  }

  return (
    <form style={{ position: "relative" }} onSubmit={handleSubmit(onSubmit)}>
      <div className="input-group">
        <InputField register={register} autoFocus={!!editTodo} />
        <SubmitBtn isSubmitting={isSubmitting} />
      </div>
      <ErrorMsg errors={errors} />
      <ServerInfo info={info} serverError={serverError} />
    </form>
  );
}
